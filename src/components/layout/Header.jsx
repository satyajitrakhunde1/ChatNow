import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import {blue} from '../constants/color'
import React from 'react'
import {Menu as MenuIcon,Search as SearchIcon,Add as AddIcon } from '@mui/icons-material'

const Header = () => {

    const handlemobile=()=>{

    }
    const openSearchDialog=()=>{

    }
    const openNewGroup=()=>{

    }
  return (
    <>
      <Box sx={{flexGrow:1}} height={"4rem"}>
        <AppBar position='static' sx={{bgcolor:blue}}>
<Toolbar>
<Typography variant='h6'sx={{display:{xs:"none",sm:"block"},}} >Chat Now</Typography>
     <Box sx={{display:{xs:"block",sm:"none"},}}>
        <IconButton color='inherit' onClick={handlemobile} >
            <MenuIcon/>
        </IconButton>
     </Box>
<Box sx={{flexGrow:1 }} />
<Box>
<IconButton color='inherit' size='large ' onClick={openSearchDialog} >
            <SearchIcon/>
        </IconButton>

<Tooltip title ="New Group">
<IconButton color='inherit' size='large' onClick={openNewGroup}><AddIcon/></IconButton>
</Tooltip>
</Box>

</Toolbar>

        </AppBar>


      </Box>
    </>
  )
}

export default Header
