<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary" style="background-color: #4682B4">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">Time Manager</span>
          </div>
          <md-card-media>
            <img src="./assets/logogc.png" alt="Avatar">
          </md-card-media>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-transparent" >
            <md-tab  id="tab-home" md-label="Profile"  to='Users'></md-tab>
            <md-tab id="tab-pages" md-label="WorkingTime" to='WorkingTime'></md-tab>
            <md-tab id="tab-posts" md-label="ClockManager" to='ClockManager'></md-tab>
            <md-tab id="tab-favorites" md-label="WorkingTimes" to='WorkingTimes'></md-tab>
            <md-tab id="tab-other" md-label="ChartManager" to='ChartManager'></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>
    </md-app>
  </div>
</template>

<script>

export default {
  name: 'ChartManager',
  component: 'Connection',
  data() {
    return {

    };
  },
};
</script>

<style>

</style>
