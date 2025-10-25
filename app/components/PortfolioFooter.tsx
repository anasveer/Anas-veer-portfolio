'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function PortfolioFooter() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-foreground/70 flex items-center justify-center gap-2">
            Made with{' '}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart size={16} className="text-accent fill-accent" />
            </motion.span>{' '}
            by John Doe © {new Date().getFullYear()}
          </p>
          <p className="text-sm text-foreground/50 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
