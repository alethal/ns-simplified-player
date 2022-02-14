const key = 'fe-user-data';

/**
 * Returns user data from localStorage or an empty object if not user data in storage
 *
 * @returns {Object}
 */
export const getUserLocalData = () => {
  const userData = localStorage.getItem(key);
  return userData ? JSON.parse(userData) : {};
};

/**
 * Removes user data from localStorage
 */
export const removeUserLocalData = () => {
  localStorage.removeItem(key);
};

/**
 * Sets user data to localStorage
 *
 * @param {Object} data
 */
export const setUserLocalData = (data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
