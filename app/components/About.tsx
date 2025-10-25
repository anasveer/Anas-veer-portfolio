'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

export default function About() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code is my priority.',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Creating visually stunning interfaces that users love.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency in every project.',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Designing with the end user in mind, always.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer with a keen eye for design, dedicated to
            creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl" />
              <div className="relative bg-white border border-blue-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-gray-700 mb-4">
                  With over 5 years of experience in web development, I've had
                  the privilege of working on diverse projects ranging from
                  startups to enterprise applications.
                </p>
                <p className="text-gray-700 mb-4">
                  My expertise spans across modern web technologies, including
                  React, TypeScript, Node.js, and various cloud platforms. I'm
                  constantly learning and adapting to new technologies to
                  deliver cutting-edge solutions.
                </p>
                <p className="text-gray-700">
                  When I'm not coding, you'll find me exploring new design
                  trends, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white border border-blue-200 rounded-xl p-6 hover:border-blue-400 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h4 className="font-bold mb-2 text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
