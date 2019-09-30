<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">

      <md-app-content>
        <div id="from">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-30 md-small-size-100" style="background-color: #e9ecef">
              <md-card-header>
                <h1>Settings</h1>
              </md-card-header>
              <md-card-content>
                <div class="md-layout-item">
                  <router-link style="font-size: 14px;" :to="{ name: 'EditProfile', params: { id: this.currentUser.id } }">Edit your profile</router-link>
                </div>
                <div class="md-layout-item">
                  <router-link style="font-size: 14px;" :to="{ path: 'Settings' }" disabled="true">Customize appearance</router-link>
                </div>
              </md-card-content>
            </md-card>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'Settings',
    data() {
      return {
      };
    },
    created() {
      if (localStorage.user) {
        this.currentUser = JSON.parse(localStorage.user);
      }
    },
  };
</script>

<style scoped>

</style>
