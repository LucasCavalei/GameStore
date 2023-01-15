import {
  createUser,
  createUserSuccess,
  loginUser,
  loginUserSuccess,
} from '../../redux/actions/userAction';
import axios from 'axios';

jest.mock('axios');
test('createUser dispatches the correct actions and returns the user', () => {
  const userInfo = { name: 'John', email: 'john@example.com' };
  const user = { data: { name: 'John', email: 'john@example.com' } };
  const dispatch = jest.fn();
  axios.post.mockResolvedValue(user);

  return createUser(userInfo)(dispatch).then(() => {
    expect(dispatch).toHaveBeenCalledWith(createUserSuccess(user.data));
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:8888/user/signup',
      userInfo,
      {}
    );
  });
});
const localStorageSpy = jest.spyOn(localStorage, 'setItem');
test('loginUser dispatches the correct actions and sets the user in local storage', () => {
  const userData = { email: 'john@example.com', password: 'password' };
  const user = { data: { name: 'John', email: 'john@example.com' } };
  const dispatch = jest.fn();
  axios.post.mockResolvedValue(user);

  return loginUser(userData)(dispatch).then(() => {
    expect(dispatch).toHaveBeenCalledWith({ type: LOADING_USER });
    expect(dispatch).toHaveBeenCalledWith(loginUserSuccess(user.data));
    expect(axios.post).toHaveBeenCalledWith('/user/login', userData);
    expect(localStorageSpy).toHaveBeenCalledWith(
      'user',
      JSON.stringify(user.data)
    );
  });
});
