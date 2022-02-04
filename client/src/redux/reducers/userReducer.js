import {
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  LOGIN_USER_SUCCESS,
} from "../actions/actionTypes";

console.log("object");
const initialState = {
  user: {},
  isLogged: null,
  error: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER_SUCCESS":
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      };
    case CREATE_USER_ERROR:
      return { ...state, error: action.payload, isLogged: true };
    default:
      return state;
  }
};
