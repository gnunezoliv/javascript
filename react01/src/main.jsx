import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**1.- JSX debe tener UN SOLO elemento raiz */
createRoot(document.getElementById('root')).render (
<App/>   
);
