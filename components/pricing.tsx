"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Free",
    description: "For individuals getting started",
    price: { monthly: 0, yearly: 0 },
    features: [
      "1 project",
      "Basic AI agents",
      "5 generations/day",
      "Community support",
      "Public templates",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For founders shipping fast",
    price: { monthly: 49, yearly: 39 },
    features: [
      "Unlimited projects",
      "All AI agents",
      "Unlimited generations",
      "Priority support",
      "Custom domains",
      "GitHub integration",
      "Export to code",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For teams at scale",
    price: { monthly: 0, yearly: 0 },
    priceLabel: "Custom",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "SLA guarantee",
      "SSO & SAML",
      "Custom integrations",
      "On-premise option",
      "Custom contracts",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

function BorderBeam() {
  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
      <div
        className="absolute w-24 h-24 bg-white/20 blur-xl border-beam"
        style={{
          offsetPath: "rect(0 100% 100% 0 round 16px)",
        }}
      />
    </div>
  )
}

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Start free, scale as you ship. No hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-full bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly" ? "bg-white text-zinc-950" : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "yearly" ? "bg-white text-zinc-950" : "text-zinc-400 hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs text-emerald-500">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative p-6 rounded-2xl ${
                plan.highlighted
                  ? "bg-white text-zinc-950"
                  : "bg-zinc-900 border border-zinc-800 text-white"
              }`}
            >
              {plan.highlighted && <BorderBeam />}

              <div className="relative z-10">
                <h3 className={`text-xl font-semibold mb-2 ${plan.highlighted ? "text-zinc-950" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-zinc-600" : "text-zinc-400"}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  {plan.priceLabel ? (
                    <span className={`text-4xl font-bold ${plan.highlighted ? "text-zinc-950" : "text-white"}`}>
                      {plan.priceLabel}
                    </span>
                  ) : (
                    <>
                      <span className={`text-4xl font-bold ${plan.highlighted ? "text-zinc-950" : "text-white"}`}>
                        ${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className={`text-sm ${plan.highlighted ? "text-zinc-600" : "text-zinc-400"}`}>
                          /month
                        </span>
                      )}
                    </>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className={`w-4 h-4 ${plan.highlighted ? "text-zinc-950" : "text-zinc-400"}`} />
                      <span className={plan.highlighted ? "text-zinc-700" : "text-zinc-300"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full ${
                    plan.highlighted
                      ? "bg-zinc-950 text-white hover:bg-zinc-800"
                      : "bg-zinc-800 text-white hover:bg-zinc-700"
                  }`}
                  asChild
                >
                  <a href={plan.name === "Enterprise" ? "mailto:hello@1labs.ai" : "https://build.productos.dev/sign-up"}>
                    {plan.cta}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
