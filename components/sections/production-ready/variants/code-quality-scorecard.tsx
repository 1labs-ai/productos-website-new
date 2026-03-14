"use client"

import { motion } from "framer-motion"
import { Shield, FileCode2, Gauge, Package, Clock } from "lucide-react"

const codeSnippet = `// Type-safe API routes
export const POST = async (req: Request) => {
  const body = await req.json()
  const data = schema.parse(body)
  return Response.json(data)
}`

const metrics = [
  {
    icon: Shield,
    label: "Test Coverage",
    value: "94%",
    color: "emerald",
    progress: 94,
  },
  {
    icon: FileCode2,
    label: "TypeScript",
    value: "100%",
    color: "blue",
    progress: 100,
  },
  {
    icon: Gauge,
    label: "Lighthouse",
    value: "98",
    subtext: "/100",
    color: "emerald",
    progress: 98,
  },
  {
    icon: Package,
    label: "Bundle Size",
    value: "142",
    subtext: "kb",
    color: "amber",
    progress: 72,
  },
  {
    icon: Clock,
    label: "Build Time",
    value: "12",
    subtext: "s",
    color: "violet",
    progress: 88,
  },
]

const colorMap = {
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-500",
    bar: "bg-emerald-500",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-500",
    bar: "bg-blue-500",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-500",
    bar: "bg-amber-500",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-500",
    bar: "bg-violet-500",
  },
}

export function CodeQualityScorecard() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {metrics.map((metric, index) => {
            const colors = colorMap[metric.color as keyof typeof colorMap]
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 rounded-lg bg-card border border-border/50 hover:border-border transition-colors"
              >
                <div className={`w-8 h-8 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center mb-3`}>
                  <metric.icon className={`w-4 h-4 ${colors.text}`} />
                </div>
                
                <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                
                <div className="flex items-baseline gap-0.5 mb-3">
                  <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                  {metric.subtext && (
                    <span className="text-sm text-muted-foreground">{metric.subtext}</span>
                  )}
                </div>
                
                {/* Progress Bar */}
                <div className="h-1.5 rounded-full bg-muted/50 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className={`h-full rounded-full ${colors.bar}`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Code Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-4 rounded-lg bg-muted/30 border border-border/50 font-mono text-xs sm:text-sm h-fit"
        >
          <div className="flex items-center gap-2 mb-3 text-muted-foreground">
            <FileCode2 className="w-4 h-4" />
            <span>api/route.ts</span>
          </div>
          <pre className="text-muted-foreground overflow-x-auto whitespace-pre-wrap break-words">
            <code>{codeSnippet}</code>
          </pre>
        </motion.div>
      </div>
    </div>
  )
}
