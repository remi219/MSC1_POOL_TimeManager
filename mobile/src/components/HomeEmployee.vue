<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>

        <!-- Profil of employee-->
        <div id="profil">
          <div class="md-layout md-alignment-center">
           <md-card class="md-layout-item md-size-90"
                    style="background-color: #e9ecef">
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
             <h1>Email:
             <br>{{ email }} </h1>
             <br>
             <br>
             <div class="form_buttons_area">
                <button class="form_button"
                        @click="doEdit">
                  <img src="../assets/icon/edit-2.png"
                       class="form_button_image" />
                  EDIT
                 </button>
                 <button class="form_button"
                         @click="doLogout">
                   <img src="../assets/icon/logout-2.png"
                        class="form_button_image" />
                   LOGOUT
                 </button>
             </div>
             <br>
             <br>
           </md-card>
          </div>
          <br>
          <br>

            <!-- welcome message display -->
            <div class="md-layout md-alignment-center">
              <md-card class="md-layout-item md-size-90"
                       style="background-color: #e9ecef">
                <md-card-header>
                  <h2>Welcom Back {{ firstname }}</h2>
                  <br>
                  <br>
                  <h2>Date: {{ currentDateTime | moment('MMMM Do, YYYY') }}</h2>
                  <h2>Hours: {{ currentDateTime | moment('hh:mm:ss a') }}</h2>
                </md-card-header>
              </md-card>
            </div>
          </div>
   </md-app-content>
  </md-app>
  </div>
</template>


<script>
import clockerService from '../services/ClockerService';
import router from '../router';

export default {
  name: 'HomeEmployee',

  data() {
    return {
      currentDateTime: Date.now(),
      currentActiveTime: Date.now(),
      timeOnStart: Date.now(),
      timeOnStop: Date.now(),

      firstname: 'Bruce',
      lastname: 'Wayne',
      email: 'bwayne@gotham.com',
      role: 'Employee',
    };
  },

  methods: {
      doLogout() {
        router.push('/logout');
      },
      doEdit() {
        router.push('/editprofile');
      },
   },
};
</script>

<style>
  h1 { font-weight: normal;
       font-size: 14pt;
       color: black;
  }

  #profil {
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
