<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>

        <!-- Profil of employee-->
        <div id="profil">
          <div class="md-layout md-alignment-left">
           <md-card class="md-layout-item md-size-30 md-small-size-100" style="background-color: #e9ecef">
          <md-card-header>
            <h2>{{ role }}</h2>
          </md-card-header>

             <md-avatar class="md-large">
               <img src="../assets/avatar/avatar-2.jpg" alt="People">
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
             <br>
           </md-card>

            <!-- welcome message display -->
            <div class="md-layout md-alignment-center">
              <md-card class="md-layout-item md-size-60 md-small-size-100" style="background-color: #e9ecef">
                <md-card-header>
                  <h2>Welcom Back {{ firstname }}</h2>
                  <br>
                  <br>
                  <h2>{{ new Date() | moment('Do MMMM YYYY - h:mm a')}}</h2>
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

export default {
  name: 'Users',

  data() {
    return {
      firstname: 'Bruce',
      lastname: 'Wayne',
      email: 'bwayne@gotham.com',
      role: 'Employee',
    };
  },
};
</script>

<style>
  h1 { font-weight: normal;
       font-size: 14pt;
       color: black;
  }

  #profil {
    margin-top: 120px;
  }
</style>
