import React from 'react';
import { skills } from '../data/skills';

export const SkillsBelt: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
        Technologies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills[0].items.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="group relative bg-[#1a1f35]/40 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 
                     hover:-translate-y-1 skill-card-glow"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#674cff]/10 to-[#9333ea]/10 
                            rounded-lg group-hover:from-[#674cff]/20 group-hover:to-[#9333ea]/20 transition-colors duration-300">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} logo`}
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </div>
            <div className="absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 skill-card-border"></div>
          </div>
        ))}
      </div>
    </div>
  );
}