import React from "react";
import home from "./../../assets/images/home.png";
import heart from "./../../assets/images/heart.png";
import explore from "./../../assets/images/explore.png";
import more from "./../../assets/images/more.png";
import send from "./../../assets/images/send.png";

const Navigation = () => {
  return (
    <div>
      <a href="#">
        <img src={home} alt="Home" width="24" height="24" />
      </a>
      <a href="">
        <img src={send} alt="" width="24" height="24" />
      </a>
      <a href="">
        <img src={more} alt="" width="24" height="24" />
      </a>
      <a href="">
        <img src={explore} alt="" width="24" height="24" />
      </a>
      <a href="">
        <img src={heart} alt="" width="24" height="24" />
      </a>
      <a href="">
        <img
          src="https://via.placeholder.com/24"
          alt=""
          width="24"
          height="24"
        />
      </a>
    </div>
  );
};

export default Navigation;
