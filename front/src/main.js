import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import moment from 'moment';
import VueMoment from 'vue-moment';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;

Vue.use(VueMoment, {
  moment,
});
Vue.use(VueMaterial);
Vue.use(Vuetify);
Vue.use(moment);
Vue.use(axios);
Vue.use(VueAxios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
