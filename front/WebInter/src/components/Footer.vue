<template>
  <footer>
    <p>Copyright 2018 {{ title }}</p>
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

      }
    }
  }
</script>

<style scoped>

</style>
