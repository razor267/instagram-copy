import React from "react";
import { useSelector } from "react-redux";
import Card from "../../shared/card/Card";
import s from "./home.module.css";

const Home = () => {
  const card = useSelector((state) => state.postsCardReducer.card);
  debugger;
  let cardEl = card.map((el) => {
    debugger;
    return <Card {...el} />;
  });

  return (
    <div className={s.home}>
      <div className={s.content}>
        <div>
          {/* здесь должны мапить массив получаемый из BLL с постами-карточками 
            массив.map((el) => {<Card key=el.key card=el.card/>})
          */}
          {cardEl}
        </div>

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
