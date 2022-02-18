import React from "react";
import BlockAction from "../blockAction/BlockAction";
import WriteComment from "../writeComment/WriteComment";
import { NavLink } from "react-router-dom";
import s from "./modalCard.module.css";

export const ModalCard = (props) => {
  return (
    <div className={s.modalCard}>
      <div className={s.photos}>
        {/* Сделать обработку изображения до квадрата */}
        <img className={s.photosImg} src={props.img} alt="image" />
      </div>
      <div className={s.right}>
        <div className={s.header}>
          <NavLink to="/profile/id">{props.nickName}</NavLink>
          <button className={s.btnMore}>
            <span className={s.kebabMenu}></span>
          </button>
        </div>
        <div>{props.commentEl}</div>
        <div className={s.footer}>
          <BlockAction />
          <WriteComment
            sendMessageComment={props.sendMessageComment}
            id={props.id}
          />
        </div>
      </div>
    </div>
  );
};
