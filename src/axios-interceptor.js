import {navigate} from "@reach/router";
import axios from "axios";

import {routes} from "./services/navigation/navigation.service.routes";

import {
  cleanupToken,
  hasTokenExpired,
  getUserToken,
  getTokenRefreshPromise
} from "./services/token-service/token.service";
import {encrypt} from "./services/encryption-service/encryption.service";

/**
 * Cleans up data
 */
export const cleanup = () => {
  cleanupToken();
  localStorage.setItem('previousRoute', window.location.pathname);
  navigate(routes.root, {replace: true});
};

/**
 * Returns object updated with CSRF token header
 *
 * @param {Object} config
 *
 * @returns {Object}
 */
const setCSRFTokenHeader = (config) => {
  config.headers['X-CSRF-TOKEN'] = getUserToken();

  return config;
};

/**
 * Returns object updated with Authorization header
 *
 * @param {Object} config
 *
 * @returns {Object}
 */
const setAuthorizationHeader = (config) => {
  config.headers['Authorization'] = `Bearer ${getUserToken()}`;

  return config;
};

/**
 * Returns object updated with site identifier header
 *
 * @param {Object} config
 *
 * @returns {Object}
 */
const setSiteIdentifierHeader = (config) => {
  const text = JSON.stringify({
    propertyId: process.env.REACT_APP_PROPERTY_ID,
    date: new Date().getTime()
  });
  const identifier = encrypt(process.env.REACT_APP_PASSPHRASE, text);
  config.headers['x-ident'] = Buffer.from(identifier).toString('base64');

  return config;
};

/**
 * If doNotSendCsrfToken is false adds CSRF token header else just returns unmodified config
 *
 * @param {Object} config
 *
 * @returns {Object}
 */
const handleCSRFToken = (config) => {
  const doNotSendCsrfToken = config.headers.doNotSendCsrfToken;
  if (!doNotSendCsrfToken) { // Send CSRF token
    config = setCSRFTokenHeader(config);
  }
  delete config.headers.doNotSendCsrfToken;

  return config;
};

/**
 * Sets up axios request interceptor
 */
export const createRequestInterceptor = () => {
  const interceptor = axios.interceptors.request.use(config => {
      let data;
      if (!config.headers.doNotAddUserTokenAuthorization) {
        config = setAuthorizationHeader(config);
      }
      config = setSiteIdentifierHeader(config);
      delete config.headers.doNotAddUserTokenAuthorization;
      if (hasTokenExpired()) { // User token expired
        cleanup();
      } else { // User token not expired
        data = Promise.resolve();
        if (config.url !== '/auth/refresh') {
          const refreshPromise = getTokenRefreshPromise();
          if (refreshPromise) {
            axios.interceptors.request.eject(interceptor);
            data = refreshPromise;
          }
        }
        data = data.then(handleCSRFToken.bind(null, config));
      }

      return data;
    }
  );
};

/**
 * Sets up axios response interceptor
 */
export const createResponseInterceptor = () => {
  axios.interceptors.response.use(
    response => response,
    error => {
      return Promise.reject(error);
    }
  );
};
