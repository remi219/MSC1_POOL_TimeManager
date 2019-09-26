<template>
  <div class="main_container">
    <nav>
      <img class="logogc" src="../assets/avatar/logogc.png" alt="Avatar">
      <div class="tm_title">Time Manager</div>
      <div class="links">
        <router-link class="items"
                     v-for="link in finalLinks"
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
      links: [],
    };
  },
  created() {
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
  },
  computed: {
    finalLinks() {
      return this.links;
    },
  },
};
</script>
<style>
  .main_container {
    background-color: gray;
    color: whitesmoke;
    height: 118px;
  }
  .logogc {
    position: fixed;
    left: 50px;

  }
  .tm_title {
    font-size: 30px;
    padding-top: 30px;
  }
  .links {
    padding-top: 40px;
  }
  .items {
    font-size: 18px;
    padding: 50px;
  }
</style>
