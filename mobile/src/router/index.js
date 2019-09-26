import Vue from 'vue';
import Router from 'vue-router';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Home from '../components/Home';
import HomeEmployee from '../components/HomeEmployee';
import HomeAdmin from '../components/HomeAdmin';
import HomeManager from '../components/HomeManager';
import GraphManager from '../components/GraphManager';
import EditProfile from '../components/EditProfile';
import WorkingTimes from '../components/WorkingTimes';
import Calendar from '../components/Calendar';
import Clocker from '../components/Clocker';
import UsersManager from '../components/UsersManager';
import TeamsManager from '../components/TeamsManager';

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
      path: '/homeemployee',
      name: 'HomeEmployee',
      component: HomeEmployee,
    },
    {
      path: '/homeadmin',
      name: 'HomeAdmin',
      component: HomeAdmin,
    },
    {
      path: '/homemanager',
      name: 'HomeManager',
      component: HomeManager,
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
      path: '/graphmanager',
      name: 'GraphManager',
      component: GraphManager,
    },
    {
      path: '/editprofile',
      name: 'EditProfile',
      component: EditProfile,
    },
    {
      path: '/usersmanager',
      name: 'UsersManager',
      component: UsersManager,
    },
    {
      path: '/teamsmanager',
      name: 'TeamsManager',
      component: TeamsManager,
    },
  ],
});
