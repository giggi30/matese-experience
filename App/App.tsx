import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Home } from './pages/Home';
import { Itinerary } from './pages/Itinerary';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;