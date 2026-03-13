"use client"

import { useState, useEffect } from "react"
import { 
  Lightbulb, 
  Search, 
  FileText, 
  Palette, 
  Code,
  ArrowRight,
  Sparkles,
  Check,
  MessageSquare,
  Target,
  Users,
  BarChart3,
  Layers,
  Play,
  GitBranch,
  Terminal,
  TrendingUp,
  Activity,
  Bell,
  Settings,
  ChevronRight,
  Zap,
  Globe,
  Shield,
  Smartphone
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

type Stage = "ideate" | "discover" | "define" | "design" | "develop"

const stages = [
  { id: "ideate" as Stage, name: "Ideate", icon: Lightbulb, color: "sky" },
  { id: "discover" as Stage, name: "Discover", icon: Search, color: "violet" },
  { id: "define" as Stage, name: "Define", icon: FileText, color: "teal" },
  { id: "design" as Stage, name: "Design", icon: Palette, color: "purple" },
  { id: "develop" as Stage, name: "Develop", icon: Code, color: "amber" },
]

const stageColors = {
  sky: { bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20", solid: "bg-sky-500" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20", solid: "bg-violet-500" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/20", solid: "bg-teal-500" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", solid: "bg-purple-500" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", solid: "bg-amber-500" },
}

// Typing animation component
function TypingText({ text, speed = 30, className, onComplete }: { text: string, speed?: number, className?: string, onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setDisplayedText("")
    setCurrentIndex(0)
  }, [text])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  )
}

