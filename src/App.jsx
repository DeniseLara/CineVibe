import './App.css'
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDarkMode } from './hooks/useDarkMode';

import HomePage from './pages/Home/HomePage'
import SearchPage from './pages/Search/SearchPage'
import FavoritePage from './pages/Favorites/FavoritesPage'
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/About/AboutPage'
import Movie from './pages/Home/Movie';
import Header from './components/Header/Header';

function App() {
  const location = useLocation(); // Detectar la ruta actual

  // Recuperar el estado del modo oscuro desde localStorage
  const [darkMode, setDarkMode] = useDarkMode();

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
