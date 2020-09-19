import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store'

// 加载vant组件库
import Vant from 'vant'

// 加载全局样式表
import 'vant/lib/index.css'

// 加载全局样式
import './styles/index.less'

// 加载rem适配
import 'amfe-flexible'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')