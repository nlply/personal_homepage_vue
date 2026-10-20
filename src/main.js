import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui'
// import '@/assets/styles/global.css'
import '@/assets/theme.css'

// add oh-vue-icons https://oh-vue-icons.js.org/
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { AiGoogleScholarSquare } from "oh-vue-icons/icons";
import { AiCvSquare } from "oh-vue-icons/icons";
import { FaGithubSquare } from "oh-vue-icons/icons";
import { BiLinkedin } from "oh-vue-icons/icons";
import { FaEnvelopeSquare } from "oh-vue-icons/icons";

// oh-vue-icons 里还没有 X 的新图标，这里用 Font Awesome 6.5.2 的 square-x-twitter（CC BY 4.0）
// 外框参数照抄 FaTwitterSquare，保证和其他方形图标一样大
const FaSquareXTwitter = {
  name: "fa-square-x-twitter",
  minX: -75.52,
  minY: -43.52,
  width: 599.04,
  height: 599.04,
  raw: '<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/>'
};

addIcons(AiGoogleScholarSquare);
addIcons(AiCvSquare);
addIcons(FaGithubSquare);
addIcons(FaSquareXTwitter);
addIcons(BiLinkedin);
addIcons(FaEnvelopeSquare);

const app = createApp(App)
app.use(router)
app.use(naive)

// add oh-vue-icons
app.component("v-icon", OhVueIcon);

app.mount('#app')