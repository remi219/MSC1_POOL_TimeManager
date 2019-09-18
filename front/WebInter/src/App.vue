<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer v-bind:title="footer_authors"></Footer>
  </div>
</template>

<script>
  import Navbar from './components/Navbar';
  import Footer from "./components/Footer";

export default {
  name: 'App',
  footer_authors: "Team_21",
  components: {Navbar, Footer},
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
