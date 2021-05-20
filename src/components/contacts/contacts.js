import React from 'react';

import style from '../../assets/style/scss/contacts/contacts.module.css'
import WayBlock from "../way-block/way-block";

import img from '../../assets/images/blackchip-logo.png'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Button} from "react-bootstrap";

const Contacts = () => {
    return (
        <div className={style.main}>
            <WayBlock data={[
                {name: "Головна", url: "/home"},
                {name: "Зворотній зв'язок", url: "/contacts"}
            ]}/>
            <div className={style.main__gen}>
                <h3>Зворотній зв`язок</h3>
                <br/>
                <p><b>МИ ЗНАХОДИМОСЬ ЗА АДРЕСОЮ:</b></p>
            </div>

            <div className={style.main__gen__block}>
                <div>
                    <img src={img}/>
                </div>
                <div>
                    <h6>Інтернет-магазин Black Chip</h6>
                    <p>м. Івано-Франківськ</p>
                </div>
                <div className={style.phone}>
                    <div>
                        <b>Телефон</b>
                        <p>(068)-463-24-36</p>
                    </div>
                    <div>
                        <b>Viber</b>
                        <p>(068)-463-24-36</p>
                    </div>
                </div>
                <div className={style.phone}>
                    <div>
                        <b>Режим роботи</b>
                        <p>З 9:00 до 18:00 В суботу та неділю вихідні дні</p>
                    </div>
                    <div>
                        <b>Додаткова інформація</b>
                        <p>Товар з магазину можна забрати після оформлення замовлення.</p>
                    </div>
                </div>

            </div>
            <div className={style.back_call}>
                <div>Зворотній зв`язок</div>
            </div>
            <div className={style.back_call__inf}>
                <div className={style.back_call__inf__item}>
                    <span className={style.back_call__inf__item__sp}>* Ваше ім`я: </span>
                    <span className={style.back_call__inf__item__in}><input type={'text'}/></span>
                </div>
                <div className={style.back_call__inf__item}>
                    <span className={style.back_call__inf__item__sp}>* E-Mail адреса: </span>
                    <span className={style.back_call__inf__item__in}><input type={'text'}/></span>
                </div>
                <div className={style.back_call__inf__item}>
                    <span className={style.back_call__inf__item__sp}>* Ваше повідомлення: </span>
                    <span className={style.back_call__inf__item__in}><textarea/></span>
                </div>

            </div>
            <div className={style.btn}>
                <Button variant="danger">Відправити</Button>
            </div>



        </div>
    );
};

export default Contacts;