import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

//createRoot(document.getElementById('root')).render(
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
