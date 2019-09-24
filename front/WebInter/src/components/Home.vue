<template>
  <div>
    <div>Home</div>

    <button @click="getUsers">REFRESH</button>

    <div>{{ users }}</div>

    <input type="text" name="email" v-model="form.email" />

    <input type="text" name="password" v-model="form.password" />

    <input type="number" name="role" v-model="form.role" />

    <button @click="createUser">CREATE</button>
  </div>
</template>

<script>
    import UsersService from '../services/UsersService';

    export default {
        name: "Home",
        data() {
            return {
                form: {
                    email: "",
                    password: "",
                    role: 3,
                },
                users: []
            }
        },
        methods: {
            getUsers() {
                UsersService.getAllUsers().then(response => {
                    this.users = response.data;
                });
            },
            createUser() {
                console.log(">>>> email = ", this.form.email);
                console.log(">>>> pwd = ", this.form.password);
                console.log(">>>> role = ", this.form.role);
                UsersService.createUser(this.form).then(response => {
                    console.log(">>>>> User created :\n", response.data);
                });
            }
        }
    }
</script>

<style scoped>

</style>
