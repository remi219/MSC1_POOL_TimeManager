<template>
  <!-- eslint-disable -->
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">

      <md-app-content>

        <!-- form for login - give email and password -->
        <div id="from">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-30 md-small-size-100"
                     style="background-color: #e9ecef">

              <md-card-header>
                <h1>Login</h1>
              </md-card-header>

              <md-card-content>
                <div class="md-layout-item">
                  <md-field>
                    <label for="email">Email</label>
                    <md-input type="email"
                              name="email"
                              id="email"
                              autocomplete="email"
                              v-model="form.email"/>
                  </md-field>
                  <md-field>
                    <label>Password</label>
                    <md-input v-model="form.password"
                              type="password"></md-input>
                  </md-field>
                </div>
              </md-card-content>

              <md-card-actions>
                <md-button class="md-icon-button"
                           style="margin: auto"
                           v-on:click="$store.commit('loginUser', user)">
                  <router-link style="color: #FFFF;"
                               :to="{ path: 'UserEmployee'}"><img src="../assets/icon/login.png"/>
                  </router-link>
                </md-button>
                <md-button class="md-icon-button"
                           style="margin: auto">
                  <router-link style="color: #FFFF;"
                               :to="{ path: 'Signup' }"><img src="../assets/icon/sign-up.png"/>
                  </router-link>
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
  user: '',
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
