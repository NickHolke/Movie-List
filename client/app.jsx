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
    }

    searchHandler(e) {
        let query = document.querySelector('#searchbar').value;
        document.querySelector('#searchbar').value = '';

        let matches = [];
        for (let i = 0; i < this.state.movies.length; i++) {
            let title = this.state.movies[i].title.toLowerCase();
            if (title.includes(query.toLowerCase())) {
                matches.push(this.state.movies[i]);
            }
        }
        if (matches.length === 0) {
            alert('no movies by that name found');
        } else {
            this.setState({movies: matches})
        }
        
    }

    inputHandler(e) {
        let title = document.querySelector('#inputBar').value;
        let newMovie = [{title: title}];
        document.querySelector('#inputBar').value = '';

        this.setState((state) => {
            return {movies: state.movies.concat(newMovie)}
        })
    }

    render() {
        return (
            <div>
                <SearchBar searchHandler={this.searchHandler}/>
                <InputMovie inputHandler={this.inputHandler}/>
                <ul>
                    {console.log(this.state)}
                    {this.state.movies.length === 0 ? 'Add a movie' : this.state.movies.map((movie, idx) => {
                        return <Movie movie={movie.title} key={idx}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default App;