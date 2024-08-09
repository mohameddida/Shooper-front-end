import React from "react";
import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Rating, Typography} from '@mui/material'

import prods from './prods'
import ProductCard from "./cards/ProductCard";










export default function SimilarProducts(){

     
    return(
        <>
        <Typography variant="h5" fontWeight={600} mt={5} position='sticky'>Similar products</Typography>

        <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}  position='relative'>

        <Grid container item spacing={0}  display='flex' flexWrap='nowrap' bgcolor=''>
                {
                    prods.map((prod, index) => {
                    
                        
                        return (
                            <Grid item mx={1}>
                            <ProductCard key={index} name={prod.name} price={prod.price} description={""} navigate={''} addProdToWishlist={''} card_width={230} />
                            
                            
                            </Grid>)
                    })

                }
            
        </Grid>
        </Box>

        </>
        
    )

}