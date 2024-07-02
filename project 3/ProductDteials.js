import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

function ProductDetails({ product }) {
  if (!product) return null;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            image="https://picsum.photos/200/300?random" // Replace with placeholder image
            alt={product.name}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="body2">Company: {product.company}</Typography>
            <Typography variant="body2">Category: {product.category}</Typography>
            <Typography variant="body2">Price: ${product.price}</Typography>
            <Typography variant="body2">Rating: {product.rating}</Typography>
            <Typography variant="body2">Discount: {product.discount}%</Typography>
            <Typography variant="body2">Availability: {product.available ? 'In Stock' : 'Out of Stock'}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProductDetails;
