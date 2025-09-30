import { useState, useEffect } from "react";
import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchComedyMovies,
  fetchRomanceMovies,
  fetchSeries,
} from '../services/api';

export function useHomeMovies() {
    const [isLoading, setIsLoading] = useState(true);
    const [moviesByCategory, setMoviesByCategory] = useState({
        trending: [],
        popular: [],
        comedy: [],
        romance: [],
        series: [],
    });
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
        try {
            const [trending, popular, comedy, romance, series] = await Promise.all([
                fetchTrendingMovies(),
                fetchPopularMovies(),
                fetchComedyMovies(),
                fetchRomanceMovies(),
                fetchSeries(),
            ]);
            setMoviesByCategory({ trending, popular, comedy, romance, series });
        } catch (error) {
            setError('Failed to load movies. Please try again later.');
        } finally {
            setIsLoading(false)
        }
    };

        fetchData();
    }, []);

    return { isLoading, moviesByCategory, error }
}