import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import LoginForm from '../components/LoginForm.vue';
import ForgotPassword from '../components/forgot-password.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/helloword', name: 'helloword', component: HelloWorld },
    {path:'/login', name:'/login', component:LoginForm},
    {path:'/forgot-password', name:'/forgot-password', component:ForgotPassword},
    {path:'/email-reset-password', name:'/email-reset-password', component:ForgotPassword},
  ]
});

export default router;