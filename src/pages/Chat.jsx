import React, { useRef } from 'react';
import { IconButton, Stack } from '@mui/material';
import AppLayout from '../components/layout/AppLayout'; // Ensure this path is correct
import { blue, grey, orange } from '@mui/material/colors'; // Importing grey color from Material-UI
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import {InputBox} from '../components/styles/StyledComponent'


const Chat = () => {
  const ContainerRef = useRef(null);

  return (
    <>
      <Stack
        ref={ContainerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grey[300]} // Using Material-UI grey color
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* Add your chat components here */}
      </Stack>
       <form style={{ height: "10%" }}>
        <Stack
          direction="row"
          alignItems="center"
          height={"100%"}
          padding={"1rem"}
          position={"relative"}
        >
          <IconButton sx={{position:"absolute",left:"1.5rem",rotate:"0deg"}}>
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder='Type Message Here...' />

          <IconButton type='submit' sx={{backgroundColor: blue[700], color: "white",marginLeft:"1rem",padding:"0.5rem","&:hover":{bgcolor:blue[900]} }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      
    </>
  );
};

export default AppLayout()(Chat);
