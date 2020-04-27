import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import AboutMe from '@/components/AboutMe.vue'
import Archive from '@/components/Archive.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutMe,
    },
    {
        path: '/archive',
        component: Archive,
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
