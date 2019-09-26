<template>
  <footer>
    <div class="message">{{ copyrightMessage }}</div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      copyrightMessage: '',
    };
  },
  created() {
    this.copyrightMessage = 'Copyright Team_21 - 2019';
  },
};
</script>

<style scoped>
  .message {
    font-size: 16px;
  }
</style>
