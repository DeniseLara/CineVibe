import { useState, useEffect } from 'react';
import { getMovieDetails, getMovieCredits, getMovieVideos } from '../services/api';

export function useMovieDetails(movieId) {
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState([]);
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    if (!movieId) return; // Evita llamadas innecesarias

    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);

        const movieCredits = await getMovieCredits(movieId);
        setActors(movieCredits.cast ? movieCredits.cast.slice(0, 5) : []);

        const videoKey = await getMovieVideos(movieId);
        setVideoKey(videoKey || null);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return { movie, actors, videoKey };
}

