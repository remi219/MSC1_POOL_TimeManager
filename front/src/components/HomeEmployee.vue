<template>
    <div class="page-container">
        <md-app md-waterfall md-mode="fixed-last">
            <md-app-content>
                <div>
                    <div class="md-layout md-alignment-left">
                        <md-card class="md-layout-item md-size-30 md-small-size-100" style="background-color: #e9ecef">
                            <md-card-header>
                                <h2>{{ welcomeTitle }}</h2>
                            </md-card-header>

                            <div class="container_recent_activity">
                                <div>Recent activity:</div>
                                <div v-if="recentActivity.length > 0" class="block_list_activity">
                                    <ul class="list_activity">
                                        <li v-if="clockData.clockIsRunning" class="list_item_onduty">Your are currently on duty</li>
                                        <li v-for="item in recentActivity" class="list_item">{{ item }}</li>
                                    </ul>
                                </div>
                                <div v-else class="block_list_activity">
                                    <ul class="list_activity">
                                        <li v-if="clockData.clockIsRunning" class="list_item_onduty">Your are currently on duty</li>
                                    </ul>
                                    <div>{{ msgNoRecentActivity }}</div>
                                </div>
                            </div>
                        </md-card>

                        <md-card class="md-layout-item md-size-20 md-small-size-100" style="background-color: #e9ecef">
                            <div class="container_team_data">
                                <div>You are a member of the team {{ teamData.teamName }}.</div>
                                <div>Your manager is {{ teamData.teamManager }}.</div>
                                <div>There are {{ teamData.teamSize }} members in this team.</div>
                            </div>
                        </md-card>

                        <md-card class="md-layout-item md-size-40 md-small-size-100" style="background-color: #e9ecef">
                            <div class="container_chart_area">
                                <div>CHART AREA</div>
                                <div id="donutgraph" >
                                    <h1>Donut Chart</h1>
                                    <donut-chart
                                            id="donut"
                                            :data="[
                 { label: 'Days of work', value: 200 },
                 { label: 'Nights', value: 50 },
                 { label: 'Days', value: 150 },
                 ]"
                                            colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
                                            resize="true">
                                    </donut-chart>
                                </div>
                                <div id="bargraph" class="md-layout-item md-size-50 md-small-size-100 md-alignment-center "  >
                                    <h1>Barre Chart</h1>
                                    <br>
                                    <br>
                                    <bar-chart
                                            id="bar"
                                            :data='[
                  { month: "June", daysWork: 25, day: 15, night: 10 },
                  { month: "July", daysWork: 20, day: 15, night: 5 },
                  { month: "Aug", daysWork: 24, day: 10, night: 14 },
                  { month: "Sept", daysWork: 30, day: 23, night: 8 },
                 ]'
                                            xkey="month"
                                            ykeys='[ "daysWork", "day", "night" ]'
                                            bar-colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
                                            grid="true"
                                            grid-text-weight="bold"
                                            resize="true"
                                            labels='[ "DaysOfWork", "Days", "Nights" ]'>
                                    </bar-chart>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <h1> Line Chart</h1>
                                    <br>
                                    <br>

                                    <!-- Graph line -->
                                    <line-chart
                                            id="line"
                                            :data='[
                  { year: "2013", a: 10, b: 5},
                  { year: "2014", a: 40, b: 15},
                  { year: "2015", a: 20, b: 25},
                  { year: "2016", a: 30, b: 20},
                  ]'
                                            xkey="year"
                                            ykeys='[ "a", "b" ]'
                                            line-colors='[ "#FF6384", "#36A2EB" ]'
                                            grid="true"
                                            grid-text-weight="bold"
                                            resize="true">
                                    </line-chart>
                                </div>

                            </div>
                        </md-card>
                    </div>
                </div>
            </md-app-content>
        </md-app>
    </div>
</template>


<script>
    import wtService from '../services/WorkingtimeService';
    import Raphael from 'raphael/raphael';
    import { DonutChart, BarChart, LineChart } from 'vue-morris';

    global.Raphael = Raphael;

    export default {
        name: 'HomeEmployee',
        components: { DonutChart, BarChart, LineChart },
        data() {
            return {
                user: null,
                clockData: null,
                recentActivity: [],
                welcomeTitle: "Welcome",
                msgNoRecentActivity: "",
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
            this.getLastWorkingTime();
            this.getUserTeamData();
        },
        methods: {
            getLastWorkingTime() {
                let today = new Date();
                let oneWeekAgo = new Date(today.getDate() - 7);
                const range = {
                    start: oneWeekAgo,
                    end: today
                };
                wtService.getWorkingTimesByRangeAndUserId(range, this.user.id).then(response => {
                    if (response.status === 200 && response.data !== "") {
                        let data = JSON.parse(JSON.stringify(response.data));
                        data.forEach(wt => {
                            const wtString = "Working time recorded : "+wt.end;
                            this.recentActivity.push(wtString);
                        });
                    } else if (response.status === 200 && response.data === "") {
                        this.msgNoRecentActivity = "No recent activity since last week";
                    }
                }).catch(error => console.log(error));
            },
            getUserTeamData() {
                this.teamData = {
                    teamName: "SuperTeam",
                    teamManager: "Dani Pedrosa",
                    teamSize: 2
                }
            }
        }
    };
</script>

<style scoped>
    .container_recent_activity {
        padding: 15px;
    }
    .block_list_activity {
        background-color: gainsboro;
        border-radius: 15px;
    }
    .list_activity {
        font-size: 15px;
        color: #303030;
        padding: 10px;
        list-style-type: none;
    }
    .list_item, .list_item_onduty {
        padding: 5px;
        margin: 5px;
    }
    .list_item_onduty {
        background-color: #4caf50;
        border-radius: 15px;
    }
    .list_item {
        background-color: lightskyblue;
        border-radius: 15px;
    }
    .container_team_data {
        padding: 15px;

    }
    .container_chart_area {
        padding: 15px;
    }
</style>
