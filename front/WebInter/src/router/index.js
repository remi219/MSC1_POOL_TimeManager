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
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/workingtimes',
      name: 'WorkingTimes',
      component: WorkingTimes,
    },
    {
      path: '/workingtime',
      name: 'WorkingTime',
      component: WorkingTime,
    },
    {
      path: '/clockmanager',
      name: 'ClockManager',
      component: ClockManager,
    },

  ],
});
