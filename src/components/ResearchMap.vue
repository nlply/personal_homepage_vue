<template>
  <div class="research-map" @mouseleave="activeId = ''">
    <p class="rm-intro">{{ c.researchMap.intro }}</p>

    <ol class="rm-stages">
      <li v-for="(stage, index) in stages" :key="stage.key" class="rm-stage" :style="{ '--stage-color': `var(--rm-${stage.key})` }">
        <div class="rm-stage-head">
          <span class="rm-num">{{ index + 1 }}</span>
          <span class="rm-stage-title">{{ c.researchMap.stages[stage.key].title }}</span>
        </div>
        <p class="rm-stage-desc">{{ c.researchMap.stages[stage.key].desc }}</p>
        <ul class="rm-papers">
          <li v-for="item in stage.papers" :key="item.paper.id">
            <n-tooltip placement="top" :style="{ maxWidth: '320px' }">
              <template #trigger>
                <div class="rm-paper" :class="{ 'is-linked': activeId === item.paper.id }"
                     @mouseenter="activeId = item.paper.id" @focusin="activeId = item.paper.id">
                  <a class="rm-paper-main" :href="item.paper.titleURL" target="_blank" rel="noopener" :aria-label="item.paper.title">{{ item.label }}</a>
                  <span class="rm-venue">
                    <span class="rm-nowrap">{{ item.venue }}<span v-if="item.best" class="rm-best"> ★</span></span>
                    <template v-for="extra in item.also" :key="extra.paper.id">
                      · <a class="rm-venue-link rm-nowrap" :href="extra.paper.titleURL" target="_blank" rel="noopener" :aria-label="extra.paper.title">{{ extra.venue }}</a>
                    </template>
                  </span>
                </div>
              </template>
              {{ item.paper.title }}
              <template v-for="extra in item.also" :key="extra.paper.id"><br>{{ extra.paper.title }}</template>
            </n-tooltip>
          </li>
        </ul>
      </li>
    </ol>

    <!-- 宽屏时连接「对齐与引导」：④ 评估的结果流进来，方法再作用回 ② 训练和 ③ 推理 -->
    <div class="rm-connectors" aria-hidden="true">
      <span></span><span>↑</span><span>↑</span><span>↓</span>
    </div>

    <div class="rm-feedback" :style="{ '--stage-color': 'var(--rm-alignment)' }">
      <div class="rm-feedback-head">
        <div class="rm-stage-head">
          <span class="rm-num">{{ stages.length + 1 }}</span>
          <span class="rm-stage-title">{{ c.researchMap.stages.alignment.title }}</span>
        </div>
        <p class="rm-stage-desc">{{ c.researchMap.stages.alignment.desc }}</p>
      </div>
      <ul class="rm-methods">
        <li v-for="method in methods" :key="method.key">
          <div class="rm-paper" :class="{ 'is-linked': activeId === method.paper.id }"
               @mouseenter="activeId = method.paper.id" @focusin="activeId = method.paper.id">
            <a class="rm-paper-main" :href="method.paper.titleURL" target="_blank" rel="noopener" :aria-label="method.paper.title">{{ c.researchMap.methods[method.key] }}</a>
            <span class="rm-venue">{{ method.label }} · {{ method.venue }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import {defineComponent, ref, computed} from 'vue'
import {useContent} from '@/locales'

// 研究地图：文化在大模型里的生命周期（数据 → 训练 → 推理 → 评估），再加上反馈回模型的对齐与引导。
// 论文用 Publications 里的 id 引用，标题、链接、会议都从 papers 里取；label 是图上显示的短名，venue 可覆盖会议名。
const STAGES = [
  {
    key: 'data',
    papers: [
      { id: 'eacl2024-quantifying-stereotypes', label: 'Quantifying Stereotypes in Language' },
    ],
  },
  {
    key: 'training',
    papers: [
      { id: 'preprint-2026-post-training-value-preferences', label: 'How Post-Training Shapes Value Preferences' },
    ],
  },
  {
    key: 'inference',
    papers: [
      { id: 'understanding-prompt-sensitivity-2026', label: 'Understanding the Prompt Sensitivity' },
      { id: 'preprint-2026-sentence-contextual-entrainment', label: 'Sentence-Level Contextual Entrainment' },
    ],
  },
  {
    key: 'evaluation',
    papers: [
      {
        id: 'aaai2026-global-human-opinion',
        label: 'Alignment with Global Human Opinion',
        also: [{ id: 'anlp2026-global-values-alignment', venue: 'ANLP 2026' }],
      },
      { id: 'preprint-2026-speak-vs-know', label: 'Speak vs. Know' },
      { id: 'findings-emnlp2025-social-bias-values', label: 'Human Values Regarding Social Biases' },
      { id: 'anlp2025-bias-explanations', label: 'Explaining Stereotypical Biases', venue: 'ANLP 2025' },
      { id: 'aaai2024-robust-bias-evaluation', label: 'Robust Social Bias Measures' },
    ],
  },
]

// 「对齐与引导」里的方法，各自链接到提出它的论文；方法名在语言文件里
const METHODS = [
  { key: 'promptLanguage', id: 'aaai2026-global-human-opinion', label: 'Global Human Opinion' },
  { key: 'balanced', id: 'preprint-2026-speak-vs-know', label: 'Speak vs. Know' },
  { key: 'headIntervention', id: 'preprint-2026-sentence-contextual-entrainment', label: 'Contextual Entrainment' },
]

export default defineComponent({
  props: {
    // Publications 里所有论文，按 id 索引
    papers: {type: Object, required: true},
  },
  setup(props) {
    const c = useContent()
    // 鼠标所在的论文：同一篇论文在阶段和方法里会一起高亮
    const activeId = ref('')

    const resolve = (item) => {
      const paper = props.papers[item.id]
      if (!paper) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`[ResearchMap] unknown paper id: ${item.id}`)
        }
        return null
      }
      return {
        paper,
        label: item.label,
        venue: item.venue || paper.conference,
        best: typeof paper.tag === 'string' && paper.tag.toLowerCase().includes('best paper'),
        also: (item.also || []).map(resolve).filter(Boolean),
      }
    }

    const stages = computed(() => STAGES.map((stage) => ({
      key: stage.key,
      papers: stage.papers.map(resolve).filter(Boolean),
    })))
    const methods = computed(() => METHODS
      .map((method) => {
        const resolved = resolve(method)
        return resolved && { ...resolved, key: method.key }
      })
      .filter(Boolean))

    return {c, activeId, stages, methods}
  }
})
</script>

