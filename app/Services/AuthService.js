import axios from 'axios';
import Config from '../Config';

const client = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

function login(email, password) {
  return client
    .post('/login', {
      username: email,
      password: password,
    })
    .then((response) => {
      return {ok: true, data: response.data};
    })
    .catch((error) => {
      return {ok: false, errors: error.response.data.error};
    });
}

export const AuthService = {
  login,
};
