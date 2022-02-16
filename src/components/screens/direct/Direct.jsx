import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import s from "./direct.module.css";
import { UserDialog } from "./usersDialog/UserDialog";
import { UsersDialogsList } from "./usersDialog/UsersDialogsList";

export const Direct = () => {
  const users = useSelector((state)=>state.directReducer.users)
  const userListEl = users.map(el => <>{/**/}</> )
  /*const userListEl = получаемый массив юзеров мапим на элементы */
  return (
    <div className={s.direct}>
      <section className={s.content}>
        <div className={s.left}>
          <UsersDialogsList />
        </div>
        <div className={s.right}>
          <UserDialog />
        </div>
      </section>
    </div>
  );
};
