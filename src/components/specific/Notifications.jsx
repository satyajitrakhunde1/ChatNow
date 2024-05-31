// import React from 'react'

import { DialogTitle, Stack, Typography,Dialog } from "@mui/material"
import { SampleNotifications } from "../constants/SampleData"

const Notifications = () => {
  return (
  <Dialog open>
    <Stack p={{xs:"1rem",sm:"2rem"}} maxWidth={"25rem"}>
      <DialogTitle>Notifications</DialogTitle>
{
  SampleNotifications.length > 0 ?<></>:<Typography textAlign={"center"}>0 Notificatios</Typography>
}
      
    </Stack>
  </Dialog>
  
  )
}

export default Notifications
