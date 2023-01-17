import React, {useState} from "react";

const Films=({title,url,children})=>{
    return(
        <a href={url}>{title}</a>
    )
}

export default Films;