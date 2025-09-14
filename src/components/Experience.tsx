import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { experience } from '../data/portfolioData';

interface ExperienceCardProps {
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  isLast: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  type,
  title,
  company,
  location,
  period,
  description,
  isLast
}) => {
  const Icon = type === 'work' ? Briefcase : GraduationCap;
  const iconColor = type === 'work' ? 'text-blue-600' : 'text-purple-600';
  const bgColor = type === 'work' ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-purple-50 dark:bg-purple-900/20';

  return (
    <div className="relative flex items-start space-x-6">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
      )}
      
      {/* Icon */}
      <div className={`flex-shrink-0 w-12 h-12 ${bgColor} rounded-full flex items-center justify-center relative z-10`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      
      {/* Content */}
      <div className="flex-grow pb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
              <Calendar className="w-4 h-4 mr-1" />
              {period}
            </div>
          </div>
          
          <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
            {company}
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise in software development.
          </p>
        </div>

        <div className="space-y-0">
          {experience.map((item, index) => (
            <ExperienceCard
              key={item.id}
              type={item.type as 'work' | 'education'}
              title={item.title}
              company={item.company}
              location={item.location}
              period={item.period}
              description={item.description}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;