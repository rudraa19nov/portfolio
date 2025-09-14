import React from 'react';
import { skills } from '../data/portfolioData';

interface SkillCardProps {
  name: string;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  return (
    <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-105">
      <div className="text-center">
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {name}
        </h3>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, color: 'from-blue-600 to-purple-600' },
    { title: 'Backend', skills: skills.backend, color: 'from-purple-600 to-pink-600' },
    { title: 'Tools & Other', skills: skills.tools, color: 'from-emerald-600 to-blue-600' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Technologies I use for {category.title.toLowerCase()} development
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;