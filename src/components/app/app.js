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
import Busket from "../basket/busket";
import Condensators from "../condensators/condensators";
import CondensatorsInfoPage from "../condensators/condensators-info-page/condensators-info-page";
import Transistors from "../transistors/transistors";
import TransistorsInfoPage from "../transistors/transistors-info-page/transistors-info-page";
import Rele from "../rele/rele";
import ReleInfoPage from "../rele/rele-info-page/rele-info-page";
import Modems from "../modems/modems";
import ModemInfoPage from "../modems/modem-info-page/modem-info-page";

const App = () => {

    const [resID, setResID] = useState(0)

    const data_res = require('../../data/resistors.json')
    const data_cond = require('../../data/condensators.json')
    const data_tran = require('../../data/transistors.json')
    const data_rele = require('../../data/rele.json')
    const data_modem = require('../../data/modems.json')
    const [arr,setArr] = useState([])



    return (

        <div>
            <BrowserRouter>
                <Header data={arr}/>
                <Route path='/home' render={() => <Homepage/>}/>
                <Route path='/basket' render={() => <Busket data={arr}/>}/>
                <Route path='/catalog' exact render={() => <Catalog/>}/>
                <Route path='/catalog/resistors'  exact render={() => <Resistors setResID={setResID}/>}/>
                <Route path='/catalog/resistors/:id' render={() => <ResistorInfoPage data={data_res[resID]}
                                                                                     arr={arr}
                                                                                     setArr={setArr}
                />}  />

                <Route path='/catalog/condensators'  exact render={() => <Condensators setResID={setResID}/>}/>
                <Route path='/catalog/condensators/:id' render={() => <CondensatorsInfoPage data={data_cond[resID]}
                                                                                            arr={arr}
                                                                                            setArr={setArr}
                />}  />

                <Route path='/catalog/transistors'  exact render={() => <Transistors setResID={setResID}/>}/>
                <Route path='/catalog/transistors/:id' render={() => <TransistorsInfoPage  data={data_tran[resID]}
                                                                                            arr={arr}
                                                                                            setArr={setArr}
                />}  />

                <Route path='/catalog/rele'  exact render={() => <Rele setResID={setResID}/>}/>
                <Route path='/catalog/rele/:id' render={() => <ReleInfoPage  data={data_rele[resID]}
                                                                             arr={arr}
                                                                             setArr={setArr}
                />}  />

                <Route path='/catalog/modems'  exact render={() => <Modems setResID={setResID}/>}/>
                <Route path='/catalog/modems/:id' render={() => <ModemInfoPage  data={data_modem[resID]}
                                                                                arr={arr}
                                                                                setArr={setArr}
                />}  />

            </BrowserRouter>
        </div>
    )
}

export default App