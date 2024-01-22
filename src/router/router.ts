import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/GameOfGames/dune',
    name: 'Dune',
    component: () => import('@/views/dune/MainPage.vue'),
  },
  {
    path: '/GameOfGames/dune-components',
    name: 'Dune Components',
    component: () => import('@/views/dune/ComponentsPage.vue'),
  },
  // TODO: Routing out of components after getting here through id doesn't work!
  {
    path: '/GameOfGames/dune-components/:id',
    name: 'duneComponentId',
    component: () => import('@/views/dune/ComponentsPage.vue'),
    params: true,
  },
  {
    path: '/GameOfGames/dune-rules',
    name: 'Dune Rules',
    component: () => import('@/views/dune/RulesPage.vue'),
  },
  {
    path: '/GameOfGames/dune-faq',
    name: 'Dune FAQ',
    component: () => import('@/views/dune/FAQPage.vue'),
  },
  // TODO: Routing out of components after getting here through id doesn't work!
  {
    path: '/GameOfGames/dune-faq/:id',
    name: 'duneFaqId',
    component: () => import('@/views/dune/FAQPage.vue'),
    params: true,
  },
  {
    path: '/GameOfGames/dune-schedule',
    name: 'Dune Schedule',
    component: () => import('@/views/dune/SchedulePage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/GameOfGames/dune',
  },
]

const router = createRouter({
  history: createWebHistory( process.env.BASE_URL ),
  routes,
})

export default router
