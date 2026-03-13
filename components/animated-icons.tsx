"use client"

import { motion } from "framer-motion"

// Agent Collaboration Icon - Futuristic orbital system with interconnected agents
export function WorkflowNodesIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        className="w-full h-40" 
        viewBox="0 0 300 140" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient definitions for futuristic glow */}
          <linearGradient id="agentGlow1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="agentGlow2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer orbital ring */}
        <motion.ellipse 
          cx="150" cy="70" rx="100" ry="45"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          className="opacity-30 group-hover:opacity-60 transition-opacity duration-700"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "150px 70px" }}
        />
        
        {/* Inner orbital ring */}
        <motion.ellipse 
          cx="150" cy="70" rx="60" ry="28"
          stroke="url(#agentGlow2)"
          strokeWidth="0.5"
          fill="none"
          strokeDasharray="4 8"
          className="opacity-40 group-hover:opacity-70 transition-opacity duration-700"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "150px 70px" }}
        />
        
        {/* Connection lines between agents - glowing on hover */}
        <motion.line x1="80" y1="70" x2="150" y2="70" stroke="url(#lineGradient)" strokeWidth="1" className="opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
        <motion.line x1="150" y1="70" x2="220" y2="70" stroke="url(#lineGradient)" strokeWidth="1" className="opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
        <motion.line x1="150" y1="70" x2="110" y2="35" stroke="url(#lineGradient)" strokeWidth="1" className="opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
        <motion.line x1="150" y1="70" x2="190" y2="35" stroke="url(#lineGradient)" strokeWidth="1" className="opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
        <motion.line x1="150" y1="70" x2="150" y2="110" stroke="url(#lineGradient)" strokeWidth="1" className="opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
        
        {/* Flowing particles along connections */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={`particle-${i}`}
            r="2"
            fill="#8b5cf6"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{
              cx: [150, 80 + i * 30, 150, 220 - i * 20, 150],
              cy: [70, 70 - i * 5, 70, 70 + i * 5, 70],
              opacity: [0, 0.8, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Central hub - main AI core */}
        <g filter="url(#glow)">
          <motion.circle 
            cx="150" cy="70" r="18"
            fill="url(#agentGlow1)"
            className="opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="150" cy="70" r="12"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          />
          <motion.circle 
            cx="150" cy="70" r="5"
            fill="#a78bfa"
            className="group-hover:fill-violet-300 transition-colors duration-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
        
        {/* Orbiting agent nodes */}
        {/* Agent 1 - Left */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "150px 70px" }}
        >
          <circle cx="55" cy="70" r="10" fill="#1e1e1e" stroke="#3b82f6" strokeWidth="1.5" className="group-hover:stroke-blue-400 transition-colors duration-500" />
          <circle cx="55" cy="70" r="4" fill="#3b82f6" className="group-hover:fill-blue-400 transition-colors duration-500" />
        </motion.g>
        
        {/* Agent 2 - Right */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "150px 70px" }}
        >
          <circle cx="245" cy="70" r="10" fill="#1e1e1e" stroke="#06b6d4" strokeWidth="1.5" className="group-hover:stroke-cyan-400 transition-colors duration-500" />
          <circle cx="245" cy="70" r="4" fill="#06b6d4" className="group-hover:fill-cyan-400 transition-colors duration-500" />
        </motion.g>
        
        {/* Agent 3 - Top Left */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "150px 70px" }}
        >
          <circle cx="90" cy="30" r="8" fill="#1e1e1e" stroke="#10b981" strokeWidth="1.5" className="group-hover:stroke-emerald-400 transition-colors duration-500" />
          <circle cx="90" cy="30" r="3" fill="#10b981" className="group-hover:fill-emerald-400 transition-colors duration-500" />
        </motion.g>
        
        {/* Agent 4 - Top Right */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "150px 70px" }}
        >
          <circle cx="210" cy="30" r="8" fill="#1e1e1e" stroke="#f59e0b" strokeWidth="1.5" className="group-hover:stroke-amber-400 transition-colors duration-500" />
          <circle cx="210" cy="30" r="3" fill="#f59e0b" className="group-hover:fill-amber-400 transition-colors duration-500" />
        </motion.g>
        
        {/* Agent 5 - Bottom */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "150px 70px" }}
        >
          <circle cx="150" cy="120" r="8" fill="#1e1e1e" stroke="#ec4899" strokeWidth="1.5" className="group-hover:stroke-pink-400 transition-colors duration-500" />
          <circle cx="150" cy="120" r="3" fill="#ec4899" className="group-hover:fill-pink-400 transition-colors duration-500" />
        </motion.g>
        
        {/* Pulse rings emanating from center */}
        <motion.circle 
          cx="150" cy="70" r="25"
          stroke="#8b5cf6"
          strokeWidth="1"
          fill="none"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 2], opacity: [0.4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.circle 
          cx="150" cy="70" r="25"
          stroke="#3b82f6"
          strokeWidth="1"
          fill="none"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />
      </svg>
      
      {/* Ambient glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-40 bg-violet-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  )
}

// Speed/Timeline Icon - Ship in days, not months - Futuristic speedometer with streaks
export function GrowthGraphIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        className="w-full h-40" 
        viewBox="0 0 300 140" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="arcGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>
          <filter id="speedGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background arc track */}
        <path 
          d="M50 100 A80 80 0 0 1 250 100"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          className="text-foreground/10"
        />
        
        {/* Progress arc - animated fill */}
        <motion.path 
          d="M50 100 A80 80 0 0 1 250 100"
          stroke="url(#speedGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 0.85, 0.85] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeOut" }}
        />
        
        {/* Glowing progress tip */}
        <motion.circle
          r="6"
          fill="#10b981"
          filter="url(#speedGlow)"
          initial={{ opacity: 0 }}
          animate={{
            cx: [50, 230, 230],
            cy: [100, 40, 40],
            opacity: [0, 1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeOut" }}
        />
        
        {/* Speed streaks/particles */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.line
            key={`streak-${i}`}
            x1={80 + i * 30}
            y1={90 - i * 8}
            x2={60 + i * 30}
            y2={90 - i * 8}
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0, x: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0], 
              x: [-20, 0, 20],
            }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity, 
              delay: i * 0.15,
              ease: "easeOut" 
            }}
          />
        ))}
        
        {/* Timeline markers */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={`marker-${i}`}>
            <motion.circle
              cx={70 + i * 45}
              cy={95 - i * 12}
              r="3"
              fill={i < 4 ? "#10b981" : "#3b82f6"}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1] }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.2 }}
              className="group-hover:drop-shadow-[0_0_4px_rgba(16,185,129,0.8)] transition-all duration-300"
            />
          </g>
        ))}
        
        {/* Days counter */}
        <motion.text
          x="150"
          y="85"
          textAnchor="middle"
          className="fill-emerald-400 text-2xl font-bold group-hover:fill-emerald-300 transition-colors duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.tspan
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            3-12
          </motion.tspan>
        </motion.text>
        <text
          x="150"
          y="105"
          textAnchor="middle"
          className="fill-foreground/40 text-xs font-medium"
        >
          DAYS
        </text>
        
        {/* Rocket icon at the end */}
        <motion.g
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: [0, 5, 0], opacity: 1 }}
          transition={{ 
            x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.5, delay: 1.5 }
          }}
        >
          <path 
            d="M245 35 L260 45 L245 55 L250 45 Z" 
            fill="#10b981" 
            className="group-hover:fill-emerald-400 transition-colors duration-500"
          />
          {/* Rocket trail */}
          <motion.path
            d="M235 45 L245 45"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ opacity: [0.3, 0.8, 0.3], x: [-5, 0, -5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          <motion.path
            d="M230 45 L238 45"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{ opacity: [0.2, 0.5, 0.2], x: [-8, 0, -8] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
          />
        </motion.g>
        
        {/* Pulsing completion indicator */}
        <motion.circle
          cx="230"
          cy="40"
          r="12"
          stroke="#10b981"
          strokeWidth="1"
          fill="none"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
        />
      </svg>
      
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  )
}

