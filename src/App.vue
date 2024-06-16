<template>
  <h1 style="margin-bottom: 5%;">Registro de inventarios de libros</h1>
  <Register></Register>
</template>

<script>
import Register from './components/Register.vue'

export default {
  name: 'App',
  components: {
    Register
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
  margin-left: 30px
}
</style>
