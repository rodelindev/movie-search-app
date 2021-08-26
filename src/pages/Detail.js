import React from 'react';
import useMovieDetail from '../hooks/useMovieDetail';
import './Detail.css';
import { Link } from "react-router-dom";

const Detail = (props) => {
    let id = props.match.params.movieid;
    const { detail } = useMovieDetail(id);
    const {
        Title,
        Poster,
        Type,
        Released,
        Country,
        imdbRating,
        Actors
    } = detail;

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
                    <div className="movie-data tags">
                        <p className="tag">{Released}</p>
                        <p className="tag">{Country}</p>
                        <p className="tag">{Type}</p>
                    </div>

                    <p>
                        <strong>IMDB Rating:</strong>
                        <br />
                        <br />
                        <span className="tag-style">
                            <i className="fas fa-star detailStar"></i>{imdbRating} / 10
                        </span>
                    </p>
                    <p className="actors">
                        <strong>Actors: </strong>
                        <br />
                        <br />
                        {Actors}
                    </p>
                    <div>
                        <button className="button-style" >
                            <Link to={`/`} className="home-button" >
                                Return to home
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Detail
