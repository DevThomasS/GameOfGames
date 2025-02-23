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
    path: '/GameOfGames/war',
    name: 'War',
    component: () => import('@/views/war/MainPage.vue'),
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
