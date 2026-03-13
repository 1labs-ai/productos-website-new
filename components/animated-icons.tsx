"use client"

import { motion } from "framer-motion"

// Agent Collaboration Icon - Clean, minimal workflow visualization
export function WorkflowNodesIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        className="w-full h-32" 
        viewBox="0 0 200 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines */}
        <motion.path 
          d="M40 40 L80 40 M120 40 L160 40"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -8 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Vertical connection from center */}
        <motion.path 
          d="M100 28 L100 52"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -8 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.3 }}
        />
        
        {/* Node 1 - Left */}
        <motion.circle 
          cx="30" cy="40" r="14"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
        />
        <motion.circle 
          cx="30" cy="40" r="5"
          fill="currentColor"
          className="text-foreground/30 group-hover:text-foreground/60 transition-colors duration-500"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Node 2 - Center (main) */}
        <motion.circle 
          cx="100" cy="40" r="18"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-foreground/30 group-hover:text-foreground/60 transition-colors duration-500"
        />
        <motion.circle 
          cx="100" cy="40" r="7"
          fill="currentColor"
          className="text-foreground/40 group-hover:text-foreground/70 transition-colors duration-500"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        {/* Center pulse ring */}
        <motion.circle 
          cx="100" cy="40" r="18"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/20"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        
        {/* Node 3 - Right */}
        <motion.circle 
          cx="170" cy="40" r="14"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
        />
        <motion.circle 
          cx="170" cy="40" r="5"
          fill="currentColor"
          className="text-foreground/30 group-hover:text-foreground/60 transition-colors duration-500"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        
        {/* Node 4 - Top */}
        <motion.circle 
          cx="100" cy="15" r="10"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500"
        />
        <motion.circle 
          cx="100" cy="15" r="4"
          fill="currentColor"
          className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
        />
        
        {/* Node 5 - Bottom */}
        <motion.circle 
          cx="100" cy="65" r="10"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500"
        />
        <motion.circle 
          cx="100" cy="65" r="4"
          fill="currentColor"
          className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
        />
        
        {/* Flowing dots */}
        <motion.circle 
          r="2.5"
          fill="currentColor"
          className="text-foreground/50 group-hover:text-foreground/70"
          animate={{ 
            cx: [44, 80],
            cy: [40, 40],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle 
          r="2.5"
          fill="currentColor"
          className="text-foreground/50 group-hover:text-foreground/70"
          animate={{ 
            cx: [120, 156],
            cy: [40, 40],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </div>
  )
}

// Speed/Progress Icon - Clean arc with progress indicator
export function GrowthGraphIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        className="w-full h-32" 
        viewBox="0 0 200 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Progress arc background */}
        <path 
          d="M30 60 Q100 10 170 60"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="text-foreground/15"
        />
        
        {/* Progress arc animated fill */}
        <motion.path 
          d="M30 60 Q100 10 170 60"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="text-foreground/40 group-hover:text-foreground/70 transition-colors duration-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 0.85, 0.85] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "easeOut" }}
        />
        
        {/* Progress dots along the path */}
        <motion.circle 
          cx="50" cy="48" r="3"
          fill="currentColor"
          className="text-foreground/30 group-hover:text-foreground/60 transition-colors duration-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        />
        <motion.circle 
          cx="85" cy="28" r="3"
          fill="currentColor"
          className="text-foreground/35 group-hover:text-foreground/65 transition-colors duration-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        />
        <motion.circle 
          cx="120" cy="22" r="3.5"
          fill="currentColor"
          className="text-foreground/40 group-hover:text-foreground/70 transition-colors duration-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7 }}
        />
        <motion.circle 
          cx="155" cy="35" r="4"
          fill="currentColor"
          className="text-foreground/50 group-hover:text-foreground/80 transition-colors duration-500"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.2, 1] }}
          transition={{ delay: 0.9, duration: 0.5 }}
        />
        
        {/* Pulse ring at end point */}
        <motion.circle 
          cx="155" cy="35" r="8"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/30"
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />
        
        {/* Arrow indicator */}
        <motion.path 
          d="M160 30 L172 38 L160 46"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-foreground/40 group-hover:text-foreground/70 transition-colors duration-500"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  )
}

// Founder Hub Icon - Central user with radiating capabilities
export function NetworkHubIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        className="w-full h-32" 
        viewBox="0 0 200 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines from center */}
        <motion.line 
          x1="100" y1="40" x2="45" y2="25"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
        />
        <motion.line 
          x1="100" y1="40" x2="155" y2="25"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
        />
        <motion.line 
          x1="100" y1="40" x2="45" y2="55"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
        />
        <motion.line 
          x1="100" y1="40" x2="155" y2="55"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
        />
        
        {/* Satellite nodes */}
        <motion.circle 
          cx="35" cy="22" r="10"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500"
        />
        <motion.circle 
          cx="35" cy="22" r="4"
          fill="currentColor"
          className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
        />
        
        <motion.circle 
          cx="165" cy="22" r="10"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500"
        />
        <motion.circle 
          cx="165" cy="22" r="4"
          fill="currentColor"
          className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
        />
        
        <motion.circle 
          cx="35" cy="58" r="10"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500"
        />
        <motion.circle 
          cx="35" cy="58" r="4"
          fill="currentColor"
          className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
        />
        
        <motion.circle 
          cx="165" cy="58" r="10"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500"
        />
        <motion.circle 
          cx="165" cy="58" r="4"
          fill="currentColor"
          className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
        />
        
        {/* Central founder node */}
        <motion.circle 
          cx="100" cy="40" r="18"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-foreground/30 group-hover:text-foreground/60 transition-colors duration-500"
        />
        
        {/* User icon inside */}
        <motion.circle 
          cx="100" cy="36" r="5"
          fill="currentColor"
          className="text-foreground/40 group-hover:text-foreground/70 transition-colors duration-500"
        />
        <motion.path 
          d="M91 50 Q100 43 109 50"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="text-foreground/40 group-hover:text-foreground/70 transition-colors duration-500"
        />
        
        {/* Center pulse ring */}
        <motion.circle 
          cx="100" cy="40" r="18"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/20"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        />
        
        {/* Flowing energy dots */}
        <motion.circle 
          r="2"
          fill="currentColor"
          className="text-foreground/40 group-hover:text-foreground/60"
          animate={{ 
            cx: [100, 45],
            cy: [40, 25],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.circle 
          r="2"
          fill="currentColor"
          className="text-foreground/40 group-hover:text-foreground/60"
          animate={{ 
            cx: [100, 155],
            cy: [40, 25],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
        />
        <motion.circle 
          r="2"
          fill="currentColor"
          className="text-foreground/40 group-hover:text-foreground/60"
          animate={{ 
            cx: [100, 45],
            cy: [40, 55],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
        />
        <motion.circle 
          r="2"
          fill="currentColor"
          className="text-foreground/40 group-hover:text-foreground/60"
          animate={{ 
            cx: [100, 155],
            cy: [40, 55],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
        />
      </svg>
    </div>
  )
}
