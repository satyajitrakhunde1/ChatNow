// import React from 'react'
import { Box, Typography } from '@mui/material';
import AppLayout from '../components/layout/AppLayout'
import { grey } from '@mui/material/colors';

const Home = () => {
  return (
    <Box bgcolor={grey[300]}  height={"100%"} >
      <Typography p={"2rem"} variant='h5' textAlign={"center"}>
      Select a friend to chat
    </Typography>
    </Box>
  )
}

export default AppLayout()(Home);
