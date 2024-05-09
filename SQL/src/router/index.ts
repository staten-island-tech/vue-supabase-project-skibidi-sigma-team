import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name:'home' ,
      component: HOME
    },
    {
      path:'/login',
      name:'login' ,
      component: LOGIN_INTO
    }
   
  ],

})

export default router
