"use client"

import { motion } from "framer-motion"

// Isometric Agents Collaboration Visual - Matching reference design
// 3D blocks connected by glowing pathways with workflow icons
export function IsometricAgentsVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        className="w-full h-48" 
        viewBox="0 0 400 180" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.05))' }}
      >
        <defs>
          {/* Glow filter for paths */}
          <filter id="pathGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Gradient for glowing paths */}
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* ===== CONNECTING PATHS (Glowing roads) ===== */}
        
        {/* Path from Block 1 (Brain) to Block 2 (Flowchart) */}
        <motion.g 
          className="text-foreground/30 group-hover:text-foreground/50 transition-colors duration-500"
          filter="url(#pathGlow)"
        >
          {/* Main path line */}
          <path 
            d="M75 115 L95 105 L140 105 L160 95"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Parallel lines for road effect */}
          <path 
            d="M75 119 L95 109 L140 109 L160 99"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.5"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>
        
        {/* Path from Block 2 to Block 3 (Code) */}
        <motion.g 
          className="text-foreground/30 group-hover:text-foreground/50 transition-colors duration-500"
          filter="url(#pathGlow)"
        >
          <path 
            d="M195 95 L215 105 L215 120 L235 130"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path 
            d="M195 99 L215 109 L215 124 L235 134"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.5"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>
        
        {/* Path from Block 3 to Block 4 (Search) */}
        <motion.g 
          className="text-foreground/30 group-hover:text-foreground/50 transition-colors duration-500"
          filter="url(#pathGlow)"
        >
          <path 
            d="M270 130 L290 120 L290 105 L310 95"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path 
            d="M270 134 L290 124 L290 109 L310 99"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.5"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>
        
        {/* Path from Block 4 to Block 5 (Rocket) */}
        <motion.g 
          className="text-foreground/30 group-hover:text-foreground/50 transition-colors duration-500"
          filter="url(#pathGlow)"
        >
          <path 
            d="M345 95 L365 105 L365 115"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path 
            d="M345 99 L365 109 L365 119"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.5"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>
        
        {/* ===== ISOMETRIC 3D BLOCKS ===== */}
        
        {/* Block 1 - Brain/Ideation (leftmost) */}
        <motion.g 
          className="text-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
        >
          {/* Top face */}
          <path 
            d="M45 105 L60 97 L75 105 L60 113 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.4"
            className="group-hover:stroke-opacity-60 transition-all duration-500"
          />
          {/* Right face */}
          <path 
            d="M75 105 L75 125 L60 133 L60 113 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.3"
            className="group-hover:stroke-opacity-50 transition-all duration-500"
          />
          {/* Left face */}
          <path 
            d="M45 105 L45 125 L60 133 L60 113 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.2"
            className="group-hover:stroke-opacity-40 transition-all duration-500"
          />
          
          {/* Brain Icon */}
          <g transform="translate(48, 70)">
            <motion.path
              d="M12 8 C8 8 5 11 5 15 C5 18 7 20 7 20 C5 21 4 23 4 25 C4 28 6 30 9 30 L15 30 C18 30 20 28 20 25 C20 23 19 21 17 20 C17 20 19 18 19 15 C19 11 16 8 12 8"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeOpacity="0.5"
              className="group-hover:stroke-opacity-80 transition-all duration-500"
            />
            {/* Brain details */}
            <path
              d="M9 14 Q12 12 15 14 M9 20 Q12 18 15 20"
              stroke="currentColor"
              strokeWidth="0.75"
              fill="none"
              strokeOpacity="0.4"
            />
            {/* Signal waves */}
            <motion.path
              d="M0 15 Q3 13 0 11"
              stroke="currentColor"
              strokeWidth="0.75"
              fill="none"
              strokeOpacity="0.3"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M24 15 Q21 13 24 11"
              stroke="currentColor"
              strokeWidth="0.75"
              fill="none"
              strokeOpacity="0.3"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </g>
        </motion.g>
        
        {/* Block 2 - Flowchart/Planning (upper middle-left) */}
        <motion.g 
          className="text-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Top face */}
          <path 
            d="M160 80 L180 70 L200 80 L180 90 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.4"
            className="group-hover:stroke-opacity-60 transition-all duration-500"
          />
          {/* Right face */}
          <path 
            d="M200 80 L200 105 L180 115 L180 90 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.3"
            className="group-hover:stroke-opacity-50 transition-all duration-500"
          />
          {/* Left face */}
          <path 
            d="M160 80 L160 105 L180 115 L180 90 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.2"
            className="group-hover:stroke-opacity-40 transition-all duration-500"
          />
          
          {/* Flowchart Icon */}
          <g transform="translate(165, 35)">
            {/* Top node */}
            <rect x="10" y="2" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="0.75" fill="none" strokeOpacity="0.5" className="group-hover:stroke-opacity-80 transition-all duration-500" />
            {/* Line down */}
            <line x1="15" y1="8" x2="15" y2="12" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.4" />
            {/* Branch lines */}
            <line x1="15" y1="12" x2="8" y2="18" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.4" />
            <line x1="15" y1="12" x2="22" y2="18" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.4" />
            {/* Bottom left node */}
            <rect x="3" y="18" width="8" height="5" rx="1" stroke="currentColor" strokeWidth="0.75" fill="none" strokeOpacity="0.5" className="group-hover:stroke-opacity-80 transition-all duration-500" />
            {/* Bottom right node */}
            <rect x="19" y="18" width="8" height="5" rx="1" stroke="currentColor" strokeWidth="0.75" fill="none" strokeOpacity="0.5" className="group-hover:stroke-opacity-80 transition-all duration-500" />
          </g>
        </motion.g>
        
        {/* Block 3 - Code Window (center bottom) */}
        <motion.g 
          className="text-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Top face */}
          <path 
            d="M225 120 L250 107 L275 120 L250 133 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.4"
            className="group-hover:stroke-opacity-60 transition-all duration-500"
          />
          {/* Right face */}
          <path 
            d="M275 120 L275 150 L250 163 L250 133 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.3"
            className="group-hover:stroke-opacity-50 transition-all duration-500"
          />
          {/* Left face */}
          <path 
            d="M225 120 L225 150 L250 163 L250 133 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.2"
            className="group-hover:stroke-opacity-40 transition-all duration-500"
          />
          
          {/* Code Window Icon */}
          <g transform="translate(232, 70)">
            {/* Window frame */}
            <rect x="2" y="2" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.5" className="group-hover:stroke-opacity-80 transition-all duration-500" />
            {/* Title bar */}
            <line x1="2" y1="8" x2="34" y2="8" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.3" />
            {/* Window buttons */}
            <circle cx="6" cy="5" r="1" fill="currentColor" fillOpacity="0.4" />
            <circle cx="10" cy="5" r="1" fill="currentColor" fillOpacity="0.4" />
            <circle cx="14" cy="5" r="1" fill="currentColor" fillOpacity="0.4" />
            {/* Code brackets */}
            <text x="12" y="19" fontSize="10" fill="currentColor" fillOpacity="0.6" fontFamily="monospace" className="group-hover:fill-opacity-90 transition-all duration-500">&lt;/&gt;</text>
          </g>
        </motion.g>
        
        {/* Block 4 - Search/Discovery (upper middle-right) */}
        <motion.g 
          className="text-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Top face */}
          <path 
            d="M305 80 L325 70 L345 80 L325 90 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.4"
            className="group-hover:stroke-opacity-60 transition-all duration-500"
          />
          {/* Right face */}
          <path 
            d="M345 80 L345 105 L325 115 L325 90 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.3"
            className="group-hover:stroke-opacity-50 transition-all duration-500"
          />
          {/* Left face */}
          <path 
            d="M305 80 L305 105 L325 115 L325 90 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.2"
            className="group-hover:stroke-opacity-40 transition-all duration-500"
          />
          
          {/* Search/Database Icon */}
          <g transform="translate(310, 35)">
            {/* Database icon */}
            <ellipse cx="10" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="0.75" fill="none" strokeOpacity="0.4" />
            <path d="M3 5 L3 15 C3 17 6 19 10 19 C14 19 17 17 17 15 L17 5" stroke="currentColor" strokeWidth="0.75" fill="none" strokeOpacity="0.4" />
            <ellipse cx="10" cy="10" rx="7" ry="2" stroke="currentColor" strokeWidth="0.5" fill="none" strokeOpacity="0.3" />
            {/* Magnifying glass */}
            <circle cx="22" cy="12" r="5" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.5" className="group-hover:stroke-opacity-80 transition-all duration-500" />
            <line x1="26" y1="16" x2="30" y2="20" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" className="group-hover:stroke-opacity-80 transition-all duration-500" />
          </g>
        </motion.g>
        
        {/* Block 5 - Rocket/Deploy (rightmost) */}
        <motion.g 
          className="text-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Top face */}
          <path 
            d="M355 105 L375 95 L395 105 L375 115 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.4"
            className="group-hover:stroke-opacity-60 transition-all duration-500"
          />
          {/* Right face */}
          <path 
            d="M395 105 L395 130 L375 140 L375 115 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.3"
            className="group-hover:stroke-opacity-50 transition-all duration-500"
          />
          {/* Left face */}
          <path 
            d="M355 105 L355 130 L375 140 L375 115 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.2"
            className="group-hover:stroke-opacity-40 transition-all duration-500"
          />
          
          {/* Rocket Icon with smoke */}
          <g transform="translate(358, 45)">
            {/* Rocket body */}
            <path
              d="M17 5 L17 25 L14 30 L20 30 L17 25"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeOpacity="0.5"
              className="group-hover:stroke-opacity-80 transition-all duration-500"
            />
            {/* Rocket tip */}
            <path
              d="M12 25 L17 5 L22 25"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeOpacity="0.5"
              className="group-hover:stroke-opacity-80 transition-all duration-500"
            />
            {/* Fins */}
            <path
              d="M12 25 L8 30 L12 28"
              stroke="currentColor"
              strokeWidth="0.75"
              fill="none"
              strokeOpacity="0.4"
            />
            <path
              d="M22 25 L26 30 L22 28"
              stroke="currentColor"
              strokeWidth="0.75"
              fill="none"
              strokeOpacity="0.4"
            />
            {/* Window */}
            <circle cx="17" cy="15" r="2" stroke="currentColor" strokeWidth="0.75" fill="none" strokeOpacity="0.4" />
            
            {/* Animated smoke/exhaust */}
            <motion.g
              animate={{ opacity: [0.2, 0.5, 0.2], y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ellipse cx="17" cy="35" rx="5" ry="2" stroke="currentColor" strokeWidth="0.5" fill="none" strokeOpacity="0.3" />
              <ellipse cx="17" cy="38" rx="8" ry="3" stroke="currentColor" strokeWidth="0.5" fill="none" strokeOpacity="0.2" />
            </motion.g>
          </g>
        </motion.g>
        
        {/* ===== ANIMATED FLOW DOTS ===== */}
        {/* Dots flowing along paths to show data/context flow */}
        <motion.circle 
          r="2"
          fill="currentColor"
          className="text-foreground/60"
          animate={{ 
            cx: [75, 160],
            cy: [115, 95],
            opacity: [0, 0.8, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle 
          r="2"
          fill="currentColor"
          className="text-foreground/60"
          animate={{ 
            cx: [195, 235],
            cy: [95, 130],
            opacity: [0, 0.8, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.circle 
          r="2"
          fill="currentColor"
          className="text-foreground/60"
          animate={{ 
            cx: [270, 310],
            cy: [130, 95],
            opacity: [0, 0.8, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle 
          r="2"
          fill="currentColor"
          className="text-foreground/60"
          animate={{ 
            cx: [345, 365],
            cy: [95, 115],
            opacity: [0, 0.8, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </svg>
    </div>
  )
}
