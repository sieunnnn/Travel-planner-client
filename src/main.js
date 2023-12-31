import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from "./stores";
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css" // bootstrap
import "bootstrap"
import './assets/styles/typo.css';
import './assets/styles/box.css';
import './assets/styles/input.css';
import './assets/styles/button.css';
import './assets/styles/img.css';
import './assets/styles/etc.css';





library.add(fas) // font awsome
library.add(far)

const app = createApp(App) // 앱 생성
axios.defaults.baseURL = 'https://dev.travel-planner.xyz';
app.use(router) // 라우터 사용 설정
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon) // font awsome
app.mount('#app') // 렌더링 시작점
