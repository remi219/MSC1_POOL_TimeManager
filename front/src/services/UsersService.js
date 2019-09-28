import axios from 'axios';

const urlBase = 'http://localhost:3001/Users';

export default {
  getAllUsers() {
    return axios.get(urlBase).catch(error => console.log('>>>>> error : ', error));
  },
  createUser(form) {
    let data = {
      user: {
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        password: form.password,
        id_role: form.role,
      },
    };
    data = data.user;
    return axios.post(urlBase, data).catch(error => console.log('>>>>> error : ', error));
  },
  findUser(form) {
    const data = {
      params: {
        email: form.email,
        password: form.password,
      },
    };
    console.log('>>>>> data = ', data);
    const url = `${urlBase}/login`;
    return axios.get(url, data).catch(error => console.log('>>>> error : ', error));
  },
};