<style scoped>
.rm-intro {
  margin: 0 0 16px;
  color: var(--fg-muted);
  font-size: 15px;
}

.rm-stages {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 28px;
}

.rm-stage {
  position: relative;
  padding: 10px 10px 12px;
  border: 1px solid var(--border);
  border-top: 3px solid var(--stage-color);
  border-radius: 8px;
  background: var(--bg);
}

/* 阶段之间的箭头，画在两张卡片之间的空隙里 */
.rm-stage:not(:last-child)::after {
  content: '→';
  position: absolute;
  top: 12px;
  right: -22px;
  font-size: 18px;
  line-height: 1;
  color: var(--fg-faint);
}

.rm-stage-head {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rm-num {
  flex: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--stage-color);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
}

.rm-stage-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--fg-strong);
}

.rm-stage-desc {
  margin: 6px 0 10px;
  font-size: 12.5px;
  line-height: 1.45;
  color: var(--fg-muted);
}

.rm-papers,
.rm-methods {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* 整张小卡片都可点：主链接用 ::after 铺满卡片，次要链接放在它上面 */
.rm-paper {
  position: relative;
  padding: 6px 8px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--bg-thumb);
  transition: border-color 0.15s, box-shadow 0.15s;
}

.rm-paper:hover,
.rm-paper.is-linked {
  border-color: var(--stage-color);
  box-shadow: 0 0 0 1px var(--stage-color);
}

.rm-paper-main {
  display: block;
  font-size: 13.5px;
  font-weight: 500;
  line-height: 1.35;
  color: var(--link);
  text-decoration: none;
}

.rm-paper-main::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 6px;
}

.rm-paper-main:focus-visible {
  outline: none;
}

.rm-paper:focus-within {
  box-shadow: 0 0 0 2px var(--link);
}

.rm-venue {
  display: block;
  margin-top: 2px;
  font-size: 12px;
  font-style: italic;
  color: var(--fg-muted);
}

.rm-venue-link {
  position: relative;
  z-index: 1;
  color: var(--link);
  text-decoration: none;
}

.rm-venue-link:hover {
  text-decoration: underline;
}

.rm-best {
  font-style: normal;
  color: var(--tag-best-icon);
}

/* 会议名不从中间断开，只在「·」处换行 */
.rm-nowrap {
  white-space: nowrap;
}

.rm-connectors {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 28px;
  text-align: center;
  font-size: 18px;
  line-height: 30px;
  color: var(--rm-alignment);
}

.rm-feedback {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 20px;
  padding: 10px 12px;
  border: 1px dashed var(--rm-alignment);
  border-radius: 8px;
}

.rm-feedback-head {
  flex: 0 1 200px;
}

.rm-feedback-head .rm-stage-desc {
  margin-bottom: 0;
}

/* 方法卡片等宽排列：宽屏一行三列，窄屏一列 */
.rm-methods {
  flex: 1 1 400px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
}

.rm-methods .rm-paper {
  height: 100%;
  box-sizing: border-box;
}

/* 窄屏：阶段竖排，箭头朝下，最后一个阶段也用箭头接到「对齐与引导」 */
@media (max-width: 720px) {
  .rm-stages {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 30px;
  }

  .rm-stage::after,
  .rm-stage:not(:last-child)::after {
    content: '↓';
    position: absolute;
    font-size: 18px;
    line-height: 1;
    color: var(--fg-faint);
    top: auto;
    right: auto;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
  }

  .rm-connectors {
    display: none;
  }

  .rm-feedback {
    margin-top: 30px;
  }

  .rm-feedback-head,
  .rm-methods {
    flex-basis: 100%;
  }

  .rm-methods {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
