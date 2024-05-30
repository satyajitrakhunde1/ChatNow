import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { blue } from "../constants/color";
// import React from 'react'
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
const SearchDialog =lazy(()=>import('../specific/Search'))
const NotificationDialog =lazy(()=>import('../specific/Notifications'))
const NewGroupDialog =lazy(()=>import('../specific/NewGroup'))

const Header = () => {
  const Navigate = useNavigate();
  const [ismobile, setismobile] = useState(false);
  const [issearch, setIssearch] = useState(false);
  const [isNewgroup, setIsNewgroup] = useState(false);
  const [isnotification, setIsnotification] = useState(false); 


  const handlemobile = () => {setismobile((prev)=>!prev)};
  const openSearch = () => {setIssearch((prev)=>!prev)};
  const openNewGroup = () => {setIsNewgroup((prev)=>!prev)};
  const openNotification = () => {setIsnotification((prev)=>!prev)};
  const navigateToGroup = () => {
    Navigate("/groups");
  };
  const logouthandler = () => {};

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: blue }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chat Now
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handlemobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Tooltip title="search user">
                <IconButton
                  color="inherit"
                  size="large "
                  onClick={openSearch}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="New Group">
                <IconButton color="inherit" size="large" onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Manage Groups">
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={navigateToGroup}
                >
                  <GroupIcon />
                </IconButton>
              </Tooltip>
              
              <Tooltip title="Notifications">
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={openNotification}
                >
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Logout">
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={logouthandler}
                >
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

{/* {issearch && <Suspense fallback={<div>Loading...</div>}/> <SearchDialog/> </Suspense>} */}
{issearch && (
        <Suspense fallback={<Backdrop open/>}>
          <SearchDialog /> 
        </Suspense>
      )}
{isnotification && (
        <Suspense fallback={<Backdrop open/>}>
          <NotificationDialog /> 
        </Suspense>
      )}
{isNewgroup && (
        <Suspense fallback={<Backdrop open/>}>
          <NewGroupDialog /> 
        </Suspense>
      )}


    </>
  );
};

export default Header;
