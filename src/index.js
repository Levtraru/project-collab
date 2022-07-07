import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pokedex from './components/Pokeapp/Pokedex';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = '/' element={<App />}/>
      <Route path = 'pokedex' element={< Pokedex/>}/>
    </Routes>
  </BrowserRouter>
);


