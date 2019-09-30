import axios from 'axios'

const urlBase = 'http://54.198.162.120:3001/Workingtimes';

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
  getWorkingtimeById: function (workingtimeData) {
    console.log(">>>> Service createWorkintime - workingtime = ", workingtimeData);
    const url =  urlBase+'/'+workingtimeData.id_user+'/'+workingtimeData.id_wt;
    return axios.get(url);
  },
  createWorkingtime: function (workingtimeData) {
    console.log(">>>> Service createWorkintime - workingtime = ", workingtimeData);
    let data = {
      id_user: workingtimeData.id_user,
      start: workingtimeData.start,
      end: workingtimeData.end
    };
    const url =  urlBase+'/'+workingtimeData.id_user;
    return axios.post(url, data);
  },
  updateWorkingtime: function (workingtimeData) {
    console.log(">>>> createWorkintime - workingtime = ", workingtimeData);
    let data = {
      id_user: workingtimeData.user_id,
      start: workingtimeData.start,
      end: workingtimeData.end
    };
    const url =  urlBase+'/'+workingtimeData.wt_id;
    return axios.put(url, data);
  },
  deleteWorkingTime(wt_id) {
    const url =  urlBase+'/'+wt_id;
    return axios.delete(url);
  }
}
