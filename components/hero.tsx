"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card pointer-events-none" />
      
      {/* Subtle radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, hsl(240 10% 20% / 0.3) 0%, transparent 70%)"
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-8"
        >
          <Sparkles className="size-3.5 text-amber-500" />
          <span className="text-sm font-medium text-foreground/80">The AI-native way to build products</span>
        </motion.div>

        {/* Headline - New Brand Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          style={{ lineHeight: 1.05, letterSpacing: '-0.025em' }}
        >
          <span className="text-foreground">Five Stages.</span>
          <br />
          <span className="text-foreground/60">Zero Context Lost.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From idea to production in days, not months. AI agents that work together, 
          keeping context intact at every stage.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-lg px-8 h-12 text-base font-medium shadow-lg shadow-foreground/10"
            asChild
          >
            <a href="https://build.productos.dev/sign-up">
              Start Building Free
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg px-8 h-12 text-base font-medium border-border/50 hover:bg-card hover:border-border"
            asChild
          >
            <a href="#stages">See How It Works</a>
          </Button>
        </motion.div>

        {/* Stats - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-12 sm:gap-20"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">5</div>
            <div className="text-sm text-muted-foreground mt-1">AI Agents</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">3-12</div>
            <div className="text-sm text-muted-foreground mt-1">Days to ship</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">0</div>
            <div className="text-sm text-muted-foreground mt-1">Context lost</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
