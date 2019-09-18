<template>
  <div class="main_container">
      <!--
        <md-app-toolbar class="md-large md-dense md-primary" style="background-color: #4682B4">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <span class="md-title">Time Manager</span>
            </div>
            <md-card-media>
              <img src="../assets/logogc.png" alt="Avatar">
            </md-card-media>
          </div>
        <div class="md-toolbar-row">
          <md-tabs class="md-transparent">
            <md-tab  id="tab-home" md-label="Profile" to='Users'></md-tab>
            <md-tab id="tab-pages" md-label="WorkingTimes" to='WorkingTime'></md-tab>
            <md-tab id="tab-posts" md-label="ClockManager" to='ClockManager'></md-tab>
            <md-tab id="tab-favorites" md-label="WorkingTime" to='WorkingTimes'></md-tab>
            <md-tab id="tab-other" md-label="ChartManager" to='ChartManager'></md-tab>
          </md-tabs>
        </div>
        </md-app-toolbar>
        -->
      <nav>
        <img class="logogc" src="../assets/logogc.png" alt="Avatar">
        <div class="tm_title">Time Manager</div>
        <div class="links">
          <router-link class="items"
                       v-for="link in links"
                       v-bind:key="link.id"
                       :to="`${link.page}`"
                       style="color: whitesmoke">{{ link.label }}</router-link>
        </div>
      </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        links: [
          {
            id: 0,
            label: 'Home',
            page:'/Home'
          },
          {
            id: 1,
            label: 'Clocker',
            page:'/Clocker'
          },
          {
            id: 2,
            label: 'Workingtimes',
            page:'/Workingtimes'
          },
          {
            id: 3,
            label: 'Settings',
            page:'/Settings'
          },
          {
            id: 4,
            label: 'Logout',
            page: '/Logout'
          }
        ]
      }
    }
  }
</script>
<style>
  .main_container {
    background-color: gray;
    color: whitesmoke;
    height: 118px;
  }
  .logogc {
    position: fixed;
    left: 50px;

  }
  .tm_title {
    font-size: 30px;
    padding-top: 30px;
  }
  .links {
    padding-top: 40px;
  }
  .items {
    font-size: 18px;
    padding: 50px;
  }
</style>
