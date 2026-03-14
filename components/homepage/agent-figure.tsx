"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AgentFigureProps {
  className?: string
}

export const AgentFigure = ({ className }: AgentFigureProps) => {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => prev + 1)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={cn("relative w-full", className)}>
      {/* Square Card Container */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden flex flex-col p-4 bg-foreground/[0.02] dark:bg-white/[0.03] border border-border/30 dark:border-white/[0.05]">
        
        {/* Figure Label */}
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40 dark:text-white/20 mb-auto">
          Fig 0.1
        </div>

        {/* The Figure Visualization */}
        <div className="relative flex-1 flex items-center justify-center">
          
          {/* SVG for Curved Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Horizontal Curved Path */}
            <motion.path
              d="M 100 200 Q 150 180 200 200 T 300 200 T 360 180"
              fill="none"
              className="stroke-foreground dark:stroke-white"
              strokeWidth="1"
              strokeOpacity="0.15"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Vertical Straight Path */}
            <motion.path
              d="M 200 120 L 200 280"
              fill="none"
              className="stroke-foreground dark:stroke-white"
              strokeWidth="1"
              strokeOpacity="0.15"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />

            {/* Flowing Particle on Curved Path */}
            <motion.circle
              r="2"
              className="fill-foreground dark:fill-white"
              filter="url(#glow)"
            >
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path="M 100 200 Q 150 180 200 200 T 300 200 T 360 180"
              />
            </motion.circle>
          </svg>

          {/* Nodes Layer */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Center Node */}
            <div className="absolute z-20">
              <div className="relative w-14 h-14 rounded-full border border-foreground/20 dark:border-white/20 flex items-center justify-center bg-background dark:bg-[#0A0A0A]">
                <div className="w-9 h-9 rounded-full border border-foreground/40 dark:border-white/40 flex items-center justify-center">
                  <motion.div 
                    className="w-2.5 h-2.5 bg-foreground dark:bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                {/* Outer Ring Animation */}
                <motion.div 
                  className="absolute inset-0 rounded-full border border-foreground/10 dark:border-white/10"
                  animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Top Node */}
            <div className="absolute top-[20%] z-10">
              <Node size="sm" />
            </div>

            {/* Bottom Node */}
            <div className="absolute bottom-[20%] z-10">
              <Node size="sm" />
            </div>

            {/* Left Node */}
            <div className="absolute left-[15%] z-10">
              <Node size="md" />
            </div>

            {/* Right Node */}
            <div className="absolute right-[25%] z-10">
              <Node size="md" />
            </div>

            {/* Far Right Node */}
            <div className="absolute right-[5%] top-[40%] z-10">
              <Node size="sm" />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

const Node = ({ size = 'md' }: { size?: 'sm' | 'md' }) => {
  const dimensions = size === 'md' ? 'w-9 h-9' : 'w-7 h-7'
  const innerSize = size === 'md' ? 'w-2 h-2' : 'w-1.5 h-1.5'

  return (
    <div className={cn(
      "relative rounded-full border border-foreground/10 dark:border-white/10 flex items-center justify-center bg-background dark:bg-[#0A0A0A]",
      dimensions
    )}>
      <div className={cn("bg-foreground/40 dark:bg-white/40 rounded-full", innerSize)} />
      <motion.div 
        className="absolute inset-0 rounded-full border border-foreground/5 dark:border-white/5"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  )
}

export default AgentFigure
