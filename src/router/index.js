import Vue from 'vue'
import Router from 'vue-router'
import Config from '@/config'

Vue.use(Router)

let routes = []
const routeContext = require.context('.', true, /\.js$/)

// 导入各模块
routeContext.keys().forEach(route => {
  if (route.startsWith('./index')) {
    return
  }
  const routeModule = routeContext(route)
  routes = routes.concat(routeModule.default || routeModule)
})

const router = new Router({ routes })

// 页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || Config.defaultTitle
  next()
})

export default router
