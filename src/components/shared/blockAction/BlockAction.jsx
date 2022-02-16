import React, { useState } from "react";
import s from "./blockAction.module.css";
import noLike from "../../../assets/images/heart.png";
import like from "../../../assets/images/like.svg";

const BlockAction = () => {
  let [isLike, setIsLike] = useState(false); //вместо фолс будет приходить props.isLike и дальше будут переработаны обрабочики

  const onLike = () => {
    !isLike ? setIsLike(true) : setIsLike(false);
  };
  // здесь должен быть onChange который будет сообщать стейту что isLike изменился
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
          <img src="" alt="" />
          Коментарий
        </button>
        <button className={s.btn}>
          <img src="" alt="" />
          Отправить в директ
        </button>
      </div>
      <button className={s.btn}>
        <img src="" alt="" />
        сохранить
      </button>
    </div>
  );
};

export default BlockAction;
