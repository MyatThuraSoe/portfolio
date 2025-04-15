import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '../data';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href={`tel:${personalInfo.contact.phone}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone size={18} />
                <span>{personalInfo.contact.phone}</span>
              </a>
              <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={18} />
                <span>{personalInfo.contact.email}</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                <span>{personalInfo.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by {personalInfo.name} © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;