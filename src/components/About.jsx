'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-slate-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              👨‍💻 Full-Stack Development
            </h3>
            <p className="text-slate-300 leading-relaxed">
              I enjoy building clean, scalable, and user-focused web applications. Experienced with React.js, JavaScript, PHP, and MySQL.
             I focus on writing maintainable code, improving performance, and following modern development practices.
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-slate-700"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              🔒 Cybersecurity Focus
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Focused on understanding how systems work and how to secure them. Experienced in identifying vulnerabilities, analyzing logs, studying threats, and applying secure coding practices while continuously learning authentication and encryption.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="bg-slate-800/50 backdrop-blur p-8 rounded-lg border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">
            🎯 What I'm Working On
          </h3>
          <ul className="text-slate-300 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Enhancing my front-end development capabilities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Advancing my skills in secure backend development</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Exploring advanced cybersecurity principles and real-world threats</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Building personal projects to grow as a full-stack and security-focused developer</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
