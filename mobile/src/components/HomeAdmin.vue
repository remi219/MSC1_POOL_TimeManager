<template>
    <div class="page-container">
        <md-app md-waterfall md-mode="fixed-last">
            <md-app-content>
                <div>
                    <div class="md-layout md-alignment-left">
                        <md-card class="md-layout-item md-size-40 md-small-size-100" style="background-color: #e9ecef">
                            <md-card-header>
                                <h2>{{ welcomeTitle }}</h2>
                            </md-card-header>
                            <div class="container_users_management">
                                <div style="margin-bottom: 15px;">Users ({{ usersList.length }}):</div>
                                <div v-if="usersList.length > 0" class="block_list_users">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>E-mail</th>
                                            <th>Role</th>
                                            <th>EDIT/DELETE</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="user in usersList">
                                            <td>{{ user.id }}</td>
                                            <td>{{ user.firstname }}</td>
                                            <td>{{ user.lastname }}</td>
                                            <td>{{ user.email }}</td>
                                            <td v-if="user.id_role === 1">Administrator</td>
                                            <td v-else-if="user.id_role === 2">Manager</td>
                                            <td v-else>Employee</td>
                                            <td><button class="button_edit">Edit</button><button class="button_delete">Delete</button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div v-else class="block_list_activity">
                                    <div>{{ msgNoUser }}</div>
                                </div>
                            </div>
                        </md-card>

                        <md-card class="md-layout-item md-size-20 md-small-size-100" style="background-color: #e9ecef">
                            <div class="container_teams_management">
                                <button class="button button_create">Create a team</button>
                                <button class="button button_delete">Delete a team</button>
                            </div>
                        </md-card>

                        <md-card class="md-layout-item md-size-40 md-small-size-100" style="background-color: #e9ecef">
                            <div class="container_chart_area">
                                <div>CHART AREA</div>
                            </div>
                        </md-card>
                    </div>
                </div>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    import userService from '../services/UsersService';

    export default {
        name: 'HomeManager',
        data() {
            return {
                user: null,
                clockData: null,
                usersList: [],
                welcomeTitle: "Welcome",
                msgNoUser: "",
                teamData: null
            };
        },
        created() {
            if (localStorage.user) {
                this.user = JSON.parse(localStorage.user);
                this.welcomeTitle = "Welcome "+(this.user.firstname ? this.user.firstname : "");
            }
            if (localStorage.clockData) {
                this.clockData = JSON.parse(localStorage.clockData);
            } else {
                const clockDatas = {
                    clockIsRunning: false,
                    timeOnStart: null,
                    timeOnStop: null
                };
                localStorage.clockData = JSON.stringify(clockDatas);
                this.clockData = clockDatas;
            }
            this.getUsersList();
        },
        methods: {
            getUsersList() {
                userService.getAllUsers().then(response => {
                    if (response.status === 200 && response.data !== "") {
                        let data = JSON.parse(JSON.stringify(response.data));
                        data.forEach(user => {
                            this.usersList.push(user);
                        });
                    } else {
                        this.msgNoUser = "No user found";
                    }
                }).catch(error => {
                    console.log("getUsersList - error : ", error);
                })
            },
        }
    };
</script>

<style scoped>
    .container_users_management {
        padding: 15px;
    }
    .block_list_users {
        background-color: gainsboro;
        border-radius: 15px;
        padding: 5px 15px;
    }
    .button_edit {
        background-color: #ff9800;
        color: #212121;
        border: 1px solid #212121;
        border-radius: 8px;
        padding: 5px 15px;
        margin: 5px;
        font-size: 14px;
    }
    .button_create {
        background-color: #1565c0;
        color: white;
        border: 1px solid black;
        border-radius: 8px;
        padding: 5px 15px;
        margin: 5px;
        font-size: 14px;
    }
    .button_delete {
        background-color: #c62828;
        color: white;
        border: 1px solid black;
        border-radius: 8px;
        padding: 5px 15px;
        margin: 5px;
        margin-right: 2px!important;
        font-size: 14px;
    }
    .container_chart_area {
        padding: 15px;
    }
</style>
