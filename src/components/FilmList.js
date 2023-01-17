import React, {useState} from "react";
import Films from "../components/Films.js";

const FilmList=({films})=>{

    const filmNodes=films.map(film=>{
        return(
            <li>
                <Films title={film.name} url={film.url} key={film.id}></Films>
            </li>
        )
    })

    return(
        <>
            {filmNodes}
        </>
    )
}

export default FilmList;