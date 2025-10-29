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
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I’m a passionate web developer committed to building elegant, responsive, and impactful digital solutions.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - My Journey (Default Glow) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div
              className="relative bg-card border border-primary/20 rounded-2xl p-8 transition-all duration-300 shadow-[0_10px_25px_rgba(59,130,246,0.4),_0_4px_15px_rgba(147,51,234,0.4)]"
            >
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="mb-4 text-lg text-muted-foreground">
                With over a year of experience in web development, I’ve had the opportunity to work on a variety of projects that enhanced my skills in building modern, efficient, and user-focused applications.
              </p>
              <p className="mb-4 text-lg text-muted-foreground">
                My expertise spans across modern web technologies, including Javascript,
                React, Next, TypeScript, Node.js, Mongo DB and git & github.
              </p>
              <p className="text-muted-foreground text-lg">
               When I’m not coding, I focus on improving my technical skills, exploring modern web technologies, and staying current with industry best practices.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Feature Cards (Hover Glow) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.2,
                  delay: 0.1 * index,
                  ease: 'easeOut',
                }}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                  boxShadow:
                    '0 10px 25px rgba(59,130,246,0.4), 0 4px 15px rgba(147,51,234,0.4)',
                }}
                className="bg-card border border-primary/20 rounded-xl p-6 transition-all duration-300  group hover:border-transparent hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-purple-500/5"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h4 className="font-bold mb-2 text-lg text-muted-foreground">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
