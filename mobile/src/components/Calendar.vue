<template>
  <!-- eslint-disable -->
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">

      <md-app-content>

        <!-- form for making appointements -->
        <div id="datepicker">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-80"
                     style="background-color: #e9ecef">

              <md-card-header>
                <h1>Making appointments</h1>
              </md-card-header>

              <md-card-content>
                <md-datepicker class="md-layout-item md-size-30 md-small-size-100" v-model="selectedDate" md-immediately />
                <md-field>
                  <label>Initial Value</label>
                  <md-input class="md-layout-item md-size-30 md-small-size-100" v-model="initial"></md-input>
                </md-field>
                <br>
              </md-card-content>

              <div class="form_buttons_area">
                  <button class="form_button"
                          @click="doSee">
                     <img src="../assets/icon/see.png"
                          class="form_button_image" />
                     SEE
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
          <br>

          <!-- List of appointements -->
            <div class="md-layout md-layout-item md-alignment-center">
              <md-card-content class="md-layout-item md-size-90"
                               style="background-color: #e9ecef"
                               v-if="$store.state.see">
                <md-card-header>
                  <h1>Appointements:</h1>
                </md-card-header>

                <md-list>
                  <md-list-item>
                    <md-icon><img src="../assets/icon/appoint.png"/></md-icon>
                    <span class="md-list-item-text">Date: {{ date }}
                    <br>Reason: {{ reason }}</span>
                  </md-list-item>
                </md-list>
              </md-card-content>
            </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>

export default {
  name: 'Calendar',
  data() {
    return {
      selectedDate: new Date('2019/09/23'),
      initial: 'Reason',
      date: '2019-09-26',
      reason: 'Time Manager',
    };
  },
};
</script>

<style>
  #datepicker{
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
