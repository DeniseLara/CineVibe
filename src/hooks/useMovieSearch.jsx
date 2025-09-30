import { useState, useRef } from "react";
import { searchMovies } from "../services/api";

export function useMovieSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'error' | 'success'
  const [errorMessage, setErrorMessage] = useState('');
  const abortControllerRef = useRef(null);

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

  return {
    searchResults,
    status,
    errorMessage,
    handleSearch,
  }
}