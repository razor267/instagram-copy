import React from "react";
import s from "./direct.module.css";
import { UserDialog } from "./usersDialog/UserDialog";
import { UsersDialogsList } from "./usersDialog/UsersDialogsList";

export const Direct = () => {
  /*const userListEl = получаемый массив юзеров мапим на элементы */
  return (
    <div className={s.direct}>
      <section className={s.content}>
        <div className={s.left}>
          <UsersDialogsList usersListEl={<>asdsadsad</>} />
        </div>
        <div className={s.right}>
          <UserDialog />
        </div>
      </section>
    </div>
  );
};
