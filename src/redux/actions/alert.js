import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType) => {
  return {
    type: SET_ALERT,
    payload: { msg, alertType }
  };
};

export const removeAlert = () => {
  return {
    type: REMOVE_ALERT
  };
};
