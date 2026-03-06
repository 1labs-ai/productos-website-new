"use client";

import {
  Building2,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Layers,
  DollarSign,
  Trophy,
  Swords,
  Mail,
  ExternalLink,
} from "lucide-react";

// Logo Component
function Logo({ className = "size-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M4 32 L18 4 L32 32 Z" fill="#E5E5E5" />
      <path d="M18 4 L4 32 L18 32 Z" fill="#B3B3B3" />
      <path d="M18 4 L18 32 L32 4 Z" fill="#808080" />
    </svg>
  );
}

// === SLIDE COMPONENTS (exact copy from pitch-deck-content.tsx) ===

function CoverSlide() {
  return (
    <div className="slide flex flex-col items-center justify-center h-full text-center px-20">
      <Logo className="size-24 mb-8" />
      <h1 className="text-7xl font-bold tracking-tight text-white mb-4">
        ProductOS
      </h1>
      <p className="text-3xl text-white/90 font-medium mb-4">
        Cursor for Product Managers
      </p>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl">
        From idea to deployed product in days, not months.
      </p>
      <div className="text-sm text-gray-500">
        www.productos.dev
      </div>
    </div>
  );
}

function ProblemSlide() {
  const problems = [
    { stat: "90%", label: "of startups fail", detail: "Most never ship a working product" },
    { stat: "6-12 mo", label: "to build MVP", detail: "Traditional development timeline" },
    { stat: "$50-150K", label: "average MVP cost", detail: "Prohibitive for most founders" },
    { stat: "5+", label: "tools stitched together", detail: "Notion, Figma, Jira, GitHub, Copilot" },
  ];

  return (
    <div className="slide flex flex-col h-full px-20 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
          <Target className="size-5 text-red-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">The Problem</h2>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-xl text-gray-400 mb-8 max-w-3xl">
          Developers got <span className="text-white font-semibold">Cursor</span> — AI-powered coding that 10x'd their productivity.
          <br /><br />
          <span className="text-white font-semibold">Product Managers and Founders?</span> Still juggling 5+ disconnected tools with manual handoffs at every step.
        </p>
        <div className="grid grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <div key={i} className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <div className="text-4xl font-bold text-white mb-2">{problem.stat}</div>
              <div className="text-lg font-medium text-white/80 mb-1">{problem.label}</div>
              <div className="text-sm text-gray-500">{problem.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SolutionSlide() {
  return (
    <div className="slide flex flex-col h-full px-20 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
          <Rocket className="size-5 text-green-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">The Solution</h2>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
          ProductOS: Your AI Product Team
        </h3>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl">
          What Cursor is for developers, we are for Product Managers and Founders.
          <br /><br />
          One platform that replaces Notion + Figma + Jira + GitHub + Copilot with AI-orchestrated product development.
        </p>
        <div className="flex items-center justify-center gap-4 mb-10">
          {[
            { label: "Discover", desc: "Research & Insights" },
            { label: "Define", desc: "PRDs & Specs" },
            { label: "Design", desc: "UI Generation" },
            { label: "Develop", desc: "Code & Deploy" },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className="text-center">
                <div className="text-xl font-bold text-green-400 mb-1">{step.label}</div>
                <div className="text-xs text-gray-500">{step.desc}</div>
              </div>
              {i < 3 && <div className="mx-4 text-gray-600">→</div>}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">10x</div>
            <div className="text-gray-400">Faster to ship</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">90%</div>
            <div className="text-gray-400">Cost reduction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">1</div>
            <div className="text-gray-400">Person can build</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductSlide() {
  const surfaces = [
    { num: "1", name: "BUILD", domain: "build.productos.dev", desc: "Requirements → PRDs", detail: "Describe what you want. AI generates structured specifications.", color: "text-amber-400 bg-amber-500/10 border-amber-500/30" },
    { num: "2", name: "DESIGN", domain: "design.productos.dev", desc: "PRDs → UI Mockups", detail: "One click to generate screens. Iterate instantly.", color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
    { num: "3", name: "DEVELOP", domain: "develop.productos.dev", desc: "Designs → Code", detail: "AI code agents build working React apps. Live preview.", color: "text-purple-400 bg-purple-500/10 border-purple-500/30" },
    { num: "4", name: "MOBILE", domain: "mobile.productos.dev", desc: "Ideas → Mobile Apps", detail: "Describe your app. Preview on your phone via QR code.", color: "text-green-400 bg-green-500/10 border-green-500/30" },
  ];

  return (
    <div className="slide flex flex-col h-full px-20 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
          <Layers className="size-5 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">The Product: 4 Surfaces</h2>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-4 gap-6">
          {surfaces.map((surface) => (
            <div key={surface.num} className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border mb-4 font-bold ${surface.color}`}>
                {surface.num}
              </div>
              <div className="text-xl font-bold text-white mb-1">{surface.name}</div>
              <div className="text-sm text-gray-400 mb-3">{surface.desc}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{surface.detail}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-4 rounded-lg bg-gray-900/50 border border-gray-800 text-center">
          <p className="text-gray-400">
            <span className="text-white font-medium">All 4 surfaces share one context.</span>{" "}
            No more lost-in-translation between tools.
          </p>
        </div>
      </div>
    </div>
  );
}

function MarketSlide() {
  return (
    <div className="slide flex flex-col h-full px-20 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <TrendingUp className="size-5 text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Market Opportunity</h2>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 text-center">
            <div className="text-sm text-gray-500 mb-2">TAM</div>
            <div className="text-5xl font-bold text-white mb-2">$580B</div>
            <div className="text-sm text-gray-500">Global Software Dev Market</div>
          </div>
          <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 text-center">
            <div className="text-sm text-gray-500 mb-2">SAM</div>
            <div className="text-5xl font-bold text-white mb-2">$45B</div>
            <div className="text-sm text-gray-500">AI Dev Tools + No-Code</div>
          </div>
          <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 text-center">
            <div className="text-sm text-gray-500 mb-2">SOM</div>
            <div className="text-5xl font-bold text-white mb-2">$2B</div>
            <div className="text-sm text-gray-500">AI-Native Product Platforms</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h4 className="text-lg font-semibold text-white mb-3">Why Now?</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2"><span className="text-gray-600">•</span>LLMs finally good enough for production code</li>
              <li className="flex items-start gap-2"><span className="text-gray-600">•</span>AI coding tools seeing explosive adoption</li>
              <li className="flex items-start gap-2"><span className="text-gray-600">•</span>Startup formation at all-time highs</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h4 className="text-lg font-semibold text-white mb-3">Target Users</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2"><span className="text-gray-600">•</span>Solo founders validating ideas</li>
              <li className="flex items-start gap-2"><span className="text-gray-600">•</span>Small teams (2-10 people) shipping fast</li>
              <li className="flex items-start gap-2"><span className="text-gray-600">•</span>Enterprises building internal tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function BusinessModelSlide() {
  const tiers = [
    { name: "Free", price: "$0", users: "Hobbyists", features: ["5 projects", "Community support"] },
    { name: "Pro", price: "$29/mo", users: "Solo founders", features: ["Unlimited projects", "Priority support", "Advanced AI"], highlight: true },
    { name: "Team", price: "$99/mo", users: "Small teams", features: ["5 seats", "Collaboration", "API access"] },
    { name: "Enterprise", price: "Custom", users: "Organizations", features: ["SSO/SAML", "Dedicated support", "SLA"] },
  ];

  return (
    <div className="slide flex flex-col h-full px-20 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
          <DollarSign className="size-5 text-amber-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Business Model</h2>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-xl text-gray-400 mb-8">
          <span className="text-white font-semibold">SaaS subscription</span> with usage-based AI credits.
          Land with free tier, expand with Pro/Team.
        </p>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {tiers.map((tier) => (
            <div key={tier.name} className={`p-6 rounded-xl border ${tier.highlight ? "bg-amber-500/5 border-amber-500/30" : "bg-gray-900 border-gray-800"}`}>
              <div className="text-lg font-bold text-white mb-1">{tier.name}</div>
              <div className="text-2xl font-bold text-white mb-1">{tier.price}</div>
              <div className="text-sm text-gray-500 mb-4">{tier.users}</div>
              <ul className="space-y-1">
                {tier.features.map((f, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-center gap-1">
                    <span className="text-green-400">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-white mb-1">85%</div>
            <div className="text-sm text-gray-500">Gross margin target</div>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-white mb-1">{"<12 mo"}</div>
            <div className="text-sm text-gray-500">CAC payback</div>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-white mb-1">120%</div>
            <div className="text-sm text-gray-500">Net revenue retention</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TractionSlide() {
  const milestones = [
    { date: "Jan 2026", event: "ProductOS Build launched" },
    { date: "Feb 2026", event: "Design + Develop surfaces live" },
    { date: "Mar 2026", event: "Mobile surface beta" },
    { date: "Q2 2026", event: "Public launch + paid plans" },
  ];

  return (
    <div className="slide flex flex-col h-full px-20 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
          <Trophy className="size-5 text-green-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Traction</h2>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-gray-400">Beta users</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">2,000+</div>
            <div className="text-gray-400">Projects created</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">50K+</div>
            <div className="text-gray-400">AI generations</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">4.8/5</div>
            <div className="text-gray-400">User rating</div>
          </div>
        </div>
        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h4 className="text-lg font-semibold text-white mb-4">Milestones</h4>
          <div className="flex items-center justify-between">
            {milestones.map((m, i) => (
              <div key={i} className="flex-1 relative">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${i <= 2 ? "bg-green-400" : "bg-gray-600"} mb-2`} />
                  <div className="text-sm font-medium text-white">{m.date}</div>
                  <div className="text-xs text-gray-500 text-center mt-1">{m.event}</div>
                </div>
                {i < milestones.length - 1 && (
                  <div className={`absolute top-2 left-1/2 w-full h-0.5 ${i < 2 ? "bg-green-400" : "bg-gray-600"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CompetitionSlide() {
  const competitors = [
    { name: "Lovable/Bolt", focus: "Code generation", weakness: "No research, no PRD, no design system" },
    { name: "v0.dev", focus: "UI components", weakness: "Components, not complete products" },
    { name: "Cursor", focus: "Developer IDE", weakness: "Requires coding skills, not for PMs" },
    { name: "Notion + Figma + Jira", focus: "Separate tools", weakness: "Manual handoffs, no AI orchestration" },
  ];

  return (
    <div className="slide flex flex-col h-full px-20 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
          <Swords className="size-5 text-orange-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Competition</h2>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Fragmented Tools</h3>
            <div className="space-y-3">
              {competitors.map((c) => (
                <div key={c.name} className="p-4 rounded-lg bg-gray-900 border border-gray-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-white">{c.name}</div>
                      <div className="text-sm text-gray-500">{c.focus}</div>
                    </div>
                    <div className="text-xs text-red-400 max-w-36 text-right">{c.weakness}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">ProductOS: Full Stack for PMs</h3>
            <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/30 h-[calc(100%-2rem)]">
              <div className="text-xl font-bold text-white mb-4">4D Framework — Discover to Deploy</div>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span>Multi-model Research Agent (GPT-4, Claude, Gemini)</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span>Upload interviews → "What should we build?"</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span>PRD Agent generates full specs</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span>Design Agent creates UI from prompts</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span>Code Agent builds production Next.js</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span>Mobile Agent with QR preview</li>
              </ul>
              <div className="mt-4 pt-3 border-t border-green-500/20">
                <div className="text-sm text-gray-400">
                  <span className="text-white font-medium">One AI-orchestrated platform</span> replaces the chaos of 5+ tools.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamSlide() {
  return (
    <div className="slide flex flex-col h-full px-20 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
          <Users className="size-5 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Team</h2>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-2xl font-bold text-white">H</div>
              <div>
                <div className="text-lg font-bold text-white">Heemang Parmar</div>
                <div className="text-sm text-gray-500">Co-Founder & CEO</div>
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>• IIM Lucknow MBA + CS Engineering</li>
              <li>• 10+ years product & technology</li>
              <li>• 150+ products shipped</li>
              <li>• Architected ProductOS, 60%+ initial code</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-2xl font-bold text-white">S</div>
              <div>
                <div className="text-lg font-bold text-white">Shreyash Singh</div>
                <div className="text-sm text-gray-500">Co-Founder & CTO</div>
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>• B.Tech AI & Data Science</li>
              <li>• 10x hackathon winner</li>
              <li>• AI Agents, RAG, LLM fine-tuning expert</li>
              <li>• Built multi-agent system architecture</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-gray-900/50 border border-gray-800 max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400">
            <span className="text-white font-medium">Proven together:</span> Built Delve AI (AlphaSense competitor) for a $20M ARR healthcare client in 5 months — just the two of us.
          </p>
        </div>
      </div>
    </div>
  );
}

function AskSlide() {
  return (
    <div className="slide flex flex-col h-full px-20 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
          <Rocket className="size-5 text-amber-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">The Ask</h2>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div className="text-6xl font-bold text-white mb-4">$1.5M</div>
        <div className="text-xl text-gray-400 mb-12">Pre-Seed Round</div>
        <div className="grid grid-cols-3 gap-8 max-w-2xl mb-12">
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-2">40%</div>
            <div className="text-sm text-gray-500">Engineering & AI</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-2">35%</div>
            <div className="text-sm text-gray-500">Growth & GTM</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-2">25%</div>
            <div className="text-sm text-gray-500">Ops & Runway</div>
          </div>
        </div>
        <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/30 max-w-lg">
          <div className="text-lg font-semibold text-white mb-2">18-Month Runway Target</div>
          <div className="text-gray-400">
            Public launch → 10K users → $50K MRR → Series A ready
          </div>
        </div>
        <div className="mt-12 text-gray-400">
          founders@productos.dev | www.productos.dev
        </div>
      </div>
    </div>
  );
}

// === EXPORT PAGE ===

export default function ExportPitchDeck() {
  return (
    <>
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          background: #000;
        }
        @page {
          size: 1920px 1080px;
          margin: 0;
        }
        @media print {
          html, body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
        .slide {
          width: 1920px;
          height: 1080px;
          background: #000;
          page-break-after: always;
          overflow: hidden;
          position: relative;
        }
        .slide:last-child {
          page-break-after: auto;
        }
        .watermark {
          position: absolute;
          top: 24px;
          right: 32px;
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.6;
        }
        .watermark svg {
          width: 32px;
          height: 32px;
        }
        .watermark span {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
        }
      `}</style>
      
      <div className="export-deck" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {/* Slide 1: Cover */}
        <CoverSlide />
        
        {/* Slide 2: Problem */}
        <div className="slide">
          <div className="watermark"><Logo /><span>ProductOS</span></div>
          <ProblemSlide />
        </div>
        
        {/* Slide 3: Solution */}
        <div className="slide">
          <div className="watermark"><Logo /><span>ProductOS</span></div>
          <SolutionSlide />
        </div>
        
        {/* Slide 4: Product */}
        <div className="slide">
          <div className="watermark"><Logo /><span>ProductOS</span></div>
          <ProductSlide />
        </div>
        
        {/* Slide 5: Market */}
        <div className="slide">
          <div className="watermark"><Logo /><span>ProductOS</span></div>
          <MarketSlide />
        </div>
        
        {/* Slide 6: Business Model */}
        <div className="slide">
          <div className="watermark"><Logo /><span>ProductOS</span></div>
          <BusinessModelSlide />
        </div>
        
        {/* Slide 7: Traction */}
        <div className="slide">
          <div className="watermark"><Logo /><span>ProductOS</span></div>
          <TractionSlide />
        </div>
        
        {/* Slide 8: Competition */}
        <div className="slide">
          <div className="watermark"><Logo /><span>ProductOS</span></div>
          <CompetitionSlide />
        </div>
        
        {/* Slide 9: Team */}
        <div className="slide">
          <div className="watermark"><Logo /><span>ProductOS</span></div>
          <TeamSlide />
        </div>
        
        {/* Slide 10: Ask */}
        <div className="slide">
          <div className="watermark"><Logo /><span>ProductOS</span></div>
          <AskSlide />
        </div>
      </div>
    </>
  );
}
