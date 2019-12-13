
export default [
  {
    path: '/card',
    name: 'Card',
    meta: {
      title: '卡片页'
    },
    component: () => import(/* webpackChunkName: "card" */ '../views/Card')
  },
  {
    path: '/card/swiper',
    name: 'Swiper',
    component: () => import(/* webpackChunkName: "swiper" */ '../views/Card/Swiper')
  },
  {
    path: '/card/vant-swiper',
    name: 'VantSwiper',
    component: () => import(/* webpackChunkName: "vant-swiper" */ '../views/Card/VantSwiper')
  }
]
