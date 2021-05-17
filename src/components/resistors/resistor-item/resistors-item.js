import React from 'react';
import style from "../../../assets/style/scss/resistors/resistors-item/resistor-item.module.css";
import {Button, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const ResistorsItem = (props) => {
    return (
        <div className={style.main}>
            <Card style={{ width: '16rem', height: "420px"}}>
                <Card.Img variant="top" src={'data:image/jpeg;base64,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'} style={{width: '100%', height:"170px"}} />
                <Card.Body>
                    <Card.Title>Резистор: {props.model}</Card.Title>
                    <Card.Text>
                        Опір: {props.opir} Ohm
                    </Card.Text>
                    <Card.Text>
                        Потужність: {props.power} Wt
                    </Card.Text>
                    <Card.Text>
                       <span className={style.price}><p>Ціна:  </p> <span><h5>{props.power} грн</h5></span></span>
                    </Card.Text>
                    <Button variant="danger" className={style.btn}>Купити <ShoppingCartIcon fontSize={'small'}/></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ResistorsItem;