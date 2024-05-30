import { Avatar, Stack, Typography } from "@mui/material";
import {Face as FaceIcon, AlternateEmail as UserNameIcon,CalendarMonth as CalendarIcon} from "@mui/icons-material";
import React from "react";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
        alt="Profile Picture"
      />
      <ProfileCard 
        heading={"Bio"} 
        text={"random fe fe f efe "} 
      />
      <ProfileCard 
        heading={"username"} 
        text={"satyajit"} 
        icon={<UserNameIcon />}
      />
      <ProfileCard 
        heading={"Name"} 
        text={"Satyajit rakhunde"} 
        icon={<FaceIcon />}
      />
      <ProfileCard 
        heading={"Joined"} 
        text={moment('2024-05-30T17:55:10.605Z').fromNow()} 
        icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, icon, heading }) => (
  <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} color={"white"} textAlign={"center"}>
    {icon && icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"grey"} variant="caption">{heading}</Typography>
    </Stack>
  </Stack>
);

export default Profile;
