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
      </md-app-toolbar>

      <md-app-content>
        <div id="from">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-30 md-small-size-100" style="background-color: #e9ecef">
              <md-card-header>
                <h1>Connection</h1>
              </md-card-header>

              <md-card-content>
                <div class="md-layout-item">
                  <md-field>
                    <label for="username">Username</label>
                    <md-input name="username" id="username" autocomplete="given-name" v-model="form.username"/>
                  </md-field>
                  <md-field>
                    <label for="email">Email</label>
                    <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"/>
                  </md-field>
                </div>
              </md-card-content>
              <md-card-actions>
                <md-button class="md-raised md-primary" style="margin: auto" v-on:click=""><router-link style="color: #FFFF;" :to="{ path: 'Users'}">Login</router-link>
                </md-button>
                <md-button class="md-raised md-primary" style="margin: auto" v-on:click=""><router-link style="color: #FFFF;" :to="{ path: 'Login' }">Sign Up</router-link>
                </md-button>
              </md-card-actions>
            </md-card>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>


<script>
import WorkingTimes from './WorkingTimes';

export default {
  name: 'Connection',
  component: 'WorkingTimes',
  user: 'bruce',
  data() {
    return {
      form: {
        username: null,
        email: null,
      },
    };
  },
};
</script>

<style>
  #from {
    margin-top: 150px;
  }
</style>
