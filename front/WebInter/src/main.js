// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import moment from 'moment';
import VueMoment from 'vue-moment';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import ClockPlugin from 'vue-reactive-clock';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMorris from 'vue-morris';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueMoment, {
  moment,
});

Vue.use(Vuex);
Vue.use(VueMaterial);
Vue.use(Vuetify);
Vue.use(moment);
Vue.use(ClockPlugin);
Vue.use(axios);
Vue.use(VueMorris);
Vue.use(VueAxios);

const store = new Vuex.Store({
  state: {
    startTime: false,
    endTime: false,
    timeClockIn: null,
    timeClockOut: null,
    disClockIn: false,
    disClockOut: true,
    clockIn: false,
    clockOut: false,


    user: '',
    searchuser: null,
    createuser: null,
    empolyee: null,
    disSearch: false,
    disCreate: false,

    searchteams: null,
    createteams: null,
    disSearchTeam: false,
    disCreateTeam: false,

  },
  mutations: {
    changeClockIn(state) {
      if (state.startTime == false) {
        state.startTime = true;
        state.clockIn = true;
        state.disClockIn = true;
        state.disClockOut = false;
        state.endTime = false;
      }
    },
    changeClockOut(state) {
      if (state.endTime == false) {
        state.endTime = true;
        state.clockOut = true;
        state.startTime = false;
        state.disClockOut = true;
        state.disClockIn = false;
      }
    },
    loginUser(state, email, password) {
      const URL = 'http://localhost:3000/:email+password';
      console.log(URL);
      axios.get(URL)
        .then((response) => {
          state.infoHistory = response.data.user;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          state.error = true;
        })
        .finally(() => state.error);
    },

    checkRole(state) {
      const URL = 'http://localhost:3000/:role';
      console.log(URL);
      axios.get(URL)
        .then((response) => {
          state.infoHistory = response.data.user.role;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          state.error = true;
        })
        .finally(() => state.error);
    },


    searchUser(state, id) {
      state.searchuser = true;
      state.empolyee = true;
      state.disCreate = true;
      const URL = 'http://localhost:3000/:id';
      console.log(URL);
      axios.get(URL)
        .then((response) => {
          state.infoHistory = response.data.user.id;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          state.error = true;
        })
        .finally(() => state.error);
    },
    createUser(state) {
      state.createuser = true;
      state.disSearch = true;
      const URL = 'http://localhost:3000/:id';
      console.log(URL);
      axios.post(URL, {
        id: this.id
      })
        .then(response => {
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    editUser(state, id) {
      state.createuser = true;
      state.disSearch = true;
      const URL = 'http://localhost:3000/:id';
      console.log(URL);
      axios.post(URL, {
        id: this.id
      })
        .then(response => {
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    refershUser(state) {
      state.searchuser = null;
      state.createuser = null;
      state.empolyee = null;
      state.disSearch = false;
      state.disCreate = false;
    },


    searchTeams(state) {
      state.searchteams = true;
      state.disCreateTeam = true;
    },
    createTeams(state) {
      state.createteams = true;
      state.disSearchTeam = true;
    },
    refershTeams(state) {
      state.searchteams = null;
      state.createteams = null;
      state.disSearchTeam = false;
      state.disCreateTeam = false;
    },
  },
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, VueCal },
  template: '<App/>',
});
