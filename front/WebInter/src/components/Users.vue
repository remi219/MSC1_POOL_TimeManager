<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
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

      <md-app-content>
        <div id="profil">
          <div class="md-layout md-alignment-left">
           <md-card class="md-layout-item md-size-30 md-small-size-100" style="background-color: #e9ecef">
          <md-card-header>
            <h2>Employee</h2>
          </md-card-header>

             <md-avatar class="md-large">
               <img src="../assets/avatar-2.jpg" alt="People">
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
               <md-button class="md-raised md-primary" style="margin: auto" v-on:click=""><router-link style="color: #FFFF;" :to="{ path: '/'}">Edit</router-link>
               </md-button>
               <md-button class="md-raised md-primary" style="margin: auto" v-on:click=""><router-link style="color: #FFFF;" :to="{ path: '/'}">Logout</router-link>
               </md-button>
             </md-card-actions>
             <br>
             <br>
           </md-card>
            <div class="md-layout md-alignment-center">
              <md-card class="md-layout-item md-size-60 md-small-size-100" style="background-color: #e9ecef">
                <md-card-header>
                  <h2>Welcom Back {{ firstname }}</h2>
                  <br>
                  <br>
                  <h3>{{ new Date() | moment('Do MMMM YYYY - h:mm a')}}</h3>
                </md-card-header>
              </md-card>
            </div>
          </div>
        </div>
   </md-app-content>
  </md-app>
  </div>
</template>


<script>
  /* eslint-disable */
import WorkingTimes from './WorkingTimes';

export default {
  name: 'Users',
  component: 'WorkingTimes',

  data() {
    return {
      firstname: 'Bruce',
      lastname: 'Wayne',
      email: 'bwayne@gotham.com',

    };
  },
};
</script>

<style>
  h1 { font-weight: normal;
       font-size: 14pt;
  }

  #profil {
    margin-top: 120px;
  }
</style>
