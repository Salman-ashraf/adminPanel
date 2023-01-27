import { IconButton, InputBase, Stack, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { ColorModeContext, tokens } from '../context/theme'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

import { Box } from '@mui/system';

const AppBaar = () => {
 const theme=useTheme();
 const colors=tokens(theme.palette.mode);
 const colorMode=useContext(ColorModeContext);

  return (
   <Stack>
   <Stack  direction='row' justifyContent='space-between' p={2}>

    {/* Serch Bar */}
    <Box
     display='flex'
     backgroundColor={colors.primary[400]}
     borderRadius='3px'
    >
    
    <InputBase
    sx={{ml:2,flex:1,}}
    placeholder='Search'
    />
    
    <IconButton type='button' sx={{p:1}}>
        <SearchIcon/>
    </IconButton>

        </Box>

        <Stack direction='row'>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode=='dark'?
            <DarkModeIcon/>:
            <LightModeIcon/>
            }
            </IconButton>
            
            
            
          

            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <IconButton>

<SettingsIcon/>
</IconButton>
            <IconButton>

                <PersonIcon/>
            </IconButton>
        </Stack>
   </Stack>
   
   <Stack>
      
   </Stack>
   </Stack>
  )
}

export default AppBaar