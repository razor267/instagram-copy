import React from "react";
import { NavLink } from "react-router-dom";
import { Publications } from "../../publications/Publications";
import Footer from "../../footer/Footer";
import setting from "../../../assets/images/setting.svg";
import s from "./profile.module.css";

const footerStyle = {
  footer: s.footer,
  link: s.footerLink,
  item: s.footerItem,
  copyright: s.footerCopyright,
  nav: s.footerNav,
  list: s.footerList,
  btn: s.footerBtn,
};

export const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.content}>
        <header className={s.header}>
          <div className={s.avatar}>
            <button className={s.btnAvatar}>
              <img
                src="https://via.placeholder.com/150/cfc"
                alt="avatar"
                className={s.avatarImg}
              />
            </button>
          </div>
          <section>
            <div className={s.profileInfo}>
              <span className={s.nickName}>Nickname</span>
              <NavLink to="/" className={s.link}>
                Редактировать профиль
              </NavLink>
              <button className={s.btn}>
                <img src={setting} alt="setting" />
              </button>
            </div>
            <ul className={s.list}>
              <li className={s.item}>
                <span>0</span>
                <span> Публикаций</span>
              </li>
              <li className={s.item}>
                <NavLink to="/" className={s.itemLink}>
                  <span>3</span>
                  <span> подписчиков</span>
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink to="/" className={s.itemLink}>
                  <span>2</span>
                  <span> подписок</span>
                </NavLink>
              </li>
            </ul>
            <div className={s.description}>
              <div>Имя</div>
              <div>О себе</div>
            </div>
          </section>
        </header>
        <div>
          <Publications />
        </div>
        <Footer {...footerStyle} />
      </div>
    </div>
  );
};
