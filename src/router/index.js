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
  ],

  
})

 router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn ) {
    next('/login');
  } else {
    next();
  }
})

export default router
