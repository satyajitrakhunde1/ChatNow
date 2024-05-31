import { Avatar, Button, Dialog, DialogTitle, Stack, TextField, Typography } from "@mui/material";
import React ,{useState} from 'react';
import { SampleUsers } from "../constants/SampleData";
import UserItem from '../shared/UserItem'; // Make sure UserItem is exported correctly in its file
import { useInputValidation } from "6pp";

const NewGroup = () => {

const groupName =useInputValidation("")

const [Members, setMembers] = useState(SampleUsers);
const [selectedMembers, setselectedMembers] = useState([]);

  const selectMemberHandler = (id) => { 
  //  setMembers(prev=>prev.map(user=>user._id===id?{...user,isAdded:!user.isAdded}:user)) 
    setselectedMembers(prev =>(prev.includes(id)) ? prev.filter((i)=>i!==id): [...prev,id])
  };
  // console.log(selectedMembers)

  const submitHandler = (id) => {};

const closeHandler =()=>{}

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">New Group</DialogTitle>

        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler} />
        
        <Typography variant="body1" marginTop={"1rem"}>Members</Typography>
        
        <Stack>
          {Members.map((i) => (
            <UserItem user={i} key={i._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)}/>
          ))}
        </Stack>
        
        <Stack direction={"row"}  justifyContent={"space-between"} marginTop={"1rem"}>
          <Button variant="outlined" color="error" size="large">Cancel</Button>
          <Button variant="contained" size="large" onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
