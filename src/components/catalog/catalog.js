import React from 'react';
import CatalogItem from "./catalog-item/catalog-item";

import style from '../../assets/style/scss/catalog/catalog.module.css'
import CategoryBar from "../homepage/category-bar/category-bar";

const Catalog = () => {
    return (
        <div className={style.main}>
            <div className={style.main__leftbar}>
                <CategoryBar/>

            </div>
            <div className={style.main__content}>
                <CatalogItem/>
            </div>
        </div>
    );
};

export default Catalog;