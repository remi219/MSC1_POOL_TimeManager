<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer v-bind:title="footer_authors"></Footer>
  </div>
</template>

<script>
  import Navbar from './components/Navbar';
  import Footer from './components/Footer';

  export default {
    name: 'App',
    components: { Navbar, Footer },
    data() {
      return {
        user: null,
        clockData: null,
        footer_authors: 'Team_21',
      };
    },
    mounted() {
      if (localStorage.user) {
        this.user = JSON.parse(localStorage.user);
      }
      if (localStorage.clockData) {
        this.clockData = JSON.parse(localStorage.clockData);
      }
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
