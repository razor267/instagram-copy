import React from "react";
import s from "./searchResult.module.css";

const searchResult = () => {
  return (
    <div className={s.searchResult}>
      <div>Недавние ... результат</div> {/*1 компонент */}
      <div>Результаты поиска</div> {/* 2 компонент */}
    </div>
  );
};

export default searchResult;
