import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

//Styles
import style from '../../assets/style/scss/app/app.module.css';
//Components
import Header from "../header/header";
import Homepage from "../homepage/homepage";
import Catalog from "../catalog/catalog";
import Resistors from "../resistors/resistors";

const App = () => {
    return (

        <div>
            <BrowserRouter>
                <Header/>
                <Route path='/home' render={() => <Homepage/>}/>
                <Route path='/catalog' exact render={() => <Catalog/>}/>
                <Route path='/catalog/resistors'  render={() => <Resistors/>}/>

            </BrowserRouter>
        </div>
    )
}

export default App