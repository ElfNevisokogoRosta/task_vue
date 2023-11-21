import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthLayout.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if(to.matched.some((record)=>record.meta.requiresAuth)){
    const isAuthenticated = localStorage.getItem('token');  
    if(!isAuthenticated){
      next('/login');
    }
    else{
      next()
    }
  }
  else{
    next()
  }
})

export default router
