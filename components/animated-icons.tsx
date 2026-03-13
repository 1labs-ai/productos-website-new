"use client"

import { motion } from "framer-motion"

// Workflow Network Icon - Built for AI workflows
// Inspired by Framer workflow-network component with flowing dots
export function WorkflowNodesIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        className="w-full h-32" 
        viewBox="0 0 280 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define gradient for line glow effect */}
        <defs>
          <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Connection lines - static base */}
        {/* Left node to Center node */}
        <path 
          d="M62 50 L118 50" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500"
        />
        {/* Center node to Right node */}
        <path 
          d="M162 50 L218 50" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500"
        />
        {/* Center node to Top node */}
        <path 
          d="M140 38 L140 22" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500"
        />
        {/* Center node to Bottom-left */}
        <path 
          d="M130 58 L85 78" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500"
        />
        {/* Center node to Bottom-right */}
        <path 
          d="M150 58 L195 78" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500"
        />
        
        {/* Animated flowing dots along paths */}
        {/* Dot: Left to Center */}
        <motion.circle 
          r="3" 
          fill="currentColor" 
          className="text-foreground/50 group-hover:text-foreground/70"
          initial={{ opacity: 0 }}
          animate={{ 
            cx: [62, 118],
            cy: [50, 50],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        />
        {/* Dot: Center to Right */}
        <motion.circle 
          r="3" 
          fill="currentColor" 
          className="text-foreground/50 group-hover:text-foreground/70"
          initial={{ opacity: 0 }}
          animate={{ 
            cx: [162, 218],
            cy: [50, 50],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Dot: Center to Top */}
        <motion.circle 
          r="2.5" 
          fill="currentColor" 
          className="text-foreground/40 group-hover:text-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ 
            cx: [140, 140],
            cy: [38, 22],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Dot: Center to Bottom-left */}
        <motion.circle 
          r="2.5" 
          fill="currentColor" 
          className="text-foreground/40 group-hover:text-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ 
            cx: [130, 85],
            cy: [58, 78],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        {/* Dot: Center to Bottom-right */}
        <motion.circle 
          r="2.5" 
          fill="currentColor" 
          className="text-foreground/40 group-hover:text-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ 
            cx: [150, 195],
            cy: [58, 78],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        
        {/* Node: Left */}
        <g className="cursor-pointer">
          <motion.circle 
            cx="50" cy="50" r="12" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            fill="none"
            className="text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500"
          />
          <motion.circle 
            cx="50" cy="50" r="4" 
            fill="currentColor" 
            className="text-foreground/40 group-hover:text-foreground/60 transition-colors duration-500"
          />
          {/* Pulse ring */}
          <motion.circle 
            cx="50" cy="50" r="12" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="text-foreground"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </g>
        
        {/* Node: Center (main hub) */}
        <g className="cursor-pointer">
          <motion.circle 
            cx="140" cy="50" r="16" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            fill="none"
            className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
          />
          <motion.circle 
            cx="140" cy="50" r="6" 
            fill="currentColor" 
            className="text-foreground/50 group-hover:text-foreground/70 transition-colors duration-500"
          />
          {/* Outer glow ring */}
          <motion.circle 
            cx="140" cy="50" r="20" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            fill="none"
            className="text-foreground"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.3], opacity: [0.2, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />
        </g>
        
        {/* Node: Right */}
        <g className="cursor-pointer">
          <motion.circle 
            cx="230" cy="50" r="12" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            fill="none"
            className="text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500"
          />
          <motion.circle 
            cx="230" cy="50" r="4" 
            fill="currentColor" 
            className="text-foreground/40 group-hover:text-foreground/60 transition-colors duration-500"
          />
          <motion.circle 
            cx="230" cy="50" r="12" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="text-foreground"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
          />
        </g>
        
        {/* Node: Top (small) */}
        <g className="cursor-pointer">
          <motion.circle 
            cx="140" cy="15" r="8" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
          />
          <motion.circle 
            cx="140" cy="15" r="3" 
            fill="currentColor" 
            className="text-foreground/30 group-hover:text-foreground/50 transition-colors duration-500"
          />
        </g>
        
        {/* Node: Bottom-left (small) */}
        <g className="cursor-pointer">
          <motion.circle 
            cx="75" cy="82" r="8" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
          />
          <motion.circle 
            cx="75" cy="82" r="3" 
            fill="currentColor" 
            className="text-foreground/30 group-hover:text-foreground/50 transition-colors duration-500"
          />
        </g>
        
        {/* Node: Bottom-right (small) */}
        <g className="cursor-pointer">
          <motion.circle 
            cx="205" cy="82" r="8" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
          />
          <motion.circle 
            cx="205" cy="82" r="3" 
            fill="currentColor" 
            className="text-foreground/30 group-hover:text-foreground/50 transition-colors duration-500"
          />
        </g>
      </svg>
      
      {/* Subtle glow overlay on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-32 bg-foreground/[0.03] rounded-full blur-3xl" />
      </div>
    </div>
  )
}

// Growth Graph Icon - 10x faster shipping
export function GrowthGraphIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        className="w-full h-32" 
        viewBox="0 0 280 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main growth line - animated line draw */}
        <motion.path 
          d="M30 70 Q60 70 80 55 T130 45 T180 25 T230 30"
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          fill="none"
          className="text-foreground/25 group-hover:text-foreground/45 transition-colors duration-500"
          initial={{ pathLength: 1, pathOffset: 0 }}
          whileHover={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        {/* Subtle gradient fill under the line */}
        <defs>
          <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path 
          d="M30 70 Q60 70 80 55 T130 45 T180 25 T230 30 L230 80 L30 80 Z"
          fill="url(#graphGradient)"
          className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />
        
        {/* Data points */}
        <motion.circle 
          cx="80" cy="55" r="4" 
          fill="currentColor" 
          className="text-foreground/30 group-hover:text-foreground/60 transition-colors duration-500"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.4 }}
          transition={{ duration: 0.2 }}
        />
        <motion.circle 
          cx="130" cy="45" r="4" 
          fill="currentColor" 
          className="text-foreground/30 group-hover:text-foreground/60 transition-colors duration-500"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.4 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        />
        <motion.circle 
          cx="180" cy="25" r="5" 
          fill="currentColor" 
          className="text-foreground/35 group-hover:text-foreground/70 transition-colors duration-500"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        />
        
        {/* Arrow indicator at the end */}
        <motion.g
          initial={{ x: 0, opacity: 0.5 }}
          animate={{ x: [0, 3, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path 
            d="M220 22 L235 30 L220 38"
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="text-foreground/30 group-hover:text-foreground/60 transition-colors duration-500"
          />
        </motion.g>
        
        {/* Pulsing ring at peak point */}
        <motion.circle 
          cx="180" cy="25" r="8" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
          className="text-foreground/0 group-hover:text-foreground/20"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 1.8, 1], opacity: [0, 0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </svg>
      
      {/* Glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-foreground/[0.02] rounded-full blur-2xl" />
      </div>
    </div>
  )
}

// Network Hub Icon - Made for founders
export function NetworkHubIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        className="w-full h-32" 
        viewBox="0 0 280 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines from center hub to satellite nodes */}
        <motion.line 
          x1="140" y1="50" x2="80" y2="35"
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.line 
          x1="140" y1="50" x2="200" y2="35"
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.line 
          x1="140" y1="50" x2="75" y2="70"
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.line 
          x1="140" y1="50" x2="205" y2="70"
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        
        {/* Center hub - main node (founder) */}
        <g className="cursor-pointer">
          <motion.circle 
            cx="140" cy="50" r="18" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            fill="none"
            className="text-foreground/25 group-hover:text-foreground/45 transition-colors duration-500"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <motion.circle 
            cx="140" cy="50" r="7" 
            fill="currentColor" 
            className="text-foreground/40 group-hover:text-foreground/70 transition-colors duration-500"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
          {/* Hub pulse effect */}
          <motion.circle 
            cx="140" cy="50" r="22" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            fill="none"
            className="text-foreground/0 group-hover:text-foreground/15"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.4, 1], opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
        </g>
        
        {/* Satellite nodes */}
        {/* Top left */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.circle 
            cx="80" cy="35" r="10" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          />
          <motion.circle 
            cx="80" cy="35" r="4" 
            fill="currentColor" 
            className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
          />
        </motion.g>
        
        {/* Top right */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <motion.circle 
            cx="200" cy="35" r="10" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          />
          <motion.circle 
            cx="200" cy="35" r="4" 
            fill="currentColor" 
            className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
          />
        </motion.g>
        
        {/* Bottom left */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <motion.circle 
            cx="75" cy="70" r="8" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          />
          <motion.circle 
            cx="75" cy="70" r="3" 
            fill="currentColor" 
            className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
          />
        </motion.g>
        
        {/* Bottom right */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <motion.circle 
            cx="205" cy="70" r="8" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="text-foreground/15 group-hover:text-foreground/30 transition-colors duration-500"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          />
          <motion.circle 
            cx="205" cy="70" r="3" 
            fill="currentColor" 
            className="text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500"
          />
        </motion.g>
        
        {/* Animated data flow dots */}
        <motion.circle 
          r="2" 
          fill="currentColor" 
          className="text-foreground/30 group-hover:text-foreground/50"
          initial={{ opacity: 0 }}
          animate={{ 
            cx: [140, 80], 
            cy: [50, 35],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
        />
        <motion.circle 
          r="2" 
          fill="currentColor" 
          className="text-foreground/30 group-hover:text-foreground/50"
          initial={{ opacity: 0 }}
          animate={{ 
            cx: [140, 200], 
            cy: [50, 35],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        />
      </svg>
      
      {/* Glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-foreground/[0.02] rounded-full blur-2xl" />
      </div>
    </div>
  )
}
