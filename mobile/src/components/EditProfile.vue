<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>

        <!-- form for editing profile -->
        <div id="from">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-90"
                     style="background-color: #e9ecef">
              <md-card-header>
                <h1>Edit Profile</h1>
              </md-card-header>

              <md-card-content>
                <div class="md-layout-item">
                  <md-field>
                    <label>Only images</label>
                    <md-file v-model="single" accept="image/*" />
                  </md-field>
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
              <div class="form_buttons_area">
                <button class="form_button"
                        @click="doCancel">
                 <img src="../assets/icon/cancel.png"
                      class="form_button_image" />
                 CANCEL
                </button>
                <button class="form_button"
                        @click="doSave">
                  <img src="../assets/icon/save.png"
                       class="form_button_image" />
                  SAVE
                </button>
              </div>
            </md-card>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: 'EditProfile',
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        email: '',
        password: '12345',
      },
    };
  },

  methods: {
        doCancel() {
          router.push('/homeemployee');
        },
        doSave() {
          router.push('/homeemployee');
        },
     },
};
</script>

<style scoped>

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
