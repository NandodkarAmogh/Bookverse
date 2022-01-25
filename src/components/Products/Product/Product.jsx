import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'; 

import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles();

    console.log(product)

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title = {product.name} />
            <CardContent>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                <div className={classes.cardContent}>
                    {/* <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography> */}
                    <Typography variant='h7'>
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography variant='h7'>
                        {product.sku}
                    </Typography>
                    {/* <Typography dangerouslySetInnerHTML = {{ __html: product.description}} variant='body2' color='textSecondary' /> */}
                </div>
                <div className={classes.multiLineEllipsis}>
                    <Typography dangerouslySetInnerHTML = {{ __html: product.description}} variant='body2' color='textSecondary' />
                </div>
                
            </CardContent>
            <CardActions disableSpacing className = {classes.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart />
                </IconButton> 
            </CardActions>
        </Card>
    )
}

export default Product
