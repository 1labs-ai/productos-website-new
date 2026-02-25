"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Search, FileText, Palette, Code, Link2 } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From Idea to Production in Days
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Five integrated stages powered by specialized AI agents. No context loss. No handoff friction. Just shipping.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Large card - Context Preservation */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative p-6 rounded-2xl bg-card border border-border hover:border-border hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="p-2 rounded-lg bg-secondary w-fit mb-4">
                  <Link2 className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Context Preserved Across Stages</h3>
                <p className="text-muted-foreground text-sm">
                  ProductOS keeps a single thread of context from Ideate through Develop—research, PRD, design tokens, and code stay linked so handoffs are lossless.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {["Research", "PRD", "Design Tokens", "Components", "Code"].map((stage, i) => (
                <div key={stage} className="flex items-center">
                  <span className="px-3 py-1.5 rounded-full bg-secondary text-foreground/80 text-sm">{stage}</span>
                  {i < 4 && <span className="mx-2 text-zinc-600">→</span>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ideate */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-border hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-secondary w-fit mb-4">
              <Lightbulb className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Ideate</h3>
            <p className="text-muted-foreground text-sm mb-4">Transform rough ideas into structured product concepts with AI-guided brainstorming.</p>
            <span className="text-xs text-muted-foreground">Stage 1</span>
          </motion.div>

          {/* Discover */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-border hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-secondary w-fit mb-4">
              <Search className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Discover</h3>
            <p className="text-muted-foreground text-sm mb-4">Validate with market research, competitor analysis, and user insights—all automated.</p>
            <span className="text-xs text-muted-foreground">Stage 2</span>
          </motion.div>

          {/* Define */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-border hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-secondary w-fit mb-4">
              <FileText className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Define</h3>
            <p className="text-muted-foreground text-sm mb-4">Generate comprehensive PRDs with user stories, specs, and acceptance criteria.</p>
            <span className="text-xs text-muted-foreground">Stage 3</span>
          </motion.div>

          {/* Design */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-border hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-secondary w-fit mb-4">
              <Palette className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
            <p className="text-muted-foreground text-sm mb-4">Create UI screens, design systems, and interactive prototypes from your PRD.</p>
            <span className="text-xs text-muted-foreground">Stage 4</span>
          </motion.div>

          {/* Develop */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-border hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-secondary w-fit mb-4">
              <Code className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Develop</h3>
            <p className="text-muted-foreground text-sm mb-4">Ship production-ready React/Next.js code with your designs baked in.</p>
            <span className="text-xs text-muted-foreground">Stage 5</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
