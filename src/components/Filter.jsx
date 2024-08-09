import React from 'react'

import { Select, Grid, Box, Typography, Autocomplete, TextField, Slider, Avatar } from '@mui/material'

import SelectInput from '@mui/material/Select/SelectInput';

import '../styles/Filter.css'



export default function Filter() {

    const [value, setValue] = React.useState([0, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Grid className='container-filter'  position='fixed' left='0' zIndex={999}  maxWidth='100%' width='auto' container flexDirection='column' display='flex' p={5} bgcolor='#f8f9fa' >

            <Box sx={{mb: {md: 1}}} display='flex' alignItems='center' bgcolor='rgba(217, 217, 217, 1);' borderRadius={3} p={1.5}>
                <Avatar alt='user avatar' src='avatar_25.jpg' />
                <Typography variant='h6' className='user-full-name'>Rached Souihi</Typography>
            </Box>
            <Box sx={{my: {md: 1}}}>
                <Typography variant='subtitle1' className='country-typo'>country</Typography>

                <Autocomplete
                    
                    disablePortal
                    id="combo-box-demo"
                    options={countries}
                    sx={{ width: 280}}
                    size='small'
                    blurOnSelect='mouse'
                    
                    renderInput={(params) => <TextField {...params}/>}
                />

            </Box>

            <Box sx={{my: {sm: '', md: ''}}}>
                <Typography variant='subtitle1' className='price-typo'>price</Typography>

                <Box sx={{ width: 280 }}>
                    <Slider
                        sx={{color: 'rgba(0, 0, 0, 1)'}}
                        //getAriaLabel={() => 'Temperature range'}
                        size='small'
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        //getAriaValueText={valuetext}
                    />
                </Box>
            </Box>




        </Grid>
    )



}

const countries = [
    { label: "Tunisia" },
    { label: "USA" },
    { label: 'Germany' },
    { label: 'France' },
    { label: 'Spain' },
    { label: "Canada" }
]