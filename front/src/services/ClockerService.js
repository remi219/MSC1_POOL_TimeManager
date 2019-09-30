import axios from 'axios';

//const urlBase = 'http://localhost:3001/Clocker';
const urlBase = 'http://54.198.162.120:3001/Clocker';

export default {
  createClock(user_id) {
    console.log('>>>> createClock - user_id = ', user_id);
    const data = {
      clocker: {
        id_user: user_id,
        status: false,
        time: Date.now(),
      },
    };
    return axios.post(urlBase, data).catch(error => console.log('>>>>> error : ', error));
  },
  getClock(user_id) {
    const url = `${urlBase}/${user_id}`;
    return axios.get(url).catch(error => console.log('>>>>> error : ', error));
  },
  updateClock(clockData) {
    console.log('>>>>> updateclock - clcokData = ', clockData);
    const data = {
      clocker: {
        id_user: clockData.user_id,
        status: clockData.status,
        time: clockData.time,
      },
    };
    const url = `${urlBase}/${clockData.user_id}`;
    return axios.put(url, data).catch(error => console.log('>>>>> error : ', error));
  },
};
