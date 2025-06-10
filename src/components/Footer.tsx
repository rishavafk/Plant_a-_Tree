import React from 'react';
import { TreePine, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="about" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <TreePine className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">#TeamTreesNepal</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Founded by Rishav Shah and Sanjay Dudhaniya, we're on a mission to plant 20,000 trees across Kathmandu Valley. 
              Join thousands of donors in creating a sustainable future for Nepal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#trees" className="block text-gray-300 hover:text-green-400 transition-colors">Plant Trees</a>
              <a href="#leaderboard" className="block text-gray-300 hover:text-green-400 transition-colors">Leaderboard</a>
              <a href="#map" className="block text-gray-300 hover:text-green-400 transition-colors">Locations</a>
              <a href="#impact" className="block text-gray-300 hover:text-green-400 transition-colors">Our Impact</a>
              <a href="#founders" className="block text-gray-300 hover:text-green-400 transition-colors">Meet Founders</a>
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors">Track Donation</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Founders</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">founders@teamtreesnepal.org</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+977-1-4567890</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <span className="text-sm">Thamel, Kathmandu<br />Nepal 44600</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              <Heart className="h-4 w-4 mr-2 text-green-400" />
              © 2024 TeamTrees Nepal. Founded by Rishav Shah & Sanjay Dudhaniya. Making Kathmandu greener, one tree at a time.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;