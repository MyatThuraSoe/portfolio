import React from 'react';
import { skills } from '../data';
import { Code2, Brain, Sparkles, Frame, LayoutTemplate, FileJson, Server, Network, Leaf, Coffee, Smartphone, Database, GitBranch, Box, Cloud } from 'lucide-react';

const iconMap = {
  Frame,
  LayoutTemplate,
  Code2,
  FileJson,
  Server,
  Network,
  Leaf,
  Coffee,
  Smartphone,
  Database,
  GitBranch,
  Box,
  Cloud
};

const About = () => {
  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName as keyof typeof iconMap];
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-4 relative inline-block"
            data-aos="fade-up"
          >
            About Me
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            I am a passionate Full-Stack Web Developer with experience in building scalable web applications
            using modern technologies. My expertise spans across frontend and backend development, with a
            strong focus on the MERN stack, Spring Boot, and Android development with Kotlin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div 
            className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">
              Writing clean, maintainable, and efficient code is my top priority. I follow best practices and design patterns.
            </p>
          </div>

          <div 
            className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-600">
              I enjoy tackling complex problems and finding elegant solutions through analytical thinking.
            </p>
          </div>

          <div 
            className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Always exploring new technologies and approaches to create better user experiences.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 
            className="text-2xl font-bold text-center mb-12 relative inline-block"
            data-aos="fade-up"
          >
            Technical Expertise
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4">
                  <h4 className="text-lg font-semibold text-white">{skillGroup.category}</h4>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          {getIcon(skill.icon)}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
          <p className="text-lg opacity-90 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;