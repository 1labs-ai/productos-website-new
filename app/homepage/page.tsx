"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { 
  ArrowRight, 
  Sparkles, 
  Lightbulb, 
  Search, 
  FileText, 
  Palette, 
  Code,
  Check,
  Zap,
  Brain,
  Rocket,
  GitBranch,
  Users,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Logo component
function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" width={size} height={size}>
      <path d="M4 32 L18 4 L32 32 Z" fill="#E5E5E5"/>
      <path d="M18 4 L4 32 L18 32 Z" fill="#B3B3B3"/>
      <path d="M18 4 L18 32 L32 4 Z" fill="#808080"/>
    </svg>
  )
}

// Section animation wrapper
function AnimatedSection({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Company logos for social proof
const companies = [
  { name: "Microsoft", logo: "M" },
  { name: "Google", logo: "G" },
  { name: "Meta", logo: "f" },
  { name: "OpenAI", logo: "◐" },
  { name: "Stripe", logo: "S" },
  { name: "Vercel", logo: "▲" },
]

export default function LinearInspiredHomepage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Full viewport with product mockup */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col">
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card pointer-events-none" />
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(240 10% 25% / 0.4) 0%, transparent 60%)"
          }}
        />
        
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 mb-8"
          >
            <Sparkles className="size-3.5 text-amber-500" />
            <span className="text-sm font-medium text-foreground/70">Now in Early Access</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center max-w-5xl mx-auto mb-6"
          >
            <span 
              className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground"
              style={{ lineHeight: 1.05, letterSpacing: '-0.03em' }}
            >
              The product development
            </span>
            <span 
              className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground/50"
              style={{ lineHeight: 1.05, letterSpacing: '-0.03em' }}
            >
              system for founders and agents
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-10 leading-relaxed"
          >
            From vision to production in days, not months. AI agents that research, design, 
            and code — so you can focus on building what matters.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-8 h-12 text-base font-medium shadow-lg"
              asChild
            >
              <Link href="/early-access">
                Request Early Access
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-md px-8 h-12 text-base font-medium text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="#features">
                See How It Works
              </Link>
            </Button>
          </motion.div>

          {/* Product Screenshot/Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-6xl mx-auto px-4"
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 blur-3xl opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)"
              }}
            />
            
            {/* Browser mockup */}
            <div 
              className="relative rounded-xl overflow-hidden border border-border/50 bg-card"
              style={{
                boxShadow: `
                  0 0 0 1px rgba(255, 255, 255, 0.05),
                  0 25px 50px -12px rgba(0, 0, 0, 0.5),
                  0 50px 100px -24px rgba(0, 0, 0, 0.4)
                `
              }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/40 border-b border-border/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground">
                    build.productos.dev
                  </div>
                </div>
              </div>
              
              {/* Product UI mockup */}
              <div className="aspect-[16/9] bg-background p-6 relative overflow-hidden">
                {/* Sidebar */}
                <div className="absolute left-0 top-0 bottom-0 w-64 border-r border-border/30 p-4 space-y-3">
                  <div className="flex items-center gap-2 mb-6">
                    <Logo size={24} />
                    <span className="font-semibold text-sm">ProductOS</span>
                  </div>
                  {["Ideate", "Discover", "Define", "Design", "Develop"].map((stage, i) => (
                    <div 
                      key={stage} 
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm",
                        i === 3 ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" : "text-muted-foreground"
                      )}
                    >
                      {i === 0 && <Lightbulb className="size-4" />}
                      {i === 1 && <Search className="size-4" />}
                      {i === 2 && <FileText className="size-4" />}
                      {i === 3 && <Palette className="size-4" />}
                      {i === 4 && <Code className="size-4" />}
                      {stage}
                    </div>
                  ))}
                </div>
                
                {/* Main content area */}
                <div className="ml-64 h-full pl-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-medium border border-purple-500/20">
                      Design Agent • Active
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Design System Generated</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-md">
                    AI has generated 24 components based on your PRD specifications.
                  </p>
                  
                  {/* Component grid preview */}
                  <div className="grid grid-cols-3 gap-3 max-w-lg">
                    {["Button", "Input", "Card", "Modal", "Badge", "Avatar"].map((comp) => (
                      <div key={comp} className="p-3 rounded-lg bg-card border border-border/50 text-center">
                        <div className="w-8 h-8 mx-auto mb-2 rounded bg-muted/50" />
                        <span className="text-xs text-muted-foreground">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Logo Cloud */}
      <section className="py-16 px-4 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by founders and teams from
          </p>
          <div className="flex items-center justify-center gap-12 sm:gap-16 flex-wrap">
            {companies.map((company) => (
              <div 
                key={company.name} 
                className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
              >
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props - Linear style */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              A new way to build products
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl mb-16" style={{ letterSpacing: '-0.02em' }}>
              <span className="text-foreground">Purpose-built for the AI era.</span>{" "}
              <span className="text-muted-foreground">
                Five specialized agents work together to take you from idea to production.
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Built for AI workflows",
                description: "Designed for humans and agents to work together. Context flows seamlessly between stages."
              },
              {
                icon: Zap,
                title: "10x faster shipping",
                description: "What used to take months now takes days. Ship production-ready products in 3-12 days."
              },
              {
                icon: Users,
                title: "Made for founders",
                description: "No dev team required. Solo founders and small teams can build like a full product org."
              }
            ].map((prop, i) => (
              <AnimatedSection key={prop.title} delay={i * 0.1}>
                <div className="p-6 rounded-xl bg-card/50 border border-border/30 hover:border-border/60 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center mb-4">
                    <prop.icon className="size-5 text-foreground/60" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{prop.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Self-driving operations */}
      <section id="features" className="py-24 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-amber-500 mb-4 uppercase tracking-wider">
                AI-Powered Workflow
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                Make product development<br />
                <span className="text-muted-foreground">self-driving</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Turn conversations into products. AI agents analyze your input, conduct research, 
                write documentation, generate designs, and ship production code — all automatically.
              </p>
              <Button variant="ghost" className="text-foreground hover:text-foreground p-0 h-auto font-medium">
                Learn more <ArrowRight className="ml-2 size-4" />
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {/* Agent conversation mockup */}
              <div className="rounded-xl border border-border/50 bg-card p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xs font-bold text-white">
                    H
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium mb-1">You</div>
                    <div className="p-3 rounded-lg bg-muted/50 text-sm text-foreground/80">
                      Build me an analytics dashboard for tracking user engagement metrics
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                    <Search className="size-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-sky-400 mb-1">Research Agent</div>
                    <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sm text-foreground/80">
                      <p className="mb-2">Analyzing market: Found 12 competitors including Mixpanel, Amplitude...</p>
                      <div className="flex items-center gap-2 text-xs text-sky-400">
                        <Check className="size-3" /> Research complete • Opportunity score: 8.4/10
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                    <FileText className="size-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-teal-400 mb-1">PRD Agent</div>
                    <div className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/20 text-sm text-foreground/80">
                      <p className="mb-2">Generated PRD with 8 user stories and success metrics...</p>
                      <div className="flex items-center gap-2 text-xs text-teal-400">
                        <Clock className="size-3" /> Estimated build time: 5 days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Define product direction */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.2} className="order-2 lg:order-1">
              {/* Timeline/Roadmap mockup */}
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold">Project Timeline</h4>
                  <span className="text-xs text-muted-foreground">Day 1 → Day 7</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { stage: "Ideate", color: "sky", days: "Day 1", status: "complete" },
                    { stage: "Discover", color: "violet", days: "Day 1-2", status: "complete" },
                    { stage: "Define", color: "teal", days: "Day 2-3", status: "complete" },
                    { stage: "Design", color: "purple", days: "Day 3-5", status: "active" },
                    { stage: "Develop", color: "amber", days: "Day 5-7", status: "pending" },
                  ].map((item) => (
                    <div key={item.stage} className="flex items-center gap-4">
                      <div className={cn(
                        "w-24 text-xs font-medium",
                        item.status === "active" ? `text-${item.color}-400` : "text-muted-foreground"
                      )}>
                        {item.days}
                      </div>
                      <div className={cn(
                        "flex-1 h-8 rounded-md flex items-center px-3 text-sm font-medium",
                        item.status === "complete" && "bg-muted/50 text-foreground/60",
                        item.status === "active" && `bg-${item.color}-500/10 text-${item.color}-400 border border-${item.color}-500/20`,
                        item.status === "pending" && "bg-muted/30 text-muted-foreground/50"
                      )}>
                        {item.stage}
                        {item.status === "complete" && <Check className="size-3.5 ml-auto" />}
                        {item.status === "active" && <span className="ml-auto text-xs">In Progress</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2">
              <p className="text-sm font-medium text-purple-400 mb-4 uppercase tracking-wider">
                End-to-end Visibility
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                Define the<br />
                <span className="text-muted-foreground">product direction</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Track progress across all five stages. Know exactly where your product stands, 
                what's being worked on, and when you'll ship.
              </p>
              <Button variant="ghost" className="text-foreground hover:text-foreground p-0 h-auto font-medium">
                Learn more <ArrowRight className="ml-2 size-4" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Deploy anywhere */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-emerald-400 mb-4 uppercase tracking-wider">
                Production Ready
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                Ship production code,<br />
                <span className="text-muted-foreground">not prototypes</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every project ships with real code, real tests, and real deployments. 
                Push to Vercel, Netlify, or your own infrastructure with one click.
              </p>
              <Button variant="ghost" className="text-foreground hover:text-foreground p-0 h-auto font-medium">
                Learn more <ArrowRight className="ml-2 size-4" />
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {/* Code/Deploy mockup */}
              <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/40 border-b border-border/50">
                  <GitBranch className="size-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">main</span>
                  <span className="ml-auto px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                    ✓ All checks passed
                  </span>
                </div>
                <div className="p-4 font-mono text-sm">
                  <pre className="text-muted-foreground">
{`// Generated by ProductOS Code Agent
export async function Dashboard() {
  const metrics = await getMetrics()
  
  return (
    <div className="grid gap-4">
      <StatsCard data={metrics.users} />
      <EngagementChart data={metrics.events} />
      <ActivityFeed items={metrics.recent} />
    </div>
  )
}`}
                  </pre>
                </div>
                <div className="px-4 py-3 bg-muted/20 border-t border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">24 tests passing</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">TypeScript</span>
                  </div>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white h-7 text-xs">
                    <Rocket className="size-3 mr-1" /> Deploy to Vercel
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
              Built for speed.<br />
              <span className="text-muted-foreground">Measured in days, not months.</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "3-12", label: "Days to ship", suffix: "days" },
              { value: "80", label: "Less development cost", suffix: "%" },
              { value: "5", label: "AI agents working together", suffix: "" },
              { value: "∞", label: "Ideas you can build", suffix: "" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl bg-card/50 border border-border/30">
                  <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                    {stat.value}<span className="text-2xl text-muted-foreground">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
              What founders are saying
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "ProductOS let me ship my MVP in 5 days instead of 3 months. The AI agents actually understand product context.",
                author: "Sarah Chen",
                role: "Founder, DataFlow",
                avatar: "S"
              },
              {
                quote: "Finally, a tool that thinks like a product team. From research to code, everything stays connected.",
                author: "Marcus Johnson",
                role: "Solo Founder",
                avatar: "M"
              }
            ].map((testimonial, i) => (
              <AnimatedSection key={testimonial.author} delay={i * 0.1}>
                <div className="p-8 rounded-xl bg-card border border-border/50">
                  <blockquote className="text-lg text-foreground/90 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center font-semibold text-foreground/60">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
              <span className="text-foreground">Built for the future.</span><br />
              <span className="text-muted-foreground">Available today.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join the founders shipping products 10x faster with AI-native workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-8 h-12 text-base font-medium shadow-lg"
                asChild
              >
                <Link href="/early-access">
                  Request Early Access
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-md px-8 h-12 text-base font-medium border-border/50 hover:bg-card hover:border-border"
                asChild
              >
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
