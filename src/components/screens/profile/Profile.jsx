import React from "react";
import { NavLink } from "react-router-dom";
import { Publications } from "../../publications/Publications";
import Footer from "../../footer/Footer";
import setting from "../../../assets/images/setting.svg";
import s from "./profile.module.css";
import { ProfileNav } from "../../profileNav/ProfileNav";
import { Modal } from "../../modals/Modal";
import { useState } from "react";

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
  const [isModal, setModal] = useState(false);
  const [isContent, setContent] = useState();
  const [isTitle, setTitle] = useState();
  const [isHeader, setHeader] = useState(false);
  const onClose = () => setModal(false);

  const onFollowers = () => {
    setTitle("Подписчики");
    setContent(<>наш компонент со списком подписчиков</>);
    setModal(true);
    setHeader(true);
  };

  const onSubsrcibes = () => {
    setTitle("Подписки");
    setContent(<>наш компонент со списком подписок</>);
    setModal(true);
    setHeader(true);
  };

  const onSetting = () => {
    setTitle("");
    setContent(<>Ну получается тут будет список настроек</>);
    setModal(true);
    setHeader(false);
  };

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
              <NavLink to="/accounts/edit/" className={s.link}>
                Редактировать профиль
              </NavLink>
              <button className={s.btn} onClick={onSetting}>
                <img src={setting} alt="setting" />
              </button>
            </div>
            <ul className={s.list}>
              <li className={s.item}>
                <span>0</span>
                <span> Публикаций</span>
              </li>
              <li className={s.item}>
                <button
                  className={s.itemLink + " " + s.btn}
                  onClick={onFollowers}
                >
                  <span>3</span>
                  <span> подписчиков</span>
                </button>
              </li>
              <li className={s.item}>
                <button
                  className={s.itemLink + " " + s.btn}
                  onClick={onSubsrcibes}
                >
                  <span>2</span>
                  <span> подписок</span>
                </button>
              </li>
            </ul>
            <div className={s.description}>
              <div>Имя</div>
              <div>О себе</div>
            </div>
          </section>
        </header>
        <ProfileNav />

        <Publications />

        <Footer {...footerStyle} />

        <Modal
          visible={isModal}
          title={isTitle}
          content={isContent}
          onClose={onClose}
          isHeader={isHeader}
        />
      </div>
    </div>
  );
};
