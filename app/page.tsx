import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import  About  from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { PortfolioFooter } from './components/PortfolioFooter';
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <PortfolioFooter />
      <WhatsAppButton/>
    </div>
  );
}
