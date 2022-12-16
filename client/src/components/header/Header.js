import React from 'react';
import Sidenav from '../sidenav/Sidenav';
import logo from '../../assets/Lucasgasmes.png';

import './header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <div className="image-logo">
        <Link to="/">
          <img src={logo} style={{ height: '320px' }} />
          <img className="logo-bg" />
        </Link>
      </div>
      <Sidenav />
    </div>
  );
}

export default Header;
