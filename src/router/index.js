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
  const isAuthenticated = localStorage.getItem('token')
  console.log(isAuthenticated, to.name)
  if(!isAuthenticated && to.name === 'home'){
    next('/auth');
  }
  if(isAuthenticated && to.name === "auth"){
    next("/");
  }
  next()
})

export default router
