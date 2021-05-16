import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

//Styles
import style from '../../assets/style/scss/app/app.module.css';
//Components
import Header from "../header/header";

const App = () => {
    return (

        <div>
            <BrowserRouter>
                <Header/>
                <Route path='/' render={() => {}}/>

            </BrowserRouter>
        </div>
    )
}

export default App