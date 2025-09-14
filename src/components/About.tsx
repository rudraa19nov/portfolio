import React from 'react';
import { personalInfo } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>
            
            <div className="space-y-4">
              {personalInfo.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white mr-2">
                      {highlight.label}:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {highlight.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/20 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-orange-600 mb-1">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;