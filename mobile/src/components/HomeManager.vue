<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>

        <!-- Profile of manager -->
        <div id="profil">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-90"
                     style="background-color: #e9ecef">

              <md-card-header>
                <h2>{{ role }}</h2>
              </md-card-header>

              <md-avatar class="md-large">
                <img src="../assets/avatar/alfred.png" alt="People">
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
                         @click="doTeamsManager">
                    <img src="../assets/icon/teamsmanager.png"
                         class="form_button_image" />
                    MANAGE TEAMS
                 </button>
              </div>
              <br>
              <br>
            </md-card>
           </div>
           <br>
           <br>

            <!-- Display of teams -->
            <div class="md-layout md-alignment-center">
              <md-card class="md-layout-item md-size-90"
                       style="background-color: #e9ecef">
                <md-card-header>
                    <h3>Your teams:</h3>
                </md-card-header>
                <md-list>
                  <md-list-item>
                    <md-icon><img src="../assets/icon/team.png"/></md-icon>
                    <span class="md-list-item-text">GothamProtector:
                     <br>4 persons</span>
                  </md-list-item>

                  <md-list-item>
                    <md-icon><img src="../assets/icon/team.png"/></md-icon>
                    <span class="md-list-item-text">GardenGotham:
                    <br>10 persons </span>
                  </md-list-item>

                  <md-list-item>
                    <md-icon><img src="../assets/icon/team.png"/></md-icon>
                    <span class="md-list-item-text">SubwayCity:
                    <br>15 persons </span>
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
import router from '../router';

export default {
  name: 'HomeManager',

  data() {
    return {
      firstname: 'Alfred',
      lastname: 'Pennyworth',
      email: 'apennyworth@gotham.com',
      role: 'Manager',
    };
  },

  methods: {
     doLogout() {
        router.push('/logout');
     },
     doEdit() {
        router.push('/editprofile');
     },
     doTeamsManager() {
        router.push('/teamsmanager');
     },
  },
};
</script>

<style>
h3{
  font-style: italic;
  color: brown;
  font-size: 16pt;
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
