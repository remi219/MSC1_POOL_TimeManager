<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">

      <md-app-content>
        <div class="md-layout-item md-alignment-center">
          <div id="team" >

            <!-- Panel search or create team -->
            <div class="md-layout md-alignment-center">
              <md-card class="md-layout-item md-size-80 md-small-size-100"
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
                <md-card-actions>
                  <md-button class="md-raised md-primary"
                             style="margin: auto"
                             v-on:click="$store.commit('searchTeams')"
                             :disabled="$store.state.disSearchTeam">Search</md-button>
                  <md-button class="md-raised md-primary"
                             style="margin: auto"
                             v-on:click="$store.commit('createTeams')"
                             :disabled="$store.state.disCreateTeam">Create</md-button>
                </md-card-actions>
                <br>
                <md-card-action>
                  <md-button class="md-icon-button"
                             style="margin: auto"
                             v-on:click="$store.commit('refershTeams')">
                    <img src="../assets/icon/refresh-1.png"/>
                  </md-button>
                  <br>
                  <br>
                </md-card-action>
              </md-card>
            </div>
            <br>
            <br>

              <!-- Create teams -->
              <div class="md-layout md-layout-item md-alignment-center">
                <md-card-content class="md-layout-item md-size-80 md-small-size-100"
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
                  </div>

                  <div class="md-layout md-gutter">
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
                  </div>

                  <div class="md-layout md-gutter">
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
                <md-card-content class="md-layout-item md-size-80 md-small-size-100"
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
                    <md-button class="md-raised md-primary"
                               style="margin: auto"
                               v-on:click=""><router-link style="color: #FFFF;" :to="{ path: '' }">Edit</router-link></md-button>
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

export default {
  name: 'TeamsManager',

  data() {
    return {
      teams: 'GothamProtector',

      form: {
        teamsname: '',
      },

    };
  },
};
</script>

<style>
  h1 {
    font-size: 13pt;
  }

  #team {
    margin-top: 70px;
  }
</style>
