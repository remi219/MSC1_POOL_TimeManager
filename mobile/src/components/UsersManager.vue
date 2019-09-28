<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <div id="from">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-90"
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

              <div class="form_buttons_area">
                 <button class="form_button"
                         @click="doSearch">
                   <img src="../assets/icon/search.png"
                        class="form_button_image" />
                   SEARCH
                 </button>
                 <button class="form_button"
                         @click="doCreate">
                   <img src="../assets/icon/create.png"
                        class="form_button_image" />
                   CREATE
                 </button>
              </div>
              <br>
              <div class="form_buttons_area">
                 <button class="form_button"
                         @click="doRefresh">
                   <img src="../assets/icon/refresh-2.png"
                        class="form_button_image" />
                   REFRESH
                 </button>
              </div>

            </md-card>
          </div>
          <br>
          <br>

          <!-- Search user -->
            <div class="md-layout md-layout-item md-alignment-center">
             <md-card-content class="md-layout-item md-size-95"
                             style="background-color: #e9ecef"
                             v-if="$store.state.searchuser">
              <md-card-header>
                <h1>Search user</h1>
              </md-card-header>

              <md-list>

                <md-list-item>
                  <md-icon><img src="../assets/icon/name.png"/></md-icon>
                  <span class="md-list-item-text">First Name:
                  <br>{{ firstname }}</span>
                </md-list-item>

                <md-list-item>
                  <md-icon><img src="../assets/icon/name.png"/></md-icon>
                  <span class="md-list-item-text">Last Name:
                  <br>{{ lastname }} </span>
                </md-list-item>

                <md-list-item>
                  <md-icon><img src="../assets/icon/mail.png"/></md-icon>
                  <span class="md-list-item-text">Email:
                  <br>{{ email }} </span>
                </md-list-item>

                <md-list-item>
                  <md-icon><img src="../assets/icon/roles.png"/></md-icon>
                  <span class="md-list-item-text">Role:
                  <br>{{ role }} </span>
                </md-list-item>

                <md-list-item>
                  <md-icon><img src="../assets/icon/work.png"/></md-icon>
                  <span class="md-list-item-text">Hours of work:
                  <br>{{ hWorks }} hrs/week </span>
                </md-list-item>

              </md-list>
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
              <md-card-content class="md-layout-item md-size-90"
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
                             v-on:click="$store.commit('refershUser')">
                    <router-link style="color: #FFFF;"
                                 :to="{ path: ''}"><img src="../assets/icon/edit-2.png"/>
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
  name: 'UsersManager',
  components: { DonutChart, BarChart, LineChart },

  data() {
    return {
       searchuser: null,
       createuser: null,
       empolyee: null,
       disSearch: false,
       disCreate: false,

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

  methods: {
     doSearch() {
       searchuser = true;
       empolyee = true;
       disCreate = true;
     },
     doCreate() {
       createuser = true;
       disSearch = true;
     },
     doRefresh() {
       searchuser = null;
       createuser = null;
       empolyee = null;
       disSearch = false;
       disCreate = false;
     },
  },
};
</script>

<style>
  h1{
    font-size: 13pt;
  }

  #from {
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
