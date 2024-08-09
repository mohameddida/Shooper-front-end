import { Grid, Box, Card, Rating, CardContent, Typography, CardActionArea, CardActions, Button, CardMedia, Pagination, TextField } from '@mui/material'
import React from 'react'
import prods from './prods.js'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import addProdToWishlist from '../services/addProductWishlist.js';
import FilterProducts from '../common/filterProducts.jsx';
import ProductCard from './cards/ProductCard.jsx';





export function Products() {


    const [paginationstep, setPaginationStep] = React.useState(1)



    const Icon = () => {
        return <FavoriteBorderIcon />


    }

    const navigate = useNavigate()

    const imgs = ['Tootltip.png', 'product_1.jpg', 'product_2.jpg', 'product_9.jpg', 'product_10.jpg', 'product_18.jpg', 'product_23.jpg', 'product_24.jpg']


    


    let i = -1;

    return (

        <>
        
            <Grid item width='100%' display='flex' alignItems='center' mx='auto' justifyContent= 'center'>

                
            <Typography variant='h4' fontWeight={600} fontFamily="Poppins, sans-serif" mx='auto'>Products</Typography>
            <FilterProducts />
               
              


            </Grid>
            <Grid item display='flex' mt={3} gap={2} flexWrap='wrap' justifyContent='center'>
                {
                    prods.slice((paginationstep - 1) * 6, (paginationstep - 1) * 6 + 6).map((prod, index) => {
                        i++;
                        
                        return <ProductCard key={index} name={prod.name} price={prod.price} description={""} navigate={navigate} addProdToWishlist={addProdToWishlist} card_width={300} />
                        
                    })

                }
            </Grid>

            <Pagination count={Math.ceil(prods.length / 6)} variant="outlined" sx={{ mx: 'auto', mt: 1.5 }} color="primary" onChange={(event, value) => setPaginationStep(value)} />


        </>
    )







}




