import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-950 dark:via-slate-900 dark:to-purple-950"
          >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <ThemeToggle />
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
            <div className="relative group">
                {/* Animated Gradient Blur */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 animate-pulse transition duration-1000"></div>

                {/* Profile Container */}
                <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                  <img
                    src="/profile.jpeg"
                    alt="Rudraksha Singh Chauhan"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Online Badge */}
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-gray-900 rounded-full animate-pulse"></div>
              </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-pulse">
            {personalInfo.name}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/30 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"          >
            <Mail className="w-5 h-5" />
            Contact Me
          </button>
          
         <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
          <button 
              className="group px-8 py-4 backdrop-blur-lg bg-white/20 dark:bg-white/5 border border-white/20 dark:border-white/10 text-gray-800 dark:text-gray-200 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
          </button>
        </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

     
      {/* Animated Background Decoration */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-400/20 dark:bg-blue-500/20 blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-400/20 dark:bg-purple-500/20 blur-3xl animate-pulse"></div>
  <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-pink-400/10 dark:bg-pink-500/10 blur-3xl animate-bounce"></div>

</div>
    </section>
  );
};

export default Hero;