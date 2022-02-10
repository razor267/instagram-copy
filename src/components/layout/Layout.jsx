import React from "react";
import Header from "../header/Header";
import s from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
