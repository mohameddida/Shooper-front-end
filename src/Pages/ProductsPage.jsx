import React from "react"
import Filter from "../components/Filter"

import {Box, Grid, Pagination, useMediaQuery} from "@mui/material"
import {Products} from "../components/Products"

import customBreakpoints from "../breakpints"




export default function ProductPage(){

    const k = useMediaQuery(customBreakpoints.breakpoints.down('p1'))
    return(
        <Grid container sx={{background: '#f8f9fa', maxHeight: '100%', display: 'flex', flexWrap: 'wrap'}}>
            <Grid item md={!k  && 3} mx='auto'>
                <Filter />

            </Grid>



            <Grid container item pt={5} md={k ? 12 : 9}>
                <Products />

            </Grid>



        </Grid>
    )
}