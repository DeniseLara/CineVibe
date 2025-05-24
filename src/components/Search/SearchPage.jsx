import { useState, useRef } from 'react';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import './SearchPage.css';
import { searchMovies } from '../Home/api';  // Importa la función de búsqueda


function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'error' | 'success'
    const [errorMessage, setErrorMessage] = useState('');
    const abortControllerRef = useRef(null);
    
     // Ref para el contenedor de mensajes de resultados para manejar foco
    const resultsRef = useRef(null);
    const errorRef = useRef(null);

    const handleSearch = async (query) => {
        // Validar que no sea vacío o solo espacios
        if (!query.trim()) {
          setSearchResults([]);
          setErrorMessage('');
          setStatus('idle');
          return;
        }

        // Cancelar petición previa si existe
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }
        abortControllerRef.current = new AbortController();

        setStatus('loading');
        setErrorMessage('');

        try {
            const results = await searchMovies(query, { signal: abortControllerRef.current.signal });
            setSearchResults(results);
            setStatus('success');
            // Mover foco al contenedor de resultados después de búsqueda exitosa
            //setTimeout(() => resultsRef.current?.focus(), 0);
            } catch (error) {
            if (error.name === 'AbortError') {
            return;
         }
            setErrorMessage('Something went wrong. Please try again later.');
            setStatus('error');
            // Mover foco al mensaje de error
            setTimeout(() => errorRef.current?.focus(), 0);
        }
    };

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
                        <h2 className="no-search-message">¡Search for your favorite movies!</h2>
                        <p className="instructions">Enter a movie name in the search bar to get started.</p>
                    </div>
                )}
            </section>
        </div>
    );
}

export default SearchPage;