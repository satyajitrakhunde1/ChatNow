import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { SampleUsers } from "../constants/SampleData";
import UserItem from "../shared/UserItem";

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  const [Members, setMembers] = useState(SampleUsers);
  const [selectedMembers, setselectedMembers] = useState([]);
  
  const selectMemberHandler = (id) => { 
    setselectedMembers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const addMemberSubmitHandler = () => {
   closeHandler()
  };

  const closeHandler = () => {
    setselectedMembers([]);
    setMembers([]);
  };

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {Members.length > 0 ? (
            Members.map((i) => (
              <UserItem
                key={i.id}
                user={i}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          ) : (
            <Typography>No Friends</Typography>
          )}
        </Stack>

        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
          <Button color="error" onClick={closeHandler}>Cancel</Button>
          <Button variant="contained" disabled={isLoadingAddMember} onClick={addMemberSubmitHandler}>
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
