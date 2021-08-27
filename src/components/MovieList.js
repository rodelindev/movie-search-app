import React from 'react'
import Card from '../components/Card';

const MovieList = ({ data }) => {
    return (
        <div className="principal-container">
            {
                data && data.length > 0
                    ? data.map((res, index) =>
                        <Card
                            key={index}
                            id={res.imdbID}
                            poster={res.Poster}
                            title={res.Title}
                            year={res.Year}
                            type={res.Type}
                        />
                    ) : <h1 className="text-center">"You can search Movies or Series"</h1>
            }
        </div>
    )
}

export default MovieList
