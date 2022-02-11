import React, { useState } from "react";
import s from "./writeComment.module.css";

const WriteComment = (props) => {
  let [isEmoji, setIsEmoji] = useState(true); // захардкодил true пока не настроил пропсы, далее будет false а в пропсах будет приходть значение

  if (props.isEmoji) {
    setIsEmoji(props.isEmoji);
  }

  return (
    <div className={s.writeComment}>
      {isEmoji ? <button className={s.emojiBtn}>Эмоджи</button> : ""}
      <textarea
        className={s.textarea}
        placeholder="Добавте коментарий..."
      ></textarea>
      <button className={s.publichBtn}>Опубликовать</button>{" "}
      {/* перепишется используя библеотеку с формами*/}
    </div>
  );
};

export default WriteComment;
