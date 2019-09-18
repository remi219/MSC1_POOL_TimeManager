<template>
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
      <md-tabs class="md-transparent" >
        <md-tab  id="tab-home" md-label="Profile" to='Users'></md-tab>
        <md-tab id="tab-pages" md-label="WorkingTimes" to='WorkingTime'></md-tab>
        <md-tab id="tab-posts" md-label="ClockManager" to='ClockManager'></md-tab>
        <md-tab id="tab-favorites" md-label="WorkingTime" to='WorkingTimes'></md-tab>
        <md-tab id="tab-other" md-label="ChartManager" to='ChartManager'></md-tab>
      </md-tabs>
    </div>
  </md-app-toolbar>

  <div>
    <h2>Nav Bar</h2>
    <nav>
      <router-link class="spacing" v-for="routes in links"
                   v-bind:key="routes.id"
                   :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        links: [
          {
            id: 0,
            text: 'Home',
            page:'/Home'
          },
          {
            id: 1,
            text: 'Clocker',
            page:'/Clocker'
          },
          {
            id: 2,
            text: 'Workingtimes',
            page:'/Workingtimes'
          },
          {
            id: 3,
            text: 'Settings',
            page:'/Settings'
          },
          {
            id: 4,
            text: 'Logout',
            page: '/Logout'
          }
        ]
      }
    }
  }
</script>
<style>
  .spacing {
    margin-right: 10px;
  }
</style>
