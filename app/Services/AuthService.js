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

const login = ({email, password}) =>
  client.post('/login', {
    username: email,
    password: password,
  });

export const AuthService = {
  login,
};
