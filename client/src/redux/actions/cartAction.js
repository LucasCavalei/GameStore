import axios from 'axios';
import { PURCHASE_SUCCESS, ADD_TO_CART } from './actionTypes.js';

export const finalizarCompra =
  ({ cartItem, somaCart, user }) =>
  (dispatch) => {
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
        console.log(
          'response past database in cartActin on order: ' + response.data
        );
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
