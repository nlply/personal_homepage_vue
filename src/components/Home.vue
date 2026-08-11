<template>
  <div class="home-page">
    <div class="home-content">
      <header class="profile-header">
        <img class="avatar" alt="avatar" src="../assets/avatar.png">
        <div class="identity">
          <h1 class="name">{{ c.name }}</h1>
          <div class="positions">
            <div v-for="position in c.positions" :key="position.role" class="position">
              <p class="role">{{ position.role }}</p>
              <p class="affiliation">{{ position.affiliation }}</p>
            </div>
          </div>
        </div>

        <!-- 通栏：横跨照片和正文两列 -->
        <div class="profile-meta">
          <p class="contact">
            <a class="contact-link" href="mailto:yangliu@nlp.ist.i.kyoto-u.ac.jp">yangliu [at] nlp.ist.i.kyoto-u.ac.jp</a>
            <span class="sep">·</span>
            <a class="contact-link" href="mailto:yangliu.nlp@gmail.com">yangliu.nlp [at] gmail.com</a>
          </p>
          <nav class="social-row">
            <a class="social-link" href="#" @click.prevent="googlscholar">scholar</a>
            <span class="sep">/</span>
            <a class="social-link" href="#" @click.prevent="pdf">cv</a>
            <span class="sep">/</span>
            <a class="social-link" href="#" @click.prevent="github">github</a>
            <span class="sep">/</span>
            <a class="social-link" href="#" @click.prevent="twitter">twitter</a>
            <span class="sep">/</span>
            <a class="social-link" href="#" @click.prevent="linkedin">linkedin</a>
          </nav>
        </div>
      </header>

      <main class="main">
        <p class="bio">{{ c.bio }}</p>

        <div class="collab-note">
          <p class="collab-text">
            {{ c.collab.prefix }}<a class="collab-link" href="mailto:yangliu.nlp@gmail.com">{{ c.collab.linkText }}</a>{{ c.collab.suffix }}
          </p>
          <p class="collab-policy">{{ c.collab.policy }}</p>
        </div>

        <section class="section">
          <h2 class="section-title">{{ c.sections.news }}</h2>
          <ul class="plain-list news-list">
            <li v-for="news in c.news" :key="news.date + news.title" class="news-item">
              <span class="news-date">{{ news.date }}</span>
              <span class="news-body">
                <a v-if="news.url" :href="news.url" target="_blank" class="news-link">{{ news.title }}</a>
                <span v-else>{{ news.title }}</span>
                <span v-if="news.note" class="news-note"> {{ news.note }}</span>
              </span>
            </li>
          </ul>
        </section>

        <section class="section">
          <h2 class="section-title">{{ c.sections.interests }}</h2>
          <ul class="research-list">
            <li v-for="interest in c.interests" :key="interest">{{ interest }}</li>
          </ul>
        </section>

        <section class="section">
          <h2 class="section-title">{{ c.sections.awards }}</h2>
          <ul class="plain-list award-list">
            <li v-for="award in c.awards" :key="award.url">
              <a class="text-link" :href="award.url" target="_blank">{{ award.label }}</a>{{ award.suffix }}
            </li>
          </ul>
        </section>

        <section class="section">
          <h2 class="section-title">{{ c.sections.publications }}</h2>
          <template v-for="category in publicationCategories" :key="category.label">
            <h3 class="section-subtitle">{{ category.label }}</h3>
            <div v-for="publication in category.groups" :key="category.label + '-' + (publication.year || 'flat')" class="pub-group">
              <div v-if="publication.year" class="pub-year">{{ publication.year }}</div>
              <ol class="pub-list">
              <li v-for="paper in publication.papers" :key="paper.id" class="pub-item">
                <div class="pub-thumb" :style="getPaperThumbStyle(paper)"></div>
                <div class="pub-text">
                  <a v-if="paper.titleURL" class="pub-title" :href="paper.titleURL" target="_blank">{{ paper.title }}</a>
                  <span v-else class="pub-title pub-title--plain">{{ paper.title }}</span>
                  <div class="pub-authors">
                    <template v-for="(auther, index) in paper.authers" :key="auther + index">
                      <span :class="{ 'is-me': auther === paper.boldAuther }">{{ auther }}</span>
                      <template v-if="index !== paper.authers.length - 1">
                        <span v-if="index === paper.authers.length - 2 && paper.authers.length > 2">, and </span>
                        <span v-else-if="index === paper.authers.length - 2"> and </span>
                        <span v-else>, </span>
                      </template>
                    </template>
                    <span v-if="paper.authers.length === 1" class="author-note">{{ c.pubUI.singleAuthored }}</span>
                  </div>
                  <div class="pub-venue">
                    <em>{{ paper.conference }}.</em>
                    <span v-if="paper.tag" class="pub-tag" :class="{ 'pub-tag--best': isBestPaper(paper.tag) }">{{ paper.tag }}</span>
                  </div>
                  <div v-if="(paper.resources && paper.resources.length) || paper.bibtex" class="pub-resources">
                    <template v-for="(resource, index) in paper.resources" :key="resource.name + index">
                      <a class="pub-resource" :href="resource.url" target="_blank">{{ formatResourceName(resource.name) }}</a>
                      <span v-if="index !== paper.resources.length - 1 || paper.bibtex" class="sep">·</span>
                    </template>
                    <a v-if="paper.bibtex" class="pub-resource" href="#" @click.prevent="toggleBib(paper.id)">
                      {{ openBibs[paper.id] ? c.pubUI.hideBibtex : c.pubUI.bibtex }}
                    </a>
                  </div>
                  <div v-if="paper.bibtex && openBibs[paper.id]" class="pub-bibtex">
                    <button class="pub-bibtex-copy" type="button" @click="copyBib(paper.bibtex, paper.id)">
                      {{ copiedBib === paper.id ? c.pubUI.copied : c.pubUI.copy }}
                    </button>
                    <pre class="pub-bibtex-text">{{ paper.bibtex }}</pre>
                  </div>
                </div>
              </li>
            </ol>
            </div>
          </template>
        </section>

        <section class="section">
          <h2 class="section-title">{{ c.sections.experience }}</h2>
          <ul class="plain-list exp-list">
            <li v-for="exp in c.experience" :key="exp.date">
              <span class="exp-date">{{ exp.date }}</span>
              <span class="exp-body">
                <span class="exp-role">{{ exp.role }}</span>
                <span class="exp-desc"> — {{ exp.desc }}</span>
              </span>
            </li>
          </ul>
        </section>

        <section class="section">
          <h2 class="section-title">{{ c.sections.skills }}</h2>
          <ul class="plain-list skill-list">
            <li v-for="skill in c.skills" :key="skill.label">
              <strong>{{ skill.label }}</strong>{{ skill.value }}
            </li>
          </ul>
        </section>

        <section class="section">
          <h2 class="section-title">{{ c.sections.links }}</h2>
          <ul class="plain-list link-list">
            <li v-for="link in c.links" :key="link.url">
              {{ link.label }}<a class="text-link" :href="link.url" target="_blank">{{ link.text }}</a>
            </li>
          </ul>
        </section>

        <section class="section">
          <h2 class="section-title">{{ c.sections.reviewing }}</h2>
          <p class="reviewer-line">ARR · AAAI · NeurIPS</p>
        </section>

        <section class="section">
          <h2 class="section-title">{{ c.sections.resources }}</h2>
          <ul class="plain-list resource-list">
            <li><a class="text-link" target="_blank" href="https://aclanthology.org">ACL Anthology</a></li>
            <li><a class="text-link" target="_blank" href="https://huggingface.co/spaces/teelinsan/aclpubcheck">ACL Pub Check</a></li>
            <li><a class="text-link" target="_blank" href="https://aideadlin.es">AI Conference Deadlines</a></li>
            <li><a class="text-link" target="_blank" href="https://ccfddl.com">CCF Deadlines</a></li>
            <li><a class="text-link" target="_blank" href="https://mycolor.space">ColorSpace</a></li>
            <li><a class="text-link" target="_blank" href="https://g.co/kgs/J1DzL4w">HEX to CMYK</a></li>
            <li><a class="text-link" target="_blank" href="https://csrankings.org">CS Rankings</a></li>
            <li><a class="text-link" target="_blank" href="https://capitalizemytitle.com/">Case Converter</a></li>
            <li><a class="text-link" target="_blank" href="https://openreview.net/group?id=aclweb.org/ACL/ARR">ACL Rolling Review</a></li>
          </ul>
        </section>

        <footer class="footer">
          © 2026 · {{ c.footer.developedByPrefix }}
          <a class="text-link" href="https://nlply.tech/">{{ c.name }}</a>
          {{ c.footer.and }}
          <a class="text-link" href="https://claude.com/claude-code" target="_blank">Claude Code</a>
          <template v-if="c.footer.developedBySuffix">{{ c.footer.developedBySuffix }}</template>
          · {{ c.footer.lastUpdated }}
        </footer>
      </main>
    </div>
    <n-back-top :right="40" :bottom="40"/>
  </div>
