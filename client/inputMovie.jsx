import React from 'react';

let InputMovie = function(props) {

    return (
        <div id="inputField">
            <input id="inputBar" type="text" placeholder="Add a movie here"></input>
            <button id="inputButton" onClick={props.inputHandler}>Add Movie</button>
        </div>
    );
}

export default InputMovie