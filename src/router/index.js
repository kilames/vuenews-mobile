import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'homepage',
    component: () =>
        import ('../views/home/homepage.vue')
}]

const router = new VueRouter({
    routes
})

export default router