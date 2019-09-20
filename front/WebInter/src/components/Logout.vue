<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>

        <!--logout message display -->
        <div id="soon">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-30 md-small-size-100"
                     style="background-color: #e9ecef">

              <md-card-header>
                <h2> See you soon! </h2>
              </md-card-header>
              <br>

              <md-button class="md-icon-button"
                         style="margin: auto">
                <router-link style="color: #FFFF;"
                             :to="{ path: '/' }"><img src ="../assets/icon/home.png"/>
                </router-link>
              </md-button>

              <md-card-content>
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
  name: 'Logout',
};
</script>

<style scoped>
  h2 {
    font-size: 14pt;
    font-style: italic;
  }

  #soon {
    margin-top: 120px;
  }
</style>
