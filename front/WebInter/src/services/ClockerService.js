import axios from 'axios'

const urlBase = 'http://localhost:3001/Clocker';

export default {
  updateClock: function (clockData) {
    let data = {
      clock: {
        status: clockData.status,
        time: clockData.time,
        id_user: clockData.user
      }
    };
    return axios.put(urlBase, data).catch(error => console.log(">>>>> error : ", error));
  }
}
