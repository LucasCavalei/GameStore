import React from 'react';
import { useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {useDispatch} from "react-redux"
// import { AiFillQuestionCircle } from 'react-icons/ai';
// import showSidebar from "../sidenav/Sidenav";
import { SET_CART,SET_SHOW_CART } from '../../redux/actions/actionTypes';

function Produto({product,islogged,showCart,user}){
    const history = useHistory();
    const dispatch = useDispatch();

  const myfunc = (product) =>{
      {!user && user === undefined ? history.push("/login") : 
      dispatch({type: SET_CART, payload: product })    };   
      {!showCart && dispatch({type:SET_SHOW_CART, payload:!showCart});
     }   
  }
  return (
    <div className="produto-item">
      <div className="produto-content">
        <img src={product.image}    style={{
          maxWidth: '140px' }} alt="produto" />    
          </div>
            <div className="produto-desc"> 
              <h2>{product.name}</h2>                
              <h4>${product.price}</h4>
              <button onClick={() => myfunc(product)}>Adicionar ao carrinho</button>
            </div>
          </div>
      ) 
  }

const mapStateToProps = (state)=>{
  return {
    islogged : state.userReducer.islogged,
    showCart:state.cartReducer.showCart,
    user : state.userReducer.user
   }
 }
 
export default connect(mapStateToProps)(Produto);

 