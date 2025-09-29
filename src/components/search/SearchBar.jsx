import './SearchBar.css';
import { useEffect, useRef, useState } from 'react';
import { IoSearch } from "react-icons/io5";

function SearchBar({ onSearch }) {  
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !== '' && onSearch) {  
            onSearch(query);
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="search" className="visually-hidden">
                Search movie
            </label>
            <input 
                type="text" 
                id='search'
                ref={inputRef}
                name='search-movie'
                placeholder="Search for a movie..." 
                value={query} 
                aria-label="search movie"
                onChange={(e) => setQuery(e.target.value)} 
                className="search-input"
            />
            <button 
                type="submit" 
                className="search-button" 
                aria-label='search'
            >
                <div className='search-icon'>
                    <IoSearch />
                </div>
            </button>
        </form>
    );
}

export default SearchBar;
