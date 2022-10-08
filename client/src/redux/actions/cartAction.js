import axios from 'axios';
import {
  PURCHASE_SUCCESS,
  SET_CART,
  ADD_TO_CART,
  SET_SHOW_CART,
} from './actionTypes.js';

export const finalizarCompra =
  ({ cartItem, somaCart, user }) =>
  (dispatch) => {
    // const { userId, token } = user;

    // console.log("somaCart", somaCart, "user", userId);

    const orderProducts = cartItem.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
    }));

    const orderData = {
      orderProducts,
      somaCart,
      user: user.userId,
    };

    axios
      .post('/order', orderData, {
        headers: {
          authorization: 'Bearer ' + user.token,
        },
      })
      .then((response) => {
        dispatch({
          type: PURCHASE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        {
          console.log('deu ruim', error);
        }
      });
  };
export const addToCart = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: product });
};
