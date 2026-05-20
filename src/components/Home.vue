<template>
  <div class="home-page">
    <div class="home-content">
      <header class="profile-header">
        <img class="avatar" alt="avatar" src="../assets/avatar.png">
        <div class="identity">
          <h1 class="name">Yang Liu</h1>
          <p class="role">Ph.D. student at Kyoto University</p>
          <p class="affiliation">Language Media Processing Lab, Kyoto University</p>
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
        <p class="bio">
          I am a Ph.D. student at Kyoto University, working under the supervision of Prof. Chenhui Chu.
          I focus on AI fairness, language modeling, quantum theory, and related directions.
          Previously, I obtained my master's and bachelor's degrees from Tianjin University (Peiyang University)
          and Tianjin Normal University, respectively. In addition, I have three years of full-time and three
          years of part-time software development experience. Please feel free to contact me if you are interested
          in working together.
        </p>

        <section class="section">
          <h2 class="section-title">News</h2>
          <ul class="plain-list news-list">
            <li v-for="news in newsList" :key="news.date + news.title" class="news-item">
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
          <h2 class="section-title">Research Interests</h2>
          <ul class="research-list">
            <li>Cultural alignment of large language models</li>
            <li>Social biases in large language models</li>
            <li>Theoretical interpretability of large language models</li>
          </ul>
        </section>

        <section class="section">
          <h2 class="section-title">Awards</h2>
          <ul class="plain-list award-list">
            <li>
              <a class="text-link" href="https://aaai.org/about-aaai/aaai-awards/aaai-conference-paper-awards-and-recognition/" target="_blank">Best Paper Award</a>,
              The 40th Annual AAAI Conference on Artificial Intelligence, Singapore.
            </li>
            <li>
              <a class="text-link" href="https://anlp.jp/nlp2026/award.html#committee" target="_blank">委員特別賞 (Committee Special Award)</a>,
              言語処理学会第32回年次大会 (ANLP2026).
            </li>
            <li>
              <a class="text-link" href="https://www.kugd.k.kyoto-u.ac.jp/en/support/recruitlist/" target="_blank">Kyoto University DoGS NEXT AI Program</a>
              (DoGS Fellow).
            </li>
          </ul>
        </section>

        <section class="section">
          <h2 class="section-title">Publications</h2>
          <div v-for="publication in publications" :key="publication.year" class="pub-group">
            <div class="pub-year">{{ publication.year }}</div>
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
                    <span v-if="paper.authers.length === 1" class="author-note"> (single-authored)</span>
                  </div>
                  <div class="pub-venue">
                    <em>{{ paper.conference }}.</em>
                    <span v-if="paper.tag" class="pub-tag" :class="{ 'pub-tag--best': isBestPaper(paper.tag) }">{{ paper.tag }}</span>
                  </div>
                  <div v-if="paper.resources && paper.resources.length" class="pub-resources">
                    <template v-for="(resource, index) in paper.resources" :key="resource.name + index">
                      <a class="pub-resource" :href="resource.url" target="_blank">{{ formatResourceName(resource.name) }}</a>
                      <span v-if="index !== paper.resources.length - 1" class="sep">·</span>
                    </template>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section class="section">
          <h2 class="section-title">Experience</h2>
          <ul class="plain-list exp-list">
            <li>
              <span class="exp-date">Mar. 2023 – Sept. 2024</span>
              <span class="exp-body">
                <span class="exp-role">Independent Researcher</span>
                <span class="exp-desc"> — Research on social biases in language models.</span>
              </span>
            </li>
            <li>
              <span class="exp-date">Jul. 2016 – Sept. 2019</span>
              <span class="exp-body">
                <span class="exp-role">Full-Stack Software Engineer, Antrou Co. Ltd.</span>
                <span class="exp-desc"> — Geographical Information System (Three.js) and Security Management System
                  for Petrochemical Industry.</span>
              </span>
            </li>
          </ul>
        </section>

        <section class="section">
          <h2 class="section-title">Technical Skills</h2>
          <ul class="plain-list skill-list">
            <li><strong>Programming:</strong> Python, PyTorch, Java, JavaScript, CSS.</li>
            <li><strong>Techniques:</strong> Natural Language Processing, Deep Learning, Machine Learning, Quantum Theory,
              Web Application Development.</li>
          </ul>
        </section>

        <section class="section">
          <h2 class="section-title">Links</h2>
          <ul class="plain-list link-list">
            <li>Personal Blog: <a class="text-link" href="https://www.nlply.tech" target="_blank">nlply.tech</a></li>
            <li>GitHub: <a class="text-link" href="https://github.com/nlply" target="_blank">github.com/nlply</a></li>
            <li>Hugging Face: <a class="text-link" href="https://huggingface.co/nlply" target="_blank">huggingface.co/nlply</a></li>
          </ul>
        </section>

        <section class="section">
          <h2 class="section-title">Reviewing</h2>
          <p class="reviewer-line">ARR · AAAI · NeurIPS</p>
        </section>

        <section class="section">
          <h2 class="section-title">Useful Resources</h2>
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
          © 2026 · Developed by
          <a class="text-link" href="https://nlply.tech/">Yang Liu</a>
          · Last updated May 2026
        </footer>
      </main>
    </div>
    <n-back-top :right="40" :bottom="40"/>
  </div>
