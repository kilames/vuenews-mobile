import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'homepage',
    component: () =>
        import ('../views/home/homepage.vue')
}, {
    path: '/search',
    name: 'searchpage',
    component: () =>
        import ('../views/home/components/searchbtn')
}]

const router = new VueRouter({
    routes
})

export default router