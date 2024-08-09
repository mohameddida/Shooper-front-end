import { Grid, ListItem, Paper, Stack, Typography, Button, Box, List } from "@mui/material";

import React from "react";
import SupplieProductInfo from "./SupplierProductDetails";



export default function SupplierInfo() {

    const prod_name = 'MSI THIN GF63 12VR-022FR'
    const price = 1500;

    const prod_id = 88555874717

    const sku = 'sku'

    const supplier = 'Amazon'





    return (
        <Grid container item display='flex' md={12} my={5} p={5} bgcolor='#ffff' borderRadius={5} boxShadow='0 5px 5px rgba(0, 0, 0, 0.2)'>
            <Grid item md={7} display='flex' mx='auto' alignItems='center'>

                <img src="amazon_logo.png" style={{ border: '1px solid #ccc', borderRadius: '50%', width: '50px', height: '50px' }} />
                <Typography variant="body2" fontWeight={200}>{supplier}</Typography>
            </Grid>
            <Grid mx='auto' item md display='flex' alignItems='center' justifyContent='space-around'>
                <Typography fontWeight={600}>{price}$</Typography>
                <Button variant="container" sx={{textTransform: 'capitalize', fontWeight: 600}}>Add to compare</Button>

                <Button variant="contained" size="medium" sx={{ background: '#001219', border: '.1px solid #001219', '&:hover': { bgcolor: "transparent", color: '#000' } }}>button</Button>

            </Grid>



            <Grid container item md={12} mt={5}>
                <SupplieProductInfo price={price}sku={sku}/>

                <Grid md={4} p={2}>
                    <img src="laptop.webp" width='100%' style={{ borderRadius: 10 }} />

                </Grid>

            </Grid>


        </Grid>
    )
}