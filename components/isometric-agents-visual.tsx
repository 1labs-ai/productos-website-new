"use client"

import { motion } from "framer-motion"

// Isometric Agents Collaboration Visual - Matching reference design exactly
// Layout: Brain → Flowchart → Code (center, large) → Search → Rocket
export function IsometricAgentsVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg 
        className="w-full h-56 max-w-[500px]" 
        viewBox="0 0 500 220" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter for paths */}
          <filter id="pathGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* ===== CONNECTING PATHS (Road-style with parallel lines) ===== */}
        
        {/* Path 1: Brain block to Flowchart block */}
        <g className="text-foreground/25 group-hover:text-foreground/40 transition-colors duration-500" filter="url(#pathGlow)">
          <path 
            d="M95 145 L110 138 L145 138 L160 130"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path 
            d="M95 149 L110 142 L145 142 L160 134"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        
        {/* Path 2: Flowchart block down to Code block */}
        <g className="text-foreground/25 group-hover:text-foreground/40 transition-colors duration-500" filter="url(#pathGlow)">
          <path 
            d="M195 135 L210 142 L210 155 L250 175"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path 
            d="M195 139 L210 146 L210 159 L250 179"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        
        {/* Path 3: Code block up to Search block */}
        <g className="text-foreground/25 group-hover:text-foreground/40 transition-colors duration-500" filter="url(#pathGlow)">
          <path 
            d="M295 160 L330 142 L345 142 L360 135"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path 
            d="M295 164 L330 146 L345 146 L360 139"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        
        {/* Path 4: Search block to Rocket block */}
        <g className="text-foreground/25 group-hover:text-foreground/40 transition-colors duration-500" filter="url(#pathGlow)">
          <path 
            d="M400 135 L420 145 L435 155"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path 
            d="M400 139 L420 149 L435 159"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        
        {/* ===== BLOCK 1 - Brain/Ideation (leftmost, small) ===== */}
        <g className="text-foreground">
          {/* Cube - Top face */}
          <path 
            d="M55 135 L75 123 L95 135 L75 147 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.35"
            className="group-hover:stroke-opacity-55 transition-all duration-500"
          />
          {/* Cube - Right face */}
          <path 
            d="M95 135 L95 160 L75 172 L75 147 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.25"
            className="group-hover:stroke-opacity-45 transition-all duration-500"
          />
          {/* Cube - Left face */}
          <path 
            d="M55 135 L55 160 L75 172 L75 147 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.15"
            className="group-hover:stroke-opacity-35 transition-all duration-500"
          />
          
          {/* Brain Icon with signal waves */}
          <g transform="translate(50, 85)">
            {/* Left signal wave */}
            <motion.path
              d="M5 20 Q0 15 5 10"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeOpacity="0.3"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M10 23 Q3 15 10 7"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeOpacity="0.25"
              animate={{ opacity: [0.15, 0.4, 0.15] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            
            {/* Brain shape */}
            <path
              d="M25 8 C20 8 17 12 17 16 C17 18 18 20 18 20 C16 21 15 23 15 25 C15 28 17 30 20 30 L30 30 C33 30 35 28 35 25 C35 23 34 21 32 20 C32 20 33 18 33 16 C33 12 30 8 25 8"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              strokeOpacity="0.5"
              className="group-hover:stroke-opacity-75 transition-all duration-500"
            />
            {/* Brain folds */}
            <path
              d="M20 15 Q25 13 30 15 M20 22 Q25 20 30 22"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
              strokeOpacity="0.35"
            />
          </g>
        </g>
        
        {/* ===== BLOCK 2 - Flowchart/Planning (upper middle-left) ===== */}
        <g className="text-foreground">
          {/* Cube - Top face */}
          <path 
            d="M160 115 L180 103 L200 115 L180 127 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.35"
            className="group-hover:stroke-opacity-55 transition-all duration-500"
          />
          {/* Cube - Right face */}
          <path 
            d="M200 115 L200 145 L180 157 L180 127 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.25"
            className="group-hover:stroke-opacity-45 transition-all duration-500"
          />
          {/* Cube - Left face */}
          <path 
            d="M160 115 L160 145 L180 157 L180 127 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.15"
            className="group-hover:stroke-opacity-35 transition-all duration-500"
          />
          
          {/* Flowchart Icon */}
          <g transform="translate(162, 60)">
            {/* Top rectangle */}
            <rect x="12" y="5" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.5" className="group-hover:stroke-opacity-75 transition-all duration-500" />
            {/* Vertical line down */}
            <line x1="19" y1="13" x2="19" y2="20" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
            {/* Branch lines */}
            <line x1="19" y1="20" x2="10" y2="28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="19" y1="20" x2="28" y2="28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
            {/* Bottom left rectangle */}
            <rect x="4" y="28" width="12" height="7" rx="1" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.5" className="group-hover:stroke-opacity-75 transition-all duration-500" />
            {/* Bottom right rectangle */}
            <rect x="22" y="28" width="12" height="7" rx="1" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.5" className="group-hover:stroke-opacity-75 transition-all duration-500" />
          </g>
        </g>
        
        {/* ===== BLOCK 3 - Code Window (center, LARGEST) ===== */}
        <g className="text-foreground">
          {/* Cube - Top face (larger) */}
          <path 
            d="M225 155 L270 128 L315 155 L270 182 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            className="group-hover:stroke-opacity-6 transition-all duration-500"
          />
          {/* Cube - Right face (taller) */}
          <path 
            d="M315 155 L315 200 L270 227 L270 182 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.3"
            className="group-hover:stroke-opacity-5 transition-all duration-500"
          />
          {/* Cube - Left face (taller) */}
          <path 
            d="M225 155 L225 200 L270 227 L270 182 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.2"
            className="group-hover:stroke-opacity-4 transition-all duration-500"
          />
          
          {/* Code Window Icon */}
          <g transform="translate(240, 70)">
            {/* Window frame */}
            <rect x="5" y="5" width="50" height="35" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeOpacity="0.5" className="group-hover:stroke-opacity-75 transition-all duration-500" />
            {/* Title bar */}
            <line x1="5" y1="14" x2="55" y2="14" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
            {/* Window dots */}
            <circle cx="11" cy="9.5" r="1.5" fill="currentColor" fillOpacity="0.4" />
            <circle cx="17" cy="9.5" r="1.5" fill="currentColor" fillOpacity="0.4" />
            <circle cx="23" cy="9.5" r="1.5" fill="currentColor" fillOpacity="0.4" />
            {/* Code brackets </> */}
            <text x="17" y="30" fontSize="14" fill="currentColor" fillOpacity="0.6" fontFamily="monospace" fontWeight="500" className="group-hover:fill-opacity-85 transition-all duration-500">&lt;/&gt;</text>
          </g>
        </g>
        
        {/* ===== BLOCK 4 - Search/Database (lower right of center) ===== */}
        <g className="text-foreground">
          {/* Cube - Top face */}
          <path 
            d="M360 115 L380 103 L400 115 L380 127 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.35"
            className="group-hover:stroke-opacity-55 transition-all duration-500"
          />
          {/* Cube - Right face */}
          <path 
            d="M400 115 L400 145 L380 157 L380 127 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.25"
            className="group-hover:stroke-opacity-45 transition-all duration-500"
          />
          {/* Cube - Left face */}
          <path 
            d="M360 115 L360 145 L380 157 L380 127 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.15"
            className="group-hover:stroke-opacity-35 transition-all duration-500"
          />
          
          {/* Database + Magnifying glass Icon */}
          <g transform="translate(345, 55)">
            {/* Database cylinders */}
            <ellipse cx="18" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.4" />
            <path d="M8 12 L8 25 C8 27 12 30 18 30 C24 30 28 27 28 25 L28 12" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.4" />
            <ellipse cx="18" cy="19" rx="10" ry="3" stroke="currentColor" strokeWidth="0.6" fill="none" strokeOpacity="0.25" />
            
            {/* Magnifying glass */}
            <circle cx="38" cy="18" r="7" stroke="currentColor" strokeWidth="1.2" fill="none" strokeOpacity="0.5" className="group-hover:stroke-opacity-75 transition-all duration-500" />
            <line x1="43" y1="23" x2="50" y2="30" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" className="group-hover:stroke-opacity-75 transition-all duration-500" />
          </g>
        </g>
        
        {/* ===== BLOCK 5 - Rocket/Deploy (rightmost) ===== */}
        <g className="text-foreground">
          {/* Cube - Top face */}
          <path 
            d="M420 145 L440 133 L460 145 L440 157 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.35"
            className="group-hover:stroke-opacity-55 transition-all duration-500"
          />
          {/* Cube - Right face */}
          <path 
            d="M460 145 L460 175 L440 187 L440 157 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.25"
            className="group-hover:stroke-opacity-45 transition-all duration-500"
          />
          {/* Cube - Left face */}
          <path 
            d="M420 145 L420 175 L440 187 L440 157 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.15"
            className="group-hover:stroke-opacity-35 transition-all duration-500"
          />
          
          {/* Rocket Icon */}
          <g transform="translate(420, 75)">
            {/* Rocket body */}
            <path
              d="M20 5 L20 35 L15 42 L25 42 L20 35"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              strokeOpacity="0.5"
              className="group-hover:stroke-opacity-75 transition-all duration-500"
            />
            {/* Rocket nose cone */}
            <path
              d="M13 35 L20 5 L27 35"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              strokeOpacity="0.5"
              className="group-hover:stroke-opacity-75 transition-all duration-500"
            />
            {/* Left fin */}
            <path
              d="M13 35 L7 42 L13 40"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeOpacity="0.4"
            />
            {/* Right fin */}
            <path
              d="M27 35 L33 42 L27 40"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeOpacity="0.4"
            />
            {/* Rocket window */}
            <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.4" />
            
            {/* Exhaust smoke/flames */}
            <motion.g
              animate={{ opacity: [0.15, 0.4, 0.15], y: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <ellipse cx="20" cy="48" rx="6" ry="2.5" stroke="currentColor" strokeWidth="0.6" fill="none" strokeOpacity="0.25" />
              <ellipse cx="20" cy="52" rx="10" ry="3.5" stroke="currentColor" strokeWidth="0.5" fill="none" strokeOpacity="0.15" />
            </motion.g>
          </g>
        </g>
        
        {/* ===== ANIMATED FLOW DOTS ===== */}
        <motion.circle 
          r="2.5"
          fill="currentColor"
          className="text-foreground/50"
          animate={{ 
            cx: [95, 160],
            cy: [140, 125],
            opacity: [0, 0.7, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle 
          r="2.5"
          fill="currentColor"
          className="text-foreground/50"
          animate={{ 
            cx: [200, 250],
            cy: [140, 175],
            opacity: [0, 0.7, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <motion.circle 
          r="2.5"
          fill="currentColor"
          className="text-foreground/50"
          animate={{ 
            cx: [295, 360],
            cy: [160, 130],
            opacity: [0, 0.7, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
        <motion.circle 
          r="2.5"
          fill="currentColor"
          className="text-foreground/50"
          animate={{ 
            cx: [400, 440],
            cy: [135, 155],
            opacity: [0, 0.7, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        />
      </svg>
    </div>
  )
}
