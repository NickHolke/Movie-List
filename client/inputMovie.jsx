import React from 'react';

let InputMovie = function({inputHandler, showAllHandler}) {

    return (
        <div id="inputField">
            <input id="inputBar" type="text" placeholder="Add a movie here"></input>
            <button id="inputButton" onClick={inputHandler}>Add Movie</button>
            <button id="showAllButton" onClick={showAllHandler}>Show all movies</button>
        </div>
    );
}

export default InputMovie