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


                <div className={style.info}>
                    <div className={style.info__title}><h3>Резистор 1.2k МЛТ-0.125 200V</h3></div>
                    <div className={style.info__photo_desc}>
                        <div className={style.info__photo}>

                        </div>
                        <div className={style.info__desc}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResistorInfoPage;