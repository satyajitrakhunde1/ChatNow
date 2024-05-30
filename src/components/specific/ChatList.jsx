import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineusers = [],
  newMessagesAlert = [{ chatId: "", count: 0 }],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;

        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId ===_id
        );

        // const isOnline = members?.some((member) => onlineusers.includes(_id));
        const isOnline = members?.some((member) => onlineusers.includes(member));
        // const isOnline =false is printing here
        console.log("list online",isOnline)
        return (
          <ChatItem
          index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            key={_id} // Adding a key prop for each ChatItem
            avatar={avatar} // Retained props to ensure proper rendering in case you need them in ChatItem
            _id={_id}
            name={name}
            groupChat={groupChat}
            samesender={chatId === _id}
            handleDeleteChatOpen={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
