import {authRefresh} from "../auth-service/auth.service";
import {cleanup} from "../../axios-interceptor";

export const TOKEN = 'fe-token';
export const EXPIRES = 'fe-expires';

const refresh = {
  promise: null
};

export const cleanupRefreshTimeout = () => {
  const refreshTimeoutId = localStorage.getItem('refreshTimeoutId');
  if (refreshTimeoutId !== undefined) {
    clearTimeout(parseInt(refreshTimeoutId));
  }
};

/**
 * Removes token and token expiration values from localStorage
 */
export const cleanupToken = () => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(EXPIRES);
};

/**
 * Token can't be refreshed once it expires so we need to refresh it before that time
 * This functions returns minimal time that needs to be subtracted from expiration for refresh timeout
 *
 * @returns {number}
 */
export const getRefreshDenominator = () => {
  return 5 * 60 * 1000; //5 minutes is the time before token expires when we refresh token
};

/**
 * Returns a reference to the token refresh http request promise
 *
 * @returns {Promise|null}
 */
export const getTokenRefreshPromise = () => {
  return refresh.promise;
};

/**
 * Returns token from localStorage
 *
 * @returns {string}
 */
export const getUserToken = () => {
  return localStorage.getItem(TOKEN);
};

/**
 * Returns token expiration time from localStorage
 * NOTE: expiration returned is the time when token expires, not the duration of the token
 *
 * @returns {string}
 */
export const getUserTokenExpiration = () => {
  return localStorage.getItem(EXPIRES);
};

/**
 * Returns true if token has expired, false otherwise
 *
 * @returns {boolean}
 */
export const hasTokenExpired = () => {
  const expires = getUserTokenExpiration();
  return !!(expires && expires < new Date().getTime());
};

export const isUserLoggedIn = () => {
  return !!(getUserToken() && !hasTokenExpired());
};

/**
 * Saves token and token expiration to localStorage
 * Also sets up token refresh logic
 *
 * @param {string} token
 * @param {number} tokenDuration Token duration in minutes
 */
export const saveToken = (token, tokenDuration) => {
  localStorage.setItem(TOKEN, token);
  const now = new Date().getTime();
  localStorage.setItem(EXPIRES, (now + tokenDuration * 60 * 1000).toString());
  setupTokenRefresh(tokenDuration);
};

/**
 * Token refresh success handler
 * Saves token and clear refresh promise reference
 *
 * @param {Object} response
 */
export const onTokenRefreshSuccess = (response) => {
  const {jwt, expiresIn} = response.data.data;
  saveToken(jwt, expiresIn);
  refresh.promise = null;
};

/**
 * Triggers token refresh
 */
/* istanbul ignore next */
export const refreshToken = () => {
  if (authRefresh) {
    refresh.promise = authRefresh()
      .then(onTokenRefreshSuccess)
      .catch(cleanup);
  } else {
    cleanup();
  }
};

/**
 * Sets token refresh timeout
 *
 * @param {number} tokenDuration Token duration in minutes
 */
export const setupTokenRefresh = (tokenDuration) => {
  cleanupRefreshTimeout();
  const refreshDelay = tokenDuration * 60 * 1000 - getRefreshDenominator();
  let refreshTimeoutId = setTimeout(refreshToken, refreshDelay);
  localStorage.setItem('refreshTimeoutId', refreshTimeoutId.toString());
};

export const handleTokenRefresh = () => {
  /**
   * Reloading application prevents all setTimeouts from executing so this is needed to facilitate token refresh
   * We clean previous setTimeout tokens in setupTokenRefresh
   */
  const userToken = getUserToken();
  if (userToken && !hasTokenExpired()) {
    const expires = getUserTokenExpiration();
    const now = new Date().getTime();
    if (expires - getRefreshDenominator() < now) { // Token is about to expire so refresh immediately
      refreshToken();
    } else {
      const duration = Math.round((expires - now) / 60 / 1000);
      setupTokenRefresh(duration);
    }
  }
};

handleTokenRefresh();

