import Vue from 'vue';
import Router from 'vue-router';
import Users from '../components/Users';
import WorkingTimes from '../components/WorkingTimes';
import WorkingTime from '../components/WorkingTime';
import Login from '../components/Login';
import Connection from '../components/Connection';
import ClockManager from '../components/ClockManager';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Connection',
      component: Connection,
    },
    {
      path: '/workingtimes',
      name: 'WorkingTimes',
      component: WorkingTimes,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/workingtime',
      name: 'WorkingTime',
      component: WorkingTime,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/clockmanager',
      name: 'ClockManager',
      component: ClockManager,
    },

  ],
});
