import React from 'react';

let MovieInfo = function({movie, watchHandler}) {
    let [overview, rating, releaseDate] = movie.info;
    return (
        <div id="movieInfo">
            <b>Description:</b> {overview} <br></br>
            <b>Release Date: </b> {releaseDate} <br></br>
            <b>Rating</b>: {rating}
            <button className={movie.watched ? "selectedButton watchedButton" : "watchedButton"} 
            onClick={() => watchHandler(movie)}>Watched</button>
        </div>
    )
}

export default MovieInfo;