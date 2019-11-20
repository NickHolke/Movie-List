import React from 'react';
const baseImgURL ='https://image.tmdb.org/t/p/w500'

let MovieInfo = function({movie, watchHandler}) {
    let [overview, rating, releaseDate, imgPath] = movie.info;
    return (
        <div id="movieInfo">
            <img src={baseImgURL + imgPath} id="thumbnail"></img>
            <b>Description:</b> {overview} <br></br>
            <b>Release Date: </b> {releaseDate} <br></br>
            <b>Rating</b>: {rating}
            <button className={movie.watched ? "selectedButton watchedButton" : "watchedButton"} 
            onClick={() => watchHandler(movie)}>Watched</button>
        </div>
    )
}

export default MovieInfo;