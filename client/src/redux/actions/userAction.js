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
  dispatch(loadUserRequest());
  axios
    .post('http://localhost:8888/user/signup', userInfo, {})

    .then((user) => {
      dispatch(createUserSuccess(user.data));
      return user;
    })
    .catch((error) => {
      console.log('--------ERROR-----------------', error);
      dispatch({
        type: CREATE_USER_ERROR,
        payload:
          error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    });
};

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user/login', userData)
    .then((user) => {
      dispatch(loginUserSuccess(user.data));
      //  previous used  localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('user', JSON.stringify(user.data));
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: error.response && error.response.data.message,
      });
    });
};
export const LogOutUser = () => (dispatch) => {
  dispatch({ type: LOG_OUT_USER });
};

export const loadUserRequest = () => {
  return {
    type: LOADING_USER,
  };
};
export const loginUserSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};
export const createUserSuccess = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user,
  };
};
export const getUsersFailure = (error) => {
  return {
    // type: GET_USERS_FAILURE,
    payload: error,
  };
};