</template>

<script>

import {defineComponent, ref, computed} from 'vue'
import {useContent} from '@/locales'

export default defineComponent({
  components: {},
  setup() {
    // 当前语言的文案包；论文数据本身不翻译，保留原文
    const c = useContent()

    const publications = ref([
        {
          'year': 2026,
          'papers': [
            {
          id: 'preprint-2026-sentence-contextual-entrainment',
          title: 'Sentence-Level Contextual Entrainment in Large Language Models',
          titleExplain: '',
          titleURL: 'https://arxiv.org/abs/2606.24077',
          authers: ['Yang Liu', 'Chenhui Chu'],
          boldAuther: 'Yang Liu',
          conference: 'arXiv 2026',
          resources: [
            {
              name: '[code]',
              url: 'https://github.com/ku-nlp/Sentence-Level_Contextual_Entrainment_in_LLMs'
            },
          ],
          bibtex: `@misc{liu2026sentencelevelcontextualentrainmentlarge,
      title={Sentence-Level Contextual Entrainment in Large Language Models},
      author={Yang Liu and Chenhui Chu},
      year={2026},
      eprint={2606.24077},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2606.24077},
}`
        },
            {
          id: 'understanding-prompt-sensitivity-2026',
          title: 'Understanding the Prompt Sensitivity',
          titleExplain: '',
          titleURL: 'https://arxiv.org/abs/2604.18389',
          authers: ['Yang Liu', 'Chenhui Chu'],
          boldAuther: 'Yang Liu',
          conference: 'ACL 2026',
          resources: [
            {
              name: '[code]',
              url: 'https://github.com/ku-nlp/Understanding_the_Prompt_Sensitivity'
            },
          ],
          bibtex: `@article{liu2026understanding,
  title={Understanding the Prompt Sensitivity},
  author={Liu, Yang and Chu, Chenhui},
  journal={arXiv preprint arXiv:2604.18389},
  year={2026}
}`
        },
            {
          id: 'anlp2026-global-values-alignment',
          title: '大規模言語モデルと世界各国の価値観とのアライメント',
          titleExplain: '',
          titleURL: 'https://www.anlp.jp/proceedings/annual_meeting/2026/pdf_dir/B9-12.pdf',
          authers: ['Yang Liu', 'Masahiro Kaneko', 'Chenhui Chu'],
          boldAuther: 'Yang Liu',
          conference: '言語処理学会第32回年次大会 (ANLP2026)',
          tag: '委員特別賞',
          peerReviewed: false,
          resources: []
        },
          {
          id: 'aaai2026-global-human-opinion',
          title: 'On the Alignment of Large Language Models with Global Human Opinion',
          titleExplain: '',
          titleURL: 'https://arxiv.org/abs/2509.01418',
          authers: ['Yang Liu', 'Masahiro Kaneko', 'Chenhui Chu'],
          boldAuther: 'Yang Liu',
          conference: 'AAAI 2026',
          tag: 'Best Paper Award',
          resources: [
            {
              name: '[code]',
              url: 'https://github.com/nlply/global-opinion-alignment'
            },
            {
              name: '[supp]',
              url: '/supplementary/aaai2026-global-human-opinion.pdf'
            },
          ],
          bibtex: `@inproceedings{liu2026alignment,
  title={On the alignment of large language models with global human opinion},
  author={Liu, Yang and Kaneko, Masahiro and Chu, Chenhui},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={40},
  number={44},
  pages={37673--37681},
  year={2026}
}`
        },

          ]
        },
        {
          "year": 2025,
          "papers": [
          {
          id: 'findings-emnlp2025-social-bias-values',
          title: 'Do LLMs Align Human Values Regarding Social Biases? Judging and Explaining Social Biases with LLMs',
          titleExplain: '',
          titleURL: 'https://arxiv.org/abs/2509.13869',
          authers: ['Yang Liu', 'Chenhui Chu'],
          boldAuther: 'Yang Liu',
          conference: 'Findings: EMNLP 2025',
          resources: [
            {
              name: '[code]',
              url: 'https://github.com/ku-nlp/Evaluate-Alignment-HVSB',
              buttonType: 'info'
            },
          ],
          bibtex: `@inproceedings{liu-chu-2025-llms,
    title = "Do {LLM}s Align Human Values Regarding Social Biases? Judging and Explaining Social Biases with {LLM}s",
    author = "Liu, Yang  and
      Chu, Chenhui",
    editor = "Christodoulopoulos, Christos  and
      Chakraborty, Tanmoy  and
      Rose, Carolyn  and
      Peng, Violet",
    booktitle = "Findings of the Association for Computational Linguistics: EMNLP 2025",
    month = nov,
    year = "2025",
    address = "Suzhou, China",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.findings-emnlp.1178/",
    doi = "10.18653/v1/2025.findings-emnlp.1178",
    pages = "21591--21628",
    ISBN = "979-8-89176-335-7"
}`
        },
          {
          id: 'anlp2025-bias-explanations',
          title: 'Generating Explanations of Stereotypical Biases with Large Language Model',
          titleExplain: '',
          titleURL: 'https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q5-3.pdf',
          authers: ['Yang Liu', 'Chenhui Chu'],
          boldAuther: 'Yang Liu',
          conference: '言語処理学会第31回年次大会 (ANLP2025)',
          peerReviewed: false,
          resources: []
        },]
      },
      {
        "year": 2024,
        "papers": [{
        id: 'eacl2024-quantifying-stereotypes',
        title: 'Quantifying Stereotypes in Language',
        titleExplain: 'single-authored work',
        titleURL: 'https://arxiv.org/abs/2401.15535',
        authers: ['Yang Liu'],
        boldAuther: 'Yang Liu',
        conference: 'EACL 2024',
        resources: [
          {
            name: '[code]',
            url: 'https://github.com/nlply/quantifying-stereotypes-in-language'
          },
        ],
        bibtex: `@inproceedings{liu2024quantifying,
  title={Quantifying stereotypes in language},
  author={Liu, Yang},
  booktitle={Proceedings of the 18th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers)},
  pages={1223--1240},
  year={2024}
}`
      },
      {
        id: 'aaai2024-robust-bias-evaluation',
        title: 'Robust Evaluation Measures for Evaluating Social Biases in Masked Language Models',
        titleExplain: 'single-authored work',
        titleURL: 'https://arxiv.org/abs/2401.11601',
        authers: ['Yang Liu'],
        boldAuther: 'Yang Liu',
        conference: 'AAAI 2024',
        resources: [
          {
            name: '[code]',
            url: 'https://github.com/nlply/robust-bias-evaluation-measures'
          },
        ],
        bibtex: `@inproceedings{liu2024robust,
  title={Robust evaluation measures for evaluating social biases in masked language models},
  author={Liu, Yang},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={38},
  number={17},
  pages={18707--18715},
  year={2024}
}`
      },]
      },
      {
        "year": 2023,
        "papers": [{
        id: 'icann2023-syntax-aware-nmt',
        title: 'Syntax-Aware Complex-Valued Neural Machine Translation',
        titleExplain: '',
        titleURL: 'https://arxiv.org/pdf/2307.08586.pdf',
        authers: ['Yang Liu', 'Yuexian Hou'],
        boldAuther: 'Yang Liu',
        conference: 'ICANN 2023',
        resources: [],
        bibtex: `@inproceedings{liu2023syntax,
  title={Syntax-aware complex-valued neural machine translation},
  author={Liu, Yang and Hou, Yuexian},
  booktitle={International Conference on Artificial Neural Networks},
  pages={474--485},
  year={2023},
  organization={Springer}
}`
      },
      {
        id: 'findings-eacl2023-qe-humor',
        title: 'Mining Effective Features Using Quantum Entropy for Humor Recognition',
        titleExplain: 'short paper',
        titleURL: 'https://aclanthology.org/2023.findings-eacl.152/',
        authers: ['Yang Liu', 'Yuexian Hou'],
        boldAuther: 'Yang Liu',
        conference: 'Findings: EACL 2023',
        resources: [
          {
            name: '[code]',
            url: 'https://github.com/nlply/EACL2023-QE-Features'
          },
        ],
        bibtex: `@inproceedings{liu2023mining,
  title={Mining effective features using quantum entropy for humor recognition},
  author={Liu, Yang and Hou, Yuexian},
  booktitle={Findings of the Association for Computational Linguistics: EACL 2023},
  pages={2048--2053},
  year={2023}
}`
      }]
      }
    ])


    const publicationCategories = computed(() => {
      const peerReviewedGroups = publications.value
        .map((group) => ({
          year: group.year,
          papers: group.papers.filter((p) => p.peerReviewed !== false),
        }))
        .filter((group) => group.papers.length > 0)

      const nonPeerReviewedPapers = publications.value.flatMap((group) =>
        group.papers.filter((p) => p.peerReviewed === false)
      )

      const categories = []
      if (peerReviewedGroups.length > 0) {
        categories.push({ label: c.value.pubCategories.international, groups: peerReviewedGroups })
      }
      if (nonPeerReviewedPapers.length > 0) {
        categories.push({
          label: c.value.pubCategories.domestic,
          groups: [{ year: null, papers: nonPeerReviewedPapers }],
        })
      }
      return categories
    })

    const openBibs = ref({})
    const copiedBib = ref('')
    const toggleBib = (id) => {
      openBibs.value[id] = !openBibs.value[id]
    }
    const copyBib = async (text, id) => {
      try {
        await navigator.clipboard.writeText(text)
      } catch (e) {
        const ta = document.createElement('textarea')
        ta.value = text
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      copiedBib.value = id
      setTimeout(() => {
        if (copiedBib.value === id) copiedBib.value = ''
      }, 1500)
    }

    const getPaperThumbStyle = (paper) => {
      if (!paper?.id) {
        return {}
      }
      return {
        '--paper-thumb-png': `url('/paper-backgrounds/${paper.id}.png')`,
        '--paper-thumb-jpg': `url('/paper-backgrounds/${paper.id}.jpg')`,
      }
    }
    const formatResourceName = (name) => {
      if (!name) return ''
      const trimmed = name.trim()
      if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
        return trimmed.slice(1, -1).toLowerCase()
      }
      return trimmed.toLowerCase()
    }
    const isBestPaper = (tag) => {
      return typeof tag === 'string' && tag.toLowerCase().includes('best paper')
    }
    return {
      c,
      publications,
      publicationCategories,
      openBibs,
      copiedBib,
      toggleBib,
      copyBib,
      getPaperThumbStyle,
      formatResourceName,
      isBestPaper,
      pdf() {
        window.open('/resume.pdf');
      },
      github() {
        window.open(`https://github.com/nlply`);
      },
      twitter() {
        window.open(`https://twitter.com/yangliu_nlp`);
      },
      googlscholar() {
        window.open(`https://scholar.google.com/citations?hl=en&user=8svPv7QAAAAJ&view_op=list_works&gmla=ALUCkoUyN0DPZ0Av4nLTqGPmW-tc8_h0aBvMoVJFI4fBECvN7TVTHYQzzyXBl8mki90dUXvlCHAhgBvAwij_FCRS`);
      },
      linkedin() {
        window.open(`https://www.linkedin.com/in/yang-liu-491846322/`);
      },
    }
  }
})

