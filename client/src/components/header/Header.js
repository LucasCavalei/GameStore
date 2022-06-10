import React from "react";
import Sidenav from "../sidenav/Sidenav";
import logo from "../../assets/Lucasgasmes.png";
import gamesFlickr from "../../assets/flickergames.jpg";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="image-logo">
        <img src={logo} style={{ height: "320px" }} />
        <img class="logo-bg" src={gamesFlickr} style={{ height: "320px" }} />
      </div>
      <Sidenav />
    </div>
  );
}

export default Header;
