import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
    { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
    { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
    { name: 'Product 3', desc: 'Something else', price: '$6.51' },
    { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
    { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review(props) {
    const classes = useStyles();

    const sum = props.data.reduce(function (sum, {all_price}){
        return sum + all_price
    },0)


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Огляд замовлення
            </Typography>
            <List disablePadding>
                {props.data.map((product) => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.all_price} грн.</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Разом" />
                    <Typography variant="subtitle1" className={classes.total}>
                        {sum} грн.

                    </Typography>
                </ListItem>
            </List>



            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Доставка
                    </Typography>
                    <Typography gutterBottom>{props.name}</Typography>
                    <Typography gutterBottom>{props.name}</Typography>
                </Grid>


                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Деталі оплати
                    </Typography>
                    <Grid container>

                            <React.Fragment key={props.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{props.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{props.name}</Typography>
                                </Grid>
                            </React.Fragment>

                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}