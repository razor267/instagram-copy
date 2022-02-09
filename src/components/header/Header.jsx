import React from "react";
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <div>
      <a href="/">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </a>
      <div>
        <input type="text" placeholder="&#xF002; Поиск" />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
