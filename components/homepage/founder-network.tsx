"use client"

import { motion } from 'framer-motion'
import { User, Search, Palette, Code2, ClipboardList } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FounderNetworkProps {
  className?: string
}

export const FounderNetwork = ({ className }: FounderNetworkProps) => {
  const roles = [
    { id: 'pm', icon: ClipboardList, label: 'PM', angle: 225 },        // top-left
    { id: 'research', icon: Search, label: 'RESEARCHER', angle: 315 }, // top-right
    { id: 'design', icon: Palette, label: 'DESIGNER', angle: 135 },    // bottom-left
    { id: 'eng', icon: Code2, label: 'ENGINEER', angle: 45 },          // bottom-right
  ]

  const centerX = 200
  const centerY = 160
  const nodeRadius = 130 // Distance from center to role nodes

  return (
    <div className={cn("relative w-full flex items-center justify-center", className)}>
      <div className="relative w-[400px] h-[340px] flex flex-col items-center">
        
        {/* Header Label */}
        <div className="mb-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40 dark:text-white/40">
            FIG 0.3 / NEURAL FLOW
          </span>
        </div>
        
        {/* Main SVG Canvas */}
        <svg className="w-[400px] h-[280px]" viewBox="0 0 400 320">
          <defs>
            <filter id="glow-founder">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer tick ring */}
          <g>
            {Array.from({ length: 72 }).map((_, i) => {
              const angle = (i * 5 * Math.PI) / 180
              const isLong = i % 6 === 0
              const innerR = isLong ? 68 : 72
              const outerR = 78
              const x1 = centerX + Math.cos(angle) * innerR
              const y1 = centerY + Math.sin(angle) * innerR
              const x2 = centerX + Math.cos(angle) * outerR
              const y2 = centerY + Math.sin(angle) * outerR
              return (
                <line
                  key={`tick-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={isLong ? "1" : "0.5"}
                  className="text-foreground/20 dark:text-white/20"
                />
              )
            })}
          </g>
          
          {/* Concentric rings */}
          <circle cx={centerX} cy={centerY} r="65" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/15 dark:text-white/15" />
          <circle cx={centerX} cy={centerY} r="55" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/10 dark:text-white/10" />
          <circle cx={centerX} cy={centerY} r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/10 dark:text-white/10" />
          
          {/* Center node background */}
          <circle cx={centerX} cy={centerY} r="38" className="fill-background dark:fill-[#0a0a0a]" />
          <circle cx={centerX} cy={centerY} r="38" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/15 dark:text-white/15" />
          <circle cx={centerX} cy={centerY} r="28" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/10 dark:text-white/10" />
          
          {/* Center user icon */}
          <g transform={`translate(${centerX - 14}, ${centerY - 14})`}>
            <circle cx="14" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/70 dark:text-white/70" />
            <path d="M4 26c0-5.5 4.5-10 10-10s10 4.5 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-foreground/70 dark:text-white/70" />
          </g>
          
          {/* Connection lines and nodes */}
          {roles.map((role, i) => {
            const angleRad = (role.angle * Math.PI) / 180
            const nodeX = centerX + Math.cos(angleRad) * nodeRadius
            const nodeY = centerY + Math.sin(angleRad) * nodeRadius
            
            // Connection line from center edge to node
            const startX = centerX + Math.cos(angleRad) * 45
            const startY = centerY + Math.sin(angleRad) * 45
            
            // Dots along the connection
            const dot1X = centerX + Math.cos(angleRad) * 65
            const dot1Y = centerY + Math.sin(angleRad) * 65
            const dot2X = centerX + Math.cos(angleRad) * 85
            const dot2Y = centerY + Math.sin(angleRad) * 85
            
            return (
              <g key={role.id}>
                {/* Connection line */}
                <motion.line
                  x1={startX}
                  y1={startY}
                  x2={nodeX}
                  y2={nodeY}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/20 dark:text-white/20"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
                
                {/* Connection dots */}
                <circle cx={dot1X} cy={dot1Y} r="2.5" className="fill-foreground/30 dark:fill-white/30" />
                <circle cx={dot2X} cy={dot2Y} r="2" className="fill-foreground/25 dark:fill-white/25" />
                
                {/* Animated flowing particle */}
                <motion.circle
                  r="2"
                  className="fill-foreground/60 dark:fill-white/60"
                  filter="url(#glow-founder)"
                  initial={{ opacity: 0 }}
                  animate={{
                    cx: [startX, nodeX],
                    cy: [startY, nodeY],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.6
                  }}
                />
              </g>
            )
          })}
          
          {/* Role nodes */}
          {roles.map((role, i) => {
            const angleRad = (role.angle * Math.PI) / 180
            const nodeX = centerX + Math.cos(angleRad) * nodeRadius
            const nodeY = centerY + Math.sin(angleRad) * nodeRadius
            const boxSize = 48
            const halfBox = boxSize / 2
            
            return (
              <motion.g
                key={`node-${role.id}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 100 }}
              >
                {/* Node background */}
                <rect
                  x={nodeX - halfBox}
                  y={nodeY - halfBox}
                  width={boxSize}
                  height={boxSize}
                  rx="12"
                  className="fill-background dark:fill-[#0a0a0a]"
                />
                <rect
                  x={nodeX - halfBox}
                  y={nodeY - halfBox}
                  width={boxSize}
                  height={boxSize}
                  rx="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/20 dark:text-white/20"
                />
                
                {/* Corner brackets */}
                {/* Top-left */}
                <path
                  d={`M${nodeX - halfBox - 6} ${nodeY - halfBox + 8} L${nodeX - halfBox - 6} ${nodeY - halfBox - 6} L${nodeX - halfBox + 8} ${nodeY - halfBox - 6}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/30 dark:text-white/30"
                />
                {/* Top-right */}
                <path
                  d={`M${nodeX + halfBox - 8} ${nodeY - halfBox - 6} L${nodeX + halfBox + 6} ${nodeY - halfBox - 6} L${nodeX + halfBox + 6} ${nodeY - halfBox + 8}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/30 dark:text-white/30"
                />
                {/* Bottom-left */}
                <path
                  d={`M${nodeX - halfBox - 6} ${nodeY + halfBox - 8} L${nodeX - halfBox - 6} ${nodeY + halfBox + 6} L${nodeX - halfBox + 8} ${nodeY + halfBox + 6}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/30 dark:text-white/30"
                />
                {/* Bottom-right */}
                <path
                  d={`M${nodeX + halfBox - 8} ${nodeY + halfBox + 6} L${nodeX + halfBox + 6} ${nodeY + halfBox + 6} L${nodeX + halfBox + 6} ${nodeY + halfBox - 8}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/30 dark:text-white/30"
                />
                
                {/* Label below node */}
                <text
                  x={nodeX}
                  y={nodeY + halfBox + 22}
                  textAnchor="middle"
                  className="fill-foreground/50 dark:fill-white/50 text-[10px] font-mono uppercase tracking-[0.15em]"
                >
                  {role.label}
                </text>
              </motion.g>
            )
          })}
        </svg>
        
        {/* Icons overlay - positioned absolutely to use Lucide components */}
        <div className="absolute inset-0 pointer-events-none" style={{ top: '36px' }}>
          {roles.map((role, i) => {
            const angleRad = (role.angle * Math.PI) / 180
            const nodeX = centerX + Math.cos(angleRad) * nodeRadius
            const nodeY = centerY + Math.sin(angleRad) * nodeRadius
            
            return (
              <div
                key={`icon-${role.id}`}
                className="absolute flex items-center justify-center"
                style={{
                  left: `${nodeX}px`,
                  top: `${nodeY}px`,
                  transform: 'translate(-50%, -50%)',
                  width: '48px',
                  height: '48px'
                }}
              >
                <role.icon size={22} strokeWidth={1.5} className="text-foreground/60 dark:text-white/60" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FounderNetwork
