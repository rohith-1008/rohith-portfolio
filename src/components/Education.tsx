
import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: "B.Tech – Artificial Intelligence & Machine Learning",
      institution: "Pace Institute of Technology and Sciences, Ongole",
      period: "Oct 2022 – Present",
      grade: "CGPA: 9.3",
      status: "current"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College, Ongole",
      period: "Jul 2020 – May 2022",
      grade: "Percentage: 92%",
      status: "completed"
    },
    {
      degree: "SSC",
      institution: "Sree Surya Vidyaniketan, Ongole",
      period: "Jun 2019 – Jun 2020",
      grade: "Percentage: 97%",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            <span className="text-teal-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 border-l-4 ${
                edu.status === 'current' ? 'border-teal-400' : 'border-gray-600'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      edu.status === 'current' ? 'bg-teal-500' : 'bg-slate-600'
                    }`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-300 mb-2">{edu.institution}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar size={16} />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2 text-teal-400">
                          <Award size={16} />
                          {edu.grade}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {edu.status === 'current' && (
                  <div className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Current
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
