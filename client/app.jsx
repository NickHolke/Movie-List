import React from 'react';
import Movie from './movie.jsx';
import SearchBar from './searchbar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [
                {title: 'Mean Girls'},
                {title: 'Hackers'},
                {title: 'The Grey'},
                {title: 'Sunshine'},
                {title: 'Ex Machina'},
            ]
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(e) {
        e.preventDefault();
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

    render() {
        return (
            <div>
                <SearchBar searchHandler={this.searchHandler}/>
                <ul>
                    {this.state.movies.map((movie, idx) => {
                        return <Movie movie={movie.title} key={idx}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default App;