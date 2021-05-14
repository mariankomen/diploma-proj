import React from 'react';

import HeaderLogoInput from "./header-logo-input/header-logo-input";
import HeaderNavbar from "./header-navbar/header-navbar";

import style from '../../assets/style/scss/header/header.module.css';

const Header = () => {
    return (
        <div className={style.header_main}>
            <HeaderLogoInput/>
            <HeaderNavbar/>
        </div>
    )
}

export default Header