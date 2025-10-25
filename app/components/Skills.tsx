'use client'
import React from 'react';
import { motion, useInView } from 'framer-motion';


// Tech Icon Component
function TechIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full backdrop-blur-sm">
      <span className="text-3xl">{icon}</span>
      <span className="font-medium text-lg whitespace-nowrap">{name}</span>
    </div>
  );
}

export function Skills() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Motion/Framer', level: 85 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'GraphQL', level: 78 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Figma', level: 88 },
        { name: 'CI/CD', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive set of technical skills honed through years of
            hands-on experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * categoryIndex }}
              className="bg-card border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + (categoryIndex * 0.2) + (skillIndex * 0.1),
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Scrolling Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold mb-8 text-center text-foreground/80">
            Technologies I Work With
          </h3>
          
          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card/30 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling content */}
            <div className="flex gap-8 animate-marquee">
              {/* First set */}
              <div className="flex gap-8 min-w-max">
                <TechIcon name="React" icon="⚛️" />
                <TechIcon name="TypeScript" icon="📘" />
                <TechIcon name="Node.js" icon="🟢" />
                <TechIcon name="Tailwind" icon="🎨" />
                <TechIcon name="Next.js" icon="▲" />
                <TechIcon name="GraphQL" icon="◈" />
                <TechIcon name="PostgreSQL" icon="🐘" />
                <TechIcon name="Docker" icon="🐳" />
                <TechIcon name="AWS" icon="☁️" />
                <TechIcon name="Figma" icon="🎯" />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-8 min-w-max">
                <TechIcon name="React" icon="⚛️" />
                <TechIcon name="TypeScript" icon="📘" />
                <TechIcon name="Node.js" icon="🟢" />
                <TechIcon name="Tailwind" icon="🎨" />
                <TechIcon name="Next.js" icon="▲" />
                <TechIcon name="GraphQL" icon="◈" />
                <TechIcon name="PostgreSQL" icon="🐘" />
                <TechIcon name="Docker" icon="🐳" />
                <TechIcon name="AWS" icon="☁️" />
                <TechIcon name="Figma" icon="🎯" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
