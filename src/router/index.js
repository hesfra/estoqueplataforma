import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/pesquisar',
      name: 'Pesquisar',
      component: () => import('../views/Pesquisa.vue')

    },
    {
      path: '/cadastro',
      name: 'Cadastrar',
      component: () => import('../views/Cadastrar.vue')
    },
    {
      path: '/todosequipamentos',
      name: 'todosEquipamentos',
      component: () => import('../views/todosEquipamentos.vue')
    }
  ]
})

export default router
