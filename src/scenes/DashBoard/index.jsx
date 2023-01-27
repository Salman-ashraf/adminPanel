import { Box, Stack } from '@mui/material'
import React from 'react'
import Headers from '../../components/Headers'

const DashBoard = () => {
  return (
<Box m='20px'>
    <Stack direction='row' justifyContent='space-betweeen' alignItems='center' >
    <Headers title='DashBoard' subtitle='Welcome to your DashBoard' ></Headers>
    </Stack>
</Box>
  )
}

export default DashBoard