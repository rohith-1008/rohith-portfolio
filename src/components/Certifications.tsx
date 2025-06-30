
import React from 'react';
import { Award, Trophy, Users, Zap } from 'lucide-react';

export const Certifications = () => {
  const certifications = [
    { title: "C Programming", provider: "Codetantra", icon: Award },
    { title: "Python", provider: "Codetantra", icon: Award },
    { title: "Data Structures & Algorithms", provider: "Infosys Springboard", icon: Award },
    { title: "AI/ML Virtual Internship", provider: "Eduskills", icon: Award },
    { title: "Generative AI Virtual Internship", provider: "Eduskills", icon: Award }
  ];

  const activities = [
    { title: "Google Developer Group (GDG) Member", organization: "PACE IT", icon: Users },
    { title: "MATLAB Workshop Participant", organization: "Technical Training", icon: Zap },
    { title: "Technical Quiz Winner", organization: "IEEE Workshop", icon: Trophy }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Achievements & <span className="text-teal-400">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-teal-400" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <cert.icon className="w-8 h-8 text-teal-400" />
                    <div>
                      <h4 className="text-lg font-medium text-white">{cert.title}</h4>
                      <p className="text-gray-400">{cert.provider}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-teal-400" />
              Extracurricular Activities
            </h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <activity.icon className="w-8 h-8 text-teal-400" />
                    <div>
                      <h4 className="text-lg font-medium text-white">{activity.title}</h4>
                      <p className="text-gray-400">{activity.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
