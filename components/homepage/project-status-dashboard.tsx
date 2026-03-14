"use client"

import { motion } from "framer-motion"
import { 
  Check, 
  Clock, 
  FileText, 
  Palette, 
  Code, 
  Search,
  Users,
  Layers,
  GitBranch,
  BarChart3,
  Rocket
} from "lucide-react"
import { cn } from "@/lib/utils"

// Project stats - with subtle brand accents
const projectStats = [
  { label: "Competitors Analyzed", value: "12", icon: Search, accentClass: "text-violet-400", bgClass: "bg-violet-500/10" },
  { label: "UI Screens Generated", value: "24", icon: Layers, accentClass: "text-purple-400", bgClass: "bg-purple-500/10" },
  { label: "User Stories Created", value: "18", icon: Users, accentClass: "text-sky-400", bgClass: "bg-sky-500/10" },
  { label: "Code Components", value: "47", icon: Code, accentClass: "text-emerald-400", bgClass: "bg-emerald-500/10" },
]

// Key deliverables with stage colors
const deliverables = [
  { 
    name: "Market Research Report", 
    description: "12 competitors, 3 market gaps identified",
    status: "complete", 
    icon: Search,
    accentClass: "text-violet-400",
    bgClass: "bg-violet-500/10"
  },
  { 
    name: "Product Requirements Doc", 
    description: "18 user stories, 6 epics defined",
    status: "complete", 
    icon: FileText,
    accentClass: "text-teal-400",
    bgClass: "bg-teal-500/10"
  },
  { 
    name: "UI Design System", 
    description: "24 screens, 47 components",
    status: "complete", 
    icon: Palette,
    accentClass: "text-purple-400",
    bgClass: "bg-purple-500/10"
  },
  { 
    name: "Production Codebase", 
    description: "Next.js app with full test coverage",
    status: "in-progress", 
    icon: Code,
    accentClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
    progress: 75
  },
]

// Recent activity
const recentActivity = [
  { time: "2m ago", action: "Completed dashboard wireframes", agent: "Design Agent", icon: Palette, accentClass: "text-purple-400", bgClass: "bg-purple-500/10" },
  { time: "15m ago", action: "Generated 4 new UI screens", agent: "Design Agent", icon: Layers, accentClass: "text-purple-400", bgClass: "bg-purple-500/10" },
  { time: "1h ago", action: "Finalized PRD v2.0", agent: "PRD Agent", icon: FileText, accentClass: "text-teal-400", bgClass: "bg-teal-500/10" },
  { time: "2h ago", action: "Found 3 new competitor insights", agent: "Research Agent", icon: Search, accentClass: "text-violet-400", bgClass: "bg-violet-500/10" },
]

export function ProjectStatusDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="rounded-2xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-medium text-white">AI Voice Assistant</span>
          <span className="text-xs text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Ready to ship
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-white/50">
            <Clock className="size-4" />
            <span>Est. ship: <span className="text-white font-medium">3 days</span></span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 border-b border-white/[0.06]">
        {projectStats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", stat.bgClass)}>
                  <Icon className={cn("size-4", stat.accentClass)} />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/40">{stat.label}</div>
            </motion.div>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] divide-x divide-white/[0.06]">
        {/* Left: Key Deliverables */}
        <div className="p-6">
          <h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
            <Rocket className="size-4 text-amber-400/70" />
            Key Deliverables
          </h4>
          <div className="space-y-3">
            {deliverables.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.03] transition-colors border border-white/[0.06]"
                >
                  {/* Icon */}
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", item.bgClass)}>
                    <Icon className={cn("size-5", item.accentClass)} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-white">{item.name}</span>
                      {item.status === "complete" && (
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <Check className="size-2.5 text-emerald-400" />
                        </div>
                      )}
                      {item.status === "in-progress" && item.progress && (
                        <span className="text-xs text-emerald-400 font-medium">{item.progress}%</span>
                      )}
                    </div>
                    <span className="text-xs text-white/40">{item.description}</span>
                  </div>
                  
                  {/* Progress bar for in-progress items */}
                  {item.status === "in-progress" && item.progress && (
                    <div className="w-20 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="h-full bg-emerald-500/60 rounded-full"
                      />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Right: Activity Feed */}
        <div className="p-6 bg-white/[0.01]">
          <h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
            <BarChart3 className="size-4 text-sky-400/70" />
            Recent Activity
          </h4>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => {
              const Icon = activity.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="flex gap-3"
                >
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", activity.bgClass)}>
                    <Icon className={cn("size-4", activity.accentClass)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/80">{activity.action}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-white/40">{activity.agent}</span>
                      <span className="text-xs text-white/20">•</span>
                      <span className="text-xs text-white/40">{activity.time}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* Project readiness indicator */}
          <div className="mt-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <GitBranch className="size-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Deploy Ready</div>
                <div className="text-xs text-white/40">All tests passing • Production build ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
