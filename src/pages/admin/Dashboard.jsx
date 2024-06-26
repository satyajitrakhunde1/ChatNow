import { AdminPanelSettings as AdminPanelSettingsIcon, Notifications as NotificationsIcon,Group as GroupIcon,Person as PersonIcon, Message as MessageIcon } from '@mui/icons-material';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import moment from 'moment';
import { SearchField, CurveButton } from '../../components/styles/StyledComponent';
import { DoughnutChart, LineChart } from '../../components/specific/Charts';

const Dashboard = () => {
  const Appbar = (
    <Paper elevation={3} sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}>
      <Stack direction={{ xs: "column", sm: "row" }} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
        <SearchField placeholder='Search...' sx={{ width: { xs: "100%", sm: "auto" } }} />
        <CurveButton sx={{ width: { xs: "100%", sm: "auto" } }}>Search</CurveButton>
        <Box flexGrow={1} />
        <Typography
          display={{ xs: "none", lg: "block" }}
          color={"rgba(0,0,0,0.7)"}
          textAlign={"center"}
        >
          {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </Typography>
        <NotificationsIcon />
      </Stack> 
    </Paper>
  );
  const Widgets = (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing="2rem"
      justifyContent="space-between"
      alignItems="center"
      margin="2rem 0"
    >
      <Widget title={"Users"} value={34}  Icon={<PersonIcon/>} />
      <Widget title={"Chats"} value={3}  Icon={<GroupIcon/>} />
      <Widget title={"Messages"} value={453} Icon={<MessageIcon/>} />
    </Stack>
  );
  

  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}

        <Stack direction={{xs:"column",lg:"row"}} gap={"2rem"} flexWrap={"wrap"} justifyContent={"center"} alignItems={{xs:"center",lg:"flex-start"}}>
<Paper elevation={3} sx={{padding:"2rem 3.5rem",borderRadius:"1rem",width:"100%",maxWidth:"45rem"}}>
     
    <Typography margin={"2rem 0"} variant='h4'>Last Messages</Typography>
    <LineChart value={[23,56,33,67,33,2]}/>
</Paper>
<Paper
  elevation={3}
  sx={{
    padding: "1rem",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "100%", sm: "50%" },
    position: "relative",
    maxWidth: "25rem",
    height:"25rem"
  }}
>
  <DoughnutChart labels={["Single chat","Group chats"]} value={[23,66]}/>

  <Stack
  position={"absolute"}
  direction={"row"}
  justifyContent={"center"}
  alignItems={"center"}
  spacing={"0.5rem"}
  width={"100%"}
  height={"100%"}
>
  <GroupIcon />
  <Typography>Vs</Typography>
  <PersonIcon />
</Stack>

</Paper>


        </Stack>
        {Widgets}
      </Container>
    </AdminLayout>
  );
}

const Widget = ({ title, value, Icon }) => (
    <Paper elevation={20} sx={{
        padding:"2rem",
        margin:"2rem 0",
        borderRadius:"1.5rem",
        width:"20rem"
    }}>
      <Stack alignItems={"center"} spacing={"1rem"}>
        <Typography sx={{
  color: "rgba(0,0,0,0.7)",
  borderRadius: "50%",
  border: "5px solid rgba(0,0,0,0.9)",
  width: "5rem",
  height: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}}
>{value}</Typography>
        <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}> 
          {Icon}
          <Typography>{title}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
  
  export default Dashboard;
  
