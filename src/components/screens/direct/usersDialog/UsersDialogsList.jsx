import React from "react";
import s from "../direct.module.css";

export const UsersDialogsList = (props) => {
  return (
    <div>
      <header className={s.header}>
        <span>Nickname</span>
        <button>
          <img src="" alt="Написать сообщение" />
        </button>
      </header>
      <div>{props.usersListEl}</div>
    </div>
  );
};
