import React, { useState } from 'react'
import { tokens } from '../context/theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PieChartOutLineOutlinedIcon from '@mui/icons-material/PieChartOutLineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Link } from 'react-router-dom';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from 'react-pro-sidebar';
import { IconButton, Stack, styled, Typography, useTheme } from '@mui/material';
import { HelpCenterOutlined, MenuOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';


const SideBaar = () => {

  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  const [isCollapsed,setIsCollapsed]=useState(false);
  const [selected,setSelected]=useState('Dashboard');
  const { collapseSidebar,collapsed } = useProSidebar();
const Item=({title,to,icon,selected,setSelected})=>{
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  return(<>
  <MenuItem
   active={selected===title}
  rootStyles={{color:colors.grey[100],backgroundColor:colors.primary[400]}}
  onClick={()=>setSelected(title)}
  icon={icon}
  component={<Link to={to} />}
  >

    <Typography>{title}</Typography>
  </MenuItem>
  </>)
}

  return (
<>
<div style={{ display: 'flex', height: '100%' ,}}>
      <Sidebar backgroundColor={colors.primary[400]} >
        <Menu
       menuItemStyles={{
        button: ({ level, active, disabled }) => {
          // only apply styles on first level elements of the tree
          if (level === 0)
            return {
              color: disabled ? '#f5d9ff' :colors.grey[100],
              backgroundColor:`${colors.primary[400]}`,
              '&:hover': {
                backgroundColor: `${colors.primary[500]}`,
                color:`${colors.blueAccent[500]}`
              },
            };
        },
      }}
      >
        
  
        <MenuItem 
        onClick={() => collapseSidebar()}
        icon={collapsed?<MenuOutlined/>:undefined}
        rootStyles={{
          margin:'10px 0px 20px 0px',
          color:`${colors.grey[100]}`
        
        }}
        >
          {!collapsed && (
            <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ml:'15px'}} >
              <Typography variant='h3' color={colors.grey[100]}>
                ADMINS
              </Typography>
              <IconButton >
                <MenuOutlined/>
              </IconButton>
            </Stack>
          )}

        </MenuItem>

              {/* User  */}
              {!collapsed && (
               <Stack>

               <Stack justifyContent='center' alignItems='center' >
                <img
                alt='Profile Picture'
                width='100px'
                height='100px'
                src="https://i.ibb.co/C1zBFqs/img1.jpg" 
                style={{cursor:'pointer',borderRadius:'50%'}}
                
                />
               </Stack>

<Box textAlign='center'>

  <Typography variant='h2' color={colors.grey[100]} fontWeight='bold' sx={{margin:'10px 0 0 0'}} >Salman Ch</Typography>
  <Typography variant='h5' color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
</Box>
               </Stack>)}
             
        

          {/* <SubMenu defaultOpen rootStyles={{margin:'15px 0 5px 10px ',color:`${colors.grey[300]}`}} label="" rootStyles={{paddingLeft:collapsed?undefined:'10%'}}> */}
          <Box paddingLeft={collapsed?undefined:'10%'} backgroundColor={colors.primary[400]} >
          <Item
               
               title='DashBoard'
               to='/'
               icon={<HomeOutlinedIcon/>}
               selected={selected}
               setSelected={setSelected}

              / >
        </Box>
    {/* </SubMenu> */}


    <SubMenu icon={<ArrowCircleRightOutlinedIcon/>} defaultOpen  rootStyles={{margin:collapsed?undefined:'15px 0 5px 10px ',color:`${colors.grey[300]}`}} label="Data"> 
    <Box paddingLeft={collapsed?undefined:'10%'} backgroundColor={colors.primary[400]} >
             
             
             <Item
               title='Manage Team'
               to='/team'
               icon={<PeopleOutlinedIcon/>}
               selected={selected}
               setSelected={setSelected}
               />

<Item
               title='Contact Information'
               to='/contact'
               icon={<ContactsOutlinedIcon/>}
               selected={selected}
               setSelected={setSelected}
               />


<Item
               title='Invoices Balances'
               to='/invoices'
               icon={<ReceiptOutlinedIcon/>}
               selected={selected}
               setSelected={setSelected}
               />
        </Box>
    </SubMenu>
    <SubMenu icon={<PagesOutlinedIcon/>} defaultOpen rootStyles={{margin:collapsed?undefined:'15px 0 5px 10px ',color:`${colors.grey[300]}`}} label="Pages"> 
    <Box paddingLeft={collapsed?undefined:'10%'} backgroundColor={colors.primary[400]} >
             
          
<Item
               title='Profile Form'
               to='/form'
               icon={<PersonOutlinedIcon/>}
               selected={selected}
               setSelected={setSelected}
               />


<Item
               title='Calendar'
               to='/calendar'
               icon={<CalendarTodayOutlinedIcon/>}
               selected={selected}
               setSelected={setSelected}
               />

<Item
               title='FAQ Page'
               to='/faq'
               icon={<HelpCenterOutlined/>}
               selected={selected}
               setSelected={setSelected}
               />
                   </Box>
    </SubMenu>
    <SubMenu icon={<InsertChartOutlinedOutlinedIcon/>} defaultOpen rootStyles={{margin:collapsed?undefined:'15px 0 5px 10px ',color:`${colors.grey[300]}`}} label="Charts"> 
    <Box paddingLeft={collapsed?undefined:'10%'} backgroundColor={colors.primary[400]} >
      
               <Item
               title='Bar Chart'
               to='/bar'
               icon={<BarChartOutlinedIcon/>}
               selected={selected}
               setSelected={setSelected}
               />
               <Item
               title='Pie Chart'
               to='/pie'
               icon={<PieChartOutLineOutlinedIcon/>}
               selected={selected}
               setSelected={setSelected}
               />
                <Item
               title='Line Chart'
               to='/line'
               icon={<StackedLineChartIcon/>}
               selected={selected}
               setSelected={setSelected}
               />

               <Item
               title='GeoGraphy Chart'
               to='/geo'
               icon={<MapOutlinedIcon/>}
               selected={selected}
               setSelected={setSelected}
               />

</Box>
    </SubMenu>

     

        </Menu>
      </Sidebar>
   
    </div>
</>
  )


}

export default SideBaar