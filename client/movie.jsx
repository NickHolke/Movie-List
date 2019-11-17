import React from 'react';

let Movie = function({movie, watchHandler}) {
    return (
        <li>{movie} <button className="watchedButton" onClick={watchHandler}>Watched</button></li>
    )
}


export default Movie;