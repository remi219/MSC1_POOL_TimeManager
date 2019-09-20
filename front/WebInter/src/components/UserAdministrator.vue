<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <div id="profil">

         <!-- Profile of administrator -->
          <div class="md-layout md-alignment-left">
            <md-card class="md-layout-item md-size-30 md-small-size-100" style="background-color: #e9ecef">
              <md-card-header>
                <h2>{{ role }}</h2>
              </md-card-header>

              <md-avatar class="md-large">
                <img src="../assets/avatar/harley.png" alt="People">
              </md-avatar>
              <br>
              <br>
              <h1>First Name: {{ firstname }} </h1>
              <br>
              <h1>Last Name: {{ lastname }} </h1>
              <br>
              <h1>Email: {{ email }} </h1>
              <br>
              <br>
              <md-card-actions>
                <md-button class="md-icon-button"
                           style="margin: auto"
                           v-on:click="">
                  <router-link style="color: #FFFF;"
                               :to="{ path: '/EditProfile'}">
                    <img src="../assets/icon/edit-2.png"/>
                  </router-link>
                </md-button>
                <md-button class="md-icon-button"
                           style="margin: auto"
                           v-on:click="">
                  <router-link style="color: #FFFF;"
                               :to="{ path: '/Logout'}">
                    <img src="../assets/icon/logout-2.png"/>
                  </router-link>
                </md-button>
              </md-card-actions>
              <br>

              <md-card-actions>
                <md-button class="md-raised md-primary"
                           style="margin: auto"
                           v-on:click="">
                  <router-link style="color: #FFFF;"
                               :to="{ path: 'UsersProfileManager'}">
                    Users management</router-link>
                </md-button>
              </md-card-actions>
              <br>
              <br>
            </md-card>

            <!-- Working time -->
            <div class="md-layout md-alignment-center">
              <md-card class="md-layout-item md-size-60 md-small-size-100"
                       style="background-color: #e9ecef">

                <md-card-header>
                  <h3>Working Time:</h3>
                </md-card-header>
                <br>
                <br>
                <!-- Graph bar -->
                <bar-chart
                  id="bar"
                  :data='[
                  { user: "Bruce", daysWork: 25, day: 15, night: 10 },
                  { user: "Alfred", daysWork: 20, day: 15, night: 5 },
                  { user: "Robin", daysWork: 24, day: 10, night: 14 },
                  { user: "Joker", daysWork: 30, day: 23, night: 8 },
                 ]'
                  xkey="user"
                  ykeys='[ "daysWork", "day", "night" ]'
                  bar-colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
                  grid="true"
                  grid-text-weight="bold"
                  resize="true"
                  labels='[ "DaysOfWork", "Days", "Nights" ]'>
                </bar-chart>

              </md-card>
            </div>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>


<script>
import Raphael from 'raphael/raphael';
import { DonutChart, BarChart, LineChart } from 'vue-morris';

global.Raphael = Raphael;

export default {
  name: 'UserAdministrator',
  components: { DonutChart, BarChart, LineChart },

  data() {
    return {
      firstname: 'Harley',
      lastname: 'Queen',
      email: 'hqueen@gotham.com',
      role: 'Administrator',
    };
  },
};
</script>

<style>
  h3{
    font-style: italic;
    font-size: 16pt;
  }
  h1 { font-weight: normal;
    font-size: 14pt;
    color: black;
  }

  #profil {
    margin-top: 120px;
  }
</style>
