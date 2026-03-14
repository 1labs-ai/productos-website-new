"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FounderNetworkProps {
  className?: string
}

export const FounderNetwork = ({ className }: FounderNetworkProps) => {
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  // Node positions around the center
  const nodes = [
    { id: 0, x: 50, y: 15 },   // Top
    { id: 1, x: 85, y: 35 },   // Top Right
    { id: 2, x: 85, y: 65 },   // Bottom Right
    { id: 3, x: 50, y: 85 },   // Bottom
    { id: 4, x: 15, y: 65 },   // Bottom Left
    { id: 5, x: 15, y: 35 },   // Top Left
  ]

  return (
    <div className={cn("relative w-full flex items-center justify-center", className)}>
      {/* Container - centered */}
      <div className="relative w-[280px] h-[200px] flex items-center justify-center">
        
        {/* SVG for connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 200">
          {/* Connection lines from center to nodes */}
          {nodes.map((node, i) => (
            <motion.line
              key={i}
              x1="140"
              y1="100"
              x2={`${node.x * 2.8}`}
              y2={`${node.y * 2}`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-foreground/10 dark:text-white/10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </svg>

        {/* Center node - Founder */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-16 h-16 rounded-full border border-foreground/20 dark:border-white/20 flex items-center justify-center bg-background dark:bg-[#0a0a0b]">
              {/* Inner ring */}
              <div className="w-12 h-12 rounded-full border border-foreground/30 dark:border-white/30 flex items-center justify-center">
                <User size={20} className="text-foreground/50 dark:text-white/50" strokeWidth={1.5} />
              </div>
            </div>
            {/* Pulse animation */}
            <motion.div
              className="absolute inset-0 rounded-full border border-foreground/10 dark:border-white/10"
              animate={{ scale: [1, 1.3], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Outer nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ 
              left: `${node.x}%`, 
              top: `${node.y}%` 
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          >
            <div className={cn(
              "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500",
              pulse === i 
                ? "border-foreground/40 dark:border-white/40 bg-foreground/5 dark:bg-white/5" 
                : "border-foreground/10 dark:border-white/10 bg-transparent"
            )}>
              <div className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-500",
                pulse === i 
                  ? "bg-foreground/60 dark:bg-white/60" 
                  : "bg-foreground/20 dark:bg-white/20"
              )} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FounderNetwork
