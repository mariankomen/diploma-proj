import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

//Styles
import style from '../../assets/style/scss/app/app.module.css';
//Components
import Header from "../header/header";
import Homepage from "../homepage/homepage";
import Catalog from "../catalog/catalog";
import Resistors from "../resistors/resistors";
import ResistorInfoPage from "../resistors/resistor-info-page/resistor-info-page";

const App = () => {

    const [resID, setResID] = useState(0)

    const data_res = require('../../data/resistors.json')

    return (

        <div>
            <BrowserRouter>
                <Header/>
                <Route path='/home' render={() => <Homepage/>}/>
                <Route path='/catalog' exact render={() => <Catalog/>}/>
                <Route path='/catalog/resistors'  exact render={() => <Resistors setResID={setResID}/>}/>
                <Route path='/catalog/resistors/:id' render={() => <ResistorInfoPage data={data_res[resID]}/>}  />

            </BrowserRouter>
        </div>
    )
}

export default App