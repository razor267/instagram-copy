import React from 'react'
import s from "./footer.module.css"

const Footer = () => {
  return (
    <footer>
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}><a className={s.link} href="">Информация</a></li>
                <li className={s.item}><a className={s.link} href="">Пресса</a></li>
                <li className={s.item}><a className={s.link} href="">API</a></li>
                <li className={s.item}><a className={s.link} href="">Помощь</a></li>
                <li className={s.item}><a className={s.link} href="">Вакансии</a></li>
                <li className={s.item}><a className={s.link} href="">Конфиденциальность</a></li>
                <li className={s.item}><a className={s.link} href="">Условия</a></li>
                <li className={s.item}><a className={s.link} href="">Места</a></li>
                <li className={s.item}><a className={s.link} href="">Популярные аккаунты</a></li>
                <li className={s.item}><a className={s.link} href="">Хэштеги</a></li>
                <li className={s.item}><button className={s.btn}>Язык</button></li>
            </ul>
        </nav>

        <div className={s.copyright}>© 2022 INSTAGRAM FROM META</div> 
    </footer>
  )
}

export default Footer