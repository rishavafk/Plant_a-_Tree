import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TreeCatalog from './components/TreeCatalog';
import Leaderboard from './components/Leaderboard';
import KathmanduMap from './components/KathmanduMap';
import Impact from './components/Impact';
import Founders from './components/Founders';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <Hero />
      <TreeCatalog />
      <Leaderboard />
      <KathmanduMap />
      <Impact />
      <Founders />
      <Footer />
    </div>
  );
}

export default App;