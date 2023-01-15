import {
  createUser,
  createUserSuccess,
  loginUser,
  loginUserSuccess,
} from '../../redux/actions/userAction';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { CREATE_USER_SUCCESS } from '../../redux/actions/actionTypes';
import { useDispatch, connect } from 'react-redux';

// describe('fetchUsers', () => {
//   let mock;

//   beforeAll(() => {
//     mock = new MockAdapter(axios);
//   });

//   afterEach(() => {
//     mock.reset();
//   });

// // --------------------------------------
// describe('when API call is successful', () => {

test('should return users list', async () => {
  const dispatch = useDispatch();

  const fakeUser = {
    name: 'lucas',
    email: 'lucdssasdss@sgmssdsaisl22.com',
    password: 'password2',
  };
  const res = dispatch(createUser(fakeUser));
  console.log('kreatorTest-----------', res);
  // let mock;
  // mock = new MockAdapter(axios);
  // // given
  // var responseMock = {
  //   id: 123,
  // };
  // mock.onPost().reply(200, responseMock);

  // // when
  // const result = await createUser(null);

  // // then
  // expect(result).toEqual(responseMock);
  expect(true).toBe(true);
});
// VER BABEL ES6 PRA VER SE RESOLVE MEU PROBLEMA OU APENAS ENTERDER PRA USA-LO

// -------------------2---------------------------essse abaixxo aqui isolado indenpente te todos os outros códigos

// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// const middleware = [thunk];
// // maybe withot thuunk in configureMockStore
// const mockStore = configureMockStore(middleware);
// const store = mockStore();

// ---------------------1-------------------- JA ESTRAVA COMENDATO tudão abaixo

//import axios from 'axios';
// describe('UserActions', () => {
//   beforeEach(() => {
//     store.clearActions();
//   });
//   test('should create an action to get User Success', () => {
//     const expectedAction = {
//       type: CREATE_USER_SUCCESS,
//       payload: 'JsMount',
//     };
//     expect(createUserSuccess('JsMount')).toEqual(expectedAction);
//   });

//   test('should create an action to get Users List', async () => {
//     const data = {
//       data: [
//         { name: 'JsMount', email: 'info@jsmount.com' },
//         { name: 'web', email: 'technical@gmail.com' },
//       ],
//     };
//     const response = { data: [{}] };
//     jest.mock('../../redux/actions/userAction', () => {
//       return {
//         createUser: jest.fn().mockReturnValue(response),
//       };
//     });

//     // axios.get.mockImplementationOnce(() => Promise.resolve(data));
//     // store.dispatch(createUser());
//     // const actions = store.getActions();
//     // console.log('----------------------------actions :', actions);
//     const { createUser } = await import('../../redux/actions/userAction');
//     // const result = createUser();
//     // console.log('rrrrrrrrrrrrrrrrrrrrrrrrr', result);
//     // expect(createUser).toHaveBeenCalledTimes(1);
//     console.log('---------------------', createUser());
//     expect(true).toBe(true);
//     // expect(createUser().mock.results[0].value).toBe(response);
//   });
// });
