import React from "react";

const Footer = (props) => {
  return (
    <footer className={props.footer}>
      <nav className={props.nav}>
        <ul className={props.list}>
          <li className={props.item}>
            <a className={props.link} href="">
              Информация
            </a>
          </li>
          <li className={props.item}>
            <a className={props.link} href="">
              Пресса
            </a>
          </li>
          <li className={props.item}>
            <a className={props.link} href="">
              API
            </a>
          </li>
          <li className={props.item}>
            <a className={props.link} href="">
              Помощь
            </a>
          </li>
          <li className={props.item}>
            <a className={props.link} href="">
              Вакансии
            </a>
          </li>
          <li className={props.item}>
            <a className={props.link} href="">
              Конфиденциальность
            </a>
          </li>
          <li className={props.item}>
            <a className={props.link} href="">
              Условия
            </a>
          </li>
          <li className={props.item}>
            <a className={props.link} href="">
              Места
            </a>
          </li>
          <li className={props.item}>
            <a className={props.link} href="">
              Популярные аккаунты
            </a>
          </li>
          <li className={props.item}>
            <a className={props.link} href="">
              Хэштеги
            </a>
          </li>
          <li className={props.item}>
            <button className={props.btn}>Язык</button>
          </li>
          <li className={props.item}>
            <p className={props.copyright}>© 2022 INSTAGRAM FROM META</p>{" "}
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
