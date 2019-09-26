<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <div id="clock">
          <div class="date">{{ currentDateTime | moment('MMMM Do, YYYY') }}</div>
          <div class="time">{{ currentDateTime | moment('hh:mm:ss a') }}</div>
          <div>{{ onDutyMsg }}</div>
        </div>
        <div class="form_buttons_area">
          <div v-if="this.clockIsRunning">
            <button class="button_clockout" @click="doClockout">CLOCK OUT</button>
          </div>
          <div v-else>
            <button class="button_clockin" @click="doClockin">CLOCK IN</button>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
    import clockerService from '../services/ClockerService';
    import wtService from '../services/WorkingtimeService';

    export default {
        name: 'ClockManager',
        data: function () {
            return {
                clockIsRunning: false,
                currentDateTime: null,
                currentActiveTime: null,
                timeOnStart: null,
                timeOnStop: null,
                onDutyMsg: "-"
            };
        },
        created() {
            if (localStorage.clockData) {
                this.clockIsRunning = JSON.parse(localStorage.clockData).clockIsRunning;
                this.timeOnStart = JSON.parse(localStorage.clockData).timeOnStart;
                this.timeOnStop = JSON.parse(localStorage.clockData).timeOnStop;
            } else {
                this.timeOnStart = Date.now();
                this.timeOnStop = Date.now();
            }
            this.getUserActiveTime();
            setInterval(() => {
                this.currentDateTime = Date.now();
            }, 1);
        },
        methods: {
            persist() {
                const clockData = {
                    clockIsRunning: this.clockIsRunning,
                    timeOnStart: this.timeOnStart,
                    timeOnStop: this.timeOnStop
                };
                localStorage.clockData = JSON.stringify(clockData);
            },
            doClockin() {
                let clockData = {
                    status: true,
                    time: Date.now(),
                    user_id: JSON.parse(localStorage.user).id
                };
                clockerService.updateClock(clockData).then(response => {
                    console.log(">>>> updateClock - response = ", response);
                    if (response.status === 200 && response.data !== "") {
                        this.clockIsRunning = true;
                        this.timeOnStart = Date.now();
                        this.persist();
                        this.onDutyMsg = "Your working time is recording..."
                    }
                }).catch(error => console.log(">>>> clocckin error : ", error));
            },
            doClockout() {
                this.currentActiveTime = Date.now();
                let clockData = {
                    status: false,
                    time: Date.now(),
                    user_id: JSON.parse(localStorage.user).id
                };
                clockerService.updateClock(clockData).then(response => {
                    console.log(">>>> clockout updateClock - response = ", response);
                    this.clockIsRunning = false;
                    this.timeOnStop = Date.now();
                    this.persist();
                    this.onDutyMsg = "Last clock event: "+this.timeOnStop;
                }).catch(error => console.log("clockout error : ", error));
                const workingtime = {
                    id_user: JSON.parse(localStorage.user).id,
                    start: this.timeOnStart,
                    end: this.timeOnStop
                };
                wtService.createWorkingtime(workingtime).then(response => {
                    console.log("doClockin createWT - response = ", response)
                }).catch(error => console.log(error));
            },
            getUserActiveTime() {
                console.log(">>>> localStorage.user = ", localStorage.user);
                clockerService.getClock(JSON.parse(localStorage.user).id).then(response => {
                    let userActiveTime = Date.now();
                    if (response.status === 200 && response.data !== "") {
                        console.log("getUserActiveTime - response = ", response);
                        userActiveTime = response.data.time;
                    }
                    this.currentActiveTime = userActiveTime;
                    console.log(">>>> this.currentActiveTime = ", this.currentActiveTime);
                    this.onDutyMsg = this.clockIsRunning ? "Your working time is recording..." : "Last clock event: "+userActiveTime;
                }).catch(error => this.onDutyMsg = error);
            }
        }
    };

</script>

<style>
  .date {
    font-size: 28px;
    font-weight: bold;
    padding: 10px;
  }
  .time {
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
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