</template>

<script>

import {defineComponent, ref} from 'vue'

export default defineComponent({
  components: {},
  setup() {
    const newsList = ref([
      {
        date: 'May 2026',
        title: 'Our paper on understanding prompt sensitivity was accepted to ACL 2026.',
      },
      {
        date: 'Feb. 2026',
        title: 'Our AAAI 2026 paper received the Best Paper Award.',
        url: 'https://aaai.org/about-aaai/aaai-awards/aaai-conference-paper-awards-and-recognition/',
      },
      {
        date: 'Sept. 2025',
        title: 'Our paper on social bias alignment was accepted to Findings of EMNLP 2025.',
        url: 'https://arxiv.org/abs/2509.13869',
      },
      {
        date: 'Jan. 2024',
        title: 'Two papers on social bias evaluation were accepted to AAAI 2024 and EACL 2024.',
      },
    ])

    const publications = ref([
        {
          'year': 2026,
          'papers': [
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
          ]
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
          ]
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
          ]
        },
          {
          id: 'anlp2025-bias-explanations',
          title: 'Generating Explanations of Stereotypical Biases with Large Language Model',
          titleExplain: '',
          titleURL: 'https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q5-3.pdf',
          authers: ['Yang Liu', 'Chenhui Chu'],
          boldAuther: 'Yang Liu',
          conference: '言語処理学会第31回年次大会 (ANLP2025)',
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
        ]
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
        ]
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
        resources: []
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
        ]
      }]
      }
    ])


    const pdf_url = '../../resume.pdf'
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
      newsList,
      publications,
      getPaperThumbStyle,
      formatResourceName,
      isBestPaper,
      pdf() {
        window.open(`/pdf/web/viewer.html?file=${encodeURIComponent(pdf_url)}`);
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
}

.home-content {
  width: 100%;
  max-width: 820px;
}

/* ---------- Header ---------- */

.profile-header {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 32px;
  align-items: center;
  margin-bottom: 36px;
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

.role {
  margin: 0 0 4px;
  color: var(--fg);
  font-size: 17px;
}

.affiliation {
  margin: 0 0 14px;
  color: var(--fg-muted);
  font-size: 15px;
}

.contact {
  margin: 0 0 10px;
  font-size: 15px;
  color: var(--fg);
}

.contact-link {
  color: var(--link);
  text-decoration: none;
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
}

.pub-resource:hover {
  text-decoration: underline;
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
    gap: 18px;
    justify-items: center;
  }

  .avatar {
    width: 160px;
    height: 160px;
  }

  .identity {
    width: 100%;
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

  .name {
    font-size: 26px;
  }
}
</style>
