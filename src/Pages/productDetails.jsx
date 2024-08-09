import React from 'react'

import { Box, Grid, Rating, Typography } from '@mui/material'
import { Button1 } from '../button/button1'
import SupplierInfo from '../components/SupplierInfo'
import ProductInfo from '../components/productInfo'
import ProductStores from '../components/ProductStores'
import { useCompare } from '../context/CompareContext'
import SimilarProducts from '../components/SimilarProducts'
import ProductDescription from '../components/ProductDescription'





export default function ProductDetails() {

    const [btn, setBtn] = React.useState('dd')

    const { supplier } = useCompare()



    React.useEffect(() => {
        console.log(supplier)
    }, [supplier])



    return (

        <Grid container p={7} sx={{ height: '100%', bgcolor: '#f8f9fa' }}>
            <ProductInfo />
            {btn === 'description' ? <ProductDescription /> :
                btn === 'shops' ?
                    <ProductStores /> :


                    <SupplierInfo/>
            }


            <SimilarProducts />
        </Grid>
    )


}