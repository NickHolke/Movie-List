import React from 'react';
import Movie from './movie.jsx';

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
    }

    render() {
        return (
            <div>
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