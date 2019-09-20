<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">

      <md-app-content>
        <div id="from">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-30 md-small-size-100"
                     style="background-color: #e9ecef">
              <md-card-header>
                <h1>Edit Profile</h1>
              </md-card-header>

              <md-card-content>
                <div class="md-layout-item">
                  <md-avatar class="md-large">
                    <img src="../assets/avatar/avatar-2.jpg" alt="People">
                  </md-avatar>
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
                  <md-field>
                    <label>Password</label>
                    <md-input v-model="form.password"
                              type="password"/>

                  </md-field>
                </div>
              </md-card-content>
              <md-card-actions>
                <md-button class="md-raised md-primary" style="margin: auto">
                  <router-link
                    style="color: #FFFF;"
                    :to="{ path: 'Users'}">Cancel</router-link>
                </md-button>
                <md-button class="md-raised md-primary" style="margin: auto">
                  <router-link
                    style="color: #FFFF;"
                    :to="{ path: 'Users'}">Save</router-link>
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
    name: 'EditProfile',
    data() {
      return {
        form: {
          firstname: 'Bruce',
          lastname: 'Wayne',
          email: 'bwayne@gotham.com',
          password: '12345',
        },
      };
    },
  };
</script>

<style scoped>

</style>
