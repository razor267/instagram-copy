import React, { useState } from "react";
import BlockAction from "../blockAction/BlockAction";
import WriteComment from "../writeComment/WriteComment";
import s from "./card.module.css";
import { NavLink } from "react-router-dom";
import { Modal } from "../../modals/Modal";
import { ModalCard } from "./ModalCard";
import { useDispatch } from "react-redux";
import { sendMessageComment } from "../../../redux/redusers/postsCardReducer";

const Card = (props) => {
  const [isModal, setModal] = useState(false);
  // const [isContent, setContent] = useState();
  const [isTitle, setTitle] = useState();
  const [isHeader, setHeader] = useState(false);
  const onClose = () => setModal(false);
  const dispatch = useDispatch();

  const sendComment = (id, newMessageComment) =>
      dispatch(sendMessageComment(id, newMessageComment));
  const nickName = props.nickName || "NoName";
  const id = props.id;

  const commentEl = props.comments.map((el) => {
    return (
        <div className={s.comment}>
          <span className={s.commentator}>{el.nickname}</span>
          <span className={s.message}>{el.message}</span>
        </div>
    );
  });

  const onCard = () => {
    setTitle("");
    // setContent(
    //   <ModalCard
    //     sendMessageComment={sendComment}
    //     id={id}
    //     commentEl={commentEl}
    //     nickName={nickName}
    //     img={props.img}
    //   />
    // );
    setModal(true);
    setHeader(false);
  };

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
            <img className={s.photosImg} src={props.img} alt="image" />
          </div>
          <BlockAction onCard={onCard} />
          <div className={s.description}>{props.description}</div>
          <button className={s.comments} onClick={onCard}>
            Посмотреть все коментарии
          </button>
          <div className={s.date}>{props.date}</div>
          <WriteComment sendMessageComment={sendComment} id={props.id} />
        </article>
        <Modal
            visible={isModal}
            title={isTitle}
            // content={isContent}
            onClose={onClose}
            isHeader={isHeader}
            sendMessageComment={sendComment}
            id={id}
            commentEl={commentEl}
            nickName={nickName}
            img={props.img}
        />
      </>
  );
};

export default Card;
