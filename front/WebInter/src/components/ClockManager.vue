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
      <md-app-content>
        <div id="clock">
          <p>
           <h3> {{ new Date() | moment('Do MMMM YYYY - h:mm a')}} </h3>
           <br>
           <br>
           <br>
          </p>
          <v-row justify="space-around" align="center">
            <v-col style="width: 480px; flex: 0 1 auto;">
              <v-time-picker v-model="start" :max="end" color="#269FB4" ></v-time-picker>
            </v-col>
            <v-btn rounded color="#269FB4">Clock in</v-btn>
            <v-col style="width:480px; flex: 0 1 auto;">
              <v-time-picker v-model="end" :min="start" color="#269FB4" ></v-time-picker>
            </v-col>
            <v-btn rounded color="#269FB4">Clock out</v-btn>
          </v-row>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>

export default {
  name: 'ClockManager',
  component: 'Connection',
  data() {
    return {
      start: null,
      end: null,
      date: null,
    };
  },
};
</script>

<style>
  h3{ font-size: 20pt; }

  #clock {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 150px;
    margin-left: 50px;
  }

</style>
