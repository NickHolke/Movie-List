import React from 'react';
import MovieInfo from './movieInfo.jsx';

class Movie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            watched: this.props.movie.watched, 
            showDetails: false
        }
        this.onClicked = this.onClicked.bind(this);
    }

    onClicked() {
        this.setState((state) => {
            return {showDetails: !state.showDetails}
        })
    }

    render() {
        if (this.props.movie.watched) {
            return (
                <li><span id="movieTitle" onClick={this.onClicked}>{this.props.movie.title}</span> 
                    <button className="watchedButton selectedButton" onClick={this.props.watchHandler}>Watched</button>
                    {this.state.showDetails && <MovieInfo/>}
                </li>
             )
        } else {
            return (
                <li><span id="movieTitle" onClick={this.onClicked}>{this.props.movie.title}</span> 
                    <button className="watchedButton" onClick={this.props.watchHandler}>Watched</button>
                    {this.state.showDetails && <MovieInfo/>}
                </li>
            )
        }
    }
}

export default Movie;