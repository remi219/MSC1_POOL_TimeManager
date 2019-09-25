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

    export default {
        name: "Home",
        data() {
            return {
                user: null,
                users: []
            }
        },
        created() {
            if (localStorage.user) {
                this.user = JSON.parse(localStorage.user);
            }
        },
        methods: {
            getUsers() {
                UsersService.getAllUsers().then(response => {
                    this.users = response.data;
                });
            },
        }
    }
</script>

<style scoped>

</style>
