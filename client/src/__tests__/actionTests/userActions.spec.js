import { createUser, createUserSuccess } from '../../redux/actions/userAction';
import { CREATE_USER_SUCCESS } from '../../redux/actions/actionTypes';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middleware = [thunk];
// maybe withot thuunk in configureMockStore
const mockStore = configureMockStore(middleware);
const store = mockStore();

import axios from 'axios';
jest.mock('axios');

describe('UserActions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  test('should create an action to get User Success', () => {
    const expectedAction = {
      type: CREATE_USER_SUCCESS,
      payload: 'JsMount',
    };
    expect(createUserSuccess('JsMount')).not.toEqual(expectedAction);
  });
});
