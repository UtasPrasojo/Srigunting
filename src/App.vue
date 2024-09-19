<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <RegistrationForm/>
  <LoginForm />
  <InputOTP/>
  <KirimOTP/>
  <RegistrationOrtu/>
  <ListDataAnak/>
  <RegistrationAnak/>
  <CekEmailForgotPass/>
  <ForgotPassword/>
  <NewPassword/> -->
  <RouterView />

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import RegistrationForm from './pages/RegistrationForm.vue'
// import LoginForm from './pages/LoginForm.vue'
// import InputOTP from './pages/InputOTP.vue'
// import KirimOTP from './pages/KirimOTP.vue'
// import RegistrationOrtu from './pages/RegistrationOrtu.vue'
// import ListDataAnak from './pages/ListDataAnak.vue'
// import RegistrationAnak from './pages/RegistrationAnak.vue'
// import CekEmailForgotPass from './pages/CekEmailForgotPass.vue'
// import ForgotPassword from './pages/ForgotPassword.vue'
import NewPassword from './pages/NewPassword.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    // RegistrationForm,
    // LoginForm,
    // InputOTP,
    // KirimOTP,
    // RegistrationOrtu,
    // ListDataAnak,
    // RegistrationAnak,
    // CekEmailForgotPass,
    // ForgotPassword,
    NewPassword,
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
