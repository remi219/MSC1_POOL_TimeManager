import axios from 'axios'

const urlBase = 'http://localhost:3001/Workingtimes';

export default {
  getWorkingTimesByRangeAndUserId: function (range, user_id) {
    let data = {
      params: {
        start: range.start,
        end: range.end,
        id_user: user_id
      }
    };
    return axios.get(urlBase, data);
  },
  createWorkingtime: function (workingtime) {
    console.log(">>>> Service createWorkintime - workingtime = ", workingtime);
    let data = {
      id_user: workingtime.id_user,
      start: workingtime.start,
      end: workingtime.end
    };
    const url =  urlBase+'/'+workingtime.id_user;
    return axios.post(url, data);
  },
  updateWorkingtime: function (workingtime) {
    console.log(">>>> createWorkintime - workingtime = ", workingtime);
    let data = {
      id: workingtime.wt_id,
      start: workingtime.start,
      end: workingtime.end
    };
    const url =  urlBase+'/'+workingtime.wt_id;
    return axios.post(url, data);
  }
}
