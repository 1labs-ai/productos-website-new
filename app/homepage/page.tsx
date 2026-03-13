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
import Image from "next/image"
import { cn } from "@/lib/utils"
import { InteractiveDashboard } from "@/components/homepage/interactive-dashboard"

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

// Company logos for social proof - Full brand wordmark logos (sharp SVGs)
const companies = [
  { 
    name: "Google", 
    logo: (
      <svg className="h-7 w-auto" viewBox="0 0 272 92" fill="currentColor">
        <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
        <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
        <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
        <path d="M225 3v65h-9.5V3h9.5z"/>
        <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
        <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
      </svg>
    )
  },
  { 
    name: "Microsoft", 
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 318 69" fill="currentColor">
        <path d="M0 0h32.8v32.8H0V0zm35.6 0h32.8v32.8H35.6V0zM0 35.6h32.8v32.8H0V35.6zm35.6 0h32.8v32.8H35.6V35.6z"/>
        <path d="M85.6 13.3h7.5l12 21.6 12-21.6h7.3v34h-5.6V22.5l-11.1 20h-5.3l-11.2-20v24.8h-5.6V13.3zm50.3 5.3c-1 0-1.9-.4-2.6-1-.7-.7-1-1.5-1-2.5s.4-1.9 1-2.6c.7-.7 1.6-1 2.6-1 1 0 1.9.4 2.6 1 .7.7 1 1.5 1 2.6 0 1-.4 1.9-1 2.5-.7.7-1.6 1-2.6 1zm-2.8 28.7V22.6h5.6v24.7h-5.6zm21.1.5c-2.6 0-4.9-.6-6.7-1.8-1.8-1.2-3.2-2.8-4-4.8-.9-2-1.3-4.3-1.3-6.8 0-2.6.5-4.9 1.4-6.9 1-2 2.3-3.6 4.2-4.7 1.8-1.1 4-1.7 6.6-1.7 2.3 0 4.3.5 6 1.4 1.7.9 3.1 2.3 4 4 1 1.7 1.5 3.7 1.5 6v1.9h-18.2c.2 2.4.9 4.3 2.2 5.6 1.3 1.4 3 2 5.2 2 1.5 0 2.8-.3 3.9-.9 1.1-.6 1.9-1.5 2.5-2.7h5.3c-.7 2.3-2 4.2-4 5.7-2 1.5-4.4 2.2-7.3 2.2l-.3.5zm5.4-17.8c-.3-1.9-.9-3.4-2-4.5-1.1-1-2.6-1.6-4.6-1.6-1.9 0-3.4.6-4.6 1.7-1.1 1.1-1.8 2.6-2.1 4.4h13.3zm14.7 17.3V22.6h5.4v3.8c.8-1.4 1.8-2.5 3.1-3.2 1.3-.7 2.8-1.1 4.5-1.1.8 0 1.5.1 2.1.2v5.3c-.8-.2-1.6-.3-2.4-.3-2.1 0-3.8.6-5.1 1.9-1.2 1.3-1.9 3-1.9 5.2v12.9h-5.7zm23.4-29.6c-1 0-1.9-.4-2.6-1-.7-.7-1-1.5-1-2.5s.4-1.9 1-2.6c.7-.7 1.6-1 2.6-1 1 0 1.9.4 2.6 1 .7.7 1 1.5 1 2.6 0 1-.4 1.9-1 2.5-.7.7-1.6 1-2.6 1zm-2.8 28.7V22.6h5.6v24.7h-5.6zm21.2.5c-2.6 0-4.8-.6-6.6-1.7-1.8-1.1-3.2-2.7-4.2-4.7-.9-2-1.4-4.3-1.4-6.9 0-2.6.5-4.9 1.4-6.9 1-2 2.4-3.6 4.2-4.7 1.8-1.1 4-1.7 6.6-1.7 2.6 0 4.8.6 6.6 1.7 1.8 1.1 3.2 2.7 4.2 4.7.9 2 1.4 4.3 1.4 6.9 0 2.6-.5 4.9-1.4 6.9-1 2-2.4 3.6-4.2 4.7-1.8 1.2-4 1.7-6.6 1.7zm0-4.6c2.2 0 3.9-.8 5.2-2.3 1.2-1.5 1.9-3.7 1.9-6.4 0-2.8-.6-4.9-1.9-6.4-1.2-1.5-3-2.3-5.2-2.3s-3.9.8-5.2 2.3c-1.2 1.5-1.9 3.7-1.9 6.4 0 2.8.6 4.9 1.9 6.4 1.3 1.5 3 2.3 5.2 2.3zm22.7 4.1V27.2h-4.7v-4.6h4.7v-2.2c0-2.8.7-4.9 2.2-6.3 1.5-1.4 3.7-2.1 6.5-2.1 1 0 1.8.1 2.5.2v4.5c-.5-.1-1.1-.1-1.8-.1-1.3 0-2.3.3-2.9.9-.6.6-.9 1.5-.9 2.8v2.3h5.4v4.6h-5.4v20.1h-5.6zm23.5 0c-2.3 0-4.1-.6-5.4-1.8-1.3-1.2-1.9-3-1.9-5.2V27.2h-4.6v-4.6h4.6v-6.9h5.6v6.9h6.3v4.6h-6.3v13.3c0 1.2.2 2 .7 2.5.5.5 1.3.7 2.4.7h3v4.6h-4.4z"/>
      </svg>
    )
  },
  { 
    name: "Amazon", 
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 603 182" fill="currentColor">
        <path d="M374.01 142.59c-34.53 25.47-84.61 39.06-127.73 39.06-60.45 0-114.87-22.36-156.01-59.52-3.23-2.92-.34-6.9 3.54-4.63 44.45 25.84 99.39 41.41 156.14 41.41 38.28 0 80.39-7.93 119.13-24.38 5.84-2.48 10.73 3.83 5.03 8.06"/>
        <path d="M385.82 129.11c-4.41-5.65-29.21-2.67-40.34-1.35-3.38.41-3.9-2.54-.85-4.66 19.75-13.89 52.13-9.88 55.9-5.23 3.78 4.67-.99 37.08-19.53 52.54-2.85 2.38-5.57 1.11-4.3-2.04 4.18-10.42 13.53-33.61 9.12-39.26"/>
        <path d="M346.36 21.15V6.55c0-2.22 1.68-3.7 3.7-3.7h65.44c2.1 0 3.78 1.51 3.78 3.7v12.49c-.02 2.1-1.8 4.85-4.95 9.22l-33.9 48.43c12.6-.31 25.91 1.57 37.34 8.02 2.57 1.45 3.27 3.58 3.47 5.68v15.58c0 2.14-2.36 4.63-4.85 3.34-20.27-10.63-47.21-11.79-69.64.12-2.28 1.24-4.67-1.22-4.67-3.36v-14.8c0-2.38.03-6.45 2.45-10.07l39.28-56.31h-34.19c-2.1 0-3.78-1.48-3.78-3.68l.02.02zM124.59 105.28H104.8c-1.89-.14-3.39-1.55-3.53-3.36V6.81c0-2.04 1.71-3.67 3.82-3.67h18.44c1.92.08 3.45 1.54 3.58 3.38v12.74h.37c4.8-12.4 13.81-18.18 25.96-18.18 12.33 0 20.05 5.78 25.59 18.18 4.78-12.4 15.63-18.18 27.29-18.18 8.29 0 17.33 3.42 22.86 11.1 6.28 8.55 5 20.97 5 31.84l-.02 57.67c0 2.04-1.71 3.7-3.82 3.7h-19.76c-1.98-.14-3.56-1.74-3.56-3.7V52.38c0-4.28.37-14.95-.55-19.01-1.48-6.81-5.91-8.73-11.63-8.73-4.8 0-9.8 3.21-11.84 8.32-2.04 5.12-1.85 13.66-1.85 19.42v49.31c0 2.04-1.71 3.7-3.82 3.7h-19.76c-2-.14-3.56-1.74-3.56-3.7l-.02-49.31c0-11.34 1.85-28.01-12.18-28.01-14.22 0-13.66 16.26-13.66 28.01v49.31c0 2.04-1.71 3.7-3.82 3.7l.03-.02zM469.96 1.08c29.34 0 45.22 25.21 45.22 57.25 0 30.97-17.55 55.52-45.22 55.52-28.78 0-44.47-25.21-44.47-56.59 0-31.57 15.88-56.19 44.47-56.19zm.19 20.73c-14.56 0-15.47 19.84-15.47 32.21 0 12.38-.19 38.82 15.29 38.82 15.29 0 16.01-21.32 16.01-34.32 0-8.55-.37-18.79-2.96-26.88-2.22-7.03-6.65-9.84-12.87-9.84zm83.57 83.47h-19.72c-1.98-.14-3.56-1.74-3.56-3.7l-.02-94.94c.17-1.87 1.8-3.33 3.82-3.33h18.36c1.74.08 3.16 1.26 3.53 2.86v14.52h.37c5.54-13.16 13.29-19.42 26.96-19.42 8.86 0 17.51 3.21 23.05 11.95 5.17 8.12 5.17 21.78 5.17 31.63v57.4c-.22 1.78-1.85 3.21-3.82 3.21h-19.84c-1.82-.14-3.33-1.51-3.53-3.21V51.3c0-11.11 1.29-27.36-12.37-27.36-4.8 0-9.23 3.21-11.46 8.12-2.78 6.17-3.15 12.33-3.15 19.24v50.18c-.02 2.04-1.76 3.7-3.87 3.7l.08.1zM299.52 59.75c0 7.75.19 14.22-3.71 21.11-3.15 5.59-8.15 9.03-13.7 9.03-7.6 0-12.05-5.79-12.05-14.35 0-16.87 15.12-19.94 29.46-19.94v4.15zm19.97 48.32c-1.31 1.17-3.2 1.24-4.67.46-6.57-5.46-7.75-7.99-11.35-13.19-10.85 11.07-18.55 14.38-32.62 14.38-16.65 0-29.6-10.27-29.6-30.83 0-16.06 8.71-27 21.13-32.35 10.76-4.72 25.78-5.56 37.28-6.86v-2.56c0-4.72.37-10.29-2.41-14.37-2.41-3.64-7.04-5.14-11.11-5.14-7.55 0-14.29 3.87-15.93 11.9-.34 1.79-1.65 3.55-3.45 3.65l-19.19-2.07c-1.63-.36-3.43-1.68-2.97-4.17C249.2 7.2 267.52.87 284 .87c8.47 0 19.53 2.25 26.21 8.67 8.47 7.89 7.67 18.42 7.67 29.87v27.05c0 8.14 3.38 11.71 6.55 16.1 1.12 1.57 1.36 3.45-.06 4.62-3.55 2.97-9.87 8.49-13.35 11.59l-.53-.7z"/>
      </svg>
    )
  },
  { 
    name: "Vercel", 
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 284 65" fill="currentColor">
        <path d="M141.68 17.25c-11.06 0-19.12 8.37-19.12 19.88s8.61 19.87 20.04 19.87c7.84 0 14.12-3.79 17.56-9.48l-7.93-4.57c-1.98 3.09-5.35 5.09-9.63 5.09-5.52 0-9.96-3.34-11.18-8.22h30.88c.18-1.02.27-2.1.27-3.22 0-10.52-7.68-19.35-20.89-19.35zm-10.79 16.05c1.25-4.53 4.93-7.58 10.18-7.58 5.08 0 8.83 3.02 9.66 7.58h-19.84zM73.85 17.25c-11.06 0-19.12 8.37-19.12 19.88s8.61 19.87 20.04 19.87c7.84 0 14.12-3.79 17.55-9.48l-7.93-4.57c-1.98 3.09-5.35 5.09-9.63 5.09-5.52 0-9.96-3.34-11.17-8.22h30.88c.18-1.02.26-2.1.26-3.22 0-10.52-7.68-19.35-20.88-19.35zm-10.8 16.05c1.25-4.53 4.94-7.58 10.18-7.58 5.08 0 8.84 3.02 9.66 7.58H63.05zM29.87 56.5l-20-34.58h11.73l13.56 23.5 13.55-23.5h11.73l-20 34.58z"/>
        <path d="M172.28 17.25c-4.24 0-8.22 2.38-10.37 5.86V0h-10.25v55.41h10.25V37.75c0-5.52 3.71-10.03 8.69-10.03 5.58 0 8.69 3.79 8.69 9.14v18.55h10.25V35.52c0-11.17-6.82-18.27-17.26-18.27zM244.94 55.41h10.25V0h-10.25v55.41zM205.46 17.25c-11.18 0-20.25 8.68-20.25 19.88 0 11.2 9.07 19.87 20.25 19.87 11.17 0 20.25-8.67 20.25-19.87 0-11.2-9.08-19.88-20.25-19.88zm0 30.79c-5.77 0-10.25-4.64-10.25-10.91s4.48-10.92 10.25-10.92c5.76 0 10.25 4.65 10.25 10.92 0 6.27-4.49 10.91-10.25 10.91zM270.43 17.25c-4.24 0-8.22 2.38-10.37 5.86V0h-10.25v55.41h10.25V37.75c0-5.52 3.71-10.03 8.7-10.03 5.57 0 8.68 3.79 8.68 9.14v18.55H283V35.52c0-11.17-6.82-18.27-17.27-18.27h4.7z"/>
      </svg>
    )
  },
  { 
    name: "OpenAI", 
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 1180 320" fill="currentColor">
        <path d="M367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8zm129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68zM614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.8 6.48-36.24 16.32V67.2h-27.12v175.44h27.12v-14.4c7.44 9.84 19.92 14.4 36.24 14.4zm-36.96-65.52c0-25.44 15.12-40.08 34.8-40.08s34.8 14.64 34.8 40.08-15.12 40.08-34.8 40.08-34.8-14.64-34.8-40.08zM747.65 242.64c38.88 0 66.96-29.04 66.96-65.52 0-36.48-28.08-65.52-66.96-65.52s-66.96 29.04-66.96 65.52c0 36.48 28.08 65.52 66.96 65.52zm0-26.16c-22.08 0-39.36-16.32-39.36-39.36s17.28-39.36 39.36-39.36 39.36 16.32 39.36 39.36-17.28 39.36-39.36 39.36zM823.98 240h27.12v-73.2c0-20.88 12.24-29.28 24.72-29.28 10.8 0 19.92 6.96 19.92 22.8V240h27.12v-86.88c0-27.12-16.32-41.52-40.56-41.52-16.32 0-26.88 6.48-31.2 14.4v-11.76h-27.12V240zM1014.17 240h27.84l45.36-125.76h-29.52l-29.76 92.88-30-92.88h-29.28L1014.17 240zM1180.5 240h-27.12v-73.2c0-20.88-9.12-29.28-21.6-29.28-14.64 0-23.04 11.04-23.04 29.28V240h-27.12V114.24h27.12v11.76c6.24-9.12 16.56-14.4 30.24-14.4 24.24 0 41.52 14.4 41.52 41.52V240zM254.88 65.52c-16.56-28.8-47.52-44.4-79.68-40.08-10.8-16.56-27.6-28.08-47.04-32.16-32.16-6.72-65.04 8.4-80.4 36.96-19.44 3.12-36.72 14.88-47.04 31.92-16.56 28.56-12.72 65.04 9.36 89.52-4.56 18.24-1.68 37.68 7.92 54 16.56 28.8 47.52 44.4 79.68 40.08 10.8 16.56 27.6 28.08 47.04 32.16 32.16 6.72 65.04-8.4 80.4-36.96 19.44-3.12 36.72-14.88 47.04-31.92 16.8-28.56 12.96-65.04-9.12-89.52 4.32-18.24 1.44-37.68-8.16-54zm-135.84 169.2c-24 0-43.92-16.8-48.96-39.12 1.2.48 3.12 1.2 4.56 1.68l56.4-32.64c2.88-1.68 4.56-4.56 4.56-7.92V98.16l23.76 13.68c.24.24.48.48.48.72v66.72c0 30.96-25.2 56.16-56.16 56.16h-.64v-.72zm-120.48-51.6c-12-20.64-6.48-47.04 12.72-61.68v3.36l56.4 32.64c2.88 1.68 6.48 1.68 9.36 0l68.88-39.84v27.36c0 .48-.24.72-.48.96l-57.12 33.12c-26.88 15.6-61.2 6.24-76.8-20.4v-.48l-12.96 24.96zm-15.6-113.04c11.76-20.64 33.84-33.12 57.84-33.12v68.88c0 3.36 1.68 6.24 4.56 7.92l68.88 39.84-23.76 13.68c-.24.24-.72.24-.96.24l-57.12-33.12c-26.64-15.6-36-50.4-20.4-76.8l-29.04 12.48zm206.16 48l-68.88-39.84 23.76-13.92c.24-.24.72-.24.96-.24l57.12 33.12c26.88 15.6 36 50.4 20.4 76.8 11.76 20.64 33.6 33.12 57.6 33.12v-68.88c0-3.36-1.68-6.24-4.56-7.92l-86.4 50.4v-62.64zm23.52-52.8c-1.2-.48-3.12-1.2-4.56-1.68l-56.4 32.64c-2.88 1.68-4.56 4.56-4.56 7.92v79.44l-23.76-13.68c-.24-.24-.48-.48-.48-.72V102c0-30.96 25.2-56.16 56.16-56.16 24 0 43.92 16.8 48.96 39.12l-15.36 9.12v-28.8zm-37.44 60.48l-23.76-13.68 23.76-13.68c.48-.24.72-.24 1.2-.24l57.12 33.12c8.16 4.56 14.64 11.52 18.48 20.16-1.2-.48-3.12-1.2-4.56-1.68l-56.4 32.64c-2.88 1.68-6.48 1.68-9.36 0l-6.48-3.72v-52.92zm47.04 21.84L222.48 163.2l23.76 13.68c.24.24.48.48.48.72v66.72c0 8.88-1.92 17.52-5.52 25.2v-3.36l-56.4-32.64c-2.88-1.68-4.56-4.56-4.56-7.92v-78.72l23.76 13.92c.24.24.48.48.48.72l.24 25.68z"/>
      </svg>
    )
  },
  { 
    name: "Stripe", 
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 468 222" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M414 113.2c0-25.4-12.3-45.4-35.8-45.4-23.6 0-37.9 20-37.9 45.2 0 29.8 16.9 44.8 41.1 44.8 11.8 0 20.8-2.7 27.6-6.5v-20c-6.8 3.4-14.6 5.5-24.5 5.5-9.7 0-18.3-3.4-19.4-15.2h48.9c0-1.3 0-6.5 0-8.4zm-49.4-9.4c0-11.3 6.9-16 13.2-16 6.1 0 12.6 4.7 12.6 16h-25.8zM301.2 67.8c-9.8 0-16.1 4.6-19.6 7.8l-1.3-6.2h-22v116.3l25-5.3.1-28.2c3.6 2.6 8.9 6.3 17.7 6.3 17.9 0 34.2-14.4 34.2-46.1-.1-29-16.6-44.6-34.1-44.6zm-6 68.5c-5.9 0-9.4-2.1-11.8-4.7l-.1-37.1c2.6-2.9 6.2-4.9 11.9-4.9 9.1 0 15.4 10.2 15.4 23.3 0 13.4-6.2 23.4-15.4 23.4zM223.8 61.7l25.1-5.4V36l-25.1 5.3v20.4zM223.8 69.3h25.1v87.4h-25.1V69.3zM196.9 76.7l-1.6-7.4h-21.6v87.4h25V97.5c5.9-7.7 15.9-6.3 19-5.2v-23c-3.2-1.2-14.9-3.4-20.8 7.4zM149.7 46.1l-24.4 5.2-.1 80c0 14.8 11.1 25.7 25.9 25.7 8.2 0 14.2-1.5 17.5-3.3V133c-3.2 1.3-19 5.9-19-8.9V90.6h19V69.3h-19l.1-23.2zM79.3 98.9c0-3.9 3.2-5.4 8.5-5.4 7.6 0 17.2 2.3 24.8 6.4V76.2c-8.3-3.3-16.5-4.6-24.8-4.6-20.3 0-33.8 10.6-33.8 28.3 0 27.6 38 23.2 38 35.1 0 4.6-4 6.1-9.6 6.1-8.3 0-18.9-3.4-27.3-8v24c9.3 4 18.7 5.7 27.3 5.7 20.8 0 35.1-10.3 35.1-28.2-.1-29.8-38.2-24.5-38.2-35.7z"/>
      </svg>
    )
  },
  { 
    name: "Notion", 
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 520 124" fill="currentColor">
        <path d="M2.61 7.85l34.3-2.54c4.2-.36 5.29-.12 7.94 1.78l10.95 7.71c1.32.95 1.78 1.19 1.78 2.38v74.93c0 2.38-.83 3.57-3.21 3.8l-41.3 2.38c-3.09.24-4.52-.36-6.06-2.26L.48 86.76c-1.66-2.14-2.38-3.81-2.38-5.95V12.04c0-2.85 1.19-4.07 4.51-4.19zm33.35 11.18c-.59 3.57-.83 4.52-.83 4.52s-1.9-2.62-5.95-2.85c-3.57-.24-6.18 1.55-6.18 7.73V66.36c0 3.57 1.19 5.59 4.04 5.47 2.26-.12 4.88-1.31 6.42-4.16V55.65c0-2.14.71-3.33 2.38-3.57l9.76-1.55c1.78-.24 2.5.47 2.5 2.62v30.68c0 1.78-.36 2.73-1.9 3.57l-10 5.35c-1.55.83-2.38 1.07-4.04 1.07-1.55 0-2.73-.24-4.28-1.07L16.3 83.31c-2.97-1.67-4.28-3.57-4.28-7.61V21.29c0-4.28 1.66-6.54 5.71-7.61l15.01-3.45c1.9-.48 2.97-.24 3.21 1.9v6.9zm155.93 17.4c0-5.59 2.38-8.68 7.37-9.76l38.81-8.44c5.24-1.07 7.61 1.31 7.61 6.78v12.13h-14.06V27c0-2.02-.83-2.73-2.38-2.38l-8.68 1.9c-1.55.36-2.26 1.19-2.26 3.21v55.65c0 2.14.71 2.97 2.26 2.73l8.68-1.19c1.55-.24 2.38-.95 2.38-3.09v-9.88h14.06v12.37c0 5.35-2.38 8.2-7.61 9.04l-38.81 5.95c-4.99.83-7.37-1.55-7.37-6.78V36.43zM81.12 35.24c0-4.28 1.66-6.42 5.59-7.37l18.22-3.93c4.04-.83 5.71.83 5.71 5.24V89.4c0 3.09-.95 4.76-3.57 5.95l-13.94 6.78c-2.5 1.19-4.16.95-6.06-1.07l-5.95-7.02v7.85l-15.36 2.38V26.8l15.36-2.38v10.82zm0 44.59l6.06 7.26c.71.83 1.19 1.07 2.14.71l4.99-2.38c.95-.48 1.19-1.07 1.19-2.26v-47.8c0-1.78-.59-2.5-2.14-2.14l-10.12 2.38c-1.55.36-2.14 1.07-2.14 2.85v41.38zm73.95-43.52l14.18-2.02v54.11c0 5.11-2.38 8.08-7.37 9.16l-18.34 3.81c-4.76.95-7.02-1.31-7.02-5.95V44.63c0-2.62 1.07-4.28 3.33-4.76l15.24-3.57zm0 9.76l-4.04.95c-1.07.24-1.55.71-1.55 1.78v38.34c0 1.43.48 2.02 1.55 1.9l4.04-.59V46.07zm95.39-9.88l-15.95 2.26V95.7c0 4.52 2.26 6.54 6.78 5.83l30.38-4.76c4.64-.71 6.9-3.45 6.9-8.08V57.42c0-4.04-1.66-5.83-5.59-5.35l-8.44 1.07v38.93l-7.14 1.07V46.07l-6.9 1.07v44.47l-7.14 1.07V36.19h7.14l-.04-7.26v7.26zm70.74-2.26c5.11-.71 7.37 1.55 7.37 6.66v44.12c0 3.93-1.66 6.42-5.47 7.49l-20.24 5.83c-4.04 1.19-5.95-.71-5.95-5.35V47.97c0-2.5 1.07-4.16 3.21-4.64l21.05-5.47v-.04zm-9.28 10.12l-5.71 1.55c-1.07.24-1.43.71-1.43 1.78v40.79c0 1.55.59 2.14 1.78 1.9l5.35-1.19V44.03z"/>
      </svg>
    )
  },
  { 
    name: "Linear", 
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 438 100" fill="currentColor">
        <path d="M134.18 72.62V27h9.68v45.62h-9.68zM153.03 27h9.68v7.2h-9.68V27zm0 12.44h9.68v33.18h-9.68V39.44zM173.4 39.44h9.32v4.46c2.16-3.38 5.62-5.38 10.6-5.38 8.06 0 12.88 5.54 12.88 14.06v19.82h-9.68V54.76c0-4.68-2.52-7.2-6.48-7.2-4.54 0-7.32 3.24-7.32 8.64v16.2h-9.32V39.44zM220.91 73.36c-10.16 0-17.72-7.56-17.72-17.72s7.56-17.5 17.72-17.5c6.7 0 12.24 3.24 15.12 8.42l-8.2 4.54c-1.44-2.52-3.96-4.18-6.92-4.18-4.76 0-8.2 3.6-8.2 8.72s3.44 8.94 8.2 8.94c2.96 0 5.62-1.66 7.06-4.32l8.2 4.68c-3.02 5.18-8.56 8.42-15.26 8.42zM247.87 73.36c-5.62 0-10.16-2.52-12.38-6.48l7.78-4.54c.86 2.16 2.52 3.46 5.04 3.46 2.16 0 3.46-.86 3.46-2.16 0-3.82-15.26-1.44-15.26-12.6 0-6.26 5.4-9.68 12.02-9.68 4.9 0 9.18 2.16 11.54 5.76l-7.56 4.4c-.86-1.66-2.38-2.74-4.4-2.74-1.66 0-2.88.58-2.88 1.94 0 3.82 15.26 1.3 15.26 12.52 0 6.34-5.26 10.12-12.6 10.12h-.02zM269.65 72.62V39.44h9.32v4.32c1.94-3.1 5.26-5.04 9.68-5.04 4.18 0 7.34 1.66 9.32 4.54 2.38-3.02 6.12-4.76 10.38-4.76 7.78 0 12.38 5.54 12.38 14.06v19.82h-9.32V54.76c0-4.68-2.16-7.2-5.76-7.2-4.1 0-6.48 3.24-6.48 8.64v16.2h-9.32V54.54c0-4.68-2.16-6.98-5.76-6.98-4.1 0-6.48 3.24-6.48 8.64v16.2h-7.96v.22zM51.54 1.06L1.08 51.5a3.69 3.69 0 000 5.22l42.3 42.28a3.69 3.69 0 005.22 0L99 48.54a3.69 3.69 0 000-5.22L56.76 1.06a3.69 3.69 0 00-5.22 0zM26.56 53.64l20.82-20.8a3.69 3.69 0 015.22 0L73.4 53.64a3.69 3.69 0 010 5.22L52.6 79.66a3.69 3.69 0 01-5.22 0L26.56 58.86a3.69 3.69 0 010-5.22z"/>
      </svg>
    )
  },
]

