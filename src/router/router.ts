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
    path: '/dune-components',
    name: 'Dune Components',
    component: () => import('@/views/dune/ComponentsPage.vue'),
  },
  {
    // TODO: Focus on component instead of sending to the top of the page.
    path: '/dune-components/:pathMatch(.*)*',
    redirect: '/dune-components',
  },
  {
    path: '/dune-rules',
    name: 'Dune Rules',
    component: () => import('@/views/dune/RulesPage.vue'),
  },
  {
    path: '/dune-faq',
    name: 'Dune FAQ',
    component: () => import('@/views/dune/FAQPage.vue'),
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
