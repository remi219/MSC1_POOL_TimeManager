import axios from 'axios';
import env from '../env';

const urlBase = env.urlHost+'/Users';

export default {
  getAllUsers() {
    return axios.get(urlBase).catch(error => console.log('>>>>> error : ', error));
  },
  getOneById(id_user) {
    const url = `${urlBase}/${id_user}`;
    return axios.get(url).catch(error => console.log('>>>>> error : ', error));
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
  updateUser(form, id_user) {
    const data = {
      user: {
        id: id_user,
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        password: form.password,
        id_role: form.role,
      }
    };
    const url = `${urlBase}/${id_user}`;
    return axios.put(url, data).catch(error => console.log('>>>> error : ', error));
  },
  deleteUser(id_user) {
    const url = `${urlBase}/${id_user}`;
    return axios.delete(url).catch(error => console.log('>>>> error : ', error));
  }
};
