// import React from 'react'

import { DialogTitle, Stack } from "@mui/material"

const Notifications = () => {
  return (
  <Dialog open>
    <Stack p={{xs:"1rem",sm:"2rem"}} maxWidth={"25rem"}>
      <DialogTitle>Notifications</DialogTitle>
    </Stack>
  </Dialog>
  )
}

export default Notifications
