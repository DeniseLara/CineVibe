import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';

import { useDarkMode } from './hooks/useDarkMode';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import FavoritePage from './pages/FavoritesPage';
import Navbar from './components/navbar/Navbar';
import AboutPage from './pages/AboutPage';
import Movie from './pages/MovieDetails';
import Header from './components/header/Header';

function App() {
  const location = useLocation(); // Detectar la ruta actual
  const { darkMode, toggleDarkMode } = useDarkMode();

  const isMoviePage = location.pathname.startsWith('/movie/');

  return (
    <div className='app'>
     {!isMoviePage && <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}
      
    <Navbar/>

    <main className='path'>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/favorites' element={<FavoritePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/movie/:movieId' element={<Movie/>}/>
    </Routes>
    </main>
    </div>
  )
}

export default App;
