"use client"

import { motion } from "framer-motion"

// Card 1: Agents that collaborate - Connected nodes with flowing paths
export function AgentCubesIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      <span className="absolute top-0 left-0 text-[10px] font-mono text-foreground/30 tracking-widest">
        FIG 0.1
      </span>
      
      <svg 
        viewBox="0 0 320 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full"
        style={{ maxHeight: '180px' }}
      >
        {/* Flowing connection paths */}
        <g opacity="0.3">
          <path d="M60 100 Q100 80 140 100" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground"/>
          <path d="M140 100 Q180 120 220 100" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground"/>
          <path d="M140 100 L140 60" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground"/>
          <path d="M140 100 L140 140" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground"/>
          <path d="M220 100 Q240 100 260 85" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground"/>
        </g>
        
        {/* Animated flow dots */}
        <motion.circle 
          r="3" fill="currentColor" className="text-foreground/50"
          animate={{ cx: [60, 140], cy: [100, 100], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle 
          r="3" fill="currentColor" className="text-foreground/50"
          animate={{ cx: [140, 220], cy: [100, 100], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.circle 
          r="3" fill="currentColor" className="text-foreground/50"
          animate={{ cx: [220, 260], cy: [100, 85], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Agent Node 1 - Ideate */}
        <g>
          <circle cx="60" cy="100" r="18" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-foreground" opacity="0.5"/>
          <motion.circle cx="60" cy="100" r="6" fill="currentColor" className="text-foreground/40"
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
          />
          <text x="60" y="130" textAnchor="middle" className="text-foreground/40" fontSize="8" fontFamily="monospace">IDEATE</text>
        </g>
        
        {/* Agent Node 2 - Research (top) */}
        <g>
          <circle cx="140" cy="50" r="14" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground" opacity="0.4"/>
          <circle cx="140" cy="50" r="4" fill="currentColor" className="text-foreground/35"/>
          <text x="140" y="72" textAnchor="middle" className="text-foreground/35" fontSize="7" fontFamily="monospace">RESEARCH</text>
        </g>
        
        {/* Agent Node 3 - Center Hub */}
        <g>
          <circle cx="140" cy="100" r="22" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground" opacity="0.6"/>
          <motion.circle cx="140" cy="100" r="8" fill="currentColor" className="text-foreground/50"
            animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.circle cx="140" cy="100" r="22" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/20"
            animate={{ scale: [1, 1.3], opacity: [0.3, 0] }} transition={{ duration: 2, repeat: Infinity }}
          />
        </g>
        
        {/* Agent Node 4 - Design (bottom) */}
        <g>
          <circle cx="140" cy="150" r="14" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground" opacity="0.4"/>
          <circle cx="140" cy="150" r="4" fill="currentColor" className="text-foreground/35"/>
          <text x="140" y="172" textAnchor="middle" className="text-foreground/35" fontSize="7" fontFamily="monospace">DESIGN</text>
        </g>
        
        {/* Agent Node 5 - Code */}
        <g>
          <circle cx="220" cy="100" r="16" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-foreground" opacity="0.5"/>
          <circle cx="220" cy="100" r="5" fill="currentColor" className="text-foreground/40"/>
          <text x="220" y="125" textAnchor="middle" className="text-foreground/40" fontSize="8" fontFamily="monospace">CODE</text>
        </g>
        
        {/* Agent Node 6 - Deploy */}
        <g>
          <circle cx="270" cy="80" r="12" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground" opacity="0.4"/>
          <circle cx="270" cy="80" r="4" fill="currentColor" className="text-foreground/35"/>
          <text x="270" y="100" textAnchor="middle" className="text-foreground/35" fontSize="7" fontFamily="monospace">DEPLOY</text>
        </g>
      </svg>
    </div>
  )
}

// Card 2: Ship in days - Calendar/timeline compression
export function SpeedBarsIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      <span className="absolute top-0 left-0 text-[10px] font-mono text-foreground/30 tracking-widest">
        FIG 0.2
      </span>
      
      <svg 
        viewBox="0 0 320 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full"
        style={{ maxHeight: '180px' }}
      >
        {/* Traditional timeline (crossed out / faded) - "months" */}
        <g opacity="0.15">
          <rect x="30" y="40" width="25" height="25" rx="3" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground"/>
          <rect x="60" y="40" width="25" height="25" rx="3" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground"/>
          <rect x="90" y="40" width="25" height="25" rx="3" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground"/>
          <rect x="120" y="40" width="25" height="25" rx="3" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground"/>
          <rect x="150" y="40" width="25" height="25" rx="3" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground"/>
          <rect x="180" y="40" width="25" height="25" rx="3" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground"/>
          {/* Strike through */}
          <line x1="25" y1="52" x2="210" y2="52" stroke="currentColor" strokeWidth="1.5" className="text-foreground"/>
        </g>
        <text x="230" y="56" className="text-foreground/20" fontSize="9" fontFamily="monospace">MONTHS</text>
        
        {/* Arrow pointing down */}
        <motion.path 
          d="M160 75 L160 95 M150 85 L160 95 L170 85" 
          stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground" opacity="0.4"
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Compressed timeline - "days" */}
        <g>
          {/* Day blocks - compressed and active */}
          <motion.rect x="80" y="110" width="30" height="35" rx="4" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-foreground" opacity="0.5"
            animate={{ opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 2, repeat: Infinity }}
          />
          <text x="95" y="132" textAnchor="middle" className="text-foreground/40" fontSize="10" fontFamily="monospace">1</text>
          
          <motion.rect x="115" y="110" width="30" height="35" rx="4" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-foreground" opacity="0.5"
            animate={{ opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          />
          <text x="130" y="132" textAnchor="middle" className="text-foreground/40" fontSize="10" fontFamily="monospace">2</text>
          
          <motion.rect x="150" y="110" width="30" height="35" rx="4" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-foreground" opacity="0.5"
            animate={{ opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          />
          <text x="165" y="132" textAnchor="middle" className="text-foreground/40" fontSize="10" fontFamily="monospace">3</text>
          
          <motion.rect x="185" y="110" width="30" height="35" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground" opacity="0.7"
            animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
          <text x="200" y="132" textAnchor="middle" className="text-foreground/50" fontSize="10" fontFamily="monospace">✓</text>
        </g>
        <text x="230" y="132" className="text-foreground/40" fontSize="9" fontFamily="monospace">DAYS</text>
        
        {/* Progress indicator */}
        <g opacity="0.4">
          <line x1="80" y1="155" x2="215" y2="155" stroke="currentColor" strokeWidth="1" className="text-foreground"/>
          <motion.line x1="80" y1="155" x2="215" y2="155" stroke="currentColor" strokeWidth="2" className="text-foreground"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="80" cy="155" r="3" fill="currentColor" className="text-foreground"/>
          <motion.circle cx="215" cy="155" r="4" fill="currentColor" className="text-foreground"
            animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
          />
        </g>
      </svg>
    </div>
  )
}

// Card 3: Built for founders - Central founder with team roles
export function LayeredCubeIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 320 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full"
        style={{ maxHeight: '180px' }}
      >
        {/* Connection lines from center to roles */}
        <g opacity="0.25">
          <line x1="160" y1="100" x2="80" y2="60" stroke="currentColor" strokeWidth="1" className="text-foreground"/>
          <line x1="160" y1="100" x2="240" y2="60" stroke="currentColor" strokeWidth="1" className="text-foreground"/>
          <line x1="160" y1="100" x2="70" y2="130" stroke="currentColor" strokeWidth="1" className="text-foreground"/>
          <line x1="160" y1="100" x2="250" y2="130" stroke="currentColor" strokeWidth="1" className="text-foreground"/>
        </g>
        
        {/* Role 1 - PM (top left) */}
        <g>
          <circle cx="80" cy="55" r="18" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground" opacity="0.4"/>
          <text x="80" y="58" textAnchor="middle" className="text-foreground/50" fontSize="8" fontFamily="monospace">PM</text>
        </g>
        
        {/* Role 2 - Researcher (top right) */}
        <g>
          <circle cx="240" cy="55" r="18" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground" opacity="0.4"/>
          <text x="240" y="58" textAnchor="middle" className="text-foreground/50" fontSize="7" fontFamily="monospace">RESEARCH</text>
        </g>
        
        {/* Role 3 - Designer (bottom left) */}
        <g>
          <circle cx="65" cy="135" r="18" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground" opacity="0.4"/>
          <text x="65" y="138" textAnchor="middle" className="text-foreground/50" fontSize="7" fontFamily="monospace">DESIGN</text>
        </g>
        
        {/* Role 4 - Engineers (bottom right) */}
        <g>
          <circle cx="255" cy="135" r="18" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground" opacity="0.4"/>
          <text x="255" y="138" textAnchor="middle" className="text-foreground/50" fontSize="7" fontFamily="monospace">ENGG</text>
        </g>
        
        {/* Central Founder - Main circle with user icon */}
        <g>
          <motion.circle cx="160" cy="100" r="35" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground" opacity="0.6"
            animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle cx="160" cy="100" r="35" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/15"
            animate={{ scale: [1, 1.4], opacity: [0.2, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
          />
          
          {/* User silhouette */}
          <circle cx="160" cy="92" r="8" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-foreground" opacity="0.5"/>
          <path d="M145 118 Q160 105 175 118" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-foreground" opacity="0.5"/>
          
          <text x="160" y="145" textAnchor="middle" className="text-foreground/40" fontSize="8" fontFamily="monospace">FOUNDER</text>
        </g>
        
        {/* Animated pulses from center to roles */}
        <motion.circle r="4" fill="currentColor" className="text-foreground/30"
          animate={{ cx: [160, 80], cy: [100, 55], opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.circle r="4" fill="currentColor" className="text-foreground/30"
          animate={{ cx: [160, 240], cy: [100, 55], opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle r="4" fill="currentColor" className="text-foreground/30"
          animate={{ cx: [160, 65], cy: [100, 135], opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.circle r="4" fill="currentColor" className="text-foreground/30"
          animate={{ cx: [160, 255], cy: [100, 135], opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </svg>
    </div>
  )
}
