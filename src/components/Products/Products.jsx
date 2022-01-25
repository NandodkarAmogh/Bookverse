import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles'

// const products = [
//     {
//         id: 1,
//         name: 'Shoes',
//         description: 'Running shoes',
//         price: 'Rs 1000',
//         image : 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
//     },
//     {
//         id: 2,
//         name: 'Macbook',
//         description: 'Apple Macbook',
//         price: 'Rs 10000',
//         image: 'https://images.unsplash.com/photo-1526570207772-784d36084510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
//     },
// ]

const Products = ({products}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justifyContent='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product = {product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
    

}

export default Products
