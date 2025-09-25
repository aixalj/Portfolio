import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Polity from './pages/Polity.tsx';
import WellEasy from './pages/WellEasy.tsx';
import SI from './pages/SI.tsx';
import TBD from './pages/TBD/Block.tsx';
import Gumroad from './pages/Gumroad.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route
          path='/polity'
          element={<Polity onBack={() => window.history.back()} />}
        />
        <Route
          path='/welleasy'
          element={<WellEasy onBack={() => window.history.back()} />}
        />
        <Route
          path='/si'
          element={<SI onBack={() => window.history.back()} />}
        />
        <Route
          path='/tbd'
          element={<TBD onBack={() => window.history.back()} />}
        />
        <Route
          path='/gumroad'
          element={<Gumroad onBack={() => window.history.back()} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
