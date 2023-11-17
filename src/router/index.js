import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/HomeView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name:'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})
router.beforeEach((to, from, next)=>{
  if(to.matched.some((record)=>record.meta.requiresAuth)){
  const isAuthenticated = true
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
