import React from 'react';
import useMovieDetail from '../hooks/useMovieDetail';
import './Detail.css';

const Detail = (props) => {
    let id = props.match.params.movieid;
    const { detail } = useMovieDetail(id);
    const { Title, Poster, Year, Type } = detail;

    return (
        <div>
            <div className="title">
                <h1>{Title}</h1>
            </div>
            <div className="content-detail">
                <div className="poster-movie">
                    <img src={Poster} alt="" />
                </div>
                <div className="movie-description">
                    <p><strong>Year: </strong> {Year} </p>
                    <p><strong>Type: </strong> {Type} </p>
                    <p><strong></strong> </p>
                    <p><strong></strong> </p>
                    <p><strong>Actors: </strong> </p>
                </div>

            </div>
        </div>
    )
}

export default Detail
