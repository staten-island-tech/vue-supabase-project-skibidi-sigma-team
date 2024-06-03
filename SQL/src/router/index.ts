import { createRouter, createWebHistory } from 'vue-router'
import HOME from '../views/HomeView.vue'
import LOGIN_INTO from '../views/LOGIN_INTO.vue'
import MakerSpace from '@/views/MakerSpace.vue'
import ITEMVIEW from '../views/ItemView.vue'
import CREATE from '../views/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HOME
    },
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
      path: '/create',
      name: 'CREATE',
      component: CREATE
    }
  ]
})
/* path'/data/:id' */
export default router
