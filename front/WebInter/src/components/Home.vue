<template>
  <div>
    <div>Home</div>

    <div>Active user:</div>
    <div v-if="this.user">User connected : {{ user.email }}</div>
    <div v-else>No user connected</div>

    <div>users list:</div>
    <div>{{ users }}</div>
    <button @click="getUsers">REFRESH</button>
  </div>
</template>

<script>
import UsersService from '../services/UsersService';
import router from '../router';

export default {
  name: 'Home',
  data() {
    return {
      user: null,
      users: [],
    };
  },
  created() {
    if (localStorage) {
      if (!localStorage.getItem('firstLoad')) {
        localStorage.firstLoad = true;
        window.location.reload();
      } else {
        localStorage.removeItem('firstLoad');
      }
    }
    if (localStorage.user) {
      this.user = JSON.parse(localStorage.user);
      let homepage = '';
      switch (this.user.id_role) {
        case 1:
          homepage = '/HomeAdmin';
          break;
        case 2:
          homepage = '/HomeManager';
          break;
        case 3:
          homepage = '/HomeEmployee';
          break;
        default:
          homepage = '/Home';
      }
      router.push(homepage);
    }
  },
  methods: {
    getUsers() {
      UsersService.getAllUsers().then((response) => {
        this.users = response.data;
      });
    },
  },
};
</script>

<style scoped>

</style>
