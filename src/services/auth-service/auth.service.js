import axios from 'axios';
import {getUserToken} from "../token-service/token.service";

export const urls = {
  login: '/frontend/auth/login',
  logout: '/frontend/auth/logout',
  refresh: '/frontend/auth/refresh',
  me: '/frontend/auth/me'
};

export const authLogin = (username, password) => {
  const basicAuth = 'Basic ' + btoa(username + ':' + password);
  return axios.post(
    urls.login,
    null,
    {
      headers: {
        Authorization: basicAuth,
        doNotSendCsrfToken: true,
        doNotAddUserTokenAuthorization: true
      }
    }
  );
};

export const authLogout = () => {
  return axios.delete(urls.logout, {
    headers: {
      doNotRefreshToken: true,
      doNotSendCsrfToken: true
    }
  });
};

export const authRefresh = () => {
  const userToken = getUserToken();
  return axios.get(urls.refresh, {
    headers: {
      'Authorization': `Bearer ${userToken}`,
      'X-CSRF-TOKEN': userToken
    }
  });
};

export const authMe = () => {
  return axios.get(urls.me);
};
