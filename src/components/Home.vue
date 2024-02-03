<template>
  <n-flex justify="center" style="width:100%;padding-bottom: 50px;">
    <n-flex justify="center">
      <n-flex :style="{ width: computedWidth + 'px', 'text-align': center, 'max-width': '100%' }">
        <n-flex vertical>
          <div><img class="avatar" alt="avatar" src="../assets/avatar.png"></div>
          <span style="font-family: 'Times New Roman', Times, serif;font-size: 40px;font-weight: bold;color: #000;">Yang
            Liu
          </span>
          <span class="text-style" style="color: darkgray;">Independent Researcher</span>
          <n-p>
            <n-a class="text-style" href="mailto:yangliu.nlp@gmail.com" target="_blank">
              Email: yangliu.nlp@gmail.com
            </n-a>
          </n-p>
          <n-flex justify="center">
            <n-icon size="40" style="cursor: pointer" @click="pdf">
              <At />
            </n-icon>
            <n-icon size="40" style="cursor: pointer" @click="github">
              <GithubAlt />
            </n-icon>
            <n-icon size="40" style="cursor: pointer" @click="twitter">
              <Twitter />
            </n-icon>
            <!-- <n-icon size="40" style="cursor: pointer" @click="google">
            <Google />
          </n-icon> -->
          </n-flex>
          <n-flex>
            <n-p class="text-style text-align-style">
              I am currently actively looking for PhD opportunities.
              I focus on AI fairness, language modeling, quantum theory and any other relevant work.
              Previously, I obtained my master's and bachelor's degrees from <n-text type="info">Tianjin
                University</n-text>
              and <n-text type="info">Tianjin Normal University</n-text>, respectively.
              In addition, I have three years of full-time (after my bachelor's degree) and three years of part-time
              (during
              my master's degree) development experience.
              I have worked as a technical core in our team and I have extensive programming experience.
              Please do not hesitate to contact me if you are interested in working with me on some interesting projects.
            </n-p>
          </n-flex>
        </n-flex>
        <n-flex>
          <n-flax class="text-align-style">
            <n-divider />

            <p class="main-titile">🧑‍🔬Research</p>
            <span class="text-style">
              I have a broad interest in Natural Language Processing (NLP). I am particularly interested in the following
              directions:
            </span>
            <ul class="text-style">
              <li>
                Fairness in Artificial Intelligence (AI). I work on fairness in AI, investigating potential harms to
                protect
                target groups from harm. </li>
              <li>
                Quantum Information Theory. Quantum theory exhibits very unusual properties, and I am dedicated to using
                quantum theory to solve problems in AI.
              </li>
              <li>
                Recently, LLMs have developed significantly rapidly, and I also researched the fairness of LLMs for AI.
              </li>
            </ul>


            <n-divider />


            <p class="main-titile">✍Publications</p>


            <ul class="text-style">

              <li v-for="paper in papers">
                <div>
                  <n-a class="hover-style title-style" type="success" v-if="paper.title" :href="paper.titleURL"
                    target="_blank">{{ paper.title }}</n-a>
                  <n-text class="hover-style title-style" type="success" v-else>NaN</n-text>

                  <span v-if="paper.titleExplain" class="text-bold-style title-style">{{ ' ' + '(' + paper.titleExplain +
                    ')' }}</span>
                  <n-flex style="gap:0 0!important">
                    <div v-for="(auther, index) in paper.authers">
                      <span :class="{ 'text-bold-style': auther == paper.boldAuther }">{{ auther }}</span>
                      <span v-if="index !== paper.authers.length - 1">
                        <span v-if="index === paper.authers.length - 2">&nbsp;and&nbsp;</span>
                        <span v-else>,&nbsp;</span>
                      </span>
                    </div>
                  </n-flex>
                  <n-text italic>{{ paper.conference }}</n-text>
                  <br>
                  <span v-for="(resource, index) in paper.resources">
                    <n-a :href="resource.url" class="hover-style" style="text-decoration: none" target="_blank">{{
                      resource.name }}</n-a>
                    <n-divider v-if="index !== paper.resources.length - 1" vertical />
                  </span>
                </div>
              </li>

            </ul>



            <n-divider />


            <p class="main-titile">💼Experiences</p>
            <ul class="text-style">
              <li>

                <n-text>Mar. 2023 - Now: </n-text><n-text underline>Independent Researcher</n-text><n-text italic> -
                  Research social biases in language modeling and
                  look
                  for opportunities for a PhD position.</n-text>

              </li>
              <li>

                <n-text>Sept. 2019 - Mar. 2023: </n-text><n-text underline>Senior Software Engineer
                  (part-time)</n-text><n-text italic> - Technical Support at Antrou
                  Co.
                  Ltd.</n-text>

              </li>
              <li>

                <n-text>Jul. 2017 - Sept. 2019: </n-text><n-text underline>Senior Software Engineer</n-text><n-text
                  italic>
                  - Geographical Information System base on
                  Three.js and Security Management System for Petrochemical Industry at Antrou Co. Ltd.</n-text>

              </li>
            </ul>

            <n-divider />

            <p class="main-titile">🎨Technical Skills</p>
            <ul class="text-style">
              <li>Programming: Python, PyTorch, Java, Javascript, CSS</li>
              <li>
                Techniques: Natural Language Processing, Deep Learning, Machine Learning, Quantum Theory, WEB
                Application
                Development
              </li>
            </ul>
            <n-divider />

            <p class="main-titile">🔗Links</p>
            <ul class="text-style">
              <li>Personal Blog: <n-a href="https://www.nlply.tech">https://www.nlply.tech</n-a></li>
              <li>Github: <n-a href="https://github.com/nlply">https://github.com/nlply</n-a></li>
              <li>Huggingface: <n-a href="https://huggingface.co/lauyon">https://huggingface.co/lauyon</n-a></li>
            </ul>

            <n-divider />

            <p class="main-titile">📝Reviewer</p>
            <ul class="text-style">
              <li>2023: EMNLP, ACL</li>
            </ul>
            <n-divider />

            <p class="main-titile">📚Useful Resources</p>
            <ul class="text-style word-break">
              <li>ACL Anthology: <n-a target="_blank" href="https://aclanthology.org">https://aclanthology.org</n-a>
              </li>
              <li>ACL Pub Check: <n-a target="_blank"
                  href="https://huggingface.co/spaces/teelinsan/aclpubcheck">https://huggingface.co/spaces/teelinsan/aclpubcheck</n-a>
              </li>
              <li>AI Conference Deadlines: <n-a target="_blank" href="https://aideadlin.es">https://aideadlin.es</n-a>
              </li>
              <li>ColorSpace: <n-a target="_blank" href="https://mycolor.space">https://mycolor.space</n-a></li>
              <li>HEX to CMYK: <n-a target="_blank" href="https://g.co/kgs/J1DzL4w">https://g.co/kgs/J1DzL4w</n-a></li>
            </ul>
            <n-divider />

            <p style="text-align: center;color: #c0c0c0;font-size: 18px;margin-top: 100px;">2024 © <n-a
                href="https://nlply.tech/">Yang Liu</n-a> Developed with <n-a href="https://vuejs.org/">VUE</n-a> | Last
              updated: Jan. 2024</p>
          </n-flax>
        </n-flex>
      </n-flex>
    </n-flex>


    <n-back-top :right="100" />
  </n-flex>
</template>

<script>

import { At, Google, Twitter, GithubAlt } from "@vicons/fa";

import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    At,
    Google,
    Twitter,
    GithubAlt
  },
  computed: {
    computedWidth() {
      return window.innerWidth / 2;
    },
  },
  setup() {
    const papers = ref([
      {
        title: 'Quantifying Stereotypes in Language',
        titleExplain: 'single-authored work',
        titleURL: 'https://arxiv.org/abs/2401.15535',
        authers: ['Yang Liu'],
        boldAuther: 'Yang Liu',
        conference: 'The 18th Conference of the European Chapter of the Association for Computational Linguistics (EACL), 2024',
        resources: [
          {
            name: 'code',
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
        conference: 'Proceedings of the 36th AAAI Conference on Artificial Intelligence (AAAI), 2024',
        resources: [
          {
            name: 'code',
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
      },
      {
        title: 'Syntax-Aware Complex-Valued Neural Machine Translation',
        titleExplain: '',
        titleURL: 'https://arxiv.org/pdf/2307.08586.pdf',
        authers: ['Yang Liu', 'Yuexian Hou'],
        boldAuther: 'Yang Liu',
        conference: 'International Conference on Artificial Neural Networks (ICANN), 2023',
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
        conference: 'The 17th Conference of the European Chapter of the Association for Computational Linguistics (Findings: EACL), 2023',
        resources: [
          {
            name: 'code',
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
      }
    ])


    // resume
    const pdf_url = '../../resume.pdf'
    return {
      papers,
      At,
      Google,
      Twitter,
      GithubAlt,
      pdf() {
        window.open(`/pdf/web/viewer.html?file=${encodeURIComponent(pdf_url)}`);
      },
      github() {
        window.open(`https://github.com/nlply`);
      },
      twitter() {
        window.open(`https://twitter.com/LauyonTech`);
      },
      google() {

      },
    }
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-style {
  font-size: 22px;
  font-family: 'Times New Roman', Times, serif;
}

.text-style {
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
}

.text-bold-style {
  /* font-size: 22px; */
  font-weight: bold;
  /* font-family: 'Times New Roman', Times, serif; */
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
  /* font-family: 'Times New Roman', Times, serif; */
  /* font-family: Times, serif; */
  font-family: serif;
}

.main-titile {
  font-size: 28px;
  font-family: Arial;
  font-weight: bold;
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
</style>
