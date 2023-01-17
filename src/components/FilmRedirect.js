import React, {useState} from "react";

const FilmRedirect=()=>{

    const handleClick=()=>{
        window.location.replace('https://www.imdb.com/calendar/?region=gb');
    }
    return(
        <button id="redirect-button" onClick={()=>handleClick()}>View More upcoming releases>></button>
    )
}

export default FilmRedirect;