import Vuex from 'vuex';

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
    loginUser(state, user) {

    },
    checkRole(state) {

    },


    searchUser(state) {
      state.searchuser = true;
      state.empolyee = true;
      state.disCreate = true;
    },
    createUser(state) {
      state.createuser = true;
      state.disSearch = true;
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
export default {
  store,
};
