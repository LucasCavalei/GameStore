import { combineReducers } from 'redux';

import {productReducer} from "./productReducer.js"; 
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';
import {errorReducer} from './errorReducer';

export const rootReducers = combineReducers({
productReducer,
cartReducer,
userReducer,
errorReducer
});
