import React from 'react';


import style from '../../../assets/style/scss/header/header-navbar/header-navbar.module.css'
import {NavLink} from "react-router-dom";

const HeaderNavbar = () => {
    return (
        <div className={style.main}>
            <div className={style.main__row_elements}>
                <ul>
                    <li ><NavLink to={'/home'} >Головна</NavLink></li>
                    <li><NavLink to={'/catalog'}>Каталог Товарів</NavLink></li>
                    <li><NavLink to={'/rules'}>Правила</NavLink></li>
                    <li><NavLink to={'/delivery'}>Доставка та оплата</NavLink></li>
                    <li><NavLink to={'/map'}>Карта Сайту</NavLink></li>
                    <li><NavLink to={'/projects'}>Наші Проекти</NavLink></li>
                    <li><NavLink to={'/responds'}>Відгуки</NavLink></li>
                    <li><NavLink to={'/contacts'}>Контакти</NavLink></li>
                </ul>
            </div>

        </div>
    );
};

export default HeaderNavbar;