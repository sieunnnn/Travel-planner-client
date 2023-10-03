import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
// import router from './router/router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css" // bootstrap
import "bootstrap"

library.add(fas) // font awsome
library.add(far)

const app = createApp(App) // 앱 생성
app.config.globalProperties.$axios = axios // axios / http 통신
// app.use(router) // 라우터 사용 설정
app.component('font-awesome-icon', FontAwesomeIcon) // font awsome
app.mount('#app') // 렌더링 시작점
