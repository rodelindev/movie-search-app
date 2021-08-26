import React from 'react';
import './SearchBar.css'

const SearchBar = ({ datakey, change, submit }) => {

    return (
        <nav className="navbar">
            <div className="container-input">
                <form className="d-flex">
                    <input className="form-control" placeholder="Try writing 'Dragon Ball'" type="text"
                        value={datakey} onChange={change} />
                </form>
            </div>
        </nav>
    )
}

export default SearchBar
