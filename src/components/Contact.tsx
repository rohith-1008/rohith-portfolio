
import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "22kq1a6147.aiml@gmail.com",
      href: "mailto:22kq1a6147.aiml@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 89858 56808",
      href: "tel:+918985856808"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "venkata-rohith-koppolu",
      href: "https://linkedin.com/in/venkata-rohith-koppolu"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "rohith-1008",
      href: "https://github.com/rohith-1008"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-teal-500 p-3 rounded-lg group-hover:bg-teal-400 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-slate-700 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-white font-medium">Location</span>
              </div>
              <p className="text-gray-300">Ongole, Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="bg-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-gray-400">
            © 2024 Venkata Rohith Koppolu. Built with passion and code.
          </p>
        </div>
      </div>
    </section>
  );
};
