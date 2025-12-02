'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [

{
  id: 1,
  title: 'Kitchen Order Ticket System',
  description: 'A simple and efficient system for managing kitchen orders with a clean user interface. Built using HTML and CSS.',
  tags: ['HTML', 'CSS'],
  link: 'https://github.com/harshakarambar/kitchen_order_ticket',
},
{
  id: 2,
  title: 'YouTube Comments Sentiment Analysis',
  description: 'Python project that analyzes YouTube comments by cleaning text, extracting features, and classifying sentiment as positive or negative.',
  tags: ['Python', 'Data Processing', 'NLP'],
  link: 'https://github.com/harshakarambar/-Sentiment_Analysis_of_YouTube_Comments',
},
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
          My Projects
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on that reflect my learning and growth.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-full h-full bg-grid-pattern" />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block text-blue-400 hover:text-blue-300 font-semibold text-sm"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
