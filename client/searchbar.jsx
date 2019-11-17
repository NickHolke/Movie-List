import React from 'react';

let SearchBar = function({searchHandler}) {
    return (
        <div id="search">
            <input id="searchbar" type="text" placeholder="Search..."></input>
            <button id="searchbutton" onClick={searchHandler}>Search</button>
        </div>
    )
}

export default SearchBar;