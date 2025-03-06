import './App.css'
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HomePage from './components/Home/HomePage'
import SearchPage from './components/Search/SearchPage'
import { Routes, Route } from 'react-router-dom';
import FavoritePage from './components/Favorites/FavoritesPage'
import Navbar from './components/Search/Navbar';
import AboutPage from './components/About/AboutPage'
import { useState, useEffect } from 'react';
import Movie from './components/Home/Movie';
import { useLocation } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // Detectar la ruta actual

  // Cambiar el estado de darkMode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

   // Usamos un efecto para agregar o quitar clases dependiendo del estado de darkMode
   useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const isMoviePage = location.pathname.startsWith('/movie/');


  return (
    <div className='app'>

{!isMoviePage && (
      <nav className='nav'>
        <Link to="/about" className='logo'>CineVibe</Link>
        <div className="mode-toggle">
          <label className="switch">
            <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
            <span className="slider"></span>
          </label>
        </div>
        </nav>
              )}

      <Navbar/>

      <div className='path'>
    <Routes>
     <Route  path='/' element={<HomePage/>}/>

      <Route  path='/search' element={<SearchPage/>}/>

      <Route  path='/favorites' element={<FavoritePage/>}/>

      <Route  path='/about' element={<AboutPage/>}/>

     <Route  path='/movie/:movieId' element={<Movie/>}/>

    </Routes>
    </div>
    </div>
  )
}

export default App
