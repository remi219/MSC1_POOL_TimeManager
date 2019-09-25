<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <!--<h3 class="current_date"> Date:  {{ new Date() | moment('Do MMMM YYYY') }} </h3>
        <h3 class="current_time">  Time: {{ new Date() | moment('hh:mm:ss a') }} </h3>-->
        <div id="clock">
          <div class="date">{{ currentDateTime | moment('MMMM Do, YYYY') }}</div>
          <div class="time">{{ currentDateTime | moment('hh:mm:ss a') }}</div>
        </div>

        <div class="form_buttons_area">
          <div v-if="this.clockIsRunning">
            <div class="time">{{ currentActiveTime | moment('H:mm:ss') }}</div>
            <button class="button_clockout" @click="doClockout">CLOCK OUT</button>
          </div>
          <div v-else>
            <div>-</div>
            <button class="button_clockin" @click="doClockin">CLOCK IN</button>
          </div>
        </div>

      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import clockerService from '../services/ClockerService';

    export default {
        name: 'ClockManager',
        data: function () {
            return {
                clockIsRunning: false,
                currentDateTime: Date.now(),
                currentActiveTime: new Date().setHours(0, 0, 0, 0)
            };
        },
        created() {
            setInterval(() => {
                this.currentDateTime = Date.now();
            }, 1);
        },
        methods: {
            doClockin() {
                this.clockIsRunning = true;
                setInterval(() => {
                    this.currentActiveTime.setSeconds(this.currentActiveTime.getSeconds() + 1);
                }, 1);
                let clock = {
                    status: this.clockIsRunning,
                    time: this.currentActiveTime
                };
                clockerService.updateClock(clock).then(response => {
                    console.log(">>>> response = ", response);
                });
            },
            doClockout() {
                this.clockIsRunning = false;
                this.currentActiveTime.setHours(0, 0, 0, 0)
            }
        }
    };

</script>

<style>
  .date {
    font-size: 28px;
    font-weight: bold;
  }
  .time {
    font-size: 24px;
    font-weight: bold;
  }
  .button_clockin {
    padding: 10px 30px;
    border: 1px solid darkgreen;
    border-radius: 10px;
    background-color: forestgreen;
    color: azure!important;
    margin: 20px;
  }
  .button_clockout {
    padding: 10px 30px;
    border: 1px solid darkred;
    border-radius: 5px;
    background-color: firebrick;
    color: azure!important;
    margin: 20px;
  }


</style>
