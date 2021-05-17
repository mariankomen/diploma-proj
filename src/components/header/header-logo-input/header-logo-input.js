import React from 'react';

import style from '../../../assets/style/scss/header/header-logo-input/header-logo-input.module.css'
import logo from '../../../assets/images/blackchip-logo.png';
import {NavLink} from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Button } from '@material-ui/core';

const HeaderLogoInput = () => {
    return (
        <div className={style.HeaderLogoInput_main}>
            <div className={style.HeaderLogoInput_main__content}>
                <img src={logo} alt={'logo'}/>
                <div className={style.input_and_phone}>
                    <div className={style.input_and_phone__contact}><p><CallIcon fontSize={"small"}/>(068)463-24-36 | 9:00 до 18:00 крім Сб та Нд</p></div>
                    <div className={style.input_and_phone__search_panel}><input type='text'/>
                        <Button color={'default'} variant={'contained'}  size={'small'}className={style.btn}>
                            <SearchIcon/>
                        </Button>
                    </div>
                </div>
                <div className={style.HeaderLogoInput_main__content__basket}>
                    <span><ShoppingBasketIcon fontSize={'large'}/> <span>Товарів: 0 (0.00 грн)</span></span>
                </div>
            </div>
        </div>
    );
};

export default HeaderLogoInput;