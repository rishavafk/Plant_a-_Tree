import React, { useState } from 'react';
import { TreePine, Menu, X, Trophy, Users } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <TreePine className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">#TeamTreesNepal</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#trees" className="text-gray-700 hover:text-green-600 transition-colors">Plant Trees</a>
            <a href="#leaderboard" className="text-gray-700 hover:text-green-600 transition-colors flex items-center">
              <Trophy className="h-4 w-4 mr-1" />
              Leaderboard
            </a>
            <a href="#map" className="text-gray-700 hover:text-green-600 transition-colors">Locations</a>
            <a href="#impact" className="text-gray-700 hover:text-green-600 transition-colors">Impact</a>
            <a href="#founders" className="text-gray-700 hover:text-green-600 transition-colors flex items-center">
              <Users className="h-4 w-4 mr-1" />
              Founders
            </a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              <a href="#trees" className="px-2 py-1 text-gray-700 hover:text-green-600 transition-colors">Plant Trees</a>
              <a href="#leaderboard" className="px-2 py-1 text-gray-700 hover:text-green-600 transition-colors flex items-center">
                <Trophy className="h-4 w-4 mr-1" />
                Leaderboard
              </a>
              <a href="#map" className="px-2 py-1 text-gray-700 hover:text-green-600 transition-colors">Locations</a>
              <a href="#impact" className="px-2 py-1 text-gray-700 hover:text-green-600 transition-colors">Impact</a>
              <a href="#founders" className="px-2 py-1 text-gray-700 hover:text-green-600 transition-colors flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Founders
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;