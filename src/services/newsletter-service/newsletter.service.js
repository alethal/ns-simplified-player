import axios from 'axios';

export const newsletterSubscribeParams = [
  'submitaction=3',
  'mlid=226702',
  'submitaction=3',
  'siteid=666711',
  'val_46732=NSFOOT',
  'tagtype=q2',
  'demographics=-1',
  'redirection=http://nakedsword.com/newsletterconfirm',
  'uredirection=',
  'welcome=',
  'double_optin=on',
  'append=',
  'update=',
  'activity=submit'
];

export const subscribeToNewsletter = (email) => {
  return axios.post(`${process.env.REACT_APP_NEWSLETTER_URL}?${newsletterSubscribeParams.join('&')}&email=${email}`);
};