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
        <div class="md-layout md-alignment-right">
        <div id="table">
        <md-table md-card>
          <md-table-toolbar>
            <h1 class="md-title">Working Times</h1>
          </md-table-toolbar>

          <md-table-row>
            <md-table-head md-date>Date</md-table-head>
            <md-table-head>Start Hour</md-table-head>
            <md-table-head>End Hour</md-table-head>
            <md-table-head>Type</md-table-head>
            <md-table-head>Job</md-table-head>
          </md-table-row>

          <md-table-row>
            <md-table-cell md-date>3-Sept-2019</md-table-cell>
            <md-table-cell>9:30 AM</md-table-cell>
            <md-table-cell>4:30 PM</md-table-cell>
            <md-table-cell>Day</md-table-cell>
            <md-table-cell>Something</md-table-cell>
          </md-table-row>

          <md-table-row>
            <md-table-cell md-date>4-Sept-2019</md-table-cell>
            <md-table-cell>9:30 AM</md-table-cell>
            <md-table-cell>4:30 PM</md-table-cell>
            <md-table-cell>Day</md-table-cell>
            <md-table-cell>Something</md-table-cell>
          </md-table-row>

          <md-table-row>
            <md-table-cell md-date>5-Sept-2019</md-table-cell>
            <md-table-cell>9:30 PM</md-table-cell>
            <md-table-cell>9:30 AM</md-table-cell>
            <md-table-cell>Night</md-table-cell>
            <md-table-cell>Something</md-table-cell>
          </md-table-row>
        </md-table>
          <br>
          <div class="md-layout-item md-size-60 md-small-size-100 md-alignment-center">
            <md-field>
              <label for="month">Month</label>
              <md-select v-model="month" name="month" id="month">
                <md-option value="mai">Mai</md-option>
                <md-option value="june">June</md-option>
                <md-option value="july">July</md-option>
                <md-option value="august">August</md-option>
                <md-option value="september">September</md-option>
              </md-select>
            </md-field>
          </div>
        </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>

export default {
  name: 'WorkingTimes',
  component: 'Connection',
  data() {
    return {
      form: {
        username: null,
        fistname: null,
        lastname: null,
        email: null,
      },
    };
  },
};
</script>

<style>
  #table {
    margin-top: 150px;
  }
</style>
