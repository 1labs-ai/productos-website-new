"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, Search, FileText, Palette, Code } from "lucide-react"
import { cn } from "@/lib/utils"

// Stage color configuration from Design System v3
const stageColors = {
  ideate: {
    bg: "bg-sky-50 dark:bg-sky-950/50",
    border: "border-sky-200 dark:border-sky-800",
    text: "text-sky-700 dark:text-sky-400",
    icon: "text-sky-600 dark:text-sky-400",
    dot: "bg-sky-500",
    activeBg: "bg-sky-500/10",
  },
  discover: {
    bg: "bg-violet-50 dark:bg-violet-950/50",
    border: "border-violet-200 dark:border-violet-800",
    text: "text-violet-700 dark:text-violet-400",
    icon: "text-violet-600 dark:text-violet-400",
    dot: "bg-violet-500",
    activeBg: "bg-violet-500/10",
  },
  define: {
    bg: "bg-teal-50 dark:bg-teal-950/50",
    border: "border-teal-200 dark:border-teal-800",
    text: "text-teal-700 dark:text-teal-400",
    icon: "text-teal-600 dark:text-teal-400",
    dot: "bg-teal-500",
    activeBg: "bg-teal-500/10",
  },
  design: {
    bg: "bg-purple-50 dark:bg-purple-950/50",
    border: "border-purple-200 dark:border-purple-800",
    text: "text-purple-700 dark:text-purple-400",
    icon: "text-purple-600 dark:text-purple-400",
    dot: "bg-purple-500",
    activeBg: "bg-purple-500/10",
  },
  develop: {
    bg: "bg-amber-50 dark:bg-amber-950/50",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-700 dark:text-amber-400",
    icon: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
    activeBg: "bg-amber-500/10",
  },
}

const stages = [
  {
    id: "ideate",
    name: "Ideate",
    agent: "Ideation Agent",
    icon: Lightbulb,
    description: "Generate big ideas, positioning, and product angles before deep research. Rapid concept cards with problem, solution, audience.",
    card: {
      title: "Idea Canvas",
      subtitle: "AI Market Copilot",
      badge: "Ideation Brief · Concepts",
      content: "Shape problem, solution, and audience quickly before deep research. Rapid concept cards keep momentum.",
      details: [
        { label: "Problem / Insight", value: "Founders juggle 20+ tools and lose context. Need one orchestrated loop from idea to launch." },
        { label: "Solution Angle", value: "AI-native workspace with stage agents, auto-updated PRD, and deployable code in 3–12 days." },
      ],
      tags: ["Solo founders", "Product teams", "Agencies"],
      next: ["Validate demand", "Lock ICP & pricing", "Move to Discover"],
    },
  },
  {
    id: "discover",
    name: "Discover",
    agent: "Research Agent",
    icon: Search,
    description: "Validate market opportunities with multi-model AI research and competitive analysis before committing scope.",
    card: {
      title: "Research Report",
      subtitle: "SaaS Analytics Platform",
      badge: "Research Agent · Discover",
      content: "Validate market opportunities with multi-model AI research and competitive analysis before committing scope.",
      details: [
        { label: "Target Audience", value: "Product Managers, Founders, Data Analysts" },
        { label: "Key Competitors", value: "Mixpanel, Amplitude, PostHog" },
      ],
      score: "8.9/10",
      scoreLabel: "Opportunity Score",
      insight: "High demand for simplified, privacy-first analytics. Current solutions are overly complex for early-stage startups.",
    },
  },
  {
    id: "define",
    name: "Define",
    agent: "PRD Agent",
    icon: FileText,
    description: "Turn research into a living PRD with user stories, acceptance criteria, and milestones auto-aligned to design and code.",
    card: {
      title: "Structured PRD",
      subtitle: "with auto-sync",
      badge: "PRD Agent · Define",
      content: "Turn research into a living PRD with user stories, acceptance criteria, and milestones auto-aligned to design and code.",
      goals: "Unify research → design → code with context-preserving handoffs. Ship MVP in 3–12 days.",
      checklist: ["User stories locked", "Acceptance criteria set", "Milestones aligned"],
      stories: ["As a founder, validate market fit", "As a PM, align PRD with design", "As a dev, ship with context"],
      metrics: ["Launch ≤ 12 days", "NPS > 50", "80% feature completion"],
    },
  },
  {
    id: "design",
    name: "Design",
    agent: "Design Agent",
    icon: Palette,
    description: "Generate design tokens, components, and key screens synced to the PRD so development stays aligned.",
    card: {
      title: "Design System",
      subtitle: "& Screens",
      badge: "Design Agent · Design",
      content: "Generate design tokens, components, and key screens synced to the PRD so development stays aligned.",
      tokens: { typography: "Inter · 12–32px", accent: "Stage-aware accents" },
      components: ["Buttons", "Inputs & states", "Cards / Bento"],
      props: ["Radius: 16px", "Shadow: xl", "Blur: 18px", "Grid: 12 cols"],
    },
  },
  {
    id: "develop",
    name: "Develop",
    agent: "Code Agent",
    icon: Code,
    description: "Ship full-stack code with tests and deployable builds; keep research, PRD, and design context intact.",
    card: {
      title: "Production-ready",
      subtitle: "code",
      badge: "Code Agent · Develop",
      content: "Ship full-stack code with tests and deployable builds; keep research, PRD, and design context intact.",
      tests: "24 passing",
      deploy: "Edge · live",
    },
  },
]

