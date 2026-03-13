"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, 
  FileText, 
  Palette, 
  Code,
  Check,
  ArrowRight,
  Sparkles,
  Send,
  Loader2
} from "lucide-react"
import { cn } from "@/lib/utils"

// Agent data
const agents = [
  {
    id: "research",
    name: "Research Agent",
    icon: Search,
    color: "sky",
    status: "Analyzing market...",
    result: "Found 12 competitors. Market size: $4.2B. Key differentiators identified.",
    details: "Mixpanel, Amplitude, Heap, PostHog analyzed",
    metric: "Opportunity Score: 8.4/10"
  },
  {
    id: "prd",
    name: "PRD Agent", 
    icon: FileText,
    color: "teal",
    status: "Writing specifications...",
    result: "PRD generated with 8 user stories and success metrics.",
    details: "Technical requirements defined",
    metric: "Estimated: 5 days to ship"
  },
  {
    id: "design",
    name: "Design Agent",
    icon: Palette,
    color: "purple",
    status: "Creating UI designs...",
    result: "5 UI screens generated with responsive layouts.",
    details: "Dashboard, Charts, Settings, Auth, Export",
    metric: "Figma sync ready"
  },
  {
    id: "code",
    name: "Code Agent",
    icon: Code,
    color: "amber",
    status: "Generating code...",
    result: "Production-ready Next.js app with 24 passing tests.",
    details: "TypeScript, Prisma, Tailwind CSS",
    metric: "Deploy to Vercel →"
  }
]

// Typing animation
function TypingText({ text, onComplete }: { text: string; onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index))
        index++
      } else {
        setIsComplete(true)
        onComplete?.()
        clearInterval(interval)
      }
    }, 30)
    
    return () => clearInterval(interval)
  }, [text, onComplete])
  
  return (
    <span>
      {displayedText}
      {!isComplete && <span className="inline-block w-0.5 h-4 bg-foreground/50 ml-0.5 animate-pulse" />}
    </span>
  )
}

interface AgentWorkflowDemoProps {
  className?: string
}

