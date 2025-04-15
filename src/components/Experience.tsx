import React from 'react';
import { experiences, education } from '../data';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12" data-aos="fade-up">
          Experience & Education
        </h2>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2" data-aos="fade-up">
            <Briefcase className="text-blue-600" />
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-8 border-l-2 border-blue-200 pb-8 last:pb-0"
                data-aos="fade-up"
              >
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0" />
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900">{exp.company}</h4>
                  <p className="text-blue-600 font-medium">{exp.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{exp.duration}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2" data-aos="fade-up">
            <GraduationCap className="text-blue-600" />
            Education
          </h3>
          {education.map((edu) => (
            <div
              key={edu.id}
              className="relative pl-8 border-l-2 border-blue-200"
              data-aos="fade-up"
            >
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0" />
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold text-gray-900">{edu.school}</h4>
                <p className="text-blue-600 font-medium">{edu.degree}</p>
                <p className="text-gray-600 text-sm mb-2">{edu.duration}</p>
                {/* <p className="text-gray-700">{edu.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;