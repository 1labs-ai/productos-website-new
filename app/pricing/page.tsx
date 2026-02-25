"use client";

import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedScale } from "@/components/ui/animated-section";
import { SectionHeader, CTASection } from "@/components/shared";
import { Check, X, HelpCircle, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "For individuals getting started",
      features: [
        { name: "1 project", included: true },
        { name: "Basic AI agents", included: true },
        { name: "5 generations/day", included: true },
        { name: "Community support", included: true },
        { name: "Public templates", included: true },
        { name: "Advanced AI agents", included: false },
        { name: "Custom templates", included: false },
        { name: "API access", included: false },
      ],
      cta: "Get Started",
      ctaLink: "https://build.productos.dev/sign-up",
      highlighted: false,
    },
    {
      name: "Pro",
      price: { monthly: 49, yearly: 39 },
      description: "For founders shipping fast",
      features: [
        { name: "Unlimited projects", included: true },
        { name: "All AI agents", included: true },
        { name: "Unlimited generations", included: true },
        { name: "Priority support", included: true },
        { name: "Custom domains", included: true },
        { name: "GitHub integration", included: true },
        { name: "Export to code", included: true },
        { name: "Figma sync", included: true },
      ],
      cta: "Start Free Trial",
      ctaLink: "https://build.productos.dev/sign-up",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: { monthly: 99, yearly: 79 },
      priceLabel: "Custom",
      description: "For teams at scale",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Unlimited team members", included: true },
        { name: "SSO & SAML", included: true },
        { name: "Dedicated support", included: true },
        { name: "SLA guarantee", included: true },
        { name: "Custom integrations", included: true },
        { name: "On-premise option", included: true },
        { name: "Custom contracts", included: true },
      ],
      cta: "Contact Sales",
      ctaLink: "mailto:founders@productos.dev",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans at any time?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, you'll retain access until the end of your billing period.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express) and process payments securely through Stripe. For Enterprise plans, we also offer invoice billing.",
    },
    {
      question: "Is there a free trial for Pro?",
      answer: "Yes! We offer a 14-day free trial of Pro with full access to all features. No credit card required to start.",
    },
    {
      question: "What happens to my projects if I downgrade?",
      answer: "Your projects remain accessible. On the Free plan, you can view all projects but only actively work on one at a time. You can always upgrade again to continue work on multiple projects.",
    },
    {
      question: "Do you offer discounts for startups?",
      answer: "Yes! We offer 50% off for startups that are less than 2 years old and have raised less than $5M. Contact us to apply.",
    },
    {
      question: "What's included in Priority Support?",
      answer: "Priority Support includes faster response times (within 4 hours), direct access to our team via Slack or email, and personalized onboarding sessions.",
    },
  ];

  return (
    <>
        {/* Hero */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Simple, transparent pricing
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Start free, scale as you ship. No hidden fees.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center p-1 rounded-full bg-card border border-border">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {billingCycle === "monthly" && (
                    <motion.div
                      layoutId="pricing-billing-toggle"
                      className="absolute inset-0 bg-secondary rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Monthly</span>
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {billingCycle === "yearly" && (
                    <motion.div
                      layoutId="pricing-billing-toggle"
                      className="absolute inset-0 bg-secondary rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Yearly</span>
                  <span className="relative z-10 ml-2 px-2 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 rounded-full">
                    -20%
                  </span>
                </button>
              </div>
            </AnimatedSection>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <AnimatedScale key={plan.name} delay={index * 0.1}>
                  <div
                    className={`relative p-6 rounded-lg border transition-all duration-300 hover:scale-[1.02] h-full flex flex-col ${
                      plan.highlighted
                        ? "bg-card border-border"
                        : "bg-card/50 border-border/50 hover:border-border"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-zinc-950 text-xs font-medium rounded-full">
                        Most Popular
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm">{plan.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        {plan.priceLabel ? (
                          <span className="text-4xl font-bold text-foreground">{plan.priceLabel}</span>
                        ) : (
                          <>
                            <span className="text-4xl font-bold text-foreground">
                              ${plan.price[billingCycle]}
                            </span>
                            {plan.price.monthly > 0 && (
                              <span className="text-muted-foreground text-sm">/month</span>
                            )}
                          </>
                        )}
                      </div>
                      {billingCycle === "yearly" && plan.price.yearly > 0 && !plan.priceLabel && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Billed annually (${plan.price.yearly * 12}/year)
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-center gap-3 text-sm">
                          {feature.included ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={1.5} />
                              <span className="text-foreground/80">{feature.name}</span>
                            </>
                          ) : (
                            <>
                              <X className="w-4 h-4 text-muted-foreground/50 shrink-0" strokeWidth={1.5} />
                              <span className="text-muted-foreground/50">{feature.name}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full rounded-lg ${
                        plan.highlighted
                          ? "bg-white text-zinc-950 hover:bg-zinc-200"
                          : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                      }`}
                      asChild
                    >
                      <a href={plan.ctaLink}>
                        {plan.cta}
                        {plan.name !== "Enterprise" && <ArrowRight className="w-4 h-4 ml-2" />}
                      </a>
                    </Button>
                  </div>
                </AnimatedScale>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Compare plans"
              description="See which plan is right for you"
            />

            <AnimatedSection>
              <div className="overflow-x-auto">
                <table className="w-full max-w-4xl mx-auto">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 text-muted-foreground font-medium">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold text-foreground">Free</th>
                      <th className="text-center py-4 px-4 font-semibold text-foreground">Pro</th>
                      <th className="text-center py-4 px-4 font-semibold text-foreground">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Projects", free: "1", pro: "Unlimited", enterprise: "Unlimited" },
                      { feature: "AI Generations/day", free: "5", pro: "Unlimited", enterprise: "Unlimited" },
                      { feature: "Team Members", free: "1", pro: "1", enterprise: "Unlimited" },
                      { feature: "Export Formats", free: "PDF", pro: "All", enterprise: "All + Custom" },
                      { feature: "Support", free: "Community", pro: "Priority", enterprise: "Dedicated" },
                      { feature: "API Access", free: "—", pro: "✓", enterprise: "✓" },
                      { feature: "Custom Integrations", free: "—", pro: "—", enterprise: "✓" },
                      { feature: "SSO", free: "—", pro: "—", enterprise: "✓" },
                    ].map((row) => (
                      <tr key={row.feature} className="border-b border-border/50">
                        <td className="py-4 px-4 text-foreground">{row.feature}</td>
                        <td className="py-4 px-4 text-center text-muted-foreground">{row.free}</td>
                        <td className="py-4 px-4 text-center text-foreground">{row.pro}</td>
                        <td className="py-4 px-4 text-center text-foreground">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently asked questions
              </h2>
              <p className="text-muted-foreground">
                Can&apos;t find what you&apos;re looking for?{" "}
                <Link href="mailto:founders@productos.dev" className="text-foreground hover:underline">
                  Contact us
                </Link>
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <AnimatedSection key={faq.question} delay={index * 0.05}>
                  <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-border transition-all">
                    <div className="flex gap-3">
                      <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          badge={{ icon: Zap, text: "Start Building" }}
          title="Ready to start building?"
          description="Join thousands of founders who are building their products with ProductOS. Start for free, no credit card required."
          primaryAction={{
            label: "Get Started Free",
            href: "https://build.productos.dev/sign-up",
            icon: ArrowRight,
          }}
          secondaryAction={{
            label: "Talk to Sales",
            href: "mailto:founders@productos.dev",
          }}
        />
    </>
  );
}
