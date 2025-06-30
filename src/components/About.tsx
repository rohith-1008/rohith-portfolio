
import React from 'react';
import { Code2, Database, Laptop, Brain } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Specialist",
      description: "Specializing in Artificial Intelligence and Machine Learning with strong academic foundation"
    },
    {
      icon: Code2,
      title: "Full Stack Developer",
      description: "Proficient in Java, Python, Spring Boot, and modern web technologies"
    },
    {
      icon: Database,
      title: "Backend Expert",
      description: "Experience with REST APIs, Spring Security, and database integration"
    },
    {
      icon: Laptop,
      title: "Problem Solver",
      description: "Passionate about creating impactful technologies that solve real-world problems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Venkata Rohith Koppolu, a passionate software engineering student specializing in 
              <span className="text-teal-400 font-semibold"> Artificial Intelligence and Machine Learning (AI/ML)</span>. 
              I thrive on building real-world software using Java, Python, Spring Boot, and frontend technologies 
              like HTML, CSS, and JavaScript.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing B.Tech in AI & ML with a <span className="text-teal-400 font-semibold">strong academic record (CGPA: 9.3)</span> 
              and hands-on development experience, I aim to create impactful technologies that solve real problems. 
              I love working on clean UIs, efficient backend logic, and building full-stack applications from scratch.
            </p>

            <div className="bg-slate-700 p-6 rounded-lg border-l-4 border-teal-400">
              <h3 className="text-xl font-semibold text-white mb-2">Career Objective</h3>
              <p className="text-gray-300">
                Aspiring software engineer with a strong foundation in AI/ML and full-stack development. 
                Eager to contribute to impactful software projects in a dynamic environment by leveraging 
                my skills in Java, Python, and modern web technologies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-105 group"
              >
                <item.icon className="w-12 h-12 text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
