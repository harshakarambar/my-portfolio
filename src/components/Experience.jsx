'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'Accelerlab Technologies Pvt. Ltd',
    duration: 'Jan 2023 - Mar 2023',
    description: 'Created structured and responsive web pages using HTML and CSS. Learned accessibility and mobile-friendly design principles.',
    tags: ['HTML', 'CSS', 'Responsive Design'],
  },
  {
    role: 'Backend Development Intern',
    company: 'Accelerlab Technologies Pvt. Ltd',
    duration: 'Apr 2023 - Jun 2023',
    description: 'Developed secure backend modules using PHP and MySQL. Worked on authentication, data processing, debugging, and deployment support.',
    tags: ['PHP', 'MySQL'],
  },
  {
    role: 'Front-End Development Intern',
    company: 'Webodaya (in association with Accelerlab)',
    duration: 'Jul 2023 - Sep 2023',
    description: 'Enhanced front-end skills by building interactive components using JavaScript and React.js. Worked on DOM manipulation and ES6+ features.',
    tags: ['JavaScript', 'React.js', 'UI Development'],
  },
  {
    role: 'Cybersecurity Intern',
    company: 'TechCiti Technologies Pvt. Ltd',
    duration: 'Nov 2024 - Feb 2025',
    description: 'Identified security vulnerabilities, analyzed logs, studied cyber threats, and assisted in improving overall system security.',
    tags: ['Security', 'Threat Analysis', 'Log Monitoring'],
  },

];

export default function Experience() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
          Experience
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          My journey includes a set of valuable experiences that have helped me grow and build a strong foundation.
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform sm:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex gap-6 sm:gap-0 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="sm:w-1/2 pl-8 sm:pl-0 sm:pr-8">
                  <motion.div
                    className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">{exp.duration}</p>
                    <p className="text-slate-300 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="flex justify-center sm:w-auto">
                  <motion.div
                    className="w-4 h-4 bg-blue-500 rounded-full absolute left-0 sm:relative mt-2 sm:mt-6 border-4 border-slate-950"
                    whileInView={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div className="sm:w-1/2 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
