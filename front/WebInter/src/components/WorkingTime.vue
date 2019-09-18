<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary" style="background-color: #4682B4">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">Time Manager</span>
          </div>
          <md-card-media>
            <img src="./assets/logogc.png" alt="Avatar">
          </md-card-media>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-transparent" >
            <md-tab  id="tab-home" md-label="Profile" to='Users'></md-tab>
            <md-tab id="tab-pages" md-label="WorkingTime" to='WorkingTime'></md-tab>
            <md-tab id="tab-posts" md-label="ClockManager" to='ClockManager'></md-tab>
            <md-tab id="tab-favorites" md-label="WorkingTimes" to='WorkingTimes'></md-tab>
            <md-tab id="tab-other" md-label="ChartManager" to='ChartManager'></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>
    </md-app>
  </div>
</template>

<script>

export default {
  name: 'WorkingTime',
  component: 'Connection',
  data: () => ({
    selectedEvent: {},
    showDialog: false,
    events: [
      {
        start: '2018-11-20 14:00',
        end: '2018-11-20 18:00',
        title: 'Need to go shopping',
        icon: 'shopping_cart', // Custom attribute.
        content: 'Click to see my shopping list',
        contentFull: 'My shopping list is rather long:<br><ul><li>Avocadoes</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.
        class: 'leisure',
      },
      {
        start: '2018-11-22 10:00',
        end: '2018-11-22 15:00',
        title: 'Golf with John',
        icon: 'golf_course', // Custom attribute.
        content: 'Do I need to tell how many holes?',
        contentFull: 'Okay.<br>It will be a 18 hole golf course.', // Custom attribute.
        class: 'sport',
      },
    ],
  }),
  methods: {
    onEventClick(event, e) {
      this.selectedEvent = event;
      this.showDialog = true;

      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation();
    },
  },
};
</script>

<style>
  .vuecal__event {cursor: pointer;}

  .vuecal__event-title {
    font-size: 1.2em;
    font-weight: bold;
    margin: 4px 0 8px;
  }

  .vuecal__event-time {
    display: inline-block;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .vuecal__event-content {
    font-style: italic;
  }
</style>
