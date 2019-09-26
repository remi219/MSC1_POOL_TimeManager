<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <div>
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-30 md-small-size-100 bye_card">
              <md-card-header>
                <h2>{{ message }}</h2>
              </md-card-header>
            </md-card>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: 'Logout',
  data() {
    return {
      message: '',
    };
  },
  created() {
    this.message = 'See you soon';
    setTimeout(() => {
      localStorage.clear();
      router.push('/login');
    }, 2000);
  },
};
</script>

<style scoped>
  h2 {
    font-size: 14pt;
    font-style: italic;
  }
  .bye_card {
    background-color: #e9ecef;
  }
</style>