</script>

<style scoped>
.home-page {
  --fg: #2d2d2d;
  --fg-strong: #1a1a1a;
  --fg-muted: #6a6a6a;
  --fg-faint: #9a9a9a;
  --link: #1772d0;
  --bg: #ffffff;
  --bg-thumb: #f6f6f6;
  --border: #e4e4e4;
  --border-soft: #f0f0f0;
  --thumb-border: #ececec;
  --tag-fg: #8a4b00;
  --tag-bg: #fff4e0;
  --tag-border: #f0d0a0;
  --tag-best-fg: #6b4400;
  --tag-best-bg: #fff1c5;
  --tag-best-border: #e2c25a;
  --tag-best-icon: #c0922a;
  --sep: #b9b9b9;
  --collab-bg: #f2f7fd;

  width: 100%;
  display: flex;
  justify-content: center;
  padding: 56px 24px 80px;
  box-sizing: border-box;
  color: var(--fg);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
    Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    sans-serif;
  line-height: 1.65;
  font-size: 16px;
  background: var(--bg);
}

html[data-theme="dark"] .home-page {
  --fg: #d8d8d8;
  --fg-strong: #f0f0f0;
  --fg-muted: #9a9a9a;
  --fg-faint: #6a6a6a;
  --link: #6db7ff;
  --bg: #101014;
  --bg-thumb: #1d1d22;
  --border: #2a2a31;
  --border-soft: #1f1f24;
  --thumb-border: #2a2a31;
  --tag-fg: #ffd9a3;
  --tag-bg: #3a2a14;
  --tag-border: #6b4a1f;
  --tag-best-fg: #ffe89a;
  --tag-best-bg: #3a2e0e;
  --tag-best-border: #8a6b1f;
  --tag-best-icon: #f0c862;
  --sep: #4a4a52;
  --collab-bg: #16202e;
}