export default function LinearInspiredHomepage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Linear Style */}
      <section ref={heroRef} className="relative pt-28 sm:pt-32 pb-24">
        {/* GRADIENT GLOW BACKGROUND - Subtle grey like Linear */}
        <div 
          className="absolute inset-0 pointer-events-none dark:opacity-100 opacity-50"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 100%, rgba(120, 120, 120, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 70% 95%, rgba(100, 100, 100, 0.1) 0%, transparent 40%),
              radial-gradient(ellipse 60% 40% at 30% 95%, rgba(140, 140, 140, 0.1) 0%, transparent 40%)
            `
          }}
        />
        
        {/* Content container with Linear-style spacing */}
        <div className="relative z-10 max-w-[1436px] mx-auto px-6 lg:px-[50px]">
          {/* Main Headline - Left Aligned like Linear */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 dark:border-white/10 bg-card/50 dark:bg-white/[0.03] mb-6">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-foreground/80 dark:text-white/70">AI-Native Product Development Platform</span>
            </div>
            
            <h1 className="mb-8">
              <span 
                className="block text-4xl sm:text-5xl lg:text-[64px] font-medium text-foreground"
                style={{ lineHeight: 1, letterSpacing: '-0.022em' }}
              >
                The product development
              </span>
              <span 
                className="block text-4xl sm:text-5xl lg:text-[64px] font-medium text-foreground/40"
                style={{ lineHeight: 1, letterSpacing: '-0.022em' }}
              >
                system for founders and agents
              </span>
            </h1>

            {/* CTAs - Left aligned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-6 h-11 text-sm font-medium"
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
                className="rounded-md px-6 h-11 text-sm font-medium border-border/60 hover:bg-card"
                asChild
              >
                <Link href="#features">
                  See How It Works
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Product Dashboard UI - Interactive */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <InteractiveDashboard />
          </motion.div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 border-y border-border/30">
        <div className="max-w-[1436px] mx-auto px-6 lg:px-[50px]">
          <div className="flex items-center justify-center gap-8 sm:gap-10 lg:gap-14 flex-wrap">
            {companies.map((company) => (
              <div 
                key={company.name} 
                className="text-foreground/70 dark:text-white/70 hover:text-foreground dark:hover:text-white transition-colors"
                title={company.name}
              >
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props - Linear style */}
      <section className="py-24">
        <div className="max-w-[1436px] mx-auto px-6 lg:px-[50px]">
          <AnimatedSection>
            <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              A new way to build products
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium max-w-4xl mb-16" style={{ lineHeight: 1, letterSpacing: '-0.022em' }}>
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
      <section id="features" className="py-24 bg-card/30">
        <div className="max-w-[1436px] mx-auto px-6 lg:px-[50px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-amber-500 mb-4 uppercase tracking-wider">
                AI-Powered Workflow
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium mb-6" style={{ lineHeight: 1, letterSpacing: '-0.022em' }}>
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
      <section className="py-24">
        <div className="max-w-[1436px] mx-auto px-6 lg:px-[50px]">
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
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium mb-6" style={{ lineHeight: 1, letterSpacing: '-0.022em' }}>
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
      <section className="py-24 bg-card/30">
        <div className="max-w-[1436px] mx-auto px-6 lg:px-[50px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-emerald-400 mb-4 uppercase tracking-wider">
                Production Ready
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium mb-6" style={{ lineHeight: 1, letterSpacing: '-0.022em' }}>
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
      <section className="py-24">
        <div className="max-w-[1436px] mx-auto px-6 lg:px-[50px]">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium mb-4" style={{ lineHeight: 1, letterSpacing: '-0.022em' }}>
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
      <section className="py-24 bg-card/30">
        <div className="max-w-[1436px] mx-auto px-6 lg:px-[50px]">
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
      <section className="py-32">
        <div className="max-w-[1436px] mx-auto px-6 lg:px-[50px]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium mb-6" style={{ lineHeight: 1, letterSpacing: '-0.022em' }}>
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
        </div>
      </section>
    </main>
  )
}
