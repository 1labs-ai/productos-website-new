"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BarChart3, Layout, ShoppingCart, FileText, MessageSquare, Wallet, Briefcase, Rocket } from "lucide-react"

const productTypes = [
  { name: "SaaS Analytics", icon: BarChart3 },
  { name: "Admin Dashboard", icon: Layout },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Docs Hub", icon: FileText },
  { name: "Chat Apps", icon: MessageSquare },
  { name: "FinTech", icon: Wallet },
  { name: "B2B Tools", icon: Briefcase },
  { name: "Startups", icon: Rocket },
]

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Products shipped on ProductOS</p>
      </motion.div>

      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {[...productTypes, ...productTypes].map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex items-center justify-center min-w-[160px] h-16 mx-8 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-zinc-400 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
