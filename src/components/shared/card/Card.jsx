import React from "react";
import BlockAction from "../blockAction/BlockAction";
import WriteComment from "../writeComment/WriteComment";
import s from "./card.module.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  debugger;
  const nickName = props.nickName || "NoName";

  const commentEl = props.comments.map((el) => {
    return (
      <div className={s.comment}>
        <span className={s.commentator}>{el.nickname}</span>
        <span className={s.message}>{el.message}</span>
      </div>
    );
  });

  return (
    <>
      <article className={s.card}>
        <div className={s.header}>
          <NavLink to="/profile/id">{nickName}</NavLink>
          <button className={s.btnMore}>
            <span className={s.kebabMenu}></span>
          </button>
        </div>
        <div className={s.photos}>
          {/* Сделать обработку изображения до квадрата */}
          <img className={s.photosImg} src={props.img} alt="1" />
        </div>
        <BlockAction />
        <div className={s.description}>{props.description}</div>
        <div className={s.comments}>{commentEl}</div>
        <div className={s.date}>{props.date}</div>
        <WriteComment />
      </article>
    </>
  );
};

export default Card;
