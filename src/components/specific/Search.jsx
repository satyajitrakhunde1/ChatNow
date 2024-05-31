import React, { useState } from 'react'; // Uncommented import of React
import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from "@mui/material";
import { useInputValidation } from '6pp'; // Corrected import statement
import { Search as SearchIcon } from '@mui/icons-material';
import UserItem from '../shared/UserItem';
import { SampleUsers } from '../constants/SampleData';

const Search = () => {
  const search = useInputValidation(""); // Corrected spacing
  // const users = [1, 2, 3]; // Fixed syntax error (removed extra commas)

let isLoadingSendFriendRequest =false
const [users, setusers] = useState(SampleUsers); 

const addFriendHandler =(id)=>{
console.log(id)
}

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField 
          label="" 
          value={search.value} 
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{ // Changed inputProps to InputProps
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <List>
          {users.map((i) => ( // Added key prop to ListItem
            <UserItem user={i} key={i._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest}/>
          ))}
        </List>
      </Stack>
    </Dialog>
  );
}

export default Search;