.home-content {
  width: 100%;
  max-width: 820px;
}

/* ---------- Header ---------- */

.profile-header {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 32px;
  row-gap: 18px;
  align-items: center;
  margin-bottom: 36px;
}

/* 邮箱和社交链接横跨两列，落在照片和正文下方 */
.profile-meta {
  grid-column: 1 / -1;
  text-align: center;
}

.avatar {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  display: block;
}

.identity {
  min-width: 0;
}

.name {
  font-size: 30px;
  font-weight: 600;
  margin: 0 0 6px;
  letter-spacing: 0.2px;
  color: var(--fg-strong);
}

.positions {
  margin-bottom: 0;
}

.position + .position {
  margin-top: 8px;
}

.role {
  margin: 0 0 4px;
  color: var(--fg);
  font-size: 17px;
}

.affiliation {
  margin: 0;
  color: var(--fg-muted);
  font-size: 15px;
}

.contact {
  margin: 0 0 6px;
  font-size: 15px;
  color: var(--fg);
}

.contact-link {
  color: var(--link);
  text-decoration: none;
  word-break: break-word;
}

.contact-link:hover {
  text-decoration: underline;
}

.social-row {
  font-size: 15px;
  color: var(--fg);
}

.social-link {
  color: var(--link);
  text-decoration: none;
  cursor: pointer;
}

