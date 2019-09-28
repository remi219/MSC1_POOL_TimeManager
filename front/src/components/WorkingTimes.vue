<template>
  <!-- eslint-disable -->
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <div class="md-layout md-alignment-center">
          <div class="months_selection_area">
            <label for="months_list" class="months_selection_label">Select a month : </label>
            <select id="months_list" class="months_selection_list" v-model="selected_month" @change="this.changeMonth">
              <option v-for="month in months" v-bind:key="months.id" :value="month">{{ month.label }}</option>
            </select>
          </div>
        </div>
        <div class="md-layout md-alignment-center">
          <div id="table" v-if="workingtimes.length > 0">
            <md-table md-card>
              <md-table-toolbar>
                <h2 class="md-title">Working Times for {{ selected_month.label }}</h2>
              </md-table-toolbar>
              <md-table-row style="text-align: center;">
                <md-table-head v-for="header in wt_headers">{{ header }}</md-table-head>
              </md-table-row>
              <md-table-row v-for="(wt, index) in workingtimes" v-bind:key="wt.id" :value="wt">
                <md-table-cell>{{ wt.id }}</md-table-cell>
                <md-table-cell>{{ wt.start }}</md-table-cell>
                <md-table-cell>{{ wt.end }}</md-table-cell>
                <md-table-cell><router-link class="button_edit" :to="{ name: 'WorkingTime', params: { id: wt.id } }" style="color: black!important;">Edit</router-link><button class="button_delete" @click="deleteWorkingTime(index)">Delete</button></md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          <div v-else>
            <div class="msg_no_results">{{ msgNoResults }}</div>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
    import wtService from '../services/WorkingtimeService';

    export default {
        name: 'WorkingTimes',
        data() {
            return {
                user: null,
                wt_headers: [
                    "ID", "START", "END", "EDIT / DELETE"
                ],
                workingtimes: [],
                msgNoResults: "",
                select_wt: null,
                selected_month: null,
                months: [
                    {id: 1, label: 'January'},
                    {id: 2, label: 'February'},
                    {id: 3, label: 'March'},
                    {id: 4, label: 'April'},
                    {id: 5, label: 'May'},
                    {id: 6, label: 'June'},
                    {id: 7, label: 'July'},
                    {id: 8, label: 'August'},
                    {id: 9, label: 'September'},
                    {id: 10, label: 'October'},
                    {id: 11, label: 'November'},
                    {id: 12, label: 'December'}
                ],
                date_start: null,
                date_end: null
            };
        },
        created() {
            if (localStorage.user) {
                this.user = JSON.parse(localStorage.user);
            }
            let today = new Date();
            console.log(">>>> workingtime onload - today = ", today);
            this.selected_month = this.months[today.getMonth()];
            console.log(">>>> wt onload - this.selected_month = ", this.selected_month);
            this.date_start = new Date(today.getFullYear(), today.getMonth(), 1);
            this.date_end = today;
            this.getWorkingTimes();
        },
        methods: {
            getWorkingTimes() {
                const range = {
                    start: this.date_start,
                    end: this.date_end
                };
                console.log(">>>> getWt range = ", range);
                wtService.getWorkingTimesByRangeAndUserId(range, this.user.id).then(response => {
                    console.log(">>>>> getWtByRangeAndUser - response = ", response);
                    this.workingtimes = [];
                    if (response.status === 200 && response.data !== "") {
                        let data = JSON.parse(JSON.stringify(response.data));
                        console.log(">>>> getWT data = ", this.workingtimes);
                        data.forEach(wt => this.workingtimes.push(wt));
                        console.log(">>>> getWT this.workingtimes = ", this.workingtimes);
                    } else if (response.status === 200 && response.data === "") {
                        this.msgNoResults = "No working times found for this month";
                    }
                }).catch(error => console.log(error));
            },
            changeMonth() {
                let newMonth = this.selected_month;
                let today = new Date();
                const lastday = [1,3,5,7,8,10,12].includes(newMonth.id ) ? 31 : 30;
                console.log(">>>> changeMonth - newMonth = ", newMonth);
                console.log(">>>> changeMonth - lastday = ", lastday);
                this.date_start = new Date(today.getFullYear(), newMonth.id - 1, 1);
                this.date_end = new Date(today.getFullYear(), newMonth.id - 1, lastday);
                console.log(">>>> changeMonth - date_start = ", this.date_start);
                console.log(">>>> changeMonth - date_end = ", this.date_end);
                this.getWorkingTimes();
            },
            deleteWorkingTime(index) {
                console.log(">>>> workingtime to delete : ", this.workingtimes[index]);
                wtService.deleteWorkingTime(this.workingtimes[index].id).then(response => {
                    console.log(">>>> deleteWt - response = ", response);
                    this.getWorkingTimes();
                }).catch(error => console.log(">>>>> deleteWt - error : ", error));
            }
        }
    };
</script>

<style scoped>
  h2 {
    font-style: italic;
    font-size: 22px;
  }
  .months_selection_area {
    font-size: 22px;
    margin: 20px;
    padding: 5px;
  }
  .months_selection_label {
    font-style: italic;
  }
  .months_selection_list {
    width: 200px!important;
    border-bottom: 2px solid #4c8bca;
    border-radius: 5px;
    padding: 3px 10px!important;
  }
  #table {
    font-size: 16px;
  }
  option {
    padding-top: 10px!important;
  }
  .md-table-cell-container {
    padding: 6px 32px 6px 24px;
    font-size: 14px;
  }
  th {

    font-size: 16px;
    text-align: center!important;
  }
  .md-table-head-container, .md-table-head-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
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
  .button_delete {
    background-color: #c62828;
    color: white;
    border: 1px solid darkred;
    border-radius: 8px;
    padding: 5px 15px;
    margin: 5px;
    font-size: 14px;
  }
  .msg_no_results {
    background-color: gainsboro;
    font-size: 16px!important;
    font-style: italic;
    color: #212121;
    text-align: center;
  }

</style>
