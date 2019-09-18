<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from './components/Navbar';
  import Login from './components/Login';
  import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {Navbar, Footer},
  component: 'Login',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: auto;
}
</style>
