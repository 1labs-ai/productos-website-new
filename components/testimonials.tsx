"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Context preservation is what sets ProductOS apart. Research flows into PRD, PRD flows into design, design flows into code. Nothing gets lost.",
    author: "Priya Iyer",
    role: "Design Lead, Forma",
    initials: "PI",
    highlight: true,
  },
  {
    quote: "We shipped our MVP in 8 days. What would have taken a month with traditional tools took just over a week with ProductOS.",
    author: "Marcus Chen",
    role: "Founder, Stealth Startup",
    initials: "MC",
  },
  {
    quote: "The AI agents actually understand context. I can reference earlier research in the develop stage and it just works.",
    author: "Sarah Kim",
    role: "Product Manager, Series A Startup",
    initials: "SK",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
            Trusted by builders
          </h2>
          <p className="text-muted-foreground text-lg">
            Teams shipping faster with ProductOS
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-xl bg-card border transition-all hover:border-border ${
                testimonial.highlight 
                  ? "border-border md:scale-105 shadow-lg" 
                  : "border-border/50"
              }`}
            >
              {/* Quote Icon */}
              <Quote className="size-8 text-muted-foreground/20 mb-4" strokeWidth={1} />
              
              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-sm font-medium text-muted-foreground border border-border/50">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
