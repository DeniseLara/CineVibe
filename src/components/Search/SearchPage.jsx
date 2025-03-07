import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './SearchPage.css';
import MovieCard from './MovieCard';
import { searchMovies } from '../Home/api';  // 🔹 Importa la función de búsqueda


function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false); // Estado para saber si se está buscando

    const handleSearch = async (query) => {
        console.log("Buscando:", query); // Verifica si esta función se ejecuta
        setIsSearching(true); // Empieza a buscar
        try {
            const results = await searchMovies(query);
            setSearchResults(results);
        } catch (error) {
            console.error("Error buscando películas:", error);
        } finally {
            setIsSearching(false); // Termina la búsqueda
        }
    };

    return (
        <div className="search-page">
            <SearchBar onSearch={handleSearch} />

            <div className="movies-container">
                {isSearching ? (
                    <p className="loading-message">Searching...</p> // Mensaje de búsqueda
                ) : searchResults.length > 0 ? (
                    searchResults.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <div className="no-search-yet">
                        <p className="no-search-message">
                            ¡Search for your favorite movies!                      
                        </p>
                        <p className="instructions">
                        Enter a movie name in the search bar to get started.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchPage;