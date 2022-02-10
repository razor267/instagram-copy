import React from "react";
import s from "./home.module.css";

const Home = () => {
  return (
    <div className={s.home}>
      {/* Из этого будет делаться Компонент */}
      <div className={s.content}>
        <article className={s.card}>
          <div className={s.header}>Никнейм и кнопка дополнительно (...)</div>
          <div className={s.photos}>
            <img
              className={s.photosImg}
              src="https://cdn.pixabay.com/photo/2017/09/21/18/55/hildesheim-2772941_960_720.jpg"
              alt="1"
            />
          </div>
          <div>Блок с лайком, комент, поделится и сохранить</div>
          <div>Описание</div>
          <div className={s.comments}>Все коментарии</div>
          <div>Дата публикации</div>
          <div className={s.writeComment}>
            <button>Эмоджи</button>
            <textarea placeholder="Добавте коментарий..."></textarea>
            <button>Опубликовать</button>{" "}
          </div>
        </article>
        <div>
          <div>Информация об аккаунте</div>
          <div>Рекомендации для вас</div>
          <div>Хедер?</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
