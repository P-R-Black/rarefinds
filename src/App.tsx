import React from 'react';
import { Navigation } from './Components/NavFooterComponents/navigation/Navigation';
import { Footer } from './Components/NavFooterComponents/footer/Footer';
import './index.css'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
