"use client"

import { motion } from "framer-motion"
import { GitCommit, GitBranch, CheckCircle2, ExternalLink } from "lucide-react"

const commits = [
  {
    message: "feat: Add user authentication with OAuth2",
    additions: 324,
    deletions: 12,
    time: "2m ago",
    hash: "a3f2b1c",
  },
  {
    message: "feat: Create dashboard layout with sidebar",
    additions: 186,
    deletions: 0,
    time: "5m ago",
    hash: "b7e4d2a",
  },
  {
    message: "fix: Resolve mobile responsive issues",
    additions: 42,
    deletions: 18,
    time: "8m ago",
    hash: "c9f1e3b",
  },
  {
    message: "chore: Add TypeScript strict mode",
    additions: 8,
    deletions: 4,
    time: "12m ago",
    hash: "d2a4c6f",
  },
]

export function GitActivityFeed() {
  return (
    <div className="w-full">
      {/* Branch Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-4 px-4 py-3 rounded-lg bg-muted/30 border border-border/50"
      >
        <GitBranch className="w-4 h-4 text-muted-foreground" />
        <span className="font-mono text-sm text-foreground">main</span>
        <span className="text-xs text-muted-foreground">• 4 commits ahead</span>
      </motion.div>

      {/* Commit Timeline */}
      <div className="relative pl-6 sm:pl-8">
        {/* Timeline Line */}
        <div className="absolute left-2.5 sm:left-3.5 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-3">
          {commits.map((commit, index) => (
            <motion.div
              key={commit.hash}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative flex items-start gap-3 sm:gap-4"
            >
              {/* Commit Dot */}
              <div className="absolute -left-6 sm:-left-8 top-1.5">
                <div className="w-3 h-3 rounded-full bg-card border-2 border-border" />
              </div>

              {/* Commit Content */}
              <div className="flex-1 p-3 sm:p-4 rounded-lg bg-card border border-border/50 hover:border-border transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <GitCommit className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                    <span className="font-mono text-xs text-muted-foreground">{commit.hash}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{commit.time}</span>
                </div>
                
                <p className="text-sm font-medium text-foreground mb-2 break-words">{commit.message}</p>
                
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-emerald-500 font-mono">+{commit.additions}</span>
                  <span className="text-red-400 font-mono">-{commit.deletions}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deployment Status */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20"
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">Deployed to production</p>
            <p className="text-xs text-muted-foreground">All checks passed</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground font-mono">your-app.vercel.app</span>
          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
      </motion.div>
    </div>
  )
}
