"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "https://build.productos.dev/pricing" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  Platform: [
    { label: "Build", href: "https://build.productos.dev" },
    { label: "Design", href: "https://design.productos.dev" },
    { label: "Develop", href: "https://develop.productos.dev" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "Templates", href: "#" },
  ],
  Company: [
    { label: "About 1Labs AI", href: "https://1labs.ai" },
    { label: "Contact", href: "mailto:hello@1labs.ai" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span 
                className="text-xl font-bold tracking-tight"
                style={{
                  background: "linear-gradient(180deg, #a1a1aa 0%, #52525b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ProductOS
              </span>
            </a>
            <p className="text-sm text-zinc-500 mb-4">The AI-native way to build products. Ship in days, not months.</p>
            {/* Built by 1Labs */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
              <span className="text-xs text-zinc-400">Built by</span>
              <a href="https://1labs.ai" className="text-xs text-zinc-300 hover:text-white transition-colors font-medium">
                1Labs AI
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} 1Labs AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com/1labsai" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="https://github.com/1labs-ai" className="text-sm text-zinc-500 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/company/1labsai" className="text-sm text-zinc-500 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
