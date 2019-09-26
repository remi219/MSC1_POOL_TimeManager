<template>
  <div class="main_container">
    <nav>
      <img class="logogc" src="../assets/avatar/logogc.png" alt="Avatar">
      <div class="tm_title">Time Manager</div>
      <div class="links">
        <router-link class="items"
                     v-for="link in links"
                     v-bind:key="link.id"
                     :to="`${link.page}`"
                     style="color: whitesmoke">{{ link.label }}</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      user: null,
       links: [
          {
            id: 0,
            label: 'Home',
            page: '/HomeEmployee',
          },
          {
            id: 1,
            label: 'Clocker',
            page: '/Clocker',
          },
          {
            id: 2,
            label: 'Workingtimes',
            page: '/WorkingTimes',
          },
          {
            id: 3,
            label: 'Calendar',
            page: '/Calendar',
          },
          {
            id: 4,
            label: 'Graph',
            page: '/GraphManager',
          },
       ],
    };
  },
 /* created() {
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
          this.links = [];
      }
      this.links = [
        { id: 0, label: 'Home', page: homepage },
        { id: 1, label: 'Clocker', page: '/Clocker' },
        { id: 2, label: 'Workingtimes', page: '/Workingtimes' },
        { id: 4, label: 'Settings', page: '/Settings' },
        { id: 5, label: 'Logout', page: '/Logout' },
      ];
    } else {
      this.links = [];
    }
  }, */
};
</script>
<style>
  .main_container {
    background-color: gray;
    color: whitesmoke;
    height: 60px;
  }
  .logogc {
    position: fixed;
    left: 20px;
    padding-top: 10px;;

  }
  .tm_title {
    font-size: 10px;
    padding-top: 10px;
  }
  .links {
    padding-top: 5px;
  }
  .items {
    font-size: 8px;
    padding: 20px;
  }
</style>
