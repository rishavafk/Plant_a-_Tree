import React from 'react';
import { Users, Heart, TreePine, Target, Award, Globe, Linkedin, Twitter, Mail } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: 'Rishav Shah',
      role: 'Co-Founder & CEO',
      bio: 'Environmental advocate passionate about sustainable development and reforestation in Nepal. Leading the mission to make Nepal greener.',
      image: null,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'rishav@plantatree.np'
      },
      achievements: [
        'Led 15+ environmental campaigns',
        'Planted 5,000+ trees personally',
        'Environmental Science Graduate',
        'Climate Action Advocate'
      ]
    },
    {
      name: 'Sanjay Dudhaniya',
      role: 'Co-Founder & CTO',
      bio: 'Technology enthusiast using innovation to solve environmental challenges. Building the platform that connects donors with reforestation efforts.',
      image: null,
      achievements: [
        'Tech for Good advocate',
        'Full-stack developer',
        'Open source contributor',
        'Environmental tech pioneer'
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sanjay@plantatree.np'
      }
    }
  ];

  const milestones = [
    { year: '2023', title: 'Platform Launch', description: 'Launched Plant a Tree platform with first 1,000 trees planted' },
    { year: '2024', title: 'Major Growth', description: 'Reached 10,000+ trees planted across 15 locations in Nepal' },
    { year: '2024', title: 'Community Building', description: 'Built community of 8,000+ active donors and volunteers' },
    { year: '2024', title: 'Current Goal', description: 'Working towards 20,000 trees planted by end of 2024' }
  ];

  const stats = [
    { icon: TreePine, value: '12,847', label: 'Trees Planted', color: 'text-green-600' },
    { icon: Users, value: '8,492', label: 'Active Donors', color: 'text-blue-600' },
    { icon: Globe, value: '15', label: 'Locations', color: 'text-purple-600' },
    { icon: Award, value: '156 tons', label: 'CO₂ Absorbed', color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <TreePine className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">Plant a Tree</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to reforest Nepal, one tree at a time. Founded by passionate environmentalists, 
            we're building a sustainable future for our beautiful country through community-driven reforestation efforts.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <Target className="h-16 w-16 mx-auto mb-6 text-green-200" />
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
            "To restore Nepal's forest cover through technology-enabled community participation, creating lasting environmental 
            impact while building awareness about climate change and biodiversity conservation."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-200 mb-2">20,000</div>
              <div className="text-green-100">Trees Goal 2024</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-200 mb-2">75+</div>
              <div className="text-green-100">Districts Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-200 mb-2">100%</div>
              <div className="text-green-100">Transparency</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Founders */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-green-600">Founders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionaries behind Plant a Tree, dedicated to making Nepal greener and more sustainable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Image Placeholder */}
                <div className="h-80 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative">
                  {founder.image ? (
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl font-bold text-white">
                          {founder.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <p className="text-green-700 font-semibold">Photo Coming Soon</p>
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                    <p className="text-green-600 font-semibold text-lg mb-4">{founder.role}</p>
                    <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Award className="h-5 w-5 text-green-600 mr-2" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {founder.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex space-x-4">
                      <a 
                        href={founder.social.linkedin}
                        className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a 
                        href={founder.social.twitter}
                        className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a 
                        href={`mailto:${founder.social.email}`}
                        className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">Key milestones in our mission to reforest Nepal</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <Heart className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Every tree planted is a step towards a greener Nepal. Join thousands of environmentally conscious Nepalis 
            in making a lasting impact on our country's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Planting Trees
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;