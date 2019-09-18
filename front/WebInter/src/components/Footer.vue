<template>
  <footer>
    <p>Copyright 2017 {{ title }}</p>
  </footer>
</template>

<script>
  export default {
    name: "footer",
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        title: "Team_21"
      }
    }
  }
</script>

<style scoped>

</style>
