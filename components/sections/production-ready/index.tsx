"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, Rocket, GitBranch, BarChart3, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DeploymentPipeline } from "./variants/deployment-pipeline"
import { GitActivityFeed } from "./variants/git-activity-feed"
import { CodeQualityScorecard } from "./variants/code-quality-scorecard"
import { SplitPreview } from "./variants/split-preview"
import { cn } from "@/lib/utils"

export type ProductionReadyVariant = "pipeline" | "git" | "quality" | "split"

const variants = [
  {
    id: "pipeline" as const,
    label: "Deployment",
    icon: Rocket,
    description: "Live deployment pipeline",
  },
  {
    id: "git" as const,
    label: "Git Activity",
    icon: GitBranch,
    description: "Commit timeline",
  },
  {
    id: "quality" as const,
    label: "Quality",
    icon: BarChart3,
    description: "Code metrics",
  },
  {
    id: "split" as const,
    label: "Preview",
    icon: Code2,
    description: "Code to UI",
  },
]

interface ProductionReadySectionProps {
  /** Initial variant to display */
  initialVariant?: ProductionReadyVariant
  /** Whether to show the variant selector tabs */
  showSelector?: boolean
  /** Cycle through variants automatically */
  autoRotate?: boolean
  /** Rotation interval in ms (default: 5000) */
  rotationInterval?: number
}

export function ProductionReadySection({
  initialVariant = "pipeline",
  showSelector = true,
  autoRotate = false,
  rotationInterval = 5000,
}: ProductionReadySectionProps) {
  const [activeVariant, setActiveVariant] = useState<ProductionReadyVariant>(initialVariant)

  // Auto-rotate through variants
  // useEffect(() => {
  //   if (!autoRotate) return
  //   const interval = setInterval(() => {
  //     setActiveVariant((current) => {
  //       const currentIndex = variants.findIndex((v) => v.id === current)
  //       return variants[(currentIndex + 1) % variants.length].id
  //     })
  //   }, rotationInterval)
  //   return () => clearInterval(interval)
  // }, [autoRotate, rotationInterval])

  const renderVariant = () => {
    switch (activeVariant) {
      case "pipeline":
        return <DeploymentPipeline />
      case "git":
        return <GitActivityFeed />
      case "quality":
        return <CodeQualityScorecard />
      case "split":
        return <SplitPreview />
      default:
        return <DeploymentPipeline />
    }
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header - Linear Style Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left: Heading + Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-card/80 border border-border/50 mb-6">
              <Sparkles className="size-3.5 text-amber-500" />
              <span className="text-xs font-medium text-foreground/80 tracking-wide uppercase">
                Real Code. Real Products.
              </span>
            </div>
            
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Production-ready<br />
              <span className="text-foreground/60">from day one</span>
            </h2>
          </motion.div>

          {/* Right: Paragraph + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Every line of code generated is production-grade. TypeScript, 
              comprehensive tests, optimized builds, and instant deployment 
              to your infrastructure of choice.
            </p>
            
            <div>
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-6 h-11 text-sm font-medium"
                asChild
              >
                <a href="/early-access">
                  See the code
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Variant Selector */}
        {showSelector && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-8"
          >
            {variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setActiveVariant(variant.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeVariant === variant.id
                    ? "bg-card border border-border text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                )}
              >
                <variant.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{variant.label}</span>
              </button>
            ))}
          </motion.div>
        )}

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative p-6 sm:p-8 rounded-xl bg-card/50 border border-border/50 overflow-hidden"
        >
          {/* Subtle background gradient */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(240 10% 15% / 0.5) 0%, transparent 70%)"
            }}
          />
          
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVariant}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderVariant()}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Named exports for individual variants (for direct use)
export { DeploymentPipeline } from "./variants/deployment-pipeline"
export { GitActivityFeed } from "./variants/git-activity-feed"
export { CodeQualityScorecard } from "./variants/code-quality-scorecard"
export { SplitPreview } from "./variants/split-preview"
