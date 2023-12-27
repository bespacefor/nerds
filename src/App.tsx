import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { AuthPage } from './pages/AuthPage';
import { DetailsPage } from './pages/DetailsPage';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='' element={<MainPage />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
