"use client"

import { InteractiveDashboard } from "@/components/homepage/interactive-dashboard"
import { ProductOSDashboard } from "@/components/homepage/productos-dashboard"
import { AgentWorkflowDemo } from "@/components/homepage/agent-workflow-demo"
import { ProjectStatusDashboard } from "@/components/homepage/project-status-dashboard"

export default function DashboardTestPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-[1436px] mx-auto px-6 lg:px-[50px]">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Dashboard Variants
          </h1>
          <p className="text-muted-foreground text-lg">
            Review and compare all 4 dashboard designs
          </p>
        </div>

        {/* Variant 1: Interactive Dashboard */}
        <section className="mb-24">
          <div className="mb-8 pb-4 border-b border-border/50">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-3">
              Variant 1
            </span>
            <h2 className="text-2xl font-semibold text-foreground">Interactive Dashboard</h2>
            <p className="text-muted-foreground mt-2">
              Hero section dashboard with tabs for Ideate, Research, Document, Design, Code
            </p>
          </div>
          <InteractiveDashboard />
        </section>

        {/* Variant 2: ProductOS Dashboard */}
        <section className="mb-24">
          <div className="mb-8 pb-4 border-b border-border/50">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium mb-3">
              Variant 2
            </span>
            <h2 className="text-2xl font-semibold text-foreground">ProductOS Dashboard</h2>
            <p className="text-muted-foreground mt-2">
              Main ProductOS dashboard view with project overview
            </p>
          </div>
          <ProductOSDashboard />
        </section>

        {/* Variant 3: Agent Workflow Demo */}
        <section className="mb-24">
          <div className="mb-8 pb-4 border-b border-border/50">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium mb-3">
              Variant 3
            </span>
            <h2 className="text-2xl font-semibold text-foreground">Agent Workflow Demo</h2>
            <p className="text-muted-foreground mt-2">
              Shows agents working after user prompt — animated workflow visualization
            </p>
          </div>
          <AgentWorkflowDemo />
        </section>

        {/* Variant 4: Project Status Dashboard */}
        <section className="mb-24">
          <div className="mb-8 pb-4 border-b border-border/50">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-3">
              Variant 4
            </span>
            <h2 className="text-2xl font-semibold text-foreground">Project Status Dashboard</h2>
            <p className="text-muted-foreground mt-2">
              Real-time project tracking with deliverables and progress indicators
            </p>
          </div>
          <ProjectStatusDashboard />
        </section>

        {/* Footer */}
        <div className="text-center py-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Internal test page — not indexed
          </p>
        </div>
      </div>
    </main>
  )
}
