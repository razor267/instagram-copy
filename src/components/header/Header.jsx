import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import SearchInput from "../searchInput/SearchInput";
import s from "./header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.content}>
        <NavLink href="/home">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="logo"
          />
        </NavLink>
        <SearchInput />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
