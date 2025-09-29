import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui'
// import '@/assets/styles/global.css'

// add oh-vue-icons https://oh-vue-icons.js.org/
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { AiGoogleScholarSquare } from "oh-vue-icons/icons";
import { AiCvSquare } from "oh-vue-icons/icons";
import { FaGithubSquare } from "oh-vue-icons/icons";
import { FaTwitterSquare } from "oh-vue-icons/icons";
import { BiLinkedin } from "oh-vue-icons/icons";

addIcons(AiGoogleScholarSquare);
addIcons(AiCvSquare);
addIcons(FaGithubSquare);
addIcons(FaTwitterSquare);
addIcons(BiLinkedin);

const app = createApp(App)
app.use(router)
app.use(naive)

// add oh-vue-icons
app.component("v-icon", OhVueIcon);

app.mount('#app')