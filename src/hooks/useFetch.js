import { useState, useEffect } from 'react';
import configEnv from '../config.json';

const useFetch = (keyword) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${configEnv.PUBLIC_URL}&s=${keyword}`)
            .then(res => res.json())
            .then((data) => {
                setData(data.Search);
            })
            .catch(
                (error) => {
                    console.log(error.toString());
                }
            );
    }, [keyword]);

    return { data }
}

export default useFetch
