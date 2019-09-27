<template>

  <div class="page-container">
    <div class="container_wt_edition">
      <h1>Working time edition</h1>
      <div class="table_container">
        <table class="table_wt_edit">
          <thead>
          <tr style="font-style: italic; font-size: 16px;">
            <td colspan="4">Initial working time:</td>
          </tr>
          <tr>
            <th colspan="2">START</th>
            <th colspan="2">END</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td colspan="2">{{ old_wt.start }}</td>
            <td colspan="2">{{ old_wt.end }}</td>
          </tr>
          <tr style="font-style: italic; font-size: 16px;">
            <td colspan="4">Updates:</td>
          </tr>
          <tr>
            <td><label for="input_new_start_date">New start date</label></td>
            <td><label for="input_new_start_time">New start time</label></td>
            <td><label for="input_new_end_date">New end date</label></td>
            <td><label for="input_new_end_time">New end time</label></td>
          </tr>
          <tr>
            <td><div class="input_elem"><input id="input_new_start_date" type="date" value="{{ new_wt.start_date }}" @change="getInputValues"></div></td>
            <td><div class="input_elem"><input id="input_new_start_time" type="time" value="{{ new_wt.start_time }}" @change="getInputValues"></div></td>
            <td><div class="input_elem"><input id="input_new_end_date" type="date" value="{{ new_wt.end_date }}" @change="getInputValues"></div></td>
            <td><div class="input_elem"><input id="input_new_end_time" type="time" value="{{ new_wt.end_time }}" @change="getInputValues"></div></td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td colspan="4">
              <button class="button_validate" @click="updateWorkingtime">Validate</button>
            </td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    import workingtimeService from '../services/WorkingtimeService';
    import router from '../router';

    export default {
        name: 'WorkingTime',
        data() {
            return {
                wt_id: 0,
                old_wt: null,
                new_wt: {
                    start_date: null,
                    start_time: null,
                    end_date: null,
                    end_time: null,
                }
            }
        },
        created() {
            this.wt_id = this.$route.params.id;
            this.loadWorkingTime();
        },
        methods: {
            getInputValues() {
                this.new_wt.start_date = document.getElementById('input_new_start_date').value;
                this.new_wt.start_time = document.getElementById('input_new_start_time').value;
                this.new_wt.end_date = document.getElementById('input_new_end_date').value;
                this.new_wt.end_time = document.getElementById('input_new_end_time').value;
            },
            setSDValue(value) {
                this.new_wt.start_date = value;
            },
            setSTValue(input) {
                this.new_wt.start_time = input.value;
            },
            setEDValue(input) {
                this.new_wt.end_date = input.value;
            },
            setETValue(input) {
                this.new_wt.end_time = input.value;
            },
            navigateBack() {
                alert("Working time successfully updated!\nYou'll now be redirected to previous page");
                setTimeout(() => {
                    router.go(-1);
                }, 500);
            },
            loadWorkingTime() {
                const workingtimeData = {
                    id_user: JSON.parse(localStorage.user).id,
                    id_wt: this.wt_id,
                };
                workingtimeService.getWorkingtimeById(workingtimeData).then(response => {
                    console.log(">>>> getWtById - response = ", response);
                    if (response.status === 200 && response.data !== "") {
                        this.old_wt = response.data;
                    }
                }).catch(error => {
                    console.log("getWtById - error = ", error);
                });
            },
            updateWorkingtime() {
                const start_date = this.new_wt.start_date.replace('/', '-')+' '+this.new_wt.start_time;
                const end_date = this.new_wt.end_date.replace('/', '-')+' '+this.new_wt.end_time;
                const newWorkingtimeData = {
                    wt_id: this.old_wt.id,
                    user_id: this.old_wt.id_user,
                    start: new Date(start_date),
                    end: new Date(end_date)
                };
                console.log(">>>> updateWt - newWorkingtimeData = ", newWorkingtimeData);
                workingtimeService.updateWorkingtime(newWorkingtimeData).then(response => {
                    console.log(">>>> updateWt - response = ", response);
                    if (response.status === 200 && response.data !== "") {
                        this.navigateBack();
                    }
                }).catch(error => {
                    console.log(">>>> updateWt - error = ", error);
                });
            }
        },
    };
</script>

<style scoped>
  html, body {
    width: 100%;
  }
  table {
    margin: 0 auto;
    width: 60%;
  }
  th, td {
    padding: 5px 15px;
    margin: 0 10px;
  }
  .container_wt_edition {
    text-align: center;
    vertical-align: center;
    padding: 20px;
    font-size: 14px;
  }
  .table_container {
    background-color: lavender;
    text-align: center!important;
    vertical-align: middle;
    border: 1px solid #212121;
    border-radius: 6px!important;
    margin: 10px 300px;
    padding: 10px 0;
  }
  .table_wt_edit {
    border-collapse: collapse;
  }
  .button_validate {
    width: 200px;
    height: 35px;
    background-color: forestgreen;
    border: 1px solid darkgreen;
    border-radius: 6px;
    color: white;
    font-weight: bold;
    font-style: italic;
    font-size: 16px;
    margin: 5px;
  }
  .input_elem {
    background-color: white!important;
    color: #757575;
    border-radius: 6px!important;
    margin: 0 10px!important;
    padding: 5px 0;
  }

</style>
