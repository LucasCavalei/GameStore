import {
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  LOGIN_USER_SUCCESS,
} from "../actions/actionTypes";
const initialState = {
  user: {},
  isLogged: false,
  error: {},
};

export const userReducer = (state = initialState, action) => {
  console.log("user Action Reducer", action);
  switch (action.type) {
    case CREATE_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      };
    case CREATE_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