export function StickyStages() {
  const [activeStage, setActiveStage] = useState("ideate")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const currentStage = stages.find((s) => s.id === activeStage) || stages[0]
  const colors = stageColors[activeStage as keyof typeof stageColors]

  return (
    <section ref={ref} id="stages" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
            Five Stages.<br />
            <span className="text-muted-foreground">One Connected Workflow.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mt-6 text-lg leading-relaxed">
            Each AI agent builds on the last. Research feeds the PRD. PRD drives design. 
            Design shapes code. Nothing falls through the cracks.
          </p>
        </motion.div>

        {/* Stage Tabs - with colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {stages.map((stage) => {
            const stageColor = stageColors[stage.id as keyof typeof stageColors]
            const isActive = activeStage === stage.id
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                  isActive
                    ? cn(stageColor.bg, stageColor.border, stageColor.text)
                    : "bg-card text-muted-foreground hover:text-foreground border-border hover:border-border"
                )}
              >
                {stage.name}
              </button>
            )
          })}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left Sidebar - Stages List */}
          <div className="space-y-2">
            {stages.map((stage) => {
              const Icon = stage.icon
              const stageColor = stageColors[stage.id as keyof typeof stageColors]
              const isActive = activeStage === stage.id
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-lg transition-all text-left",
                    isActive
                      ? cn("bg-card border", stageColor.border)
                      : "hover:bg-card/50 border border-transparent"
                  )}
                >
                  <div className={cn(
                    "p-2.5 rounded-lg transition-colors",
                    isActive ? stageColor.activeBg : "bg-muted/50"
                  )}>
                    <Icon className={cn(
                      "size-5",
                      isActive ? stageColor.icon : "text-muted-foreground"
                    )} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className={cn(
                      "font-semibold transition-colors",
                      isActive ? "text-foreground" : "text-foreground/80"
                    )}>{stage.name}</div>
                    <div className="text-xs text-muted-foreground">{stage.agent}</div>
                  </div>
                </button>
              )
            })}

            {/* Active Stage Description */}
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn("mt-4 p-4 rounded-lg border", colors.bg, colors.border)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={cn("size-2 rounded-full", colors.dot)} />
                <span className={cn("text-xs font-medium", colors.text)}>
                  {currentStage.agent}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{currentStage.description}</p>
            </motion.div>
          </div>

          {/* Right Content - Stage Card */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              {/* Badge with stage color */}
              <div className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4",
                colors.bg, colors.border, colors.text
              )}>
                <span className={cn("size-1.5 rounded-full", colors.dot)} />
                {currentStage.card.badge}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {currentStage.card.title}
                <span className="text-muted-foreground font-normal">: {currentStage.card.subtitle}</span>
              </h3>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">{currentStage.card.content}</p>

              {/* Stage-specific content */}
              {currentStage.id === "ideate" && currentStage.card.details && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {currentStage.card.details.map((detail, i) => (
                    <div key={i} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">{detail.label}</div>
                      <div className="text-sm text-foreground/80 leading-relaxed">{detail.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {currentStage.card.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentStage.card.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {currentStage.card.next && (
                <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">Next Steps</div>
                  <ul className="space-y-1.5">
                    {currentStage.card.next.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="size-1 rounded-full bg-muted-foreground/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentStage.card.score && (
                <div className="p-4 rounded-lg bg-muted/50 border border-border/50 mb-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{currentStage.card.scoreLabel}</div>
                    <div className="text-3xl font-bold text-foreground">{currentStage.card.score}</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{currentStage.card.insight}</p>
                </div>
              )}

              {currentStage.card.checklist && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-medium">Checklist</div>
                    <ul className="space-y-2">
                      {currentStage.card.checklist.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="text-emerald-500">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {currentStage.card.stories && (
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-medium">User Stories</div>
                      <ul className="space-y-2">
                        {currentStage.card.stories.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {currentStage.card.metrics && (
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-medium">Success Metrics</div>
                      <ul className="space-y-2">
                        {currentStage.card.metrics.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {currentStage.card.components && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">Typography</div>
                    <div className="text-sm text-foreground/80">{currentStage.card.tokens?.typography}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">Components</div>
                    <ul className="space-y-1">
                      {currentStage.card.components.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                  {currentStage.card.props && (
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">Props</div>
                      <ul className="space-y-1">
                        {currentStage.card.props.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {currentStage.card.tests && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 font-medium">Tests</div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{currentStage.card.tests}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">Deploy</div>
                    <div className="text-2xl font-bold text-foreground">{currentStage.card.deploy}</div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
