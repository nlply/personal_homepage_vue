<template>
  <n-row gutter="12">
    <n-col :span="6">
      <div class="light-green" />
    </n-col>
    <n-col :span="12">
      <div style="text-align: left;">
        <div style="text-align: center;padding-bottom: 20px;">
          <img alt="avatar" src="../assets/avatar.png">
          <p style="font-family: 'Times New Roman', Times, serif;font-size: 40px;font-weight: bold;color: #000;">Yang Liu
          </p>
          <span class="n-text-stylel">Independent Researcher</span>
          <n-p>
            <n-a class="n-text-stylel" href="mailto:yangliu.nlp@gmail.com" target="_blank">
              Email: yangliu.nlp@gmail.com
            </n-a>
          </n-p>

        </div>
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
        <n-p class="n-text-stylel n-text-align-style">
          I am currently actively looking for PhD opportunities.
          I focus on AI fairness, language modeling, quantum theory and any other relevant work.
          Previously, I obtained my master's and bachelor's degrees from <n-text type="info">Tianjin University</n-text>
          and <n-text type="info">Tianjin Normal University</n-text>, respectively.
          In addition, I have three years of full-time (after my bachelor's degree) and three years of part-time (during
          my master's degree) development experience.
          I have worked as a technical core in our team and I have extensive programming experience.
          Please do not hesitate to contact me if you are interested in working with me on some interesting projects.
        </n-p>
        <n-divider />
        <span class="main-titile">Research</span>
        <n-p class="n-text-stylel n-text-align-style">
          I have a broad interest in Natural Language Processing (NLP). I am particularly interested in the following
          directions:
        </n-p>

        <ul class="n-text-stylel">
          <li>
            Fairness in Artificial Intelligence (AI). I work on fairness in AI, investigating potential harms to protect
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
        <span class="main-titile">Publications</span>
        <ul class="n-title-stylel">
          <li>
            <div>
              <n-text class="hover-style" type="success">Quantifying Stereotypes in Language</n-text> <span
                class="n-text-bold-stylel">(single-authored work)</span>
              <br />
              <span strong class="n-text-bold-stylel">Yang Liu</span>
              <br />
              <n-text italic class="n-text-stylel">EACL, 2024</n-text>
            </div>
            <!-- <n-hr /> -->

          </li>

          <li>
            <div>
              <n-text class="hover-style" type="success">Robust Evaluation Measures for Evaluating Social Biases in
                Masked
                Language Models</n-text> <span class="n-text-bold-stylel">(single-authored work)</span>
              <br />
              <span class="n-text-bold-stylel">Yang Liu</span>
              <br />
              <n-text italic class="n-text-stylel">AAAI, 2024</n-text>
            </div>
            <!-- <n-hr /> -->

          </li>

          <li>

            <div>
              <n-text class="hover-style" type="success">Syntax-Aware Complex-Valued Neural Machine
                Translation</n-text>
              <br />
              <span strong class="n-text-bold-stylel">Yang Liu</span><span class="n-text-stylel">, Yuexian Hou</span>
              <br />
              <n-text italic class="n-text-stylel">ICANN, 2023</n-text>
            </div>
            <!-- <n-hr /> -->
          </li>

          <li>


            <div>
              <n-text class="hover-style" type="success">Mining Effective Features Using Quantum Entropy for Humor
                Recognition</n-text>
              <br />
              <span class="n-text-bold-stylel">Yang Liu</span><span class="n-text-stylel">, Yuexian Hou</span>
              <br />
              <n-text italic class="n-text-stylel">Findings of the Association for Computational Linguistics: EACL
                2023</n-text>
            </div>

            <!-- <n-hr /> -->
          </li>
        </ul>





        <n-divider />

        <span class="main-titile">Experiences</span>
        <ul class="n-text-stylel">
          <li>

            Mar. 2023 - Now: Independent Researcher - <n-text italic>Research social biases in language modeling and look
              for opportunities for a PhD position.</n-text>

          </li>
          <li>

            Sept. 2019 - Mar. 2023: Senior Software Engineer (part-time) - <n-text italic>Technical Support at Antrou Co.
              Ltd.</n-text>

          </li>
          <li>

            Jul. 2017 - Sept. 2019: Senior Software Engineer - <n-text italic>Geographical Information System base on
              Three.js and Security Management System for Petrochemical Indus-
              try at Antrou Co. Ltd.</n-text>

          </li>
        </ul>
        <n-divider />
        <span class="main-titile">Technical Skills</span>
        <ul class="n-text-stylel">
          <li>Programming: Python, PyTorch, Java, Javascript, CSS</li>
          <li>
            Techniques: Natural Language Processing, Deep Learning, Machine Learning, Quantum Theory, WEB Application
            Development
          </li>
        </ul>
        <n-divider />

        <span class="main-titile">Links</span>
        <ul class="n-text-stylel">
          <li>Personal Blog: <n-a href="https://www.nlply.tech">https://www.nlply.tech</n-a></li>
          <li>Github: <n-a href="https://github.com/nlply">https://github.com/nlply</n-a></li>
          <li>Huggingface: <n-a href="https://huggingface.co/lauyon">https://huggingface.co/lauyon</n-a></li>
        </ul>


        <n-divider />

        <span class="main-titile">Reviewer</span>
        <ul class="n-text-stylel">
          <li>2023: EMNLP, ACL</li>
        </ul>
      </div>




    </n-col>
    <n-col :span="6">
      <div class="light-green" />
    </n-col>
    <n-back-top :right="100" />

  </n-row>
</template>

<script>

import { At,Google,Twitter,GithubAlt } from "@vicons/fa";

import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    At,
    Google,
    Twitter,
    GithubAlt
  },
  setup() {
    const pdf_url = '../../resume.pdf'

    return {
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
.n-title-stylel {
  font-size: 26px;
  /* font-weight: bold; */
  font-family: 'Times New Roman', Times, serif;

}

.n-text-stylel {
  font-size: 22px;
  font-family: 'Times New Roman', Times, serif;
}

.n-text-bold-stylel {
  font-size: 22px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}

.n-text-align-style {
  text-align: justify;
  direction: ltr;
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
  /* text-decoration: none; */

}

.hover-style {
  /* text-decoration: underline; */
  cursor: pointer;
}

img {
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  margin-top: 50px;
}
</style>
