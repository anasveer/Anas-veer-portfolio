'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ['Full Stack Developer', 'Mern Stack Developer', 'Software Engineer'];
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateMobile = () => setIsMobile(window.innerWidth < 640);
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => window.removeEventListener('resize', updateMobile);
  }, []);

  // Mouse move effect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Precompute particle positions
  const particles = useMemo(() => {
    if (isMobile) return [];
    return Array.from({ length: 12 }).map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      xOffset: Math.random() * 30 - 15,
    }));
  }, [isMobile]);

  return (
    <section
      id="home"
      className={`relative overflow-hidden ${
        isMobile
          ? 'h-[100vh] pt-16 pb-10' // 🧩 smaller, tighter mobile layout
          : 'h-[130vh] sm:h-[110vh] md:h-screen pt-8 sm:pt-20'
      }`}
    >
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
      {/* Background gradients & particles */}
      <div className="absolute inset-0 overflow-hidden">
        {!isMobile && (
          <>
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 0], opacity: [0.3, 0.6, 0.4, 0.3] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-2xl"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, -120, -240, 0], opacity: [0.2, 0.5, 0.2, 0.1] }}
              transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-1/3 -left-1/4 w-[650px] h-[650px] bg-gradient-to-tr from-accent/15 via-secondary/10 to-transparent rounded-full blur-2xl"
            />
          </>
        )}
        {isMobile && (
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 30, repeat: Infinity }}
            className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-full blur-xl"
          />
        )}

        {particles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -80, -160, -220],
              x: [0, p.xOffset, p.xOffset, 0],
              opacity: [0, 0.6, 0.1, 0],
              scale: [0.5, 1.1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 3,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeOut',
            }}
            className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full blur-sm"
            style={{ left: `${p.left}%`, bottom: '0%' }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 items-center h-full ${
            isMobile ? 'gap-8' : 'gap-12'
          }`}
        >
          {/* Left Column */}
          <div className={`flex flex-col justify-center ${isMobile ? 'space-y-4' : 'space-y-6'}`}>
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary max-w-2xs">
              Welcome to my portfolio
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold">
              <span className="block text-foreground mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Anas Veer
              </span>
            </h1>

            <div className="h-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
                >
                  {roles[currentRoleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-base sm:text-lg text-foreground/60 max-w-xl">
              I build modern websites that combine elegant design, high performance, and SEO optimization.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white hover:shadow transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-7 py-3 border border-primary rounded-full text-foreground hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
            </div>

            <div className="flex gap-3">
              {[{ icon: Github, href: 'https://github.com/anasveer', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/anas-veer-8227b6360/', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center lg:justify-end relative">
            <div className="relative">
              {!isMobile && (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-6 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-75 blur-2xl"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-2 bg-gradient-to-r from-secondary via-primary to-accent rounded-full opacity-40 blur-xl"
                  />
                </>
              )}

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.025, rotate: 1 }}
                className="relative overflow-hidden w-32 h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-2 border-primary shadow-lg bg-white"
              >
                <img
                  src="/upload/anas.jpeg"
                  alt="Anas Veer"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-8 -right-4 bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-full shadow-2xl border-2 border-primary/30 flex items-center gap-2"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles size={16} className="text-white" />
                </motion.div>
                <span className="text-white text-xs sm:text-sm">Available</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
