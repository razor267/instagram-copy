import React from "react";
import s from "./modal.module.css";

export const Modal = ({
  visible = false,
  title = "",
  content = "",
  isHeader,
  onClose,
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
          <div className={s.content}>{content}</div>
        </div>
      </div>
    </div>
  );
};
