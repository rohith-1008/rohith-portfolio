
import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const Experience = () => {
  const achievements = [
    "Developed web applications using Java, Spring Boot, MySQL, HTML, and CSS",
    "Implemented real-world features across frontend and backend",
    "Gained hands-on experience with REST APIs and database integration",
    "Collaborated in agile-based workflows and contributed to UI enhancements"
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            <span className="text-teal-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="bg-slate-700 rounded-lg p-8 border-l-4 border-teal-400 hover:bg-slate-600 transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="bg-teal-500 p-4 rounded-lg">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Software Development Intern
                  </h3>
                  <p className="text-xl text-teal-400 font-semibold mb-2">42Learn</p>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    Apr 2024 – Jun 2024
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    Ongole
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
