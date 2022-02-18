import React from "react";
import s from "./modal.module.css";
import {ModalCard} from "../shared/card/ModalCard";

export const Modal = ({
                        visible = false,
                        title = "",
                        // content = "",
                        isHeader,
                        onClose,
                        sendMessageComment,
                        id,
                        commentEl,
                        nickName,
                        img

                      }) => {
  if (!visible) return null;
  return (
      <div className={s.modal} onClick={onClose}>
        <div className={s.dialog} onClick={(e) => e.stopPropagation()}>
          {isHeader ? (
              <header className={s.header}>
                <h3 className={s.title}>{title}</h3>
                <span className={s.close} onClick={onClose}>
              &times;
            </span>
              </header>
          ) : (
              ""
          )}
          <div className={s.body}>
            <div className={s.content}><ModalCard
                sendMessageComment={sendMessageComment}
                id={id}
                commentEl={commentEl}
                nickName={nickName}
                img={img}
            /></div>
          </div>
        </div>
      </div>
  );
};
