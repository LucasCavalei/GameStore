import React from 'react';
import Produto from './Produto';
import { connect } from 'react-redux';
import "./produto.css";

function ListaProduto({products}){
  // console.log("meu tipo e ", typeof products);
  // console.log("sou lista ", products)
// TA MUITO CONFUSO NOMES PARECIDOS PRODUCTS E PRODUCT PRODUTO
  return(
    <div className="lista-produtos">
      {products.map((product, index) => (
        <Produto key={index} product={product} />
       ))}
    </div>
    ); 
}


const mapStateToProps = (state)=>{
  return{
  products:state.productReducer.products   
  }
}

export default connect(mapStateToProps)(ListaProduto);
