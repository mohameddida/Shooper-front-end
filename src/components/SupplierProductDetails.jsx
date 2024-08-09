import { Box, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'




export default function SupplieProductInfo({ price, sku }) {




    return (
        <Grid container item md={8}>
            <Grid item md={7} display='flex' alignItems='center' justifyContent='start'>
                <Typography typography='h6'>Title: </Typography>

                <Typography variant='h6' fontWeight={600} mx={1}>Gaming laptop</Typography>
            </Grid>
            <Grid item md={5}>
                <Typography variant='body1' fontWeight='600'>{price}$</Typography>

            </Grid>

            <Grid item md={12} display='flex' alignItems='center' justifyContent='center'>
                <Box>
                    <Typography variant='body1' fontWeight={600}>Discount: </Typography>

                </Box>

                <Box mx={2}>
                    <Typography variant='body2' display='flex'alignItems='center'>compare art price: 40

                        <Box mx={1} gap={2} display='flex' alignItems='center' bgcolor='#000' color='#fff' borderRadius={1} p={1}><Typography variant='body2' sx={{textDecoration: 'line-through'}}>$40.00 USD</Typography>
                           <Typography variant='body1'>$29 USD</Typography>
                        </Box>
                    </Typography>
                    <Typography variant='body2'>discount: 10.1</Typography>
                    <Typography variant='body2'>discount: percentage: 25.25</Typography>
                    <Typography variant='body2'>price: 1000</Typography>
                </Box>



            </Grid>


            <Grid item md={7}>
                SKU: {sku}

            </Grid>

            <Grid item md={5}>
                Available

            </Grid>

            <Grid item md={12} display='grid' gap={1}>



                <Box display='flex'>
                    <Typography variant="body1" fontWeight={600}>Tax: </Typography><Typography mx='auto'>25%</Typography>
                </Box>

                <Box display='flex'><Typography variant="body1" fontWeight='600'>Shipping:</Typography> </Box>

                <Box display='flex'><Typography variant="body1" fontWeight='600'>Weight:</Typography> </Box>

                <Box display='flex'><Typography variant="body1" fontWeight='600'>Product publish: </Typography></Box>
                <Box display='flex'><Typography variant="body1" fontWeight='600'>Product last update:</Typography> </Box>
                <Box display='flex'><Typography variant="body1" fontWeight='600'>Options:</Typography> </Box>



            </Grid>

        </Grid>
    )
}