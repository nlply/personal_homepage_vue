<template>
  <n-row gutter="12">
    <n-col :span="6">
      <div class="light-green" />
    </n-col>
    <n-col :span="12">
      <div style="text-align: left;">
        <div style="text-align: center;padding-bottom: 20px;">
          <img alt="Vue logo" src="../assets/touxiang.jpeg" style="width: 30%;">
          <p style="font-family: 'Times New Roman', Times, serif;font-size: 40px;font-weight: bold;color: #000;">Yang Liu
          </p>
          <n-tag class="n-text-stylel">Independent Researcher</n-tag>
          <n-p>
            <n-a class="n-text-stylel" href="mailto:lauyon@tju.edu.cn" target="_blank">
              Email: lauyon@tju.edu.cn
            </n-a>
          </n-p>

        </div>
        <n-flex justify="center">
          <n-icon size="40" style="cursor: pointer">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 576 512">
              <path
                d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
                fill="currentColor"></path>
            </svg>
          </n-icon>
          <n-icon size="40" style="cursor: pointer">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 512">
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z"
                fill="currentColor"></path>
            </svg>
          </n-icon>
          <n-icon size="40" style="cursor: pointer">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
              <path
                d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.51 97.51 0 0 0 43.33-53.6a197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4a94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z"
                fill="currentColor"></path>
            </svg>
          </n-icon>
          <n-icon size="40" style="cursor: pointer">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024">
              <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135c66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6c-63.8 0-117.8 43.1-137.1 101c-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101c33 0 61-8.7 82.9-23.4c26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1c0 74.7-26.7 137.4-73 180.1z"
                fill="currentColor"></path>
            </svg>
          </n-icon>

        </n-flex>
        <n-p class="n-text-stylel n-text-align-style">
          I am a third-year PhD student at Department of Computing, <n-text type="info">The Hong Kong Polytechnic
            University (PolyU)</n-text>, advised
          by Prof. Maggie Wenjie Li. Before that, I received my MSc and BEng degrees from the School of Computer Science
          and Engineering, South China University of Technology, in 2020 and 2017, respectively. During the 2018 to 2019
          period, I was fortunate to be co-advised by Prof. Min Yang at SIAT, Chinese Academy of Sciences.
        </n-p>
        <span class="main-titile">Research</span>
        <n-p class="n-text-stylel n-text-align-style">
          I have broad interests in Natural Language Processing (NLP) and Conversational AI. Especially, I focus on the
          following directions:
        </n-p>

        <ul class="n-text-stylel">
          <li>
            Interactive dialogue systems (e.g., goal/target-directed dialogues, task-oriented dialogues). I am dedicated
            to
            empowering machines to interact with humans through natural, coherent, and proactive conversations.
          </li>
          <li>
            Natural language generation. I am interested in how world knowledge (e.g., commonsense, factual, physical,
            and
            social knowledge) can be grounded and incorporated in natural language generation.
          </li>
          <li>
            Situated and multimodal interactions. I am interested in human-AI collaborations on complex tasks and
            learning
            from situated communications (e.g., situated dialogues).
          </li>
        </ul>
        <span class="main-titile">Publications</span>
        <ul class="n-title-stylel">
          <li>
            <div>
              <n-text class="hover-style" type="success">Quantifying Stereotypes in Language</n-text>
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
                Language Models</n-text>
              <br />
              <span strong class="n-text-bold-stylel">Yang Liu</span>
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






        <span class="main-titile">Experiences</span>

        <span class="main-titile">Reviewer</span>

      </div>




    </n-col>
    <n-col :span="6">
      <div class="light-green" />
    </n-col>
    <n-back-top :right="100" />

  </n-row>
</template>

<script>


export default {
  data() {
    return {
      publications: [
        {
          title: 'Mining Effective Features Using Quantum Entropy for Humor Recognition',
          authers: 'Yang Liu, Yuexian Hou',
          bold_auther: 'Yang Liu',
          conference: 'EACL',
          year: '2023'
        },
        {
          title: 'Mining Effective Features Using Quantum Entropy for Humor Recognition',
          authers: '<n-text strong>Yang Liu</n-text>, Yuexian Hou',
          bold_auther: 'Yang Liu',
          conference: 'EACL',
          year: '2023'
        },
      ]
    }
  }
}

// // export default {
//   name: 'HelloWorld'
// }
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
</style>
