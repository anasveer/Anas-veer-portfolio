'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';


export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    'Full Stack Developer',
    'Mern Stack Developer',
    'Software Engineer'
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden h-[140vh] sm:h-[130vh] md:h-screen pt-15 sm:pt-20 md:pt-13">
      {/* Enhanced Animated Background with Smoke Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main flowing gradient orbs - smoke effect */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1.1, 1],
            rotate: [0, 90, 180, 0],
            x: [0, 100, -50, 0],
            y: [0, -50, 80, 0],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.4, 1.2, 1],
            rotate: [0, -120, -240, 0],
            x: [0, -120, 60, 0],
            y: [0, 80, -40, 0],
            opacity: [0.3, 0.5, 0.4, 0.3],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-1/2 -left-1/4 w-[900px] h-[900px] bg-gradient-to-tr from-accent/30 via-secondary/20 to-transparent rounded-full blur-3xl"
        />
        
        {/* Middle flowing orbs */}
        <motion.div
          animate={{
            scale: [1, 1.6, 1.3, 1],
            x: [0, -200, 100, 0],
            y: [0, 120, -60, 0],
            opacity: [0.2, 0.5, 0.3, 0.2],
            rotate: [0, 180, 360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-1/3 w-[700px] h-[700px] bg-gradient-to-br from-secondary/25 via-primary/15 to-transparent rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.5, 1.2, 1],
            x: [0, 180, -90, 0],
            y: [0, -80, 100, 0],
            opacity: [0.25, 0.6, 0.35, 0.25],
            rotate: [0, -90, -180, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/3 left-1/3 w-[650px] h-[650px] bg-gradient-to-tr from-accent/25 via-primary/20 to-transparent rounded-full blur-3xl"
        />

        {/* Cursor follower - smoke trail */}
        <motion.div
          animate={{
            x: mousePosition.x - 100,
            y: mousePosition.y - 100,
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 200,
            mass: 0.5,
          }}
          className="absolute w-[200px] h-[200px] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-2xl pointer-events-none"
        />
        
        <motion.div
          animate={{
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 100,
            mass: 0.8,
          }}
          className="absolute w-[300px] h-[300px] bg-gradient-to-br from-secondary/15 via-accent/8 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        {/* Floating smoke particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, Math.random() * 60 - 30, Math.random() * 40 - 20, 0],
              opacity: [0, 0.6, 0.3, 0],
              scale: [0, 1, 1.5, 2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'easeOut',
            }}
            className="absolute w-2 h-2 bg-primary/40 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '0%',
            }}
          />
        ))}

        {/* Sparkle effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col justify-center space-y-6 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="block text-foreground mb-2">Hi, I'm</span>
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Anas Veer
                </span>
              </h1>
            </motion.div>

            {/* Animated Role Switcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-10"
            >
              <motion.p
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl lg:text-4xl font-medium bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
              >
                {roles[currentRoleIndex]}
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg text-foreground/60 max-w-xl"
            >
              I build modern websites that combine elegant design, high performance, and SEO optimization, helping businesses stand out online and connect effectively with their audience
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-primary rounded-full text-foreground hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-4" 
            >
              {[
                { icon: Github, href: 'https://github.com/anasveer', label: 'GitHub'  },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/anas-veer-8227b6360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank" // opens in a new tab
      rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image (In Front) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="flex items-center justify-center lg:justify-end relative z-20"
          >
            <div className="relative">
              {/* Animated glow rings behind */}
              <motion.div
                
                
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute -inset-6 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-75 blur-3xl"
              />
              
              <motion.div
                
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute -inset-4 bg-gradient-to-r from-secondary via-primary to-accent rounded-full opacity-60 blur-2xl"
              />
              
              {/* Profile image container - elevated */}
              {/* Profile image container - elevated and moving */}
<div className="relative flex justify-center lg:justify-end">
  {/* Image Container */}
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.03, rotate: 1 }}
    className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border-2 border-primary shadow-lg"
  >
    <img
      src="/upload/anas.jpeg"
      alt="Anas Veer"
      className="w-full h-full object-cover object-top"
    />
  </motion.div>

  {/* Available Badge */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute -bottom-10 -right-4 lg:-bottom-6 lg:-right-6 bg-gradient-to-r from-primary to-accent px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl border-2 border-primary/30 flex items-center gap-2 z-30"
  >
    <motion.div
      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    >
      <Sparkles size={20} className="text-white" />
    </motion.div>
    <span className="text-white text-sm sm:text-base">Available</span>
  </motion.div>
</div>



              {/* Decorative floating elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-accent/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-6 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <ArrowDown size={35} className="text-primary sm:opacity-0 opacity-0 md:opacity-35" />
      </motion.a>
    </section>
  );
}
