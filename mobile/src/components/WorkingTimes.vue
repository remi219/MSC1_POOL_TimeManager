<template>
  <!-- eslint-disable -->
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>

        <!-- Table which give informations about days/nights of work in select month -->
        <div id="table">
         <div class="md-layout md-alignment-center">
           <md-card class="md-layout-item md-size-90"
                             style="background-color: #e9ecef">
          <md-table>

          <md-table-toolbar>
            <h1 class="md-title">Working Times: {{ months }}</h1>
          </md-table-toolbar>

          <md-table-row>
            <md-table-head md-date>Date</md-table-head>
            <md-table-head>Clock In</md-table-head>
            <md-table-head>Clock Out</md-table-head>
          </md-table-row>

          <md-table-row>
            <md-table-cell md-date>3-Sept-2019</md-table-cell>
            <md-table-cell>9:30 AM</md-table-cell>
            <md-table-cell>4:00 PM</md-table-cell>
          </md-table-row>

          <md-table-row>
            <md-table-cell md-date>4-Sept-2019</md-table-cell>
            <md-table-cell>9:30 AM</md-table-cell>
            <md-table-cell>4:30 PM</md-table-cell>
          </md-table-row>

          <md-table-row>
            <md-table-cell md-date>5-Sept-2019</md-table-cell>
            <md-table-cell>9:30 PM</md-table-cell>
            <md-table-cell>9:30 AM</md-table-cell>
          </md-table-row>
          </md-table>
          </md-card>
          <br>
          <br>

          <!-- Select the month you want -->
          <div class="md-layout-item md-size-60 md-alignment-center">
            <md-field>
              <md-select v-model="months" name="months" id="months" placeholder="Month">
                <md-option v-for="item in items"
                           v-bind:key="items"
                           :value="item">{{item}}</md-option>
              </md-select>
            </md-field>
        </div>
        </div>
        <br>

          <!-- Informations about your work in current months (days and nights and hours of works) -->
        <div class="md-layout md-alignment-center">
        <md-card class="md-layout-item md-size-80"
                 style="background-color: #e9ecef">

          <md-card-header>
            <h2>Informations: </h2>
          </md-card-header>
          <md-list>
            <md-list-item>
              <md-icon><img src="../assets/icon/clock.png"/></md-icon>
              <span class="md-list-item-text">Hours in week:  {{ hours }} hrs</span>
            </md-list-item>

            <md-list-item>
              <md-icon><img src="../assets/icon/work.png"/></md-icon>
              <span class="md-list-item-text">Nights in a row:  {{ nightrow }} </span>
            </md-list-item>

            <md-list-item>
              <md-icon><img src="../assets/icon/last.png"/></md-icon>
              <span class="md-list-item-text">Last night of work:
               <br> {{ lastnight }} </span>
            </md-list-item>

            <md-list-item>
              <md-icon><img src="../assets/icon/day.png"/></md-icon>
              <span class="md-list-item-text">Days: {{ days }} </span>
            </md-list-item>

            <md-list-item>
              <md-icon><img src="../assets/icon/night.png"/></md-icon>
              <span class="md-list-item-text">Nights: {{ night }} </span>
            </md-list-item>

          </md-list>
          </md-card>
        </div>
      </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'WorkingTimes',
  component: 'Login',
  data() {
    return {
      test: 'bidule',
      months: '',
      night: 4,
      nightrow: 2,
      days: 2,
      hours: 33,
      lastnight: '7-Sept-2019',

      form: {
        username: null,
        fistname: null,
        lastname: null,
        email: null,
      },

      items: [
        'Septembre',
        'August',
        'July',
        'June',
        'Mai',
        'April',
      ],
    };
  },
};
</script>

<style>
  h2{ font-style: italic;
      font-size: 16pt;
  }

  #table {
    margin-top: 40px;
  }
</style>
