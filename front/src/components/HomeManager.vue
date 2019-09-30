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
                <div>You are the manager of the team {{ teamData.teamName }}.</div>
                <div v-if="teamData.teamSize > 1">There are {{ teamData.teamSize }} employees in this team.</div>
                <div v-else>There is only {{ teamData.teamSize }} employee in this team.</div>
                <div class="team_management_area">
                  <ul class="list_team_members">
                    <li v-for="user in teamData.users" class="team_member_item">{{ user.firstname }} {{ user.lastname }}<button class="button button_remove">Remove</button></li>
                  </ul>
                  <button class="button button_add_user">Add a user</button>
                  <button class="button button_delete">Delete team</button>
                  <button class="button button_create">Create a new team</button>
                </div>
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
  import wtService from '../services/WorkingtimeService';

  export default {
    name: 'HomeManager',
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
        // mock data
        this.teamData = {
          teamName: "Astronauts",
          users: [
            { firstname: "Youri", lastname: "Gagarine" },
            { firstname: "Neil", lastname: "Armstrong" },
            { firstname: "Buzz", lastname: "Aldrin" },
            { firstname: "Eugene", lastname: "Cernan" }
          ],
          teamSize: 0,
        };
        this.teamData.teamSize = this.teamData.users.length;
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
  .list_team_members {
    padding: 10px;
    margin: 10px;
    text-align: right;
    list-style-type: none;
    background-color: white;
    border-radius: 15px;
  }
  .team_member_item {
    background-color: #f8bbd0;
    border-radius: 10px;
    margin: 2px;
    padding: 2px;
  }
  .button {
    padding: 4px 6px;
    margin: 2px 7px;
    border: 1px solid black;
    border-radius: 6px;
  }
  .button_add_user {
    background-color: #4caf50;
    color: white;
  }
  .button_delete {
    background-color: firebrick;
    color: white;
  }
  .button_create {
    background-color: #1565c0;
    color: white;
  }
  .button_remove {
    background-color: firebrick;
    color: white;
    font-size: 12px!important;
    margin-left: 15px!important;
    margin-right: 0!important;
    padding: 2px 6px!important;
    border-radius: 10px!important;
  }
  .container_chart_area {
    padding: 15px;
  }
</style>
