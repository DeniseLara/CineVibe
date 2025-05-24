import './App.css'
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import HomePage from './components/Home/HomePage'
import SearchPage from './components/Search/SearchPage'
import FavoritePage from './components/Favorites/FavoritesPage'
import Navbar from './components/Search/Navbar';
import AboutPage from './components/About/AboutPage'
import Movie from './components/Home/Movie';


function App() {
  const location = useLocation(); // Detectar la ruta actual

  // Recuperar el estado del modo oscuro desde localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  // Cambiar el estado de darkMode y guardarlo en localStorage
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode); // Guardamos en localStorage
  };

   // Usamos un efecto para agregar o quitar clases dependiendo del estado de darkMode
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    document.body.classList.toggle('light', !darkMode);
  }, [darkMode]);

  const isMoviePage = location.pathname.startsWith('/movie/');


  return (
    <div className='app'>
     {!isMoviePage && (
      <nav className='nav'>
        <Link to="/about" className='logo' title='logo'>CineVibe</Link>
        <div className="mode-toggle">
          {darkMode ? <FaMoon /> : <FaSun />}
          <label className="switch">
            <input type="checkbox" 
            onChange={toggleDarkMode} 
            checked={darkMode}
            aria-label="Toggle dark mode" 
            />
            <span className="slider"></span>
          </label>
        </div>
        </nav>
              )}

      <Navbar/>

      <div className='path'>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/favorites' element={<FavoritePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/movie/:movieId' element={<Movie/>}/>
    </Routes>
    </div>
    </div>
  )
}

export default App;
