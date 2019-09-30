<template>
  <!-- eslint-disable -->

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <!-- form for sign up -->
        <div id="from">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-30 md-small-size-100" style="background-color: #e9ecef">
              <md-card-header>
                <h1>Sign up</h1>
              </md-card-header>
              <md-card-content>
                <div class="md-layout-item">
                  <md-avatar class="md-large">
                    <img src="../assets/avatar/avatar-1.jpg" alt="People">
                  </md-avatar>
                  <md-field>
                    <label>First Name</label>
                    <md-input autocomplete="given-name"
                              v-model="form.firstname" />
                  </md-field>
                  <md-field>
                    <label>Last Name</label>
                    <md-input autocomplete="given-name"
                              v-model="form.lastname" />
                  </md-field>
                  <md-field>
                    <label for="e_mail">Email</label>
                    <md-input type="email"
                              name="e_mail"
                              id="e_mail"
                              autocomplete="email"
                              v-model="form.email" />
                  </md-field>
                  <md-field>
                    <label>Password</label>
                    <md-input v-model="form.password"
                              type="password" />
                  </md-field>
                  <md-field v-if="user.id_role === 1">
                    <label>Role</label>
                    <md-input v-model="form.role"
                              type="number" />
                  </md-field>
                </div>
              </md-card-content>
              <div class="form_buttons_area">
                <button class="form_button" @click="doCancel"><img src="../assets/icon/cancel.png" class="form_button_image" />CANCEL</button>
                <button class="form_button" @click="doValidate"><img src="../assets/icon/save.png" class="form_button_image" />VALIDATE</button>
              </div>
            </md-card>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import usersService from '../services/UsersService';
  import router from '../router';

  export default {
    name: 'EditProfile',
    data() {
      return {
        user: null,
        userToEdit: null,
        userToEditId: 0,
        form: {
          firstname: null,
          lastname: null,
          email: null,
          password: null,
          role: 3,
        },
      };
    },
    created() {
      if (localStorage.user) {
        this.user = JSON.parse(localStorage.user);
      }
      this.userToEditId = this.$route.params.id;
      console.log("created - userIdtoedit = ", this.userToEditId);
      this.getUserToEditInfo(this.userToEditId);
    },
    methods: {
      getUserToEditInfo(userToEditId) {
        usersService.getOneById(userToEditId).then(response => {
          console.log(">>>> getUSerToEditInfo - response = ", response);
          if (response.status === 200 && response.data !== "") {
            this.userToEdit = response.data;
            this.form.firstname = this.userToEdit.firstname;
            this.form.lastname = this.userToEdit.lastname;
            this.form.email = this.userToEdit.email;
            this.form.password = this.userToEdit.password;
            this.form.role = this.userToEdit.id_role;
          }
        }).catch(error => {
          console.log("getUserToEditInfo - error : ", error);
        });
      },
      doCancel() {
        router.push('/Home');
      },
      doValidate() {
        usersService.updateUser(this.form, this.userToEditId).then(response => {
          console.log(">>>> doValidate - response = ", response);
          if (response.status === 200 && response.data !== "") {
            alert("User successfully updated\nYou'll now be redirect to your home page");
            router.push('/Home');
          }
        }).catch(error => {
          console.log(">>>> updateUser - error : ", error);
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
    padding: 5px 20px;
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
