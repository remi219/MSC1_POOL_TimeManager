import axios from 'axios'

const urlBase = 'http://localhost:3001/Clocker';

export default {
  createClock: function (user_id) {
    console.log(">>>> createClock - user_id = ", user_id);
    let data = {
      clocker: {
        id_user: user_id,
        status: false,
        time: Date.now()
      }
    };
    return axios.post(urlBase, data).catch(error => console.log(">>>>> error : ", error));
  },
  getClock: function (user_id) {
    const url = urlBase+'/'+user_id;
    return axios.get(url).catch(error => console.log(">>>>> error : ", error));
  },
  updateClock: function (clockData) {
    console.log(">>>>> updateclock - clcokData = ", clockData);
    let data = {
      clocker: {
        id_user: clockData.user_id,
        status: clockData.status,
        time: clockData.time
      }
    };
    const url = urlBase+'/'+clockData.user_id;
    return axios.put(url, data).catch(error => console.log(">>>>> error : ", error));
  }
}
