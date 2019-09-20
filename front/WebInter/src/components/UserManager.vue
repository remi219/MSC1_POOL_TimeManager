<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>

        <!-- Profile of manager -->
        <div id="profil">
          <div class="md-layout md-alignment-left">
            <md-card class="md-layout-item md-size-30 md-small-size-100"
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
              <h1>Email: {{ email }} </h1>
              <br>
              <br>
              <md-card-actions>
                <md-button class="md-icon-button"
                           style="margin: auto"
                           v-on:click="">
                  <router-link style="color: #FFFF;"
                               :to="{ path: '/EditProfile'}"><img src="../assets/icon/edit-2.png"/>
                  </router-link>
                </md-button>
                <md-button class="md-icon-button"
                           style="margin: auto"
                           v-on:click="">
                  <router-link style="color: #FFFF;"
                               :to="{ path: '/Logout'}"><img src="../assets/icon/logout-1.png"/>
                  </router-link>
                </md-button>
              </md-card-actions>
              <br>
              <md-card-actions>
                <md-button class="md-raised md-primary" style="margin: auto" v-on:click=""><router-link style="color: #FFFF;" :to="{ path: '/TeamsManager'}">Teams management</router-link>
                </md-button>
              </md-card-actions>
              <br>
              <br>
            </md-card>
            <div class="md-layout md-alignment-center">
              <md-card class="md-layout-item md-size-60 md-small-size-100" style="background-color: #e9ecef">
                <md-card-header>
                    <h3>Your teams:</h3>
                </md-card-header>
                <md-list>
                  <md-list-item>
                    <md-icon><img src="../assets/icon/team.png"/></md-icon>
                    <span class="md-list-item-text">GothamProtector:  4 persons</span>
                  </md-list-item>

                  <md-list-item>
                    <md-icon><img src="../assets/icon/team.png"/></md-icon>
                    <span class="md-list-item-text">GardenGotham: 10 persons </span>
                  </md-list-item>

                  <md-list-item>
                    <md-icon><img src="../assets/icon/team.png"/></md-icon>
                    <span class="md-list-item-text">SubwayCity: 15 persons </span>
                  </md-list-item>

                </md-list>
              </md-card>
            </div>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>


<script>

export default {
  name: 'UserManager',

  data() {
    return {
      firstname: 'Alfred',
      lastname: 'Pennyworth',
      email: 'apennyworth@gotham.com',
      role: 'Manager',
    };
  },
};
</script>

<style>
h3{
  font-style: italic;
  color: brown;
  font-size: 16pt;
}
</style>