export function AgentWorkflowDemo({ className }: AgentWorkflowDemoProps) {
  const [phase, setPhase] = useState<"typing" | "processing" | "complete">("typing")
  const [activeAgentIndex, setActiveAgentIndex] = useState(-1)
  const [completedAgents, setCompletedAgents] = useState<string[]>([])
  
  // Auto-advance the demo
  useEffect(() => {
    const timer = setTimeout(() => {
      if (phase === "typing") {
        setPhase("processing")
        setActiveAgentIndex(0)
      }
    }, 3500)
    return () => clearTimeout(timer)
  }, [phase])
  
  // Process agents sequentially
  useEffect(() => {
    if (phase === "processing" && activeAgentIndex >= 0 && activeAgentIndex < agents.length) {
      const timer = setTimeout(() => {
        setCompletedAgents(prev => [...prev, agents[activeAgentIndex].id])
        if (activeAgentIndex < agents.length - 1) {
          setActiveAgentIndex(prev => prev + 1)
        } else {
          setPhase("complete")
        }
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [phase, activeAgentIndex])
  
  // Reset and loop
  useEffect(() => {
    if (phase === "complete") {
      const timer = setTimeout(() => {
        setPhase("typing")
        setActiveAgentIndex(-1)
        setCompletedAgents([])
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [phase])
  
  const getAgentState = (agentId: string, index: number) => {
    if (completedAgents.includes(agentId)) return "complete"
    if (activeAgentIndex === index) return "active"
    return "pending"
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        "relative rounded-2xl border border-border/50 dark:border-white/10 overflow-hidden",
        "bg-background dark:bg-[#0a0a0a] shadow-2xl",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row min-h-[480px]">
        {/* Left: User Input Panel */}
        <div className="lg:w-[400px] border-b lg:border-b-0 lg:border-r border-border/30 dark:border-white/10 p-6 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
              <span className="text-sm font-bold text-white">H</span>
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">You</div>
              <div className="text-xs text-muted-foreground">Founder</div>
            </div>
          </div>
          
          {/* User Message */}
          <div className="flex-1">
            <div className="p-4 rounded-xl bg-muted/50 dark:bg-white/[0.03] border border-border/30 dark:border-white/10">
              <p className="text-foreground/90 leading-relaxed">
                {phase === "typing" ? (
                  <TypingText 
                    text="Build me an analytics dashboard for tracking user engagement metrics with real-time charts and exportable reports."
                  />
                ) : (
                  "Build me an analytics dashboard for tracking user engagement metrics with real-time charts and exportable reports."
                )}
              </p>
            </div>
            
            {/* Send indicator */}
            <div className="flex items-center justify-end gap-2 mt-3">
              <span className="text-xs text-muted-foreground">
                {phase === "typing" ? "Typing..." : "Sent"}
              </span>
              {phase !== "typing" && (
                <Check className="size-3 text-emerald-500" />
              )}
            </div>
          </div>
          
          {/* Input Area (static) */}
          <div className="mt-6 p-3 rounded-xl border border-border/30 dark:border-white/10 bg-card/50 dark:bg-white/[0.02]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Claude Sonnet 4.6</span>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground text-background text-sm font-medium">
                <Send className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Right: Agent Workflow */}
        <div className="flex-1 p-6 bg-muted/20 dark:bg-white/[0.01]">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="size-4 text-amber-500" />
            <span className="text-sm font-medium text-foreground">ProductOS Agents Working</span>
            {phase === "complete" && (
              <span className="ml-auto px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium">
                Complete
              </span>
            )}
          </div>
          
          {/* Agent Cards */}
          <div className="space-y-3">
            {agents.map((agent, index) => {
              const state = getAgentState(agent.id, index)
              const Icon = agent.icon
              
              return (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0.5, x: -10 }}
                  animate={{ 
                    opacity: state === "pending" ? 0.4 : 1,
                    x: 0,
                    scale: state === "active" ? 1.02 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "p-4 rounded-xl border transition-all duration-300",
                    state === "complete" && "bg-card dark:bg-white/[0.03] border-emerald-500/20",
                    state === "active" && `bg-${agent.color}-500/5 border-${agent.color}-500/30 dark:bg-${agent.color}-500/10`,
                    state === "pending" && "bg-card/50 dark:bg-white/[0.01] border-border/20 dark:border-white/5"
                  )}
                >
                  <div className="flex items-start gap-3">
                    {/* Agent Icon */}
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors",
                      state === "complete" && "bg-emerald-500/10",
                      state === "active" && `bg-${agent.color}-500/10`,
                      state === "pending" && "bg-muted/50 dark:bg-white/5"
                    )}>
                      {state === "active" ? (
                        <Loader2 className={cn("size-5 animate-spin", `text-${agent.color}-500`)} />
                      ) : state === "complete" ? (
                        <Check className="size-5 text-emerald-500" />
                      ) : (
                        <Icon className="size-5 text-muted-foreground" />
                      )}
                    </div>
                    
                    {/* Agent Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={cn(
                          "text-sm font-medium",
                          state === "active" && `text-${agent.color}-500`,
                          state === "complete" && "text-foreground",
                          state === "pending" && "text-muted-foreground"
                        )}>
                          {agent.name}
                        </span>
                        {state === "active" && (
                          <span className={cn("text-xs", `text-${agent.color}-500/70`)}>
                            {agent.status}
                          </span>
                        )}
                      </div>
                      
                      <AnimatePresence mode="wait">
                        {state === "complete" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-sm text-foreground/80 mb-2">
                              {agent.result}
                            </p>
                            <div className="flex items-center gap-3 text-xs">
                              <span className="text-muted-foreground">{agent.details}</span>
                              <span className="text-emerald-500 font-medium">{agent.metric}</span>
                            </div>
                          </motion.div>
                        )}
                        
                        {state === "active" && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2"
                          >
                            <div className="flex gap-1">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  animate={{ opacity: [0.3, 1, 0.3] }}
                                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                  className={cn("w-1.5 h-1.5 rounded-full", `bg-${agent.color}-500`)}
                                />
                              ))}
                            </div>
                          </motion.div>
                        )}
                        
                        {state === "pending" && (
                          <p className="text-xs text-muted-foreground/50">
                            Waiting...
                          </p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* Completion Message */}
          <AnimatePresence>
            {phase === "complete" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Check className="size-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Ready to deploy!</div>
                    <div className="text-xs text-muted-foreground">Your analytics dashboard is complete in 5 days</div>
                  </div>
                  <button className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors">
                    Deploy <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
