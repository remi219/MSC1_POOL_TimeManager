import axios from 'axios'

const URL = 'http://localhost:3001/Users';

export default {
  getAllUsers: function() {
    return axios.get(URL).then(response => {
      console.log(">>>>> response = ", response);
    }).catch(error => console.log(">>>>> error = ", error));
  }
}
