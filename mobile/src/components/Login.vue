<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <!-- form for login - give email and password -->
        <div id="from">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-90"
                     style="background-color: #e9ecef">
              <md-card-header>
                <h1>Login</h1>
              </md-card-header>
              <md-card-content>
                <div class="md-layout-item">
                  <md-field>
                    <label>Email</label>
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

              <div class="form_buttons_area">
                <button class="form_button"
                        @click="doLogin">
                     <img src="../assets/icon/login.png"
                          class="form_button_image" />LOGIN</button>
                <button class="form_button"
                        @click="doSignup">
                     <img src="../assets/icon/sign-up.png"
                           class="form_button_image" />SIGNUP</button>
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
  name: 'Login',
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      user: null,
    };
  },
  methods: {
    persist() {
      console.log('>>>>> user = %o', this.user);
      localStorage.user = JSON.stringify(this.user);
    },
    doLogin() {
      UsersService.findUser(this.form).then((response) => {
        console.log('>>>> login response = ', response);
        if (response.status === 200 && response.data !== '') {
          this.user = response.data;
          this.persist();
          router.push('/home');
        } else {
          console.log('Fail to login : ', response);
          alert('No corresponding user found. Please verify your data or create an account');
        }
      });
    },
    doSignup() {
      router.push('/signup');
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
