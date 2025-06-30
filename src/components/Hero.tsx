
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
              Venkata Rohith
              <br />
              <span className="text-teal-400">Koppolu</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI & Java Enthusiast | Full Stack Developer
              <br />
              <span className="text-teal-400">Building Reliable Software for the Future</span>
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a
                href="mailto:22kq1a6147.aiml@gmail.com"
                className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              
              <a
                href="https://github.com/rohith-1008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://linkedin.com/in/venkata-rohith-koppolu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="tel:+918985856808"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-teal-400 shadow-2xl shadow-teal-400/20 animate-scale-in">
                <img
                  src="/lovable-uploads/a5bf3675-e1eb-4700-90a4-6f87432659b1.png"
                  alt="Venkata Rohith Koppolu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-teal-400" />
      </div>
    </section>
  );
};
