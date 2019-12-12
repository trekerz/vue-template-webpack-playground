import Vue from 'vue'
import Config from '@/config/config'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页'
      },
      component: Home
    },
    {
      path: '/card',
      name: 'Card',
      meta: {
        title: '卡片页'
      },
      component: () => import(/* webpackChunkName: "card" */ '../views/Card')
    }
  ]
})

// 页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || Config.defaultTitle
  next()
})

export default router
