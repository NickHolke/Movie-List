import React from 'react';
import Movie from './movie.jsx';
import SearchBar from './searchbar.jsx';
import InputMovie from './inputMovie.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [
            ]
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.showAllHandler = this.showAllHandler.bind(this);
    }

    searchHandler(e) {
        let query = document.querySelector('#searchbar').value;
        document.querySelector('#searchbar').value = '';

        let displayedMovies = this.state.movies.map((movie) => {
            if (!movie.title.toLowerCase().includes(query.toLowerCase())) {
                movie.show = false;
            }
            return movie;
        })

        this.setState({movies: displayedMovies}); 
    }

    inputHandler(e) {
        let title = document.querySelector('#inputBar').value;
        let newMovie = [{title: title, show: true}];
        document.querySelector('#inputBar').value = '';

        this.setState((state) => {
            return {movies: state.movies.concat(newMovie)}
        })
    }

    showAllHandler() {
        let displayedMovies = this.state.movies.map((movie) => {
            movie.show = true;
            return movie;
        })

        this.setState({movies: displayedMovies}); 
    }

    render() {
        return (
            <div>
                <SearchBar searchHandler={this.searchHandler}/>
                <InputMovie inputHandler={this.inputHandler} showAllHandler={this.showAllHandler}/>
                <ul>
                    {console.log(this.state)}
                    {this.state.movies.length === 0 ? 'Add a movie' : this.state.movies.map((movie, idx) => {
                        if (movie.show) {
                            return <Movie movie={movie.title} key={idx}/>
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default App;