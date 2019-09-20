<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <div id="clock">
           <h3> Date:  {{ new Date() | moment('Do MMMM YYYY') }} </h3>
           <br>
           <br>
          <h3>  Time: {{ new Date() | moment('hh:mm:ss a') }} </h3>
           <br>
          <md-card-actions>
            <md-button class="md-raised md-primary"
                       style="margin: auto"
                       v-on:click="$store.commit('changeClockIn')"
                       :disabled="$store.state.disClockIn">Clock In
            </md-button>
            <md-button class="md-raised md-primary"
                       style="margin: auto"
                       v-on:click="$store.commit('changeClockOut')"
                       :disabled="$store.state.disClockOut">Clock Out
            </md-button>
          </md-card-actions>
          <br>
          <div class="md-layout md-alignment-center">
            <md-card-content v-if="$store.state.clockIn">
                   <h1> Clock In:
                    <br>
                     Time : {{new Date() | moment('hh:mm:ss a')}} </h1>
            </md-card-content>
          <md-card-content v-if="$store.state.clockOut">
              <h1> Clock Out:
                <br>
                    Time : {{new Date() | moment('hh:mm:ss a')}} </h1>
          </md-card-content>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>

export default {
  name: 'ClockManager',
  data() {
    return {
      start: null,
      end: null,
      date: null,
    };
  },
};

</script>

<style>
  h3{ font-size:25pt; }
  h1{  font-size: 15pt;
       font-style: italic;
  }

  #clock {
    color: #2c3e50;
    margin-top: 100px;
    margin-left: 50px;
  }

</style>
