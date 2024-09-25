import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import LoginForm from '../components/LoginForm.vue';
import ForgotPassword from '../components/forgot-password.vue';
import EmailReset from '../components/email-reset-password.vue';
import ListDataAnak from '../components/list-data-anak.vue';
import Registration from '../components/registration-form.vue';
import InputOTP from '../components/Input-otp.vue';
import NewPassword from '../components/new-password.vue';
import RegistrationAnak from '../components/registration-anak.vue';
import RegistrationOrtu from '../components/registration-ortu.vue';
import SendOtp from '../components/send-otp.vue';
import Dashboard from '../pages/dashboard.vue';
import Sidebar from '../components/sidebar.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/helloword', name: 'helloword', component: HelloWorld },
    {path:'/login', name:'/login', component:LoginForm},
    {path:'/register', name:'/register', component:Registration},
    {path:'/register-anak', name:'/register-anak', component:RegistrationAnak},
    {path:'/register-ortu', name:'/register-ortu', component:RegistrationOrtu},
    {path:'/new-password', name:'/new-password', component:NewPassword},
    {path:'/forgot-password', name:'/forgot-password', component:ForgotPassword},
    {path:'/email-reset-password', name:'/email-reset-password', component:EmailReset},
    {path:'/list-data-anak', name:'/list-data-anak', component:ListDataAnak},
    {path:'/input-otp', name:'/input-otp', component:InputOTP},
    {path:'/send-otp', name:'/send-otp', component:SendOtp},
    {path:'/dashboard', name:'/dashboard', component:Dashboard},
    {path:'/sidebar', name:'/sidebar', component:Sidebar},
  ]
});

export default router;