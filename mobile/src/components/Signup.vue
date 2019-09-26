<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <!-- form for sign up -->
        <div id="from">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-90"
                     style="background-color: #e9ecef">
              <md-card-header>
                <h1>Sign up</h1>
              </md-card-header>
              <md-card-content>
                <div class="md-layout-item">
                  <md-avatar class="md-large">
                    <img src="../assets/avatar/avatar-1.jpg" alt="People">
                  </md-avatar>
                  <md-field>
                    <label>Fisrt Name</label>
                    <md-input autocomplete="given-name"
                              v-model="form.firstname" />
                  </md-field>
                  <md-field>
                    <label>Last Name</label>
                    <md-input autocomplete="given-name"
                              v-model="form.lastname" />
                  </md-field>
                  <md-field>
                    <label for="email">Email</label>
                    <md-input type="email"
                              name="email"
                              id="email"
                              autocomplete="email"
                              v-model="form.email" />
                  </md-field>
                  <md-field>
                    <label>Password</label>
                    <md-input v-model="form.password"
                              type="password" />
                  </md-field>
                  <md-field>
                    <label>Role</label>
                    <md-input v-model="form.role"
                              type="number" />
                  </md-field>
                </div>
              </md-card-content>
                <div class="form_buttons_area">
                  <button class="form_button" @click="doCancel"><img src="../assets/icon/cancel.png" class="form_button_image" />CANCEL</button>
                  <button class="form_button" @click="doSignup"><img src="../assets/icon/save.png" class="form_button_image" />SIGNUP</button>
                </div>
            </md-card>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import UsersService from '../services/UsersService';
import router from '../router';

export default {
  name: 'Signup',
  data() {
    return {
      form: {
        fistname: null,
        lastname: null,
        email: null,
        password: null,
        role: 3,
      },
      user: null,
    };
  },
  methods: {
    persist() {
      localStorage.user = JSON.stringify(this.user);
    },
    doCancel() {
      router.push('/login');
    },
    doSignup() {
      UsersService.createUser(this.form).then((response) => {
        if (response.status === 200 && response.data !== '') {
          this.user = response.data;
          alert("Account created, you 'll now be redirected to login page");
          setTimeout(() => {
            localStorage.clear();
            router.push('/login');
          }, 500);
        } else {
          console.log('Fail to create account : ', response);
          alert('Fail to create account. Please verify your data or try again later.');
        }
      });
    },
  },
};
</script>

<style>
  #from {
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
