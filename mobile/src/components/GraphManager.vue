<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <div class="md-layout-item md-alignment-center">
          <md-card class="md-layout-item md-size-95">
          <!-- Graph donuts - give days and nights wof works -->
          <h1>Donut Chart</h1>
          <br>
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
        <br>
        <br>
          <br>
          <br>

          <!-- Graph bar give days and nights of works by months -->
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
          </md-card>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Raphael from 'raphael/raphael';
import { DonutChart, BarChart, LineChart } from 'vue-morris';

global.Raphael = Raphael;

export default {

  name: 'ChartManager',
  components: { DonutChart, BarChart, LineChart },

  data() {
    return {


    };
  },
};

</script>

<style scoped>
#donutgraph {
  margin-top: 90px;
}
</style>
