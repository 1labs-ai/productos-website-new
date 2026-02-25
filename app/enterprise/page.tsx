"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Lock,
  Users,
  Webhook,
  Server,
  FileCheck,
  Headphones,
  Building2,
  Check,
  KeyRound,
  Globe,
  Clock,
  Zap,
  BadgeCheck,
  Mail,
} from "lucide-react";
import Link from "next/link";
import {
  PageHero,
  SectionHeader,
  StatsGrid,
  FeatureGrid,
  CTASection,
} from "@/components/shared";

const enterpriseFeatures = [
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Priority 24/7 support with guaranteed SLA response times and a dedicated success manager.",
    features: ["24/7 Priority Support", "99.9% SLA Guarantee", "Dedicated Success Manager"],
  },
  {
    icon: KeyRound,
    title: "SSO & SAML",
    description: "Enterprise-grade authentication with SAML 2.0, SCIM provisioning, and identity provider integration.",
    features: ["SAML 2.0 Integration", "SCIM Provisioning", "Custom Identity Providers"],
  },
  {
    icon: Webhook,
    title: "Custom Integrations",
    description: "Full API access with webhooks, custom workflows, and deep integrations with your tool stack.",
    features: ["REST & GraphQL APIs", "Webhook Events", "Custom Workflows"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Multi-user workspaces with granular permissions, team analytics, and collaborative AI sessions.",
    features: ["Unlimited Team Members", "Role-Based Access", "Team Analytics"],
  },
  {
    icon: Server,
    title: "On-Premise Option",
    description: "Deploy ProductOS within your own infrastructure with full data sovereignty.",
    features: ["Self-Hosted Deployment", "Air-Gapped Support", "Full Data Sovereignty"],
  },
  {
    icon: FileCheck,
    title: "Custom Contracts",
    description: "Flexible billing, custom terms, and enterprise agreements tailored to your needs.",
    features: ["Flexible Billing", "Custom Terms", "Volume Discounts"],
  },
];

const securityBadges = [
  { name: "SOC 2 Type II", description: "Audited annually" },
  { name: "GDPR", description: "EU compliant" },
  { name: "CCPA", description: "California compliant" },
  { name: "ISO 27001", description: "Certified" },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "Zero Data Retention",
    description: "No training on your data. Your code and product information stays yours.",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description: "Military-grade encryption at rest and TLS 1.3 in transit.",
  },
  {
    icon: BadgeCheck,
    title: "Annual Penetration Testing",
    description: "Third-party security audits with publicly available reports.",
  },
];

const enterpriseClients = ["Stripe", "Vercel", "Linear", "Figma", "Notion", "Supabase"];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "500+", label: "Enterprise Customers" },
  { value: "<2hr", label: "Response Time" },
  { value: "50M+", label: "Projects Created" },
];

const supportBenefits = [
  { icon: Users, text: "Dedicated Customer Success Manager" },
  { icon: Clock, text: "Priority Support with <2hr Response" },
  { icon: Zap, text: "Custom Onboarding & Training" },
  { icon: Globe, text: "Quarterly Business Reviews" },
];

export default function EnterprisePage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge={{ icon: Building2, text: "Enterprise Solutions" }}
        title="Build at Scale."
        titleHighlight="Ship with Confidence."
        description="Deploy AI-native product development with enterprise-grade security, compliance, and dedicated support for your organization."
        className="min-h-[80vh]"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-8 h-12 text-base font-medium shadow-lg shadow-foreground/10"
            asChild
          >
            <Link href="mailto:enterprise@productos.dev">
              Contact Sales
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-md px-8 h-12 text-base font-medium border-border/50 hover:bg-card hover:border-border"
            asChild
          >
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </PageHero>

      {/* Trust Logos */}
      <section className="py-12 px-4 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by the world&apos;s leading enterprises
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            {enterpriseClients.map((logo) => (
              <span 
                key={logo} 
                className="text-sm text-muted-foreground/60 font-medium"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <StatsGrid stats={stats} columns={4} />
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 px-4 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge={{ icon: Shield, text: "Security First" }}
            title="Built for Security. Ready for Compliance."
            description="Meet the strictest security and compliance requirements with enterprise-grade infrastructure."
          />

          {/* Security Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {securityBadges.map((badge) => (
              <div 
                key={badge.name}
                className="p-6 rounded-lg bg-card/50 border border-border/50 text-center hover:border-border transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-1">{badge.name}</h3>
                <p className="text-muted-foreground text-sm">{badge.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Security Features */}
          <FeatureGrid features={securityFeatures} columns={3} />
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge={{ icon: Zap, text: "Enterprise Features" }}
            title="Powerful Features. Full Customization."
            description="Standardize your engineering team on the same tools and best practices with enterprise-grade controls."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-lg bg-card/50 border border-border/50 hover:border-border hover:bg-card transition-all"
              >
                <feature.icon className="size-6 text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-3.5 text-foreground/60 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-24 px-4 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/50 border border-border/50 mb-6">
                <Headphones className="size-3.5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground/80">White Glove Support</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                <span className="text-foreground">Deploy at Scale.</span>
                <br />
                <span className="text-foreground/60">Expert Support.</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our enterprise team ensures successful deployment and adoption across your organization. 
                From planning to launch and beyond.
              </p>
              <div className="space-y-4">
                {supportBenefits.map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="size-8 rounded-md bg-card border border-border flex items-center justify-center">
                      <item.icon className="size-4 text-muted-foreground" />
                    </div>
                    <span className="text-foreground/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">Support Tiers</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-md bg-background border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">Business</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Standard</span>
                  </div>
                  <p className="text-muted-foreground text-sm">8hr response, email support, documentation</p>
                </div>
                <div className="p-4 rounded-md bg-background border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">Enterprise</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Priority</span>
                  </div>
                  <p className="text-muted-foreground text-sm">2hr response, dedicated Slack, success manager</p>
                </div>
                <div className="p-4 rounded-md bg-card/50 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">Enterprise+</span>
                    <span className="text-xs px-2 py-1 rounded bg-foreground text-background">Premium</span>
                  </div>
                  <p className="text-muted-foreground text-sm">30min response, 24/7 phone, on-site training</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <CTASection
        badge={{ icon: Mail, text: "Get in Touch" }}
        title="Ready to scale with ProductOS?"
        description="Let's discuss how ProductOS can transform product development at your organization."
        primaryAction={{
          label: "Contact Enterprise Sales",
          href: "mailto:enterprise@productos.dev",
        }}
        secondaryAction={{
          label: "Compare Plans",
          href: "/pricing",
        }}
        footnote={
          <>
            Or email us directly at{" "}
            <a href="mailto:enterprise@productos.dev" className="text-foreground/80 hover:text-foreground underline underline-offset-4">
              enterprise@productos.dev
            </a>
          </>
        }
      />
    </>
  );
}
