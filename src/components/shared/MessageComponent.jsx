import React, { memo } from 'react'

const MessageComponent = ({message,user}) => {
const {sender, content, attachments=[],createdAt} =message
const sameSender =sender?._id===user._id
return (
    <div
    // msg right side or left side logic
    style={{alignSelf:sameSender ?"flex-end":"flex-start"}}> 
    
      Message components
    </div>
  )
}

export default memo(MessageComponent)
