'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  
  {
    title: 'Programming',
    icon: '💻',
   skills: ['Python', 'Java', 'PHP', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚙️',
    skills: ['React.js', 'Bootstrap'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['MySQL'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'Postman', 'Linux'],
  },
  {
    title: 'Concepts & Practices',
    icon: '📚',
    skills: ['REST APIs', 'MVC', 'SDLC', 'Agile', 'Debugging'],
  },
  {
   title: 'Soft Skills',
    icon: '🤝',
    skills: ['Communication', 'Problem Solving', 'Teamwork', 'Adaptability','Time Management']
  },

];

export default function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
          My Skills
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          A collection of my current skills that I continue to grow and refine over time.
        </p>

        {/* KEY CHANGES HERE:
           1. Changed lg:grid-cols-4 to lg:grid-cols-3 (matches your 3 items)
           2. Added justify-center to help with odd numbers on tablet views
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    className="text-slate-300 text-sm flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}