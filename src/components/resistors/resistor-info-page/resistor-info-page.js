import React from 'react';
import style from "../../../assets/style/scss/resistors/resistors-info/resistors-info.module.css";
import CategoryBar from "../../homepage/category-bar/category-bar";

const ResistorInfoPage = (props) => {
    return (
        <div className={style.main}>
            <div className={style.main__leftbar}>
                <CategoryBar/>
            </div>
            <div className={style.main__content}>
                {props.power}
            </div>
        </div>
    );
};

export default ResistorInfoPage;