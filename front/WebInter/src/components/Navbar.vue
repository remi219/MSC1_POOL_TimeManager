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
      links: [
        {
          id: 0,
          label: 'Home',
          page: '/UserEmployee',
        },
        {
          id: 1,
          label: 'Clocker',
          page: '/Clocker',
        },
        {
          id: 2,
          label: 'Workingtimes',
          page: '/Workingtimes',
        },
        {
          id: 3,
          label: 'Calendar',
          page: '/Calendar',
        },
        {
          id: 4,
          label: 'Graph',
          page: '/ChartManager',
        },
        {
          id: 5,
          label: 'Manager',
          page: '/UserManager',
        },
        {
          id: 6,
          label: 'Admin',
          page: '/UserAdministrator',
        },
      ],
    };
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
