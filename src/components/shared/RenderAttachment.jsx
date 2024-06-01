// import React from 'react'

import { FileOpen as FileOpenIcon } from "@mui/icons-material";
import { transformImage } from "../../lib/feature";

const RenderAttachment = (file,url) => {

switch (file) {
    case "video":
       return <video src={url} preload='none' width={"200px"}/>
        
        
    case "image":
       return <img src={transformImage(url)} alt="Attachment" width={"200px"} height={"150px"} style={{objectFit:"contain"}}/>
        

    case "audio":
       return <audio src={url} preload='none' controls/>
        

    default:
        <FileOpenIcon/>;
}


}

export default RenderAttachment