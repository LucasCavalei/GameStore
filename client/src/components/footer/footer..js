import React from "react";
import Facebook from "../../assets/icons/Facebook.js";
import Instagram from "../../assets/icons/Instagram.js";
import Twitter from "../../assets/icons/Twitter.js";
import Youtube from "../../assets/icons/Youtube.js";
import "./footer.css";
// import { Instagram, Youtube, Twitter, Facebook } from ".../assets/icons";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{ position: "relative", top: "0px", marginBottom: "0px" }}
    >
      <div className="Footer-description">
        <h2> Quem somos</h2>
        <h2>contato</h2>
        <h2>whatever</h2>
      </div>
      <div className="footer-socialMedia">
        <Instagram />
        <Twitter />
        <Facebook />
        <Youtube />
      </div>
      <div
        className="copyRight"
        style={{
          marginLeft: "30px",
          position: "relative",
          top: "380px",
          left: "100px",
          fontSize: "12px",
          color: "grey",
        }}
      >
        <h4>Copyright © 2022 LucasCavaleiro. Todos os direitos reservados</h4>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1342"
        height="417.685"
        viewBox="0 0 1367 417.685"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            y1="0.218"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#4b4a4a" />
            <stop offset="0.586" stop-color="#282727" />
            <stop offset="1" stop-color="#0f0f0f" />
          </linearGradient>
        </defs>
        <path
          id="Caminho_1"
          data-name="Caminho 1"
          d="M0,591.371s48.494,126.9,188.377,169.057c61.744,18.608,204.428,16.48,261.4,14.937,162.529-4.4,242.532-30.247,371.988-40.081,4.717.079,37.746-2.238,63.482-2.265,7.03-.007,9.566-.836,14.681-.843,6.1-.742,12.123-1.07,12.123-1.07,12.372-1.551,40.685-5.909,148.926,4.178s221.857,52.19,262.988,135.4S1366,990.726,1366,990.726v17.652H0Z"
          transform="translate(0.5 -591.192)"
          stroke="#707070"
          stroke-width="1"
          fill="url(#linear-gradient)"
        />
      </svg>
    </div>
  );
};

export default Footer;
