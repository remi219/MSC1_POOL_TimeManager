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

      </md-app-toolbar>

      <md-app-content>
        <div id="from">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-30 md-small-size-100"
                     style="background-color: #e9ecef">
              <md-card-header>
                <h1>Connection</h1>
              </md-card-header>

              <md-card-content>
                <div class="md-layout-item">
                  <md-avatar class="md-large">
                    <img src="../assets/avatar-2.jpg" alt="People">
                  </md-avatar>
                  <md-field>
                    <label for="username">Username</label>
                    <md-input name="username"
                              id="username"
                              autocomplete="given-name"
                              v-model="form.username"/>
                  </md-field>
                  <md-field>
                    <label for="firstname">Fisrt Name</label>
                    <md-input name="firstname"
                              id="firstname"
                              autocomplete="given-name"
                              v-model="form.firstname"/>
                  </md-field>
                  <md-field>
                    <label for="lastname">Last Name</label>
                    <md-input name="lastname"
                              id="lastname"
                              autocomplete="given-name"
                              v-model="form.lastname"/>
                  </md-field>
                  <md-field>
                    <label for="email">Email</label>
                    <md-input type="email"
                              name="email"
                              id="email"
                              autocomplete="email"
                              v-model="form.email"/>
                  </md-field>
                </div>
              </md-card-content>
              <md-card-actions>
                <md-button class="md-raised md-primary" style="margin: auto">
                  <router-link
                    style="color: #FFFF;"
                    :to="{ path: '/'}">Cancel</router-link>
                </md-button>
                <md-button class="md-raised md-primary" style="margin: auto">
                  <router-link
                    style="color: #FFFF;"
                    :to="{ path: 'Users'}">Done</router-link>
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

export default {
  name: 'Login',
  component: 'Connection',

  user: 'bruce',
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
  #from {
    margin-top: 150px;
  }
</style>