.social-link:hover {
  text-decoration: underline;
}

.sep {
  color: var(--sep);
  margin: 0 6px;
  user-select: none;
}

/* ---------- Bio ---------- */

.bio {
  margin: 0 0 12px;
  text-align: justify;
  hyphens: auto;
  color: var(--fg);
}

/* ---------- Collaboration call-out ---------- */

.collab-note {
  margin: 16px 0 0;
  padding: 12px 16px;
  border-left: 3px solid var(--link);
  border-radius: 0 4px 4px 0;
  background: var(--collab-bg);
  color: var(--fg);
}

.collab-text {
  margin: 0;
}

.collab-link {
  color: var(--link);
  font-weight: 600;
  text-decoration: none;
}

.collab-link:hover {
  text-decoration: underline;
}

.collab-policy {
  margin: 8px 0 0;
  font-weight: 600;
}

/* ---------- Sections ---------- */

.section {
  margin-top: 32px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--fg-strong);
  margin: 0 0 14px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--border);
  letter-spacing: 0.3px;
}

.section-subtitle {
  font-size: 17px;
  font-weight: 600;
  font-style: italic;
  color: var(--fg-muted);
  margin: 24px 0 4px;
  letter-spacing: 0.2px;
}

.section-subtitle:first-of-type {
  margin-top: 8px;
}

