'use client'
import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (include country code without + or spaces)
    const phoneNumber = "03027534064"; // Change this to your number
    const message = encodeURIComponent(
      "Hello! I need a professional website for my company. Can you share details or pricing?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
        aria-label="Contact via WhatsApp"
      >
        {/* Animated gradient ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-100 animate-pulse" />

        {/* Button */}
        <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl group-hover:shadow-green-500/50 transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-white" strokeWidth={2} />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <span className="text-sm font-medium text-foreground">
            Chat on WhatsApp
          </span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-card border-r border-t border-border" />
        </div>

        {/* Pulse ring animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-green-400"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.8, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />
      </motion.button>
    </motion.div>
  );
}
