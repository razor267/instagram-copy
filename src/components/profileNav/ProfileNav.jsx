import React from "react";
import { NavLink } from "react-router-dom";
import s from "./profileNav.module.css";

export const ProfileNav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/profile" className={s.link}>
            <span>
              <img src="" alt="" />
              Публикации
            </span>
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/profile/saved" className={s.link}>
            <span>
              <img src="" alt="" />
              Сохраненное
            </span>
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/profile/marker" className={s.link}>
            <span>
              <img src="" alt="" />
              Отметки
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
