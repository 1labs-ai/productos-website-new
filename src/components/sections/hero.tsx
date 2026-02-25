"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center pt-32 pb-20 px-4">
      <div className="flex flex-col items-center max-w-4xl mx-auto w-full space-y-8">
        {/* Simple badge - NO gradient */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
          <span className="size-2 rounded-full bg-green-500" />
          <span className="text-sm text-muted-foreground">
            The AI-native way to build products
          </span>
        </div>

        {/* Clean headline - WHITE text, NO gradient */}
        <h1 className="text-5xl md:text-7xl font-bold text-center tracking-tight leading-tight">
          Ship Products<br />
          <span className="text-muted-foreground">10x Faster</span>
        </h1>

        {/* Subtitle - muted */}
        <p className="text-xl text-muted-foreground text-center max-w-2xl">
          ProductOS orchestrates research, PRD, design, and code through AI agents 
          that work together—keeping context intact from first idea to production.
        </p>

        {/* Simple buttons - SOLID colors, no gradients */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button size="lg" asChild>
            <Link href="/sign-up">
              Start Building Free
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/enterprise">
              Contact Sales
            </Link>
          </Button>
        </div>

        {/* Simple stats */}
        <div className="flex items-center gap-12 mt-8 text-center">
          <div>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm text-muted-foreground">Products shipped</div>
          </div>
          <div>
            <div className="text-3xl font-bold">3-12</div>
            <div className="text-sm text-muted-foreground">Days to launch</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50k+</div>
            <div className="text-sm text-muted-foreground">Launches</div>
          </div>
        </div>
      </div>
    </section>
  );
}
