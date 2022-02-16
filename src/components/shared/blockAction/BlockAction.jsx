import React, { useState } from "react";
import s from "./blockAction.module.css";
import noLike from "../../../assets/images/heart.svg";
import like from "../../../assets/images/like.svg";
import comments from "../../../assets/images/comments.svg";
import direct from "../../../assets/images/direct.svg";
import save from "../../../assets/images/save.svg";
import saved from "../../../assets/images/saved.svg";

const BlockAction = () => {
  let [isLike, setIsLike] = useState(false); //вместо фолс будет приходить props.isLike и дальше будут переработаны обрабочики
  let [isSaved, setIsSaved] = useState(false);

  const onLike = () => {
    !isLike ? setIsLike(true) : setIsLike(false);
  };

  // здесь должен быть onChange который будет сообщать стейту что isLike изменился

  const onSaved = () => {
    !isSaved ? setIsSaved(true) : setIsSaved(false);
  };
  // здесь должен быть onChange который будет сообщать стейту что isSaved изменился

  return (
    <div className={s.blockAction}>
      <div>
        <button className={s.btn} onClick={onLike}>
          {!isLike ? (
            <img src={noLike} alt="noLike" width="24" />
          ) : (
            <img src={like} alt="like" width="24" />
          )}
        </button>
        <button className={s.btn}>
          <img src={comments} alt="Коментарии" />
        </button>
        <button className={s.btn}>
          <img src={direct} alt="Отправить в директ" />
        </button>
      </div>
      <button className={s.btn} onClick={onSaved}>
        {!isSaved ? (
          <img src={save} alt="Сохранить" />
        ) : (
          <img src={saved} alt="Сохранено/Удалить" />
        )}
      </button>
    </div>
  );
};

export default BlockAction;
