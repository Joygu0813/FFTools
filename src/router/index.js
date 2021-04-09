import Vue from 'vue'
import VueRouter from 'vue-router'

import stuInfo from '../components/02.index.main.stuinfo.vue'
import player from '../components/02.index.main.player.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/stuinfo',
        name: 'stuInfo',
        component: stuInfo,

    },
    {
        path: '/player',
        name: '/player',
        component: player,

    },
]

const router = new VueRouter({
    routes
})

export default router