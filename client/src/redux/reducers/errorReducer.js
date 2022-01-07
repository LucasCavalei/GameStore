import { CREATE_USER_ERROR,LOGIN_USER_ERROR } from "../actions/actionTypes";

const initialState = {
    message: null,
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
 
    case 'CREATE_USER_ERROR':
    case 'LOGIN_USER_ERROR':
    return {
        ...state,
        message: action.payload,
        }
    default:
        return state
    }
}
  