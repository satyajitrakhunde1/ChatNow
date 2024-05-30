import React, { memo } from "react";
import { Link } from "../styles/StyledComponent";
import { Stack, Typography,Box } from "@mui/material";
import { Widgets, WidthFull } from "@mui/icons-material";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  samesender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChatOpen,
}) => {
console.log("newMessageAlert.count ",newMessageAlert)
console.log("is online   ",isOnline)

  return (
    <Link  sx={{padding:"0"}} to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChatOpen(e,_id,groupChat)} >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: samesender ? "black" : "unset",
          color: samesender ? "white" : "unset",
          position: "relative",
        }}
      >
        {/* {avatar.card} */}

        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "lightGreen",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem); 
