import { createApp } from "vue";
import {createRouter,createWebHashHistory} from "vue-router"
import App  from "./App.vue";
import {routes} from './router'

const app = createApp(App)
const router = createRouter({
    history:createWebHashHistory(),
routes
}
)
// Vue.component('aside', require('./components/Aside.vue').default);

app.use(router)
app.mount('#app')

