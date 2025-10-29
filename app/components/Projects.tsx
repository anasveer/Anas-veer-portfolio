'use client'
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Business ERP Website',
      description:
        'Developed a full-stack MERN application RESTful APIs, and  responsive frontend Seo Optimization.',
      image: '/multi.png',
      tags: ['Next.js', 'Mongo DB', 'Rest Apis', 'TypeScript'],
      
      live: 'https://www.multi-techno.com/',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'ERP Solution Website',
      description:
        'Created a responsive ERP web app focused on business automation and streamlined operations..',
      image: '/axon.png',
      tags: ['Next.js', 'Rest Apis', 'Mongo DB', 'TypeScript'],
      
      live: 'https://www.axonerp.com/',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frontend project',
      description:
        'Designed and developed a modern frontend project named Upwork using React and Tailwind CSS with a focus on responsive UI and smooth interactions.',
      image: '/upwork.png',
      tags: ['React', 'CSS', 'Tailwind', 'Router' ],
    
      live: 'https://anasveer.github.io/Upwork-website/',
      gradient: 'from-pink-500 to-orange-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions to real-world
            problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.1, delay: 0.2 * index }}
              whileHover={{ y: -10 }}
              className="group relative bg-card border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-300"
                    target='blank'
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/anasveer"
            target='blank'
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
