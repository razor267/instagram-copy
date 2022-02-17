import React, { useState } from "react";
import { useForm } from "react-hook-form";
import s from "./writeComment.module.css";

const WriteComment = (props) => {
  let [isEmoji, setIsEmoji] = useState(true); // захардкодил true пока не настроил пропсы, далее будет пропсах будет приходть значение
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  if (props.isEmoji) {
    setIsEmoji(props.isEmoji);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={s.writeComment}>
        {isEmoji ? <button className={s.emojiBtn}>Эмоджи</button> : ""}
        <textarea
          className={s.textarea}
          placeholder="Добавте коментарий..."
          {...register("comment")}
        />
        <button className={s.publichBtn}>Опубликовать</button>
      </form>
    </>
  );
};

export default WriteComment;
