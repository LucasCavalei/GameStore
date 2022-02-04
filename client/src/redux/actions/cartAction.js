import axios from "axios";
import { PURCHASE_SUCCESS, SET_CART } from "./actionTypes.js";

export const finalizarCompra =
  ({ cartItem, somaCart, user }) =>
  (dispatch) => {
    const { id } = user;

    const orderProducts = cartItem.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
    }));

    const orderData = {
      orderProducts,
      somaCart,
      user: id,
    };
    axios
      .post("/order", orderData, {
        headers: {
          authorization: "Bearer " + user.token,
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
      });
  };