.plain-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* ---------- News ---------- */

.news-list .news-item {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 12px;
  padding: 4px 0;
  align-items: baseline;
}

.news-date {
  color: var(--fg-muted);
  font-variant-numeric: tabular-nums;
  font-size: 14px;
}

.news-body {
  color: var(--fg);
}

.news-link {
  color: var(--link);
  text-decoration: none;
}

.news-link:hover {
  text-decoration: underline;
}

.news-note {
  color: var(--fg-muted);
}

/* ---------- Research ---------- */

.research-list {
  padding-left: 22px;
  margin: 8px 0 0;
}

.research-list li {
  margin-bottom: 6px;
}

/* ---------- Awards ---------- */

.award-list li {
  padding: 3px 0;
}

/* ---------- Publications ---------- */

.pub-group {
  margin-bottom: 8px;
}

.pub-year {
  font-size: 15px;
  font-weight: 600;
  color: var(--fg-muted);
  margin: 18px 0 10px;
  letter-spacing: 0.5px;
}

.pub-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pub-item {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 18px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border-soft);
}

.pub-item:last-child {
  border-bottom: none;
}

.pub-thumb {
  width: 130px;
  height: 90px;
  border-radius: 4px;
  background-color: var(--bg-thumb);
  background-image: var(--paper-thumb-png, none), var(--paper-thumb-jpg, none);
  background-size: cover, cover;
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  border: 1px solid var(--thumb-border);
}

