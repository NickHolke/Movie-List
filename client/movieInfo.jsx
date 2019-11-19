import React from 'react';

let MovieInfo = function({movie, watchHandler}) {
    return (
        <div>Movie info placeholder
            <button className={movie.watched ? "selectedButton watchedButton" : "watchedButton"} 
            onClick={() => watchHandler(movie)}>Watched</button>
        </div>
    )
}

export default MovieInfo;