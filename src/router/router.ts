import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/dune/MainPage.vue'),
  },
  {
    path: '/dune',
    name: 'Dune',
    component: () => import('@/views/dune/MainPage.vue'),
  },
  {
    path: '/dune-rules',
    name: 'Dune Rules',
    component: () => import('@/views/dune/RulesPage.vue'),
  },
  {
    path: '/dune-components',
    name: 'Dune Components',
    component: () => import('@/views/dune/ComponentsPage.vue'),
  },
  {
    path: '/dune-schedule',
    name: 'Dune Schedule',
    component: () => import('@/views/dune/SchedulePage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
