import {
    Close as CloseIcon,
    Dashboard as DashboardIcon,
    ExitToApp as ExitToAppIcon,
    Groups as GroupsIcon,
    ManageAccounts as ManageAccountsIcon,
    Menu as MenuIcon,
    Message as MessageIcon
} from '@mui/icons-material';
import { Box, Drawer, Grid, IconButton, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { Navigate, Link as RouterLink, useLocation } from "react-router-dom";
import { matblack } from '../constants/color';
  
  const Link = styled(RouterLink)`
    text-decoration: none;
    border-radius: 2rem;
    padding: 1rem 2rem;
    color: black;
    &:hover {
      color: rgba(0, 0, 0, 0.54); /* Text color fades a bit */
    }
  `;
  
  export const adminTabs = [
    { 
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <ManageAccountsIcon />,
    },
    {
      name: "Chats",
      path: "/admin/chats",
      icon: <GroupsIcon />,
    },
    {
      name: "Messages",
      path: "/admin/messages",
      icon: <MessageIcon />,
    }
  ];
  
  const Sidebar = ({ w = "100%" }) => {
    const location = useLocation();

const logoutHandler =()=>{}


    return (
      <Stack width={w} direction={"column"} p={"3rem"} spacing={3}>
        <Typography variant="h5" textTransform={"uppercase"}>Chat Now</Typography>
        <Stack spacing={"2rem"}>
          {adminTabs.map((tab) => (
            <Link 
              key={tab.path} 
              to={tab.path} 

sx={location.pathname ===tab.path && {
    bgcolor:matblack,
    color:"white",
    "&:hover": {
        color: "white",
      },
}}

            >
              <Stack 
                direction={"row"} 
                alignItems={"center"} 
                spacing={1} 
                sx={{
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    cursor: "pointer",
                    color: "rgba(0, 0, 0, 0.54)" /* Text color fades a bit */
                  }
                }}
              >
                {tab.icon}
                <Typography variant="body1">{tab.name}</Typography>
              </Stack>
            </Link>
          ))}

<Link 
             
onClick={logoutHandler}

            >
              <Stack 
                direction={"row"} 
                alignItems={"center"} 
                spacing={1} 
                sx={{
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    cursor: "pointer",
                    color: "rgba(0, 0, 0, 0.54)" /* Text color fades a bit */
                  }
                }}
              >
               <ExitToAppIcon/>
               <Typography>Logout</Typography>
                
              </Stack>
            </Link>

        </Stack>
      </Stack>
    );
  };
  const isAdmin =true

  const AdminLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
  
    const handleMobile = () => {
      setIsMobile(!isMobile);
    };
  
    const handleClose = () => {
      setIsMobile(false);
    };
  
    if (!isAdmin) {
        return <Navigate to="/admin" />;
      }

    return (
      <Grid container minHeight={"100vh"}>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            right: "1rem",
            top: "1rem",
          }}
        >
          <IconButton onClick={handleMobile}>
            {isMobile ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
  
        <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
          <Sidebar />
        </Grid>
  
        <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: "#b3e5fc" }}>
          {children}
        </Grid>
  
        <Drawer
          open={isMobile}
          onClose={handleClose}
          PaperProps={{ sx: { width: "50vw" } }}
        >
          <Sidebar />
        </Drawer>
      </Grid>
    );
  };
  
  export default AdminLayout;
  