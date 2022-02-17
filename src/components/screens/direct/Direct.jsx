import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UsersDialogsList } from "./usersDialog/UsersDialogsList";
import { UserDialog } from "./usersDialog/UserDialog";
import s from "./direct.module.css";

export const Direct = () => {
  const users = useSelector((state) => state.directReducer.users);
  const paramsUserId = useParams();
  let userId = paramsUserId.id;
  if (!userId) {
    userId = "";
  }

  const user = users.filter((i) => {
    return i.id === userId;
  });

  console.log(user);
  return (
    <div className={s.direct}>
      <section className={s.content}>
        <div className={s.left}>
          <UsersDialogsList />
        </div>
        <div className={s.right}>
          <UserDialog user={user} userId={userId} />
        </div>
      </section>
    </div>
  );
};
