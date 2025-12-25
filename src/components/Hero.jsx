'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';

const skills = ['Python', 'JAVA', 'HTML5', 'CSS', 'PHP' , 'JavaScript', 'Communication', 'Problem Solving', 'Team Work'];

export default function Hero() {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    setIsReady(true);
  }, []);

  const { displayedText } = useTypewriter({
    words: skills,
    typingSpeed: 80,
    deletingSpeed: 50,
    delayBetweenWords: 1500,
  });

  if (!isReady) return null;

  return (
    <section
      className="w-full h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"
      aria-label="Hero section"
    >
      <motion.div
        className="max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Harsha K
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Tech Enthusiast | Creating Intelligent Real-World Applications
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            
          </span>
        </motion.p>

        {/* Typewriter Section */}
        <motion.div
          className="mb-12 h-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex items-baseline gap-2 flex-wrap justify-center">
            <span className="text-2xl sm:text-3xl font-semibold text-white">
              {/* Solving real-world problems using: */}
              Skilled in:
            </span>
            <div className="relative inline-block h-10">
              <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                {displayedText}
              </span>
              <motion.span
                className="absolute ml-1 w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-blue-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=12xiiWSnI-J3sXJb-h7niP79RB_WNP9hi"
            download="HarshaK.pdf"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 active:scale-95 transition-all"
            aria-label="Download Resume PDF"
          >
            Download Resume
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/harsha-k-404882245"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 active:scale-95 transition-all"
            aria-label="Visit LinkedIn profile (opens in new tab)"
          >
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-12 flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <svg
            className="w-6 h-6 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
