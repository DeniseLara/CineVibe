import React, { useState } from 'react';
import './SearchBar.css';
import { IoSearch } from "react-icons/io5";


function SearchBar({ onSearch }) {  // 🔹 Aquí recibimos la prop onSearch
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !== '' && onSearch) {  // 🔹 Verificamos si onSearch existe
            onSearch(query);
        }
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Buscar película..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                className="search-input"
            />
            <button type="submit" className="search-button">
                <div className='search-icon'><IoSearch /></div>
            </button>
        </form>
    );
}

export default SearchBar;
