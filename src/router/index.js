import Vue from 'vue'
import VueRouter from 'vue-router'

import stuInfo from '../components/02.index.main.stuinfo.vue'
import player from '../components/02.index.main.player.vue'
import compous from '../components/02.index.main.compous.vue'


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
    {
        path: '/compous',
        name: '/compous',
        component: compous,
    }
]

const router = new VueRouter({
    routes
})

export default router