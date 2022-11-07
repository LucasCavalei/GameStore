import {
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOG_OUT_USER,
  LOADING_USER,
} from './actionTypes.js';
import axios from 'axios';

export const createUser = (userInfo) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user/signup', userInfo, {})
    .then((response) => {
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: CREATE_USER_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user/login', userData)
    .then((response) => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response.data,
      });
      localStorage.setItem('user', JSON.stringify(response.data));
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: error.response && error.response.data.message,
      });
    });
};
export const LogOut = () => (dispatch) => {
  dispatch({ type: LOG_OUT_USER });
};
