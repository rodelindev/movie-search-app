import { useState, useEffect } from 'react';
import configEnv from '../config.json';

const useMovieDetail = (imdbId) => {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetch(`${configEnv.PUBLIC_URL}&i=${imdbId}`)
            .then(res => res.json())
            .then((result) => {
                setDetail(result);
            }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );
    });

    return { detail }
}

export default useMovieDetail
