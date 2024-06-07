import { createRouter, createWebHistory } from 'vue-router'
import HOME from '../views/HomeView.vue'
import LOGIN_INTO from '../views/LOGIN_INTO.vue'
import MakerSpace from '@/views/MakerSpace.vue'
// @ts-ignore
import ITEMVIEW from '../views/ItemView.vue'
// @ts-ignore
import ReservePage from '../views/ReservePage.vue'
import HomeView from '../views/HomeView.vue'
// @ts-ignore
import TimePage from '@/views/TimePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/item/:name',
      name: 'item',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ITEMVIEW
    },
    {
      path: '/',
      name: 'login',
      component: LOGIN_INTO
    },
    {
      path: '/General ',
      name: 'General',
      component: MakerSpace
    },
    {
      path: '/home',
      name: 'HOME',
      component: HOME
    },
    {
      path: '/home',
      name: 'HOME',
      component: HomeView
    },
    {
      path: '/reserve',
      name: 'Reserve',
      component: ReservePage
    },
    {
      path: '/Schedule',
      name: 'Schedule',
      component: TimePage
    }
  ]
})
/* path'/data/:id' */
export default router
