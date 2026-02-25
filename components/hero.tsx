"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-20 pb-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-card border border-border mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-sm text-muted-foreground">The AI-native way to build products</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          style={{ lineHeight: 1.05, letterSpacing: '-0.025em' }}
        >
          <span className="text-foreground">Ship Products</span>
          <br />
          <span className="text-foreground/70">10x Faster</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          ProductOS orchestrates research, PRD, design, and code through AI agents 
          that work together—keeping context intact from first idea to production.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-lg px-6 h-11"
            asChild
          >
            <a href="https://build.productos.dev/sign-up">
              Start Building Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg px-6 h-11 border-border hover:bg-secondary"
            asChild
          >
            <a href="mailto:hello@1labs.ai">Contact Sales</a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-10 sm:gap-16"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">500+</div>
            <div className="text-sm text-muted-foreground mt-1">Products shipped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">3-12</div>
            <div className="text-sm text-muted-foreground mt-1">Days to launch</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">50k+</div>
            <div className="text-sm text-muted-foreground mt-1">Launches</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