// Animated counter
function AnimatedNumber({ value, duration = 1000 }: { value: number, duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setDisplayValue(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [value, duration])

  return <span>{displayValue.toLocaleString()}</span>
}

// Mini chart component
function MiniChart({ data, color }: { data: number[], color: string }) {
  const max = Math.max(...data)
  return (
    <div className="flex items-end gap-0.5 h-8">
      {data.map((value, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${(value / max) * 100}%` }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
          className={cn("w-1 rounded-full", color)}
        />
      ))}
    </div>
  )
}

export function InteractiveDashboard() {
  const [activeStage, setActiveStage] = useState<Stage>("design") // Default to Design (most visual)
  const [ideateStep, setIdeateStep] = useState(0)
  const currentStage = stages.find(s => s.id === activeStage)!
  const colors = stageColors[currentStage.color as keyof typeof stageColors]

  // Reset ideate animation when switching to ideate
  useEffect(() => {
    if (activeStage === "ideate") {
      setIdeateStep(0)
      const timer1 = setTimeout(() => setIdeateStep(1), 500)
      const timer2 = setTimeout(() => setIdeateStep(2), 3000)
      const timer3 = setTimeout(() => setIdeateStep(3), 5500)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [activeStage])

  return (
    <div 
      className="relative rounded-xl overflow-hidden border border-border/50 dark:border-white/[0.08] bg-card dark:bg-[#0a0a0b]"
      style={{
        boxShadow: `
          0 0 0 1px rgba(0, 0, 0, 0.03),
          0 25px 50px -12px rgba(0, 0, 0, 0.25),
          0 50px 100px -20px rgba(0, 0, 0, 0.2)
        `
      }}
    >
      <div className="flex h-[480px] sm:h-[520px] lg:h-[560px]">
        {/* Sidebar */}
        <div className="w-56 lg:w-64 border-r border-border/50 dark:border-white/[0.06] bg-muted/30 dark:bg-[#0f0f10] flex-shrink-0 hidden sm:flex flex-col">
          {/* Logo */}
          <div className="p-4 border-b border-border/50 dark:border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
                <path d="M4 32 L18 4 L32 32 Z" className="fill-foreground/80 dark:fill-[#E5E5E5]"/>
                <path d="M18 4 L4 32 L18 32 Z" className="fill-foreground/60 dark:fill-[#B3B3B3]"/>
                <path d="M18 4 L18 32 L32 4 Z" className="fill-foreground/40 dark:fill-[#808080]"/>
              </svg>
              <div>
                <div className="font-semibold text-sm text-foreground dark:text-white">ProductOS</div>
                <div className="text-[10px] text-muted-foreground dark:text-white/40">Workspace</div>
              </div>
            </div>
          </div>
          
          {/* Create button */}
          <div className="p-3">
            <div className="flex items-center gap-2">
              <button className="flex-1 h-9 rounded-lg bg-foreground dark:bg-white text-background dark:text-black text-sm font-medium hover:opacity-90 transition-opacity">
                Create New
              </button>
              <button className="h-9 w-9 rounded-lg border border-border dark:border-white/10 flex items-center justify-center hover:bg-muted dark:hover:bg-white/[0.04] transition-colors">
                <Search className="w-4 h-4 text-muted-foreground dark:text-white/50" />
              </button>
            </div>
          </div>
          
          {/* Stages - Interactive */}
          <div className="px-3 py-2">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground/70 dark:text-white/30 font-medium mb-2 px-2">Stages</div>
            <nav className="space-y-0.5">
              {stages.map((stage) => {
                const isActive = activeStage === stage.id
                const stageColor = stageColors[stage.color as keyof typeof stageColors]
                return (
                  <button 
                    key={stage.id}
                    onClick={() => setActiveStage(stage.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-2 py-2 rounded-md text-sm transition-all duration-200",
                      isActive 
                        ? `${stageColor.bg} ${stageColor.text} font-medium` 
                        : "text-foreground/70 dark:text-white/60 hover:bg-muted dark:hover:bg-white/[0.04]"
                    )}
                  >
                    <stage.icon className={cn("w-4 h-4", isActive ? stageColor.text : `text-${stage.color}-500 dark:text-${stage.color}-400`)} />
                    <span>{stage.name}</span>
                    {isActive && (
                      <div className={cn("ml-auto w-1.5 h-1.5 rounded-full", stageColor.solid)} />
                    )}
                  </button>
                )
              })}
            </nav>
          </div>
          
          {/* Bottom section */}
          <div className="mt-auto p-3 border-t border-border/50 dark:border-white/[0.06]">
            {/* Credits */}
            <div className="px-2 py-2 rounded-lg bg-muted/50 dark:bg-white/[0.02] border border-border/50 dark:border-white/[0.04] mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 dark:text-white/30 font-medium">Credits</span>
                <span className="text-sm font-semibold text-foreground dark:text-white">50</span>
              </div>
              <div className="h-1.5 rounded-full bg-muted dark:bg-white/[0.06] overflow-hidden">
                <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" />
              </div>
            </div>
            
            {/* User */}
            <div className="flex items-center gap-2.5 px-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xs font-bold text-white">
                A
              </div>
              <div>
                <div className="text-sm text-foreground dark:text-white font-medium">Ariv</div>
                <div className="text-[10px] text-muted-foreground dark:text-white/40">ariv@1labs.ai</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1 flex flex-col bg-background dark:bg-[#0a0a0b] overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border/50 dark:border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className={cn("px-2 py-1 rounded-md text-xs font-medium", colors.bg, colors.text)}>
                {currentStage.name}
              </span>
              <span className="text-sm font-medium text-foreground dark:text-white hidden sm:inline">Analytics Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-500 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>AI Active</span>
              </div>
            </div>
          </div>
          
          {/* Stage content */}
          <div className="flex-1 p-4 sm:p-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {/* ===== IDEATE STAGE ===== */}
                {activeStage === "ideate" && (
                  <div className="h-full flex flex-col">
                    <div className="flex-1 rounded-xl border border-border/50 dark:border-white/[0.06] bg-muted/10 dark:bg-white/[0.01] p-4 flex flex-col">
                      {/* Chat messages with typing animation */}
                      <div className="flex-1 space-y-4 overflow-hidden">
                        {/* User message */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: ideateStep >= 1 ? 1 : 0, x: ideateStep >= 1 ? 0 : 20 }}
                          className="flex items-start gap-3 justify-end"
                        >
                          <div className="max-w-[80%] p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
                            <p className="text-sm text-foreground dark:text-white">
                              {ideateStep >= 1 && (
                                <TypingText 
                                  text="Build me an AI-powered analytics dashboard that helps SaaS founders track key metrics and get AI insights on growth opportunities"
                                  speed={20}
                                />
                              )}
                            </p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                            H
                          </div>
                        </motion.div>

                        {/* AI Response */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: ideateStep >= 2 ? 1 : 0, x: ideateStep >= 2 ? 0 : -20 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                          <div className="max-w-[85%] p-4 rounded-xl bg-muted/50 dark:bg-white/[0.03] border border-border/50 dark:border-white/[0.06]">
                            {ideateStep >= 2 && (
                              <div className="space-y-3 text-sm">
                                <TypingText 
                                  text="Great idea! I'll help you build this. Here's my initial analysis:"
                                  speed={15}
                                  className="text-foreground dark:text-white"
                                />
                                {ideateStep >= 3 && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-2 mt-3"
                                  >
                                    <div className="flex items-center gap-2 text-emerald-400">
                                      <Check className="w-4 h-4" />
                                      <span>Market validated - $4.2B TAM</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-emerald-400">
                                      <Check className="w-4 h-4" />
                                      <span>12 competitors analyzed</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sky-400">
                                      <Zap className="w-4 h-4" />
                                      <span>Unique angle: AI predictions for SMBs</span>
                                    </div>
                                    <div className="mt-3 p-2 rounded-lg bg-sky-500/10 border border-sky-500/20">
                                      <span className="text-sky-400 text-xs font-medium">→ Ready to proceed to Discovery</span>
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </div>

                      {/* Input area */}
                      <div className="mt-4 flex items-center gap-2 p-3 rounded-lg border border-border/50 dark:border-white/[0.08] bg-muted/30 dark:bg-white/[0.02]">
                        <input 
                          type="text" 
                          placeholder="Refine your idea..." 
                          className="flex-1 bg-transparent text-sm text-foreground dark:text-white placeholder:text-muted-foreground/50 outline-none"
                        />
                        <button className="px-3 py-1.5 rounded-md bg-sky-500 text-white text-sm font-medium flex items-center gap-1">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ===== DISCOVER STAGE ===== */}
                {activeStage === "discover" && (
                  <div className="h-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Left - Stats */}
                    <div className="lg:col-span-2 space-y-4">
                      {/* Market Stats */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: "TAM", value: 4200000000, prefix: "$", suffix: "B", color: "violet" },
                          { label: "Competitors", value: 12, prefix: "", suffix: "", color: "sky" },
                          { label: "Opportunity Score", value: 8.4, prefix: "", suffix: "/10", color: "emerald" },
                        ].map((stat, i) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-3 rounded-lg border border-border/50 dark:border-white/[0.06] bg-muted/20 dark:bg-white/[0.02]"
                          >
                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground dark:text-white/40 mb-1">{stat.label}</div>
                            <div className={cn("text-xl font-bold", `text-${stat.color}-400`)}>
                              {stat.prefix}{typeof stat.value === 'number' && stat.value > 1000 ? (
                                <AnimatedNumber value={stat.value / 1000000000} />
                              ) : stat.value}{stat.suffix}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Competitor Matrix */}
                      <div className="p-4 rounded-lg border border-border/50 dark:border-white/[0.06] bg-muted/10 dark:bg-white/[0.01]">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-foreground dark:text-white">Competitor Analysis</span>
                          <span className="text-[10px] text-violet-400">Live Research</span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { name: "Mixpanel", price: "$25/mo", users: "26K", gap: "No AI insights" },
                            { name: "Amplitude", price: "$49/mo", users: "45K", gap: "Complex setup" },
                            { name: "PostHog", price: "Free tier", users: "18K", gap: "Limited predictions" },
                          ].map((comp, i) => (
                            <motion.div
                              key={comp.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="flex items-center justify-between p-2 rounded-md bg-muted/30 dark:bg-white/[0.02] text-xs"
                            >
                              <span className="font-medium text-foreground dark:text-white">{comp.name}</span>
                              <span className="text-muted-foreground">{comp.price}</span>
                              <span className="text-muted-foreground">{comp.users} users</span>
                              <span className="text-amber-400">{comp.gap}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right - Insights */}
                    <div className="space-y-3">
                      <div className="text-xs font-medium text-muted-foreground dark:text-white/40 uppercase tracking-wider">Key Insights</div>
                      {[
                        { icon: Target, title: "Market Gap", desc: "AI-first analytics for SMB SaaS", color: "violet" },
                        { icon: TrendingUp, title: "Growth Vector", desc: "PLG + AI recommendations", color: "emerald" },
                        { icon: Users, title: "ICP Match", desc: "Solo founders, small teams", color: "sky" },
                      ].map((insight, i) => (
                        <motion.div
                          key={insight.title}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.15 }}
                          className={cn(
                            "p-3 rounded-lg border",
                            `bg-${insight.color}-500/5 border-${insight.color}-500/20`
                          )}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <insight.icon className={cn("w-4 h-4", `text-${insight.color}-400`)} />
                            <span className={cn("text-sm font-medium", `text-${insight.color}-400`)}>{insight.title}</span>
                          </div>
                          <p className="text-xs text-muted-foreground dark:text-white/60">{insight.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ===== DEFINE STAGE ===== */}
                {activeStage === "define" && (
                  <div className="h-full grid grid-cols-1 lg:grid-cols-5 gap-4">
                    {/* Left - PRD Sections */}
                    <div className="lg:col-span-2 space-y-2">
                      <div className="text-xs font-medium text-muted-foreground dark:text-white/40 uppercase tracking-wider mb-2">PRD Sections</div>
                      {[
                        { name: "Executive Summary", status: "complete" },
                        { name: "Problem Statement", status: "complete" },
                        { name: "User Personas", status: "complete" },
                        { name: "Feature List", status: "active" },
                        { name: "Success Metrics", status: "pending" },
                        { name: "Technical Spec", status: "pending" },
                      ].map((section, i) => (
                        <motion.div
                          key={section.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className={cn(
                            "flex items-center gap-3 p-2 rounded-md text-sm transition-colors",
                            section.status === "active" ? "bg-teal-500/10 text-teal-400" :
                            section.status === "complete" ? "text-emerald-400" : "text-muted-foreground/50"
                          )}
                        >
                          {section.status === "complete" ? <Check className="w-4 h-4" /> : 
                           section.status === "active" ? <FileText className="w-4 h-4" /> :
                           <div className="w-4 h-4 rounded-full border border-current" />}
                          <span>{section.name}</span>
                          {section.status === "active" && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />}
                        </motion.div>
                      ))}
                    </div>

                    {/* Right - Feature List */}
                    <div className="lg:col-span-3 p-4 rounded-lg border border-border/50 dark:border-white/[0.06] bg-muted/10 dark:bg-white/[0.01]">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-foreground dark:text-white">Core Features</span>
                        <span className="text-xs text-teal-400">8 features defined</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: "Real-time dashboard", priority: "P0", effort: "3d" },
                          { name: "AI anomaly detection", priority: "P0", effort: "5d" },
                          { name: "Slack notifications", priority: "P1", effort: "2d" },
                          { name: "Custom report builder", priority: "P1", effort: "4d" },
                          { name: "Team collaboration", priority: "P2", effort: "3d" },
                        ].map((feature, i) => (
                          <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.08 }}
                            className="flex items-center justify-between p-2 rounded-md bg-muted/30 dark:bg-white/[0.02] text-sm"
                          >
                            <div className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-teal-400" />
                              <span className="text-foreground dark:text-white">{feature.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={cn(
                                "px-1.5 py-0.5 rounded text-[10px] font-medium",
                                feature.priority === "P0" ? "bg-red-500/10 text-red-400" :
                                feature.priority === "P1" ? "bg-amber-500/10 text-amber-400" :
                                "bg-slate-500/10 text-slate-400"
                              )}>{feature.priority}</span>
                              <span className="text-xs text-muted-foreground">{feature.effort}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ===== DESIGN STAGE - RICH UI MOCKUPS ===== */}
                {activeStage === "design" && (
                  <div className="h-full flex flex-col gap-4">
                    {/* Design toolbar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Generating:</span>
                        <span className="text-sm font-medium text-purple-400">Dashboard Screen</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-emerald-400">4/6 screens ready</span>
                        <div className="w-16 h-1.5 rounded-full bg-muted dark:bg-white/[0.06] overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "66%" }}
                            transition={{ duration: 1 }}
                            className="h-full bg-purple-500 rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Generated UI Preview */}
                    <div className="flex-1 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent overflow-hidden">
                      {/* Mini app preview */}
                      <div className="h-full flex flex-col bg-[#0c0c0d] rounded-lg m-2 overflow-hidden border border-white/[0.06]">
                        {/* App header */}
                        <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06] bg-white/[0.02]">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-500 to-pink-500" />
                            <span className="text-xs font-medium text-white">SaaSMetrics</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Bell className="w-3.5 h-3.5 text-white/40" />
                            <Settings className="w-3.5 h-3.5 text-white/40" />
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-500 to-orange-600" />
                          </div>
                        </div>

                        {/* Dashboard content */}
                        <div className="flex-1 p-3 grid grid-cols-4 gap-2">
                          {/* Stat cards */}
                          {[
                            { label: "MRR", value: "$24.5K", change: "+12%", color: "emerald", icon: TrendingUp },
                            { label: "Active Users", value: "1,247", change: "+8%", color: "sky", icon: Users },
                            { label: "Churn", value: "2.1%", change: "-0.3%", color: "violet", icon: Activity },
                            { label: "NPS", value: "72", change: "+5", color: "amber", icon: Target },
                          ].map((stat, i) => (
                            <motion.div
                              key={stat.label}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <stat.icon className={cn("w-3 h-3", `text-${stat.color}-400`)} />
                                <span className={cn("text-[9px]", stat.change.startsWith("+") ? "text-emerald-400" : "text-red-400")}>
                                  {stat.change}
                                </span>
                              </div>
                              <div className="text-sm font-bold text-white">{stat.value}</div>
                              <div className="text-[9px] text-white/40">{stat.label}</div>
                            </motion.div>
                          ))}

                          {/* Chart */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="col-span-2 row-span-2 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-white font-medium">Revenue Trend</span>
                              <span className="text-[9px] text-white/40">Last 30 days</span>
                            </div>
                            <MiniChart 
                              data={[20, 35, 28, 42, 38, 55, 48, 62, 58, 70, 65, 80, 75, 88, 82]}
                              color="bg-purple-500"
                            />
                            <div className="flex items-center justify-between mt-2 text-[9px] text-white/40">
                              <span>Mar 1</span>
                              <span>Mar 15</span>
                              <span>Mar 30</span>
                            </div>
                          </motion.div>

                          {/* AI Insights */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="col-span-2 row-span-2 p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20"
                          >
                            <div className="flex items-center gap-1.5 mb-2">
                              <Sparkles className="w-3 h-3 text-purple-400" />
                              <span className="text-xs text-purple-400 font-medium">AI Insights</span>
                            </div>
                            <div className="space-y-1.5">
                              {[
                                "Revenue up 23% vs last month",
                                "Churn predicted to drop further",
                                "Feature X driving 40% of growth",
                              ].map((insight, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.8 + i * 0.1 }}
                                  className="flex items-center gap-1.5 text-[10px] text-white/70"
                                >
                                  <ChevronRight className="w-2.5 h-2.5 text-purple-400" />
                                  <span>{insight}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Screen thumbnails */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                      {[
                        { name: "Dashboard", active: true },
                        { name: "Analytics", active: false },
                        { name: "Reports", active: false },
                        { name: "Settings", active: false },
                        { name: "Billing", active: false, generating: true },
                        { name: "Team", active: false, pending: true },
                      ].map((screen) => (
                        <div
                          key={screen.name}
                          className={cn(
                            "flex-shrink-0 w-20 h-14 rounded-md border flex items-center justify-center text-[10px]",
                            screen.active 
                              ? "border-purple-500 bg-purple-500/10 text-purple-400" 
                              : screen.generating
                              ? "border-amber-500/50 bg-amber-500/5 text-amber-400"
                              : screen.pending
                              ? "border-white/[0.06] bg-white/[0.02] text-white/30"
                              : "border-white/[0.06] bg-white/[0.02] text-white/60"
                          )}
                        >
                          {screen.generating ? (
                            <div className="flex items-center gap-1">
                              <div className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
                              <span>Generating</span>
                            </div>
                          ) : (
                            screen.name
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ===== DEVELOP STAGE - LIVE CODING ===== */}
                {activeStage === "develop" && (
                  <div className="h-full grid grid-cols-1 lg:grid-cols-5 gap-4">
                    {/* Left - Terminal & Code */}
                    <div className="lg:col-span-3 flex flex-col gap-3">
                      {/* Terminal */}
                      <div className="flex-1 rounded-lg bg-[#0d0d0e] border border-white/[0.06] overflow-hidden font-mono text-xs">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.02] border-b border-white/[0.06]">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                          </div>
                          <span className="text-white/40 ml-2">terminal — npm run dev</span>
                        </div>
                        <div className="p-3 space-y-1 text-[11px]">
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-emerald-400">
                            ✓ Compiled successfully in 247ms
                          </motion.div>
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-white/60">
                            <span className="text-sky-400">info</span>  - Ready on http://localhost:3000
                          </motion.div>
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-white/60">
                            <span className="text-sky-400">event</span> - compiled client and server in 1.2s
                          </motion.div>
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-amber-400">
                            ○ Compiling /dashboard ...
                          </motion.div>
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-emerald-400">
                            ✓ Compiled /dashboard in 892ms (247 modules)
                          </motion.div>
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="flex items-center gap-1">
                            <span className="text-white/40">$</span>
                            <span className="animate-pulse text-white">_</span>
                          </motion.div>
                        </div>
                      </div>

                      {/* Live preview indicator */}
                      <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm text-emerald-400">Live Preview</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-emerald-400">
                          <span>localhost:3000</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Right - Stats & Deploy */}
                    <div className="lg:col-span-2 space-y-3">
                      {/* Build stats */}
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { label: "Files", value: "47", icon: FileText },
                          { label: "Tests", value: "24", icon: Check },
                          { label: "Coverage", value: "94%", icon: Shield },
                          { label: "Size", value: "142KB", icon: Layers },
                        ].map((stat, i) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-3 rounded-lg border border-border/50 dark:border-white/[0.06] bg-muted/20 dark:bg-white/[0.02]"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <stat.icon className="w-3.5 h-3.5 text-amber-400" />
                              <span className="text-[10px] text-muted-foreground uppercase">{stat.label}</span>
                            </div>
                            <div className="text-lg font-bold text-foreground dark:text-white">{stat.value}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Deploy button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="p-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <GitBranch className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-medium text-amber-400">Ready to Deploy</span>
                          </div>
                          <span className="text-xs text-emerald-400">All checks passed</span>
                        </div>
                        <button className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                          <svg className="w-4 h-4" viewBox="0 0 76 65" fill="currentColor">
                            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                          </svg>
                          Deploy to Vercel
                        </button>
                      </motion.div>

                      {/* Tech stack */}
                      <div className="p-3 rounded-lg border border-border/50 dark:border-white/[0.06] bg-muted/10 dark:bg-white/[0.01]">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Tech Stack</div>
                        <div className="flex flex-wrap gap-1.5">
                          {["Next.js 14", "TypeScript", "Tailwind", "Prisma", "Vercel"].map((tech) => (
                            <span key={tech} className="px-2 py-1 rounded text-[10px] bg-muted/50 dark:bg-white/[0.04] text-foreground/70 dark:text-white/70">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
