import React from 'react'
 import Sidenav from '../sidenav/Sidenav';
import Cart from "../carrinho/Cart";
import logo from "../../images/Lucasgasmes.png";
import gamesFlickr from "../../images/flickergames.jpg";
import "./header.css";

function Header(props) {
   const {carItems}= props;
    
 return (
 <div className="header-container">
    <div className="image-logo">
      <img src={logo} style={{height:'320px'}} />
       <img class="logo-bg" src={gamesFlickr} style={{height:'320px'}} /> 
     </div>
  <Sidenav />
 </div>
 )
}

export default Header;