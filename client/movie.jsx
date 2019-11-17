import React from 'react';

let Movie = function({movie, watchHandler}) {
    if (movie.watched) {
        return (
            <li>{movie.title} <button className="watchedButton selectedButton" onClick={watchHandler}>Watched</button></li>
        )
    } else {
        return (
            <li>{movie.title} <button className="watchedButton" onClick={watchHandler}>Watched</button></li>
        )
    }
    
}




export default Movie;