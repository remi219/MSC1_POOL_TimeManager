<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <div id="profil">

         <!-- Profile of administrator -->
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-90"
                     style="background-color: #e9ecef">
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
              <h1>Email:
              <br>{{ email }} </h1>
              <br>
              <br>
              <div class="form_buttons_area">
                <button class="form_button"
                        @click="doEdit">
                   <img src="../assets/icon/edit-2.png"
                        class="form_button_image" />
                   EDIT
                </button>
                <button class="form_button"
                        @click="doLogout">
                   <img src="../assets/icon/logout-2.png"
                        class="form_button_image" />
                   LOGOUT
                </button>
              </div>
              <br>
              <div class="form_buttons_area">
                <button class="form_button"
                        @click="doUserManage">
                   <img src="../assets/icon/usersmanager.png"
                        class="form_button_image" />
                   MANAGE USERS
                </button>
              </div>
              <br>
              <br>
            </md-card>
          </div>
          <br>
          <br>

            <!-- Working time of users -->
            <div class="md-layout md-alignment-center">
              <md-card class="md-layout-item md-size-90"
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
      </md-app-content>
    </md-app>
  </div>
</template>


<script>
import Raphael from 'raphael/raphael';
import { DonutChart, BarChart, LineChart } from 'vue-morris';
import router from '../router';

global.Raphael = Raphael;

export default {
  name: 'HomeAdmin',
  components: { DonutChart, BarChart, LineChart },

  data() {
    return {
      firstname: 'Harley',
      lastname: 'Queen',
      email: 'hqueen@gotham.com',
      role: 'Administrator',
    };
  },

  methods: {
    doLogout() {
      router.push('/logout');
    },
    doEdit() {
      router.push('/editprofile');
    },
    doUserManage() {
       router.push('/usersmanager');
    },
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
    margin-top: 50px;
  }

  .form_button_image {
     width: 35px!important;
     height: 35px!important;
  }
  .form_button {
     padding-left: 20px;
     padding-right: 20px;
     padding-bottom: 5px;
     padding-top: 5px;
     border: 1px solid blue;
     border-radius: 5px;
     background-color: #00B7FF;
     color: azure!important;
     margin: 20px;
  }
  .form_buttons_area {
     display: inline-block;
  }
</style>
