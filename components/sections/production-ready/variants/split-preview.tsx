"use client"

import { motion } from "framer-motion"
import { Code2, Eye, ArrowRight } from "lucide-react"

const generatedCode = `"use client"

import { Button } from "@/components/ui/button"

export function WelcomeCard() {
  return (
    <div className="p-6 rounded-lg bg-card border">
      <h2 className="text-xl font-semibold mb-2">
        Welcome back, Alex
      </h2>
      <p className="text-muted-foreground mb-4">
        You have 3 new notifications
      </p>
      <Button>View Dashboard</Button>
    </div>
  )
}`

export function SplitPreview() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Code Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg bg-muted/30 border border-border/50 overflow-hidden"
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Generated Code</span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">welcome-card.tsx</span>
          </div>
          
          {/* Code Content */}
          <div className="p-4 font-mono text-xs sm:text-sm overflow-x-auto max-h-[300px] sm:max-h-[350px] overflow-y-auto">
            <pre className="text-muted-foreground whitespace-pre-wrap break-words">
              <code>{generatedCode}</code>
            </pre>
          </div>
        </motion.div>

        {/* Connection Arrow - Desktop Only */}
        <div className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center"
          >
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </div>

        {/* Preview Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg bg-muted/30 border border-border/50 overflow-hidden"
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Live Preview</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs text-muted-foreground">Hot reload</span>
            </div>
          </div>
          
          {/* Preview Content */}
          <div className="p-6 sm:p-8 flex items-center justify-center min-h-[250px] sm:min-h-[300px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="w-full max-w-sm p-6 rounded-lg bg-card border border-border"
            >
              <h2 className="text-xl font-semibold mb-2 text-foreground">
                Welcome back, Alex
              </h2>
              <p className="text-muted-foreground mb-4 text-sm">
                You have 3 new notifications
              </p>
              <button className="px-4 py-2 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors">
                View Dashboard
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Connection indicator for mobile */}
      <div className="lg:hidden flex items-center justify-center py-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Code</span>
          <ArrowRight className="w-3 h-3" />
          <span>Preview</span>
        </div>
      </div>
    </div>
  )
}
