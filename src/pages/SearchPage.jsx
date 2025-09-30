import './SearchPage.css';
import { useRef } from 'react';
import { useMovieSearch } from '../hooks/useMovieSearch';

import SearchBar from '../components/search/SearchBar';
import MovieCard from '../components/movies/MovieCard';


function SearchPage() {
    const { searchResults, status, errorMessage, handleSearch } = useMovieSearch()
    // Ref para el contenedor de mensajes de resultados para manejar foco
    const resultsRef = useRef(null);
    const errorRef = useRef(null);

    return (
        <div className="search-page">
            <SearchBar onSearch={handleSearch} />
            {errorMessage && (
                <p
                    ref={errorRef}
                    tabIndex={-1} // Permite foco programático
                    className="error-message"
                    role="alert"
                    aria-live="assertive"
                >
                    {errorMessage}
                </p>
            )}

            <section 
                className="movies-container"
                ref={resultsRef}
                tabIndex={-1} // Foco programático para que lector de pantalla lo lea
                aria-live="polite"
                aria-atomic="true"
                role="region"
                aria-label="Search results"
                >

                {status === 'loading' && <p className="loading-message">Searching...</p>}

                {status === 'success' && searchResults.length > 0 && (
                    searchResults.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                )}

                {status === 'success' && searchResults.length === 0 && (
                    <div className="no-results">
                        <h2>No movies found</h2>
                        <p>Try searching with a different movie name.</p>
                    </div>
                )}

                {status === 'idle' && (
                    <div className="no-search-yet">
                        <h2 className="no-search-message">
                            ¡Search for your favorite movies!
                        </h2>
                        <p className="instructions">
                            Enter a movie name in the search bar to get started.
                        </p>
                    </div>
                )}
            </section>
        </div>
    );
}

export default SearchPage;