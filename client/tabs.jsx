import React from 'react';
import Movie from './movie.jsx';

let Tabs = function({activeTab, movies, watchHandler}) {
    if (movies.length == 0) {
        return <ul>Add a movie</ul>;
    } else {
        if (activeTab === 'All Movies') {
            return (
            <ul>
                {movies.map((movie, idx) => {
                    if (movie.show) {
                        return <Movie movie={movie.title} watchHandler={watchHandler} key={idx}/>
                    }
                })
                }
            </ul>)   
        } else if (activeTab === 'Watched') {
            return (
            <ul>
                {movies.map((movie, idx) => {
                    if (movie.watched && movie.show) {
                        return <Movie movie={movie.title} watchHandler={watchHandler} key={idx}/>
                    }
                })}
            </ul>
            )   
        } else if (activeTab === 'Not Watched') {
            return (
                <ul>
                    {movies.map((movie, idx) => {
                        if (!movie.watched && movie.show) {
                            return <Movie movie={movie.title} watchHandler={watchHandler} key={idx}/>
                        }
                    })}
                </ul>
            )   
        }
    }
}

export default Tabs;