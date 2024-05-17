import { createRouter, createWebHistory } from 'vue-router'
import HOME from '../views/HOME.vue'
import LOGIN_INTO from '../views/LOGIN_INTO.vue'
import Cards from '@/views/Cards.vue'
import MakerSpace from '@/views/MakerSpace.vue'
import Request_info from '@/views/Request_info.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HOME
    },
    {
      path: '/',
      name: 'login',
      component: LOGIN_INTO
    }
  ,
  {
    path: '/Cards',
    name: 'Cards',
    component: Cards
  }
,
{
  path: '/General ',
  name: 'General',
  component: MakerSpace
}
,
{
  path: '/Request',
  name: 'request',
  component: Request_info
}
,
{
  path: '/home',
  name: 'HOME',
  component: HOME
}
,
  ]
})

export default router
