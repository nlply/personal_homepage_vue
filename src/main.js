import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui'

// add oh-vue-icons
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { AiGoogleScholarSquare } from "oh-vue-icons/icons";
import { AiCvSquare } from "oh-vue-icons/icons";
import { FaGithubSquare } from "oh-vue-icons/icons";
import { FaTwitterSquare } from "oh-vue-icons/icons";





addIcons(AiGoogleScholarSquare,AiCvSquare,FaGithubSquare,FaTwitterSquare);




const app = createApp(App)
app.use(router)
app.use(naive)

// add oh-vue-icons
app.component("v-icon", OhVueIcon);

app.mount('#app')