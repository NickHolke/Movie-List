import React from 'react';
import MovieInfo from './movieInfo.jsx';

// let Movie = function({movie, watchHandler}) {
//     if (movie.watched) {
//         return (
//             <li>{movie.title} <button className="watchedButton selectedButton" onClick={watchHandler}>Watched</button></li>
//         )
//     } else {
//         return (
//             <li>{movie.title} <button className="watchedButton" onClick={watchHandler}>Watched</button></li>
//         )
//     }
    
// }

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
                <li><span onClick={this.onClicked}>{this.props.movie.title}</span> 
                    <button className="watchedButton selectedButton" onClick={this.props.watchHandler}>Watched</button>
                    {this.state.showDetails && <MovieInfo/>}
                </li>
             )
        } else {
            return (
                <li><span onClick={this.onClicked}>{this.props.movie.title}</span> 
                    <button className="watchedButton" onClick={this.props.watchHandler}>Watched</button>
                    {this.state.showDetails && <MovieInfo/>}
                </li>
            )
        }
    }
}

export default Movie;