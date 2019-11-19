import React from 'react';
import SearchBar from './searchbar.jsx';
import InputMovie from './inputMovie.jsx';
import Tabs from './tabs.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [
            ],
            activeTab: 'All Movies'
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.tabHandler = this.tabHandler.bind(this);
        this.watchHandler = this.watchHandler.bind(this);
    }

    searchHandler() {
        let query = document.querySelector('#searchbar').value;
        document.querySelector('#searchbar').value = '';

        let displayedMovies = this.state.movies.map((movie) => {
            if (!movie.title.toLowerCase().includes(query.toLowerCase())) {
                movie.show = false;
            } else {
                movie.show = true;
            }
            return movie;
        })

        this.setState({movies: displayedMovies}); 
    }

    inputHandler() {
        let title = document.querySelector('#inputBar').value;
        let newMovie = [{title: title, show: true, watched: false}];
        document.querySelector('#inputBar').value = '';

        this.setState((state) => {
            return {movies: state.movies.concat(newMovie)}
        })
    }

    tabHandler(e) {
        let tabs = document.querySelectorAll('.tabs');
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].classList.contains('selectedTab')) {
                tabs[i].classList.remove('selectedTab');
            }
        }
        e.target.classList.add("selectedTab");

        let displayedMovies = this.state.movies.map((movie) => {
            movie.show = true;
            return movie;
        })

        this.setState({movies: displayedMovies, activeTab: e.target.innerHTML});
    }

    watchHandler(currentMovie) {
        let watchedMovies = this.state.movies.map((movie) => {
            if (movie.title === currentMovie.title) {
                movie.watched = !movie.watched
            }
            return movie;
        })
        this.setState({movies: watchedMovies}); 
    }

    render() {
        return (
            <div>
                <SearchBar searchHandler={this.searchHandler}/>
                <InputMovie inputHandler={this.inputHandler}/>
                <div className="tabs selectedTab" id="allTab" onClick={this.tabHandler}>All Movies</div>
                <div className="tabs" id="watchedTab" onClick={this.tabHandler}>Watched</div>
                <div className="tabs" id="notWatchedTab" onClick={this.tabHandler}>Not Watched</div>

                <Tabs activeTab={this.state.activeTab} movies={this.state.movies} watchHandler={this.watchHandler}/>
            </div>
        )
    }
}

export default App;