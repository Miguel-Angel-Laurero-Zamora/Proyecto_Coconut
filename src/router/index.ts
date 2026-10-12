import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'inicio', component: () => import('../views/HomeView.vue'), meta: { title: 'Inicio' } },
    { path: '/reglas', name: 'reglas', component: () => import('../views/RulesView.vue'), meta: { title: 'Reglas' } },
    { path: '/capitanes', name: 'capitanes', component: () => import('../views/CaptainsView.vue'), meta: { title: 'Capitanes' } },
    { path: '/capitanes/:slug', name: 'capitan-detalle', component: () => import('../views/CaptainDetailView.vue'), meta: { title: 'Capitán' } },
    { path: '/construccion', name: 'construccion', component: () => import('../views/DeckbuildingView.vue'), meta: { title: 'Construccion' } },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router


