import React, { useState } from 'react';
import './Home.css';
import SearchBar from '../components/SearchBar';
import useFetch from '../hooks/useFetch';
import MovieList from '../components/MovieList';

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const { data } = useFetch(keyword);

    const handleChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value);
    }

    return (
        <div className="contenedor">
            <SearchBar datakey={keyword} change={handleChange} />
            <MovieList data={data} />
        </div>
    )
}

export default Home
