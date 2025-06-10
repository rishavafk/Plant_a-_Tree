import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Heart, TreePine, Target, Users, Trophy, MapPin, Award } from 'lucide-react';

const Home = () => {
  const progress = 64.2; // 12,847 out of 20,000 target

  const features = [
    {
      icon: Heart,
      title: 'Easy Donations',
      description: 'Simple, secure donations with multiple payment options including UPI and cards.'
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Watch your trees grow on our interactive map of Nepal with live updates.'
    },
    {
      icon: Trophy,
      title: 'Leaderboards',
      description: 'Compete with friends and see top contributors making a difference.'
    },
    {
      icon: Award,
      title: 'Impact Reports',
      description: 'Get detailed reports on environmental impact and tree growth progress.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <TreePine className="h-20 w-20 text-green-400 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Plant a <span className="text-green-400">Tree</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Nepalis in reforesting our beautiful country. Every donation plants a tree and creates a greener future for Nepal.
          </p>

          {/* Progress Bar */}
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 mb-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-full p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-800 font-semibold">Progress to Goal</span>
                <span className="text-gray-800 font-bold">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span className="font-semibold text-green-600">12,847 trees planted</span>
                <span>Goal: 20,000 trees</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/donate"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              <Heart className="h-6 w-6 mr-2" />
              Plant Trees Now
            </Link>
            <Link 
              to="/map"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <MapPin className="h-6 w-6 mr-2" />
              View Live Map
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">12,847</div>
              <div className="text-sm text-gray-300">Trees Planted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">8,492</div>
              <div className="text-sm text-gray-300">Donors</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">₹32L</div>
              <div className="text-sm text-gray-300">Raised</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-green-600">Plant a Tree</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We make tree planting simple, transparent, and impactful. Join our mission to reforest Nepal with cutting-edge technology and community spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-green-50 to-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                  <feature.icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <TreePine className="h-16 w-16 text-green-200 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Every tree you plant helps combat climate change, supports biodiversity, and creates a better future for Nepal. Start your impact today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/donate"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Planting Trees
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;