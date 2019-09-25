import axios from 'axios'

const urlBase = 'http://localhost:3001/Clocker';

export default {
  updateClock: function (clock) {
    let data = {
      clock: {
        status: clock.status,
        time: clock.time
      }
    };
    return axios.put(urlBase, data).catch(error => console.log(">>>>> error : ", error));
  }
}
