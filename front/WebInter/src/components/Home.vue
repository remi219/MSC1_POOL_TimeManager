<template>
<div>
  <div>HOME</div>
  <button @click="getUsers">REFRESH</button>
  <div>{{ users }}</div>
</div>
</template>

<script>
    import UsersService from '../services/UsersService';
    export default {
        name: "Home",
        data() {
            return {
                users: []
            }
        },
        methods: {
            getUsers() {
                this.users = UsersService.getAllUsers();
            }
        }
    }
</script>

<style scoped>

</style>
