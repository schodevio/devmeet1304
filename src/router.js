import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const isAdmin = (_to, _from, next) => {
  const isTokenSet = localStorage.getItem('isTokenSet')

  isTokenSet === 'true' ? next() : next({ name: 'home' })
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vote',
      name: 'vote',
      beforeEnter: isAdmin,
      component: () => import(/* webpackChunkName: "vote" */ './views/Vote.vue')
    },
    {
      path: '/score',
      name: 'score',
      component: () => import(/* webpackChunkName: "score" */ './views/Score.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
    }
  ]
})
