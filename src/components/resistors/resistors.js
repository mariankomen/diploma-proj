import React from 'react';
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import ResistorsItem from "./resistor-item/resistors-item";



const Resistors = () => {

    const data = require('../../data/resistors.json')

    let item = data.map(i => <ResistorsItem model={i.model}
                                            useful={i.useful}
                                            opir={i.opir}
                                            power={i.power}
                                            deviation={i.deviation}
                                            id={i.id}
                                            price={i.price}
    />)
    return (
        <div className={style.main}>
            <div className={style.main__leftbar}>
                <CategoryBar/>
            </div>
            <div className={style.main__content}>
                {item}
            </div>
        </div>
    )
}

export default Resistors;