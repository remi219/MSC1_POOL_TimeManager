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
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
