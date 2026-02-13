<template>
  <n-flex justify="center" class="home-page">
    <div class="home-content">
      <div class="profile-column">
        <n-flex vertical>
          <div><img class="avatar" alt="avatar" src="../assets/avatar.png"></div>
          <span style="font-size: 40px;font-weight: bold;" class="custom-font">Yang LIU
          </span>
          <span class="text-style" style="color: darkgray;">Ph.D. student at Kyoto University</span>
          <n-p class="contact-line"> <!-- horizontal centering -->
            <div class="contact-wrap"> <!-- left alignment of two emails  -->
              <!-- <n-a class="text-style no-underline" href="mailto:yangliu@nlp.ist.i.kyoto-u.ac.jp"
                   target="_blank">
                <span class="text-bold-style">✉️</span> yangliu<span class="text-bold-style">(AT)n</span>, <span
                  class="text-bold-style">(AT)n</span>=@nlp.ist.i.kyoto-u.ac.jp
              </n-a>
              <br>
              <n-a class="text-style no-underline" href="mailto:yangliu.nlp@gmail.com"
                   target="_blank">
                <span class="text-bold-style">✉️</span> yangliu.nlp<span class="text-bold-style">(AT)n</span>,
                <span
                    class="text-bold-style">(AT)n</span>=@gmail.com
              </n-a> -->
              <n-a class="text-style no-underline" href="mailto:yangliu@nlp.ist.i.kyoto-u.ac.jp"
                   target="_blank">
                <span class="text-bold-style">✉️</span> yangliu[at]nlp.ist.i.kyoto-u.ac.jp
              </n-a>
              <!-- <br> -->
              <n-text type="info">&</n-text> 
              <n-a class="text-style no-underline" href="mailto:yangliu.nlp@gmail.com"
                   target="_blank">
                   yangliu.nlp[at]gmail.com
              </n-a>
            </div>
          </n-p>
          <n-flex justify="center" class="social-row">
            <n-icon size="40" style="cursor: pointer" @click="googlscholar">
              <v-icon name="ai-google-scholar-square" fill="#4285F4" scale="0.8"/>
            </n-icon>
            <n-icon size="40" style="cursor: pointer" @click="pdf">
              <v-icon name="ai-cv-square" fill="#356DB7" scale="0.8"/>
            </n-icon>
            <n-icon size="40" style="cursor: pointer" @click="github">
              <v-icon name="fa-github-square" fill="#6f42c1" scale="0.8"/>
            </n-icon>
            <n-icon size="40" style="cursor: pointer" @click="twitter">
              <v-icon name="fa-twitter-square" fill="#1DA1F2" scale="0.8"/>
            </n-icon>
            <n-icon size="40" style="cursor: pointer" @click="linkedin">
              <v-icon name="bi-linkedin" fill="#0077B5" scale="0.8"/>
            </n-icon>
            <!-- <n-icon size="40" style="cursor: pointer" @click="google">
            <Google />
          </n-icon> -->
          </n-flex>
          <n-flex>
            <n-p class="text-style text-align-style">
              I am a Ph.D. student at 🇯🇵 Kyoto University, working under the supervision of Prof. Chenhui Chu.
              I focus on AI fairness, language modeling, quantum theory and any other relevant work.
              Previously, I obtained my master's and bachelor's degrees from
              🇨🇳 Tianjin University (Peiyang University) and 🇨🇳 Tianjin Normal University, respectively.
              In addition, I have three years of full-time (after my bachelor's degree) and three years of part-time
              (during
              my master's degree) development experience.
              I have worked as a technical core in our team and I have extensive programming experience.
              Please do not hesitate to contact me if you are interested in working with me on some interesting
              projects.
            </n-p>
          </n-flex>
        </n-flex>
      </div>
      <div class="main-column">
        <n-flax class="text-align-style">

            <p class="main-title"><span class="main-title-icon">🧑‍🔬</span><span class="main-title-text">Research</span></p>
            <span class="text-style">
              I have a broad interest in Natural Language Processing (NLP). I am particularly interested in the following
              directions:
            </span>
            <ul class="text-style">
              <li>
                Fairness in Artificial Intelligence (AI). I work on fairness in AI, investigating potential harms to
                protect
                target groups from harm.
              </li>
              <li>
                Quantum Information Theory. Quantum theory exhibits very unusual properties, and I am dedicated to using
                quantum theory to solve problems in AI.
              </li>
              <li>
                Recently, LLMs have developed significantly rapidly, and I also researched the fairness of LLMs for AI.
              </li>
            </ul>
            <p class="main-title"><span class="main-title-icon">🏆</span><span class="main-title-text">Award</span></p>
            <ul class="text-style">
              <li>
                <n-a href="https://aaai.org/about-aaai/aaai-awards/aaai-conference-paper-awards-and-recognition/" target="_blank">
                  Best Paper Award
                </n-a>, The 40th Annual AAAI Conference on Artificial Intelligence@Singapore
              </li>
              <li>
                Kyoto University
                <n-a href="https://www.kugd.k.kyoto-u.ac.jp/en/support/recruitlist/" target="_blank">
                  DoGS NEXT AI Program
                </n-a>
                (Title: DoGS Fellow)
              </li>
            </ul>


            <p class="main-title"><span class="main-title-icon">✍</span><span class="main-title-text">Publications</span></p>

            <ul class="text-style">
              <div v-for="publication in this.publications" :key="publication.year">
                  <div class="publication-year">
                    <span class="text-bold-style publication-year-text">{{ publication.year }}</span>
                  </div>
                <li v-for="paper in publication.papers">
                  <div class="paper-container">
                    <n-a class="hover-style title-style paper-title" type="success" v-if="paper.title" :href="paper.titleURL"
                        target="_blank">{{ paper.title }}
                    </n-a>
                    <n-text class="hover-style title-style paper-title" type="success" v-else>NaN</n-text>

                    <!-- <span v-if="paper.titleExplain" class="text-bold-style title-style">{{
                        ' ' + '(' + paper.titleExplain +
                        ')'
                      }}</span> -->
                    <n-flex class="paper-authors">
                      <div v-for="(auther, index) in paper.authers">
                        <span :class="{ 'text-bold-style': auther == paper.boldAuther }">{{ auther }}</span>
                        <span v-if="index !== paper.authers.length - 1">
                          <span v-if="index === paper.authers.length - 2">
                            <span v-if="paper.authers.length > 2">,</span>&nbsp;and&nbsp;
                            </span>
                          <span v-else>,&nbsp;</span>
                        </span>
                      </div>
                    </n-flex>
                    <n-text class="text-bold-style paper-conference">{{ paper.conference }}.</n-text>
                    <n-text class="text-bold-style paper-conference" type="error" v-if="paper.tag">&nbsp;{{ paper.tag }}.</n-text>
                    <!-- <br> -->
                    <!-- <span v-if="paper.resources.length != 0" class="text-bold-style">
                      .&nbsp;
                    </span> -->
                    <span v-for="(resource, index) in paper.resources">
                      
                      <n-a :href="resource.url" class="hover-style" style="text-decoration: none" target="_blank">
                        &nbsp;{{
                          resource.name
                        }}</n-a>
                        <!-- &nbsp;
                        <n-button strong secondary type="info" class="text-style" size="small" tag="a" :href="resource.url" target="_blank">
                        {{
                          resource.name
                        }}</n-button> -->
                      <n-divider v-if="index !== paper.resources.length - 1" vertical/>
                    </span>
                  </div>
                  
                </li>
                <n-divider></n-divider>
              </div>
            </ul>
            <p class="main-title"><span class="main-title-icon">💼</span><span class="main-title-text">Experiences</span></p>
            <ul class="text-style">
              <li>

                <n-text>Mar. 2023 - Sept. 2024:</n-text>
                <n-text underline>Independent Researcher</n-text>
                <n-text italic> -
                  Research on social biases in language models.
                </n-text>

              </li>
              <li>

                <n-text>Sept. 2019 - Mar. 2023:</n-text>
                <n-text underline>Full-Stack Software Engineer
                  (part-time)
                </n-text>
                <n-text italic> - Technical Support at Antrou
                  Co.
                  Ltd.
                </n-text>

              </li>
              <li>

                <n-text>Jul. 2017 - Sept. 2019:</n-text>
                <n-text underline>Full-Stack Software Engineer</n-text>
                <n-text
                    italic>
                  - Geographical Information System base on
                  Three.js and Security Management System for Petrochemical Industry at Antrou Co. Ltd.
                </n-text>

              </li>
            </ul>


            <p class="main-title"><span class="main-title-icon">🎨</span><span class="main-title-text">Technical Skills</span></p>
            <ul class="text-style">
              <li>Programming: Python, PyTorch, Java, Javascript, CSS</li>
              <li>
                Techniques: Natural Language Processing, Deep Learning, Machine Learning, Quantum Theory, WEB
                Application
                Development
              </li>
            </ul>

            <p class="main-title"><span class="main-title-icon">🔗</span><span class="main-title-text">Links</span></p>
            <ul class="text-style">
              <li>Personal Blog:
                <n-a href="https://www.nlply.tech">https://www.nlply.tech</n-a>
              </li>
              <li>Github:
                <n-a href="https://github.com/nlply">https://github.com/nlply</n-a>
              </li>
              <li>Huggingface:
                <n-a href="https://huggingface.co/nlply">https://huggingface.co/nlply</n-a>
              </li>
            </ul>


            <p class="main-title"><span class="main-title-icon">📝</span><span class="main-title-text">Reviewer</span></p>
            <ul class="text-style">
              <li>ARR</li>
              <li>AAAI</li>
            </ul>

            <p class="main-title"><span class="main-title-icon">📚</span><span class="main-title-text">Useful Resources</span></p>
            <ul class="text-style word-break">
              <li>ACL Anthology:
                <n-a target="_blank" href="https://aclanthology.org">https://aclanthology.org</n-a>
              </li>
              <li>ACL Pub Check:
                <n-a target="_blank"
                     href="https://huggingface.co/spaces/teelinsan/aclpubcheck">
                  https://huggingface.co/spaces/teelinsan/aclpubcheck
                </n-a>
              </li>
              <li>AI Conference Deadlines:
                <n-a target="_blank" href="https://aideadlin.es">https://aideadlin.es</n-a>
              </li>
              <li>CCF Deadlines:
                <n-a target="_blank" href="https://ccfddl.com">https://ccfddl.com</n-a>
              </li>
              <li>ColorSpace:
                <n-a target="_blank" href="https://mycolor.space">https://mycolor.space</n-a>
              </li>
              <li>HEX to CMYK:
                <n-a target="_blank" href="https://g.co/kgs/J1DzL4w">https://g.co/kgs/J1DzL4w</n-a>
              </li>
              <li>CS Rankings:
                <n-a target="_blank" href="https://csrankings.org">https://csrankings.org</n-a>
              </li>
              <li>Case Converter:
                <n-a target="_blank" href="https://capitalizemytitle.com/">https://capitalizemytitle.com</n-a>
              </li>
              <li>ACL Rolling Review:
                <n-a target="_blank" href="https://openreview.net/group?id=aclweb.org/ACL/ARR">
                  https://openreview.net/group?id=aclweb.org/ACL/ARR
                </n-a>
              </li>
            </ul>

            <p style="text-align: center;color: #c0c0c0;font-size: 18px;margin-top: 100px;">2025 ©
              Developed by
              <n-a
                  href="https://nlply.tech/">Yang Liu
              </n-a>
              | Last
              updated: Oct. 2025
            </p>
        </n-flax>
      </div>
    </div>

    <n-back-top :right="100"/>
  </n-flex>
</template>

<script>

import {defineComponent, ref} from 'vue'

export default defineComponent({
  components: {},
  setup() {
    const publications = ref([
        {
          'year': 2026,
          'papers': [
            {
          title: '大規模言語モデルと世界各国の価値観とのアライメント',
          titleExplain: '',
          titleURL: '',
          authers: ['Yang Liu', 'Masahiro Kaneko', 'Chenhui Chu'],
          boldAuther: 'Yang Liu',
          conference: '言語処理学会第32回年次大会 (ANLP2026)',
          resources: [
            // {
            //   name: '[code]',
            //   url: ''
            // },
            // {
            //   name: 'slide',
            //   url: ''
            // },
            // {
            //   name: 'poster',
            //   url: ''
            // }
          ]
        },
            {
          title: 'Understanding the Prompt Sensitivity',
          titleExplain: '',
          titleURL: '',
          authers: ['Yang Liu', 'Chenhui Chu'],
          boldAuther: 'Yang Liu',
          conference: 'Under Review, 2026',
          resources: [
            // {
            //   name: '[code]',
            //   url: ''
            // },
            // {
            //   name: 'slide',
            //   url: ''
            // },
            // {
            //   name: 'poster',
            //   url: ''
            // }
          ]
        },
          {
          title: 'On the Alignment of Large Language Models with Global Human Opinion',
          titleExplain: '',
          titleURL: 'https://arxiv.org/abs/2509.01418',
          authers: ['Yang Liu', 'Masahiro Kaneko', 'Chenhui Chu'],
          boldAuther: 'Yang Liu',
          conference: 'AAAI, 2026',
          tag: 'Best Paper Award',
          resources: [
            {
              name: 'Code',
              url: 'https://github.com/nlply/global-opinion-alignment'
            },
            // {
            //   name: 'slide',
            //   url: ''
            // },
            // {
            //   name: 'poster',
            //   url: ''
            // }
          ]
        },
        
          ]
        },
        {
          "year": 2025,
          "papers": [
          {
          title: 'Do LLMs Align Human Values Regarding Social Biases? Judging and Explaining Social Biases with LLMs',
          titleExplain: '',
          titleURL: 'https://arxiv.org/abs/2509.13869',
          authers: ['Yang Liu', 'Chenhui Chu'],
          boldAuther: 'Yang Liu',
          conference: 'Findings: EMNLP, 2025',
          resources: [
            {
              name: 'Code',
              url: 'https://github.com/ku-nlp/Evaluate-Alignment-HVSB',
              buttonType: 'info'
            },
            // {
            //   name: 'slide',
            //   url: ''
            // },
            // {
            //   name: 'poster',
            //   url: ''
            // }
          ]
        },
          {
          title: 'Generating Explanations of Stereotypical Biases with Large Language Model\n',
          titleExplain: '',
          titleURL: 'https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q5-3.pdf',
          authers: ['Yang Liu', 'Chenhui Chu'],
          boldAuther: 'Yang Liu',
          conference: '言語処理学会第31回年次大会 (ANLP2025)',
          resources: [
            // {
            //   name: '[code]',
            //   url: 'https://github.com/nlply/global-opinion-alignment'
            // },
            // {
            //   name: 'slide',
            //   url: ''
            // },
            // {
            //   name: 'poster',
            //   url: ''
            // }
          ]
        },]
      },
      {
        "year": 2024,
        "papers": [{
        title: 'Quantifying Stereotypes in Language',
        titleExplain: 'single-authored work',
        titleURL: 'https://arxiv.org/abs/2401.15535',
        authers: ['Yang Liu'],
        boldAuther: 'Yang Liu',
        conference: 'EACL, 2024',
        resources: [
          {
            name: 'Code',
            url: 'https://github.com/nlply/quantifying-stereotypes-in-language'
          },
          // {
          //   name: 'slide',
          //   url: ''
          // },
          // {
          //   name: 'poster',
          //   url: ''
          // }
        ]
      },
      {
        title: 'Robust Evaluation Measures for Evaluating Social Biases in Masked Language Models',
        titleExplain: 'single-authored work',
        titleURL: 'https://arxiv.org/abs/2401.11601',
        authers: ['Yang Liu'],
        boldAuther: 'Yang Liu',
        conference: 'AAAI, 2024',
        resources: [
          {
            name: 'Code',
            url: 'https://github.com/nlply/robust-bias-evaluation-measures'
          },
          // {
          //   name: 'slide',
          //   url: ''
          // },
          // {
          //   name: 'poster',
          //   url: ''
          // }
        ]
      },]
      },
      {
        "year": 2023,
        "papers": [{
        title: 'Syntax-Aware Complex-Valued Neural Machine Translation',
        titleExplain: '',
        titleURL: 'https://arxiv.org/pdf/2307.08586.pdf',
        authers: ['Yang Liu', 'Yuexian Hou'],
        boldAuther: 'Yang Liu',
        conference: 'ICANN, 2023',
        resources: [
          // {
          //   name: 'code',
          //   url: ''
          // },
          // {
          //   name: 'slide',
          //   url: ''
          // },
          // {
          //   name: 'poster',
          //   url: ''
          // }
        ]
      },
      {
        title: 'Mining Effective Features Using Quantum Entropy for Humor Recognition',
        titleExplain: 'short paper',
        titleURL: 'https://aclanthology.org/2023.findings-eacl.152/',
        authers: ['Yang Liu', 'Yuexian Hou'],
        boldAuther: 'Yang Liu',
        conference: 'Findings: EACL, 2023',
        resources: [
          {
            name: 'Code',
            url: 'https://github.com/nlply/EACL2023-QE-Features'
          },
          // {
          //   name: 'slide',
          //   url: ''
          // },
          // {
          //   name: 'poster',
          //   url: ''
          // }
        ]
      }]
      }
    ])


    // resume
    const pdf_url = '../../resume.pdf'
    return {
      publications,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
  width: 100%;
  padding: 0 16px 50px;
  box-sizing: border-box;
}

.home-content {
  width: min(900px, 100%);
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;
  align-items: start;
}

.profile-column {
  text-align: center;
  position: static;
  width: 100%;
  justify-self: stretch;
}

.main-column {
  min-width: 0;
}

.contact-line {
  display: flex;
  justify-content: center;
  margin: 0;
}

.contact-wrap {
  width: fit-content;
  text-align: left;
  line-height: 1.8;
}

.social-row {
  flex-wrap: wrap;
}

.title-style {
  font-size: 22px;
}

.text-style {
  font-size: 20px;
}

.text-bold-style {
  /* font-size: 22px; */
  font-weight: bold;
}

.text-align-style {
  text-align: justify;

  /* direction: ltr; */
}

.word-break {
  word-break: break-all;
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  word-wrap: break-word;
}

.text-align-style::first-letter {
  text-transform: capitalize;
}

.custom-font {
}

.main-title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 56px 0 20px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
}

.main-title-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.9em;
  height: 1.9em;
  font-size: 0.75em;
  border-radius: 999px;
  background: rgba(120, 120, 120, 0.14);
}

.main-title-text {
  letter-spacing: 0.01em;
}

.main-title::before,
.main-title::after {
  content: '';
  height: 2px;
  flex: 1;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(120, 120, 120, 0.08), rgba(120, 120, 120, 0.45));
}

.main-title::after {
  background: linear-gradient(90deg, rgba(120, 120, 120, 0.45), rgba(120, 120, 120, 0.08));
}

.hover-style:hover {
  color: black;
  text-decoration: none;

}

.hover-style {
  text-decoration: none;
  cursor: pointer;
}

.avatar {
  background-size: cover;
  background-repeat: no-repeat;
  width: 250px;
  height: 250px;
  margin-top: 50px;
  max-width: 100%;
  object-fit: cover;
}

/* split */


.n-divider.n-divider--vertical {
  display: inline-block;
  height: 1.2em;
  margin: 0 8px;
  vertical-align: middle;
  width: 2px;
}

.clustrmaps {
  width: 300px;
  height: 100px;
}

.no-underline {
  text-decoration: none;
}

.paper-container {
  margin-bottom: 10px;
}

.paper-title {
  display: block;
  line-height: 1.3;
  margin-bottom: 2px;
}

.paper-authors {
  gap: 0 !important;
  line-height: 1.25;
  margin-bottom: 2px;
  flex-wrap: wrap;
}

.paper-conference {
  line-height: 1.25;
}

.publication-year {
  display: flex;
  align-items: center;
  margin: 12px 0 8px;
}

.publication-year-text {
  font-size: 24px;
  color: #888888;
}

@media (max-width: 640px) {
  .home-page {
    padding: 0 12px 36px;
  }

  .avatar {
    width: 180px;
    height: 180px;
    margin-top: 24px;
  }

  .title-style {
    font-size: 18px;
  }

  .text-style {
    font-size: 16px;
  }

  .main-title {
    font-size: 28px;
    gap: 10px;
    margin: 40px 0 16px;
  }

  .contact-wrap {
    text-align: center;
    word-break: break-word;
  }
}

</style>
