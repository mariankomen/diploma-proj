import React, {useState} from 'react';
import style from "../../../assets/style/scss/resistors/resistors-item/resistor-item.module.css";
import {Button, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const TermistorItem = (props) => {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <div className={style.main}>
                <Card style={{ width: '16rem', height: "440px"}}>
                    <Card.Img variant="top" src={props.data.url} style={{width: '70%', height:"170px",margin: "0 auto"}} />
                    <Card.Body>
                        <Card.Title>Термістор: {props.data.model}</Card.Title>
                        <Card.Text>
                            Застосування: {props.data.usage}
                        </Card.Text>
                        <Card.Text>
                            Тип: {props.data.type}
                        </Card.Text>
                        <Card.Text>
                            <span className={style.price}><p>Ціна:  </p> <span><h5>{props.data.price} грн</h5></span></span>
                        </Card.Text>
                        <NavLink to={`/catalog/termistors/${props.data.id}`}><Button variant="danger"
                                                                                 className={style.btn}
                                                                                 onClick={() => {
                                                                                     setVisible(!visible)
                                                                                     props.setResID(props.data.id)
                                                                                 }}

                        >
                            Купити <ShoppingCartIcon fontSize={'small'}/>
                        </Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default TermistorItem;