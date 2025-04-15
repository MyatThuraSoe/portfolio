import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl" data-aos="fade-right">
          <img
              src="/mtrs-pic.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4" data-aos="fade-up">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="100">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl" data-aos="fade-up" data-aos-delay="200">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8" data-aos="fade-up" data-aos-delay="300">
              <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
                <span>{personalInfo.contact.email}</span>
              </a>
              <a href={`tel:${personalInfo.contact.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone size={24} />
                <span>{personalInfo.contact.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={24} />
                <span>{personalInfo.contact.address}</span>
              </div>
            </div>

            <a
              href="/MyatThuraSoe_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;