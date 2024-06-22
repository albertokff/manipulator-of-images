import { createRouter, createWebHistory } from 'vue-router/auto'

const RegisterPage = () => import('@/pages/register-page.vue')

const routes = [
  {
    path: '/register-page',
    name: 'register-page',
    component: RegisterPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
