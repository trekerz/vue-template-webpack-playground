
export default [
  {
    path: '/card',
    name: 'Card',
    meta: {
      title: '卡片页'
    },
    component: () => import(/* webpackChunkName: "card" */ '../views/Card')
  }
]
