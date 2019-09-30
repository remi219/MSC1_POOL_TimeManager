import axios from 'axios'
import env from '../env';

const urlBase = env.urlHost+'/Workingtimes';

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
    const url =  urlBase+'/'+workingtimeData.id_user+'/'+workingtimeData.id_wt;
    return axios.get(url);
  },
  createWorkingtime: function (workingtimeData) {
    let data = {
      id_user: workingtimeData.id_user,
      start: workingtimeData.start,
      end: workingtimeData.end
    };
    const url =  urlBase+'/'+workingtimeData.id_user;
    return axios.post(url, data);
  },
  updateWorkingtime: function (workingtimeData) {
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
