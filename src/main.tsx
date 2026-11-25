import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Polity from './pages/Polity.tsx';
import WellEasy from './pages/WellEasy.tsx';
import SI from './pages/AppleNews.tsx';
import TBD from './pages/TBD/Block.tsx';
import Gumroad from './pages/Gumroad.tsx';
import YellowBolts from './pages/YellowBolts.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/polity' element={<Polity />} />
        <Route path='/yellow-bolts' element={<YellowBolts />} />
        <Route path='/welleasy' element={<WellEasy />} />
        <Route path='/si' element={<SI />} />
        <Route path='/tbd' element={<TBD />} />
        <Route path='/gumroad' element={<Gumroad />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
