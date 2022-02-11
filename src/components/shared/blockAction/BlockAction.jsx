import React, { useState } from "react";
import s from "./blockAction.module.css";
import noLike from "../../../assets/images/heart.png";

const BlockAction = (props) => {
  let [isLike, setIsLike] = useState(false); //вместо фолс будет приходить props.isLike

  //здесь должен быть метод реагирующий на клик
  //должен быть метод обрабатывающий onChange

  return (
    <div className={s.blockAction}>
      <div>
        <button className={s.btn}>
          {!isLike ? (
            <img src={noLike} alt="noLike" width="24" />
          ) : (
            <img src="" alt="like" width="24" />
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
