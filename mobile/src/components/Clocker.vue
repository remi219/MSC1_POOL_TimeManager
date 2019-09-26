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

export default {
  name: 'ClockManager',
  data() {
    return {
      clockIsRunning: false,
      currentDateTime: Date.now(),
      currentActiveTime: Date.now(),
      timeOnStart: Date.now(),
      timeOnStop: Date.now(),
      onDutyMsg: '-',
    };
  },
  created() {
    this.getUserActiveTime();
    if (localStorage.clockIsRunning) {
      this.clockIsRunning = localStorage.clockIsRunning;
    }
    setInterval(() => {
      this.currentDateTime = Date.now();
    }, 1);
  },
  methods: {
    persist() {
      console.log('>>>>> persist - clockIsRunning = ', this.clockIsRunning);
      localStorage.clockIsRunning = this.clockIsRunning;
    },
    doClockin() {
      const clockData = {
        status: true,
        time: Date.now(),
        user_id: JSON.parse(localStorage.user).id,
      };
      clockerService.updateClock(clockData).then((response) => {
        console.log('>>>> updateClock - response = ', response);
        if (response.status === 200 && response.data !== '') {
          this.clockIsRunning = true;
          this.persist();
          this.timeOnStart = Date.now();
          this.onDutyMsg = 'Your working time is recording...';
        } else {
          alert('Unable to clock you in');
        }
      }).catch(error => console.log('>>>> clocckin error : ', error));
    },
    doClockout() {
      this.currentActiveTime = Date.now();
      const clockData = {
        status: false,
        time: Date.now(),
        user_id: JSON.parse(localStorage.user).id,
      };
      clockerService.updateClock(clockData).then((response) => {
        console.log('>>>> response = ', response);
        this.clockIsRunning = false;
        this.persist();
        this.timeOnStop = Date.now();
        this.onDutyMsg = `Last clock event: ${this.timeOnStop}`;
      }).catch(error => console.log('clockout error : ', error));
    },
    getUserActiveTime() {
      console.log('>>>> localStorage.user = ', localStorage.user);
      clockerService.getClock(JSON.parse(localStorage.user).id).then((response) => {
        let userActiveTime = Date.now();
        if (response.status === 200 && response.data !== '') {
          console.log('getUserActiveTime - response = ', response);
          userActiveTime = response.data.time;
        }
        this.currentActiveTime = userActiveTime;
        console.log('>>>> this.currentActiveTime = ', this.currentActiveTime);
        this.onDutyMsg = `Last clock event: ${userActiveTime}`;
        // eslint-disable-next-line no-return-assign
      }).catch(error => this.onDutyMsg = error);
    },
  },
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
