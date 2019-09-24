import Vue from 'vue';
import Router from 'vue-router';
import Users from '../components/Users';
import WorkingTimes from '../components/WorkingTimes';
import Calendar from '../components/Calendar';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Clocker from '../components/Clocker';
import Logout from '../components/Logout';
import Settings from '../components/Settings';
import ChartManager from '../components/ChartManager';
import EditProfile from '../components/EditProfile';
import Home from '../components/Home';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
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
      path: '/logout',
      name: 'Logout',
      component: Logout,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/workingtimes',
      name: 'WorkingTimes',
      component: WorkingTimes,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/clocker',
      name: 'Clocker',
      component: Clocker,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '/chartmanager',
      name: 'ChartManager',
      component: ChartManager,
    },
    {
      path: '/editprofile',
      name: 'EditProfile',
      component: EditProfile,
    },

  ],
});
