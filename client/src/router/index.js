import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const constRouter = [
  {
    path: '/login',
    component: () => import('@/views/login/login')
  }
]
const variableRouter = [
  {
    path: '/',
    redirect: '/child',
    component: () => import('@/components/layout/layout'),
    children: [
      {
        path: '/child',
        name: 'HelloWorld',
        component: () => import('@/components/HelloWorld')
      }
    ]
  }
]
export default new Router({
  routes: [
    ...constRouter,
    ...variableRouter
  ]
})
