import React from 'react'

import { Button } from '@mui/material'




export function Button1({text}){



    return (
        <Button variant='contained' size='small' sx={{px: 5, py: 2, fontWeight: 500, mx: 1, bgcolor: "#0F0F0F"}}  >

            {text}
        </Button>
    )
}