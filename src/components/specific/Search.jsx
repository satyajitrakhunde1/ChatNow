// import React from 'react'
import { Dialog, DialogTitle, InputAdornment, List, Stack, TextField } from "@mui/material"
import {useInputValidation} from '6pp'
import {Search as SearchIcon} from '@mui/icons-material'

const Search = () => {
const search =useInputValidation("")

  return <Dialog open>
<Stack p={"2rem"} direction={"column"} width={"25rem"}>
  <DialogTitle textAlign={"center"}>Find People</DialogTitle>
  <TextField label="" value={search.value} onChange={search.changeHandler}
  variant="outlined"
  size="small"
  inputProps={{startAdornment:(<InputAdornment position="start"><SearchIcon/></InputAdornment>)}}
  />

</Stack>
  </Dialog>
}

export default Search
