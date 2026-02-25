"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Sun, Moon, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Product", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Docs", href: "https://docs.productos.dev" },
  { label: "Blog", href: "/blog" },
]

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
      <rect width="180" height="180" rx="37" fill="currentColor"/>
      <g style={{ transform: "scale(0.95)", transformOrigin: "center" }}>
        <path 
          className="fill-background"
          d="M101.141 53H136.632C151.023 53 162.689 64.6662 162.689 79.0573V112.904H148.112V79.0573C148.112 78.7105 148.098 78.3662 148.072 78.0251L112.581 112.898C112.701 112.902 112.821 112.904 112.941 112.904H148.112V126.672H112.941C98.5504 126.672 86.5638 114.891 86.5638 100.5V66.7434H101.141V100.5C101.141 101.15 101.191 101.792 101.289 102.422L137.56 66.7816C137.255 66.7563 136.945 66.7434 136.632 66.7434H101.141V53Z" 
        />
        <path 
          className="fill-background"
          d="M65.2926 124.136L14 66.7372H34.6355L64.7495 100.436V66.7372H80.1365V118.47C80.1365 126.278 70.4953 129.958 65.2926 124.136Z" 
        />
      </g>
    </svg>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div className="flex items-center gap-1 p-1 rounded-sm bg-secondary border border-border">
      <button
        onClick={() => setTheme("light")}
        className={`p-1.5 rounded-sm transition-colors ${theme === "light" ? "bg-background text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-label="Light mode"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-1.5 rounded-sm transition-colors ${theme === "system" ? "bg-background text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-label="System mode"
      >
        <Monitor className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-1.5 rounded-sm transition-colors ${theme === "dark" ? "bg-background text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-label="Dark mode"
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  )
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-lg font-semibold text-foreground">
              ProductOS
            </span>
          </a>

          {/* Center Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href="https://build.productos.dev/sign-in">Sign In</a>
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="rounded-sm border-border hover:bg-secondary"
              asChild
            >
              <a href="https://build.productos.dev/sign-up">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-sm transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="border-border my-3" />
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="justify-start" asChild>
                <a href="https://build.productos.dev/sign-in">Sign In</a>
              </Button>
              <Button variant="outline" className="rounded-sm" asChild>
                <a href="https://build.productos.dev/sign-up">Get Started</a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
