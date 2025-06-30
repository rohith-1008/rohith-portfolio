
import React from 'react';
import { ExternalLink, Github, Shield, CheckSquare } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Insurance Claim Management System",
      description: "Built a secure web application to manage insurance claims, policies, and customers. Integrated Spring Security for authentication, developed REST APIs, and connected to MySQL for seamless data handling.",
      tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Spring Security"],
      icon: Shield,
      github: "https://github.com/rohith-1008",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AuraDo – Advanced To-Do List Web App",
      description: "AuraDo is a responsive, lightweight productivity app with dynamic task filtering and drag-and-drop, due date sorting and dark mode, persistent localStorage to save user data.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: CheckSquare,
      github: "https://github.com/rohith-1008",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            <span className="text-teal-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-all duration-300 hover:scale-105 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700 text-teal-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
