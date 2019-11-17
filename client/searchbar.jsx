import React from 'react';

let SearchBar = function(props) {
    return (
        <div id="search">
            <input id="searchbar" type="text" placeholder="Search..."></input>
            <button id="searchbutton" onClick={props.searchHandler}>Search</button>
        </div>
    )
}

export default SearchBar;