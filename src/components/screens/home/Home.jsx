import React from "react";
import { useSelector } from "react-redux";
import Card from "../../shared/card/Card";
import Footer from "../../footer/Footer"
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
          {cardEl}
        </div>

        <div>
          <div>Информация об аккаунте</div>
          <div>Рекомендации для вас</div>
          <Footer />
            
        </div>
      </div>
    </div>
  );
};

export default Home;
