import { createUser } from '../../redux/actions/userAction.js';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

import axios from 'axios';
jest.mock('axios');
