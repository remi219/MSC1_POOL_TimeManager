<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <!-- form for sign up -->
        <div id="from">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-30 md-small-size-100"
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
                <div class="form_buttons_area">
                  <button class="form_button" @click="doCancel"><img src="../assets/icon/cancel.png" class="form_button_image" />CANCEL</button>
                  <button class="form_button" @click="doSignup"><img src="../assets/icon/save.png" class="form_button_image" />SIGNUP</button>
                </div>
              </md-card-actions>
            </md-card>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
    import UsersService from '../services/UsersService';
    import router from '../router'

    export default {
        name: 'Signup',
        data() {
            return {
                form: {
                    fistname: null,
                    lastname: null,
                    email: null,
                    password: null,
                    role: 3
                },
                user: null
            };
        },
        methods: {
            doCancel() {
                router.push("/login");
            },
            doSignup() {
                console.log(">>>> form = ", this.form);
                UsersService.createUser(this.form).then(response => {
                    console.log(">>>>>> response = ", response);
                    if (response.status === 200) {
                        this.user = response.data;
                        // remplir local storage avec les infos du users
                        router.push("/home");
                    } else {
                        console.log("Fail to create account : ", response);
                    }
                });
            }
        }
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
