import React from "react";
import { NavLink } from "react-router-dom";
import plugs from "../../assets/images/plugs.png";
import s from "./publications.module.css";

export const Publications = () => {
  const isContent = false;
  return (
    <div>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink to="/" className={s.link}>
              <span>
                <img src="" alt="" />
                Публикации
              </span>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/" className={s.link}>
              <span>
                <img src="" alt="" />
                Сохраненное
              </span>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/" className={s.link}>
              <span>
                <img src="" alt="" />
                Отметки
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={s.content}>
        {!isContent ? (
          <div>
            <img src={plugs} alt="Заглушка" />
          </div>
        ) : (
          <div>Карточки</div>
        )}
      </div>
    </div>
  );
};
