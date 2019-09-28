<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">

      <md-app-content>
        <div class="md-layout-item md-alignment-center">
          <div id="team" >

            <!-- Panel search or create team -->
            <div class="md-layout md-alignment-center">
              <md-card class="md-layout-item md-size-90"
                       style="background-color: #e9ecef">
                <md-card-header>
                  <h1>Search or Create teams</h1>
                </md-card-header>

                <md-card-content>
                  <div class="md-layout-item">
                    <md-field>
                      <label for="teams">Teams</label>
                      <md-input name="teams"
                                id="teams"
                                autocomplete="given-name"
                                v-model="teams"/>
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

              <!-- Create teams -->
              <div class="md-layout md-layout-item md-alignment-center">
                <md-card-content class="md-layout-item md-size-90"
                                 style="background-color: #e9ecef"
                                 v-if="$store.state.createteams">
                  <md-card-header>
                    <h1>Create teams</h1>
                  </md-card-header>

                  <md-field>
                    <label for="teamsname">Teams Name</label>
                    <md-input name="teamsname"
                              id="teamsname"
                              autocomplete="given-name"
                              v-model="form.teamsname"/>
                  </md-field>

                  <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="first-name">First Name</label>
                        <md-input name="first-name"
                                  id="first-name"
                                  autocomplete="given-name"
                                  v-model="form.firstName"/>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="last-name">Last Name</label>
                        <md-input name="last-name"
                                  id="last-name"
                                  autocomplete="family-name"
                                  v-model="form.lastName"/>
                      </md-field>
                    </div>
                    <md-button class="md-icon-button"
                               style="margin: auto"
                               v-on:click="$store.commit('')">
                      <img src="../assets/icon/add-2.png"/>
                    </md-button>
                    <md-button class="md-icon-button"
                                style="margin: auto"
                                v-on:click="$store.commit('')">
                      <img src="../assets/icon/delete-2.png"/>
                    </md-button>
                  </div>

                  <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="first-name">First Name</label>
                        <md-input name="first-name"
                                  id="first-name"
                                  autocomplete="given-name"
                                  v-model="form.firstName"/>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="last-name">Last Name</label>
                        <md-input name="last-name"
                                  id="last-name"
                                  autocomplete="family-name"
                                  v-model="form.lastName"/>
                      </md-field>
                    </div>
                    <md-button class="md-icon-button"
                               style="margin: auto"
                               v-on:click="$store.commit('')">
                      <img src="../assets/icon/add-2.png"/>
                    </md-button>
                    <md-button class="md-icon-button"
                               style="margin: auto"
                               v-on:click="$store.commit('')">
                      <img src="../assets/icon/delete-2.png"/>
                     </md-button>
                  </div>

                  <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="first-name">First Name</label>
                        <md-input name="first-name"
                                  id="first-name"
                                  autocomplete="given-name"
                                  v-model="form.firstName"/>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="last-name">Last Name</label>
                        <md-input name="last-name"
                                  id="last-name"
                                  autocomplete="family-name"
                                  v-model="form.lastName"/>
                      </md-field>
                    </div>
                    <md-button class="md-icon-button"
                               style="margin: auto"
                               v-on:click="$store.commit('')">
                      <img src="../assets/icon/add-2.png"/>
                    </md-button>
                    <md-button class="md-icon-button"
                               style="margin: auto"
                               v-on:click="$store.commit('')">
                      <img src="../assets/icon/delete-2.png"/>
                    </md-button>
                  </div>

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

              <!-- Search Team  -->
              <div class="md-layout md-layout-item md-alignment-center">
                <md-card-content class="md-layout-item md-size-90"
                                 style="background-color: #e9ecef"
                                 v-if="$store.state.searchteams">
                  <md-card-header>
                    <h1>Edit teams</h1>
                  </md-card-header>

                  <md-field>
                    <label for="teamsname">Teams Name</label>
                    <md-input name="teamsname"
                              id="teamsname"
                              autocomplete="given-name"
                              v-model="form.teamsname"/>
                  </md-field>
                  <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="first-name">First Name</label>
                        <md-input name="first-name"
                                  id="first-name"
                                  autocomplete="given-name"
                                  v-model="form.firstName"/>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="last-name">Last Name</label>
                        <md-input name="last-name"
                                  id="last-name"
                                  autocomplete="family-name"
                                  v-model="form.lastName"/>
                      </md-field>
                    </div>
                    <md-button class="md-icon-button"
                               style="margin: auto"
                               v-on:click="$store.commit('')">
                      <img src="../assets/icon/delete-2.png"/>
                    </md-button>
                  </div>

                  <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="first-name">First Name</label>
                        <md-input name="first-name"
                                  id="first-name"
                                  autocomplete="given-name"
                                  v-model="form.firstName"/>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="last-name">Last Name</label>
                        <md-input name="last-name"
                                  id="last-name"
                                  autocomplete="family-name"
                                  v-model="form.lastName"/>
                      </md-field>
                    </div>
                    <md-button class="md-icon-button"
                               style="margin: auto"
                               v-on:click="$store.commit('')">
                      <img src="../assets/icon/delete-2.png"/>
                    </md-button>
                  </div>

                  <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="first-name">First Name</label>
                        <md-input name="first-name"
                                  id="first-name"
                                  autocomplete="given-name"
                                  v-model="form.firstName"/>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="last-name">Last Name</label>
                        <md-input name="last-name"
                                  id="last-name"
                                  autocomplete="family-name"
                                  v-model="form.lastName"/>
                      </md-field>
                    </div>
                    <md-button class="md-icon-button"
                               style="margin: auto"
                               v-on:click="$store.commit('')">
                      <img src="../assets/icon/delete-2.png"/>
                    </md-button>
                  </div>
                  <br>
                  <md-button class="md-icon-button"
                             style="margin: auto"
                             v-on:click="$store.commit('')">
                    <img src="../assets/icon/add-2.png"/>
                  </md-button>
                  <br>
                  <br>
                  <md-card-actions>
                    <md-button class="md-icon-button"
                               style="margin: auto"
                               v-on:click=""><img src="../assets/icon/save.png"/></md-button>
                  </md-card-actions>
                </md-card-content>
              </div>

          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>


<script>
import router from '../router';

export default {
  name: 'TeamsManager',

  data() {
    return {
      teams: 'GothamProtector',

      searchteams: null,
      createteams: null,
      disSearchTeam: false,
      disCreateTeam: false,

    };
  },

  methods: {
     doSearch() {
        searchteams = true;
        disCreateTeam = true;
     },
     doCreate() {
        createteams = true;
        disSearchTeam = true;
     },
     doRefresh() {
        searchteams = null;
        createteams = null;
        disSearchTeam = false;
        disCreateTeam = false;
     },
  },
};
</script>

<style>
  h1 {
    font-size: 13pt;
  }

  #team {
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
