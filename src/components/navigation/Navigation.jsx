import React from "react";
import home from "./../../assets/images/home.png";
import heart from "./../../assets/images/heart.svg";
import explore from "./../../assets/images/explore.png";
import more from "./../../assets/images/more.png";
import send from "./../../assets/images/send.png";
import { NavLink } from "react-router-dom";
import s from "./navigation.module.css";

const Navigation = () => {
  return (
    <div className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/home">
            <img src={home} alt="Home" width="24" height="24" />
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/send">
            <img src={send} alt="" width="24" height="24" />
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/more">
            <img src={more} alt="" width="24" height="24" />
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/explore">
            <img src={explore} alt="" width="24" height="24" />
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/heart">
            <img src={heart} alt="" width="24" height="24" />
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/profile">
            <img
              className={s.profileImg}
              src="https://via.placeholder.com/24"
              alt="profile"
              width="24"
              height="24"
            />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
