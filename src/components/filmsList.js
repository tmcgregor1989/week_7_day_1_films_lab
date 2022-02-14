import React from 'react';
import Film from './films';

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return(
            <>
            <ul>
                <li>
            <a href={film.url}><Film title={film.title}/></a>
                </li>
            </ul>
            </>
        )
    })

    return(
        <>
        {filmNodes}
        </>
    )
}


export default FilmList;