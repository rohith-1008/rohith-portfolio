
import React from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "C"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "Thymeleaf"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["Spring Boot", "MySQL", "REST APIs"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Spring Tool Suite", "Git", "MS Office Suite"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Telugu", level: "Native" }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            <span className="text-teal-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-slate-800 text-teal-400 px-3 py-1 rounded-full text-sm font-medium hover:bg-slate-600 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-teal-400" />
            Languages Known
          </h3>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4 text-center">
                <p className="text-white font-medium">{lang.name}</p>
                <p className="text-teal-400 text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
