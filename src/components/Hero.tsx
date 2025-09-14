import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-600 dark:text-gray-400">AJ</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </button>
          
          <button className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-400/20 to-blue-600/20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;