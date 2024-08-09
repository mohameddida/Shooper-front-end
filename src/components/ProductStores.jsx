import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import { PlusOneOutlined } from "@mui/icons-material"; 
import { useCompare } from "../context/CompareContext";




export default function ProductStores(){

    const {supplier, setSupplier, handleCompare} = useCompare()

    const stores = [
       {store_id: "yt874", "name":  "AliExpress"},
        {store_id: "hj474", "name": "eBay"},
        {store_id: "tg666", "name": "Rakuten"},
        {store_id: "hy444", "name": "Walmart"},
        {store_id: "ht414", "name": "India usin"},
        {store_id: "vd654", name: "Overstock"},
        {store_id: "nb457", name: "Newegg"}
    ]





    return (
        <Grid component='div' container gap={1} md={12} display='grid'>

            {stores.map(store => 
                <Grid item display='flex' alignItems='center' justifyContent='space-between' bgcolor='#fff' boxShadow='1px 1px 1px #ccc' p={2}  borderRadius={1}>
                    <Box>
                        <Typography variant="h6" fontFamily='Poppins'>{store.name}</Typography>
                    </Box>

                    <Box>
                        <Typography variant="body1"></Typography>


                        <Button type="button" onClick={() => handleCompare(store, 1545)}>
                            {supplier.find(s => s.store_id == store.store_id && s.productId == 1545) ? 'Remove from compre' : 'Add to compare'}


                        </Button>


                        <Button>Button</Button>

                    </Box>

                </Grid>
            )}

        </Grid>
    )



}