// Founder Power Icon - Single user commanding a full product team/capabilities
export function NetworkHubIcon({ className = "" }: { className?: string }) {
  const capabilities = [
    { label: "PM", color: "#3b82f6", angle: -60 },
    { label: "Research", color: "#8b5cf6", angle: -20 },
    { label: "Design", color: "#ec4899", angle: 20 },
    { label: "Dev", color: "#f59e0b", angle: 60 },
    { label: "Deploy", color: "#10b981", angle: 100 },
  ]
  
  return (
    <div className={`relative ${className}`}>
      <svg 
        className="w-full h-40" 
        viewBox="0 0 300 140" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="founderGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.4" />
          </linearGradient>
          <filter id="founderFilter">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <radialGradient id="powerRing" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Outer power ring - rotating */}
        <motion.circle
          cx="150"
          cy="70"
          r="55"
          stroke="#f59e0b"
          strokeWidth="1"
          strokeDasharray="8 12"
          fill="none"
          className="opacity-30 group-hover:opacity-60 transition-opacity duration-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "150px 70px" }}
        />
        
        {/* Inner glowing ring */}
        <motion.circle
          cx="150"
          cy="70"
          r="35"
          fill="url(#powerRing)"
          className="opacity-50 group-hover:opacity-80 transition-opacity duration-500"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Connection beams to capabilities */}
        {capabilities.map((cap, i) => {
          const rad = (cap.angle * Math.PI) / 180
          const startX = 150 + Math.cos(rad) * 30
          const startY = 70 + Math.sin(rad) * 30
          const endX = 150 + Math.cos(rad) * 70
          const endY = 70 + Math.sin(rad) * 42
          
          return (
            <g key={cap.label}>
              {/* Connection line */}
              <motion.line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={cap.color}
                strokeWidth="1.5"
                className="opacity-30 group-hover:opacity-70 transition-opacity duration-500"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
              
              {/* Energy pulse along line */}
              <motion.circle
                r="3"
                fill={cap.color}
                filter="url(#founderFilter)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [startX, endX],
                  cy: [startY, endY],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
              />
              
              {/* Capability node */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <circle
                  cx={endX}
                  cy={endY}
                  r="18"
                  fill="#1e1e1e"
                  stroke={cap.color}
                  strokeWidth="1.5"
                  className="group-hover:stroke-2 transition-all duration-300"
                />
                <text
                  x={endX}
                  y={endY + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={cap.color}
                  className="text-[8px] font-medium"
                >
                  {cap.label}
                </text>
                
                {/* Hover glow */}
                <motion.circle
                  cx={endX}
                  cy={endY}
                  r="18"
                  stroke={cap.color}
                  strokeWidth="1"
                  fill="none"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              </motion.g>
            </g>
          )
        })}
        
        {/* Central founder avatar */}
        <g filter="url(#founderFilter)">
          {/* Glowing background */}
          <motion.circle
            cx="150"
            cy="70"
            r="24"
            fill="url(#founderGlow)"
            className="opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Avatar circle */}
          <circle
            cx="150"
            cy="70"
            r="18"
            fill="#1e1e1e"
            stroke="#f59e0b"
            strokeWidth="2"
            className="group-hover:stroke-amber-400 transition-colors duration-500"
          />
          
          {/* User icon */}
          <circle cx="150" cy="65" r="6" fill="#f59e0b" className="group-hover:fill-amber-400 transition-colors duration-500" />
          <path
            d="M140 82 Q150 74 160 82"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            className="group-hover:stroke-amber-400 transition-colors duration-500"
          />
        </g>
        
        {/* "= Full Team" text */}
        <motion.text
          x="150"
          y="128"
          textAnchor="middle"
          className="fill-foreground/40 text-[10px] font-medium group-hover:fill-foreground/60 transition-colors duration-500"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          = Full Product Team
        </motion.text>
        
        {/* Pulse rings from center */}
        <motion.circle
          cx="150"
          cy="70"
          r="25"
          stroke="#f59e0b"
          strokeWidth="1"
          fill="none"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
      </svg>
      
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-40 bg-amber-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
