import React from "react";

const writeComment = (props) => {
  return (
    <div className={s.writeComment}>
      if(props.emoji){
        <button className={}>Эмоджи</button>
      }    
      <textarea placeholder="Добавте коментарий..."></textarea>
      <button>Опубликовать</button>
    </div>
  );
};

export default writeComment;
