<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <div id="from">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-80 md-small-size-100"
                     style="background-color: #e9ecef">
              <md-card-header>
                <h1>Search or Create user</h1>
              </md-card-header>

              <md-card-content>
                <div class="md-layout-item">
                  <md-field>
                    <label for="firstname">User</label>
                    <md-input name="firstname"
                              id="firstname"
                              autocomplete="given-name"
                              v-model="firstname"/>
                  </md-field>
                </div>
              </md-card-content>
              <md-card-actions>
                <md-button class="md-raised md-primary"
                           style="margin: auto"
                           v-on:click="$store.commit('searchUser')"
                           :disabled="$store.state.disSearch">Search</md-button>
                <md-button class="md-raised md-primary"
                           style="margin: auto"
                           v-on:click="$store.commit('createUser')"
                           :disabled="$store.state.disCreate">Create</md-button>
              </md-card-actions>
              <br>
              <md-card-action>
                <md-button class="md-icon-button"
                           style="margin: auto"
                           v-on:click="$store.commit('refershUser')">
                           <img src="../assets/icon/refresh-1.png"/>
                </md-button>
                <br>
                <br>
                <br>
              </md-card-action>
            </md-card>
          </div>
          <br>
          <br>

          <!-- Search user -->
            <div class="md-layout md-layout-item md-alignment-center">
             <md-card-content class="md-layout-item md-size-80 md-small-size-100"
                             style="background-color: #e9ecef"
                             v-if="$store.state.searchuser">
              <md-card-header>
                <h1>Search user</h1>
              </md-card-header>

              <md-list>

                <md-list-item>
                  <md-icon><img src="../assets/icon/name.png"/></md-icon>
                  <span class="md-list-item-text">First Name:  {{ firstname }}</span>
                  <br>
                  <span class="md-list-item-text">Last Name:  {{ lastname }} </span>
                </md-list-item>


                <md-list-item>
                  <md-icon><img src="../assets/icon/mail.png"/></md-icon>
                  <span class="md-list-item-text">Email:  {{ email }} </span>
                </md-list-item>

                <md-list-item>
                  <md-icon><img src="../assets/icon/roles.png"/></md-icon>
                  <span class="md-list-item-text">Role: {{ role }} </span>
                </md-list-item>

                <md-list-item>
                  <md-icon><img src="../assets/icon/work.png"/></md-icon>
                  <span class="md-list-item-text">Hours of work: {{ hWorks }} hrs/week </span>
                </md-list-item>

              </md-list>
              <br>
              <br>
              <donut-chart
                id="donut"
                :data="[
                 { label: 'Days of work', value: 200 },
                 { label: 'Nights', value: 50 },
                 { label: 'Days', value: 150 },
                 ]"
                colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
                resize="true">
              </donut-chart>
              <br>
              <br>
              <md-card-actions>
                <md-button class="md-icon-button"
                           style="margin: auto"
                           v-on:click=""><router-link :to="{ path: '/EditProfile' }"><img src="../assets/icon/edit-2.png"/></router-link></md-button>
              </md-card-actions>
              <md-card-actions v-if="$store.state.empolyee">
                <md-button class="md-raised md-primary"
                           style="margin: auto"
                           v-on:click="">Promote to manager role</md-button>
              </md-card-actions>
            </md-card-content>
           </div>

          <!-- Create user -->
            <div class="md-layout md-layout-item md-alignment-center">
              <md-card-content class="md-layout-item md-size-80 md-small-size-100"
                               style="background-color: #e9ecef"
                               v-if="$store.state.createuser">
                <md-card-header>
                  <h1>Create user</h1>
                </md-card-header>
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
                  <label>Only images</label>
                  <md-file v-model="single" accept="image/*" />
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
                <br>
                <md-card-actions>
                  <md-button class="md-icon-button"
                             style="margin: auto"
                             v-on:click="">
                    <router-link style="color: #FFFF;"
                                 :to="{ path: '' }"><img src="../assets/icon/edit-2.png"/>
                    </router-link>
                  </md-button>
                </md-card-actions>

              </md-card-content>
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
  name: 'UsersProfileManager',
  components: { DonutChart, BarChart, LineChart },

  data() {
    return {
      firstname: 'Bruce',
      lastname: 'Wayne',
      email: 'bwayne@gotham.com',
      role: 'Employee',
      hWorks: 35,

      form: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      },
    };
  },
};
</script>

<style>
  h1{
    font-size: 13pt;
  }

  #from {
    margin-top: 90px;
  }
</style>