.pub-text {
  min-width: 0;
}

.pub-title {
  display: block;
  color: var(--link);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.4;
  margin-bottom: 4px;
}

.pub-title:hover {
  text-decoration: underline;
}

.pub-title--plain {
  color: var(--fg);
}

.pub-authors {
  font-size: 15px;
  color: var(--fg);
  line-height: 1.4;
  margin-bottom: 2px;
}

.pub-authors .is-me {
  font-weight: 600;
}

.author-note {
  color: var(--fg-muted);
  font-style: italic;
  font-size: 14px;
}

.pub-venue {
  font-size: 15px;
  color: var(--fg);
  line-height: 1.4;
  margin-bottom: 4px;
}

.pub-venue em {
  font-style: italic;
}

.pub-tag {
  display: inline-block;
  margin-left: 8px;
  padding: 0 7px;
  font-size: 12px;
  font-weight: 600;
  color: var(--tag-fg);
  background: var(--tag-bg);
  border: 1px solid var(--tag-border);
  border-radius: 3px;
  letter-spacing: 0.2px;
  vertical-align: 1px;
}

.pub-tag--best {
  color: var(--tag-best-fg);
  background: var(--tag-best-bg);
  border-color: var(--tag-best-border);
}

.pub-tag--best::before {
  content: '★ ';
  color: var(--tag-best-icon);
}

.pub-resources {
  font-size: 14px;
  color: var(--fg-muted);
  margin-top: 4px;
}

.pub-resource {
  color: var(--link);
  text-decoration: none;
  cursor: pointer;
}

.pub-resource:hover {
  text-decoration: underline;
}

.pub-bibtex {
  position: relative;
  margin-top: 8px;
  padding: 10px 12px;
  padding-right: 64px;
  background: var(--bg-thumb);
  border: 1px solid var(--border-soft);
  border-radius: 4px;
}

.pub-bibtex-text {
  margin: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 12.5px;
  line-height: 1.55;
  color: var(--fg);
  white-space: pre-wrap;
  word-break: break-word;
}

.pub-bibtex-copy {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 2px 10px;
  font-size: 12px;
  font-family: inherit;
  color: var(--link);
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 3px;
  cursor: pointer;
  line-height: 1.4;
}

.pub-bibtex-copy:hover {
  background: var(--border-soft);
}

/* ---------- Experience ---------- */

.exp-list li {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 14px;
  padding: 4px 0;
  align-items: baseline;
}

.exp-date {
  color: var(--fg-muted);
  font-size: 14px;
  font-variant-numeric: tabular-nums;
}

.exp-role {
  font-weight: 600;
  color: var(--fg-strong);
}

.exp-desc {
  color: var(--fg);
}

/* ---------- Skills / Links / Resources ---------- */

.skill-list li,
.link-list li,
.resource-list li {
  padding: 3px 0;
}

.reviewer-line {
  margin: 0;
  color: var(--fg);
}

.text-link {
  color: var(--link);
  text-decoration: none;
}

.text-link:hover {
  text-decoration: underline;
}

/* ---------- Footer ---------- */

.footer {
  margin-top: 60px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  text-align: center;
  color: var(--fg-faint);
  font-size: 13px;
}

/* ---------- Responsive ---------- */

@media (max-width: 720px) {
  .home-page {
    padding: 28px 16px 60px;
    font-size: 15px;
  }

  .profile-header {
    grid-template-columns: 1fr;
    text-align: center;
    row-gap: 18px;
    justify-items: center;
  }

  .avatar {
    width: 160px;
    height: 160px;
  }

  .identity {
    width: 100%;
  }

  .name {
    font-size: 26px;
  }

  .pub-item {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .pub-thumb {
    width: 100%;
    height: 140px;
  }

  .news-list .news-item {
    grid-template-columns: 1fr;
    gap: 2px;
  }

  .exp-list li {
    grid-template-columns: 1fr;
    gap: 2px;
  }

  .section-title {
    font-size: 18px;
  }
}
</style>
