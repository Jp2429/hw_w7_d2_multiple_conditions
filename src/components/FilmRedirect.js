import React, {useState} from "react";

const FilmRedirect=()=>{
    const message="View More upcoming releases>>"
    const handleClick=()=>{
        window.location.replace('https://www.imdb.com/calendar/?region=gb');
        
    }
    return(
        <button id="redirect-button" onClick={()=>handleClick()}>{message}</button>
    )
}

export default FilmRedirect;