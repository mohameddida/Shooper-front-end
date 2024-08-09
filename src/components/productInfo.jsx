import { Box, Grid, Rating, Typography } from "@mui/material";
import React from "react";

import prods from '../components/prods'
import rateProducts from '../services/rateProduct'
import { Button1 } from "../button/button1";
import SelectedCompare from "../common/SelectedCompare";




export default function ProductInfo() {
    const description = "Msi Gamer THIN GF63 12VE-022FR laptop, Intel i7-12650H 10-core processor (up to 4.70 GHz, 24MB Intel Smart Cache), 32GB DDR4 RAM, 1TB NVMe SSD hard drive, NVIDIA GeForce RTX 4050 graphics card - 6GB GDDR6 , RED Backlit Keyboard, 15.6 FHD (2560x1600) @144Hz Screen."



    return (
        <Grid item display='flex' flexWrap='wrap' alignItems='start'>
            <Grid item mx='auto'>
                <img src='laptop.webp' width={450} style={{ borderRadius: 10, boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)' }} />

            </Grid>

            <Grid item mx='auto' md={6}>


                <Typography variant='h4' fontSize='48px' fontWeight={600}>{prods[0].name}</Typography>

                <Typography fontSize='18px' color='rgba(15, 12, 12, 1)' mt={2}>{description}</Typography>
                <Box display='flex' alignItems='center'>
                    <Typography gutterBottom variant="body2" component="div">
                        From
                    </Typography>
                    <Typography gutterBottom variant="h6" fontWeight='bold' ml={2}>
                        {prods[0].price}$
                    </Typography>

                </Box>
                <Box>
                    <Rating name="half-rating" defaultValue={3.5} precision={0.5} onChange={(e) => rateProducts(1254, e.target.value)} />

                </Box>





            </Grid>

            <Grid item  md={8} mx='auto' mt={2}>
                <Button1 text={"Shops"}></Button1>
                <Button1 text={"Description"}></Button1>
                <Button1 text={"Details"}></Button1>
            </Grid>

            

            <SelectedCompare />



        </Grid>
    )

}