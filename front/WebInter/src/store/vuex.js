import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    clockin: false,
    count: 0,
  },
  mutations: {
    clockIn(state) {
      state.clockin = true;
      state.count = +10;
    },
  },
});

export default {
  store,
};
