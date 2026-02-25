"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Zap,
  Users,
  Rocket,
  Linkedin,
  Twitter,
  Target,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Sparkles,
      title: "AI-First",
      description:
        "We believe AI should augment human creativity, not replace it. Every feature is designed with AI at its core.",
    },
    {
      icon: Users,
      title: "Builder Obsessed",
      description:
        "We're founders ourselves. We build tools we want to use, solving real problems we've experienced.",
    },
    {
      icon: Rocket,
      title: "Ship Fast",
      description:
        "The best product wins. We iterate quickly, ship often, and learn from our users constantly.",
    },
    {
      icon: Heart,
      title: "Radically Transparent",
      description:
        "Open roadmap, public changelog, honest communication. We build in public and share our journey.",
    },
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-founder",
      bio: "Former PM at Google. Built 3 startups. Obsessed with AI and product development.",
      initials: "AC",
    },
    {
      name: "Sarah Kim",
      role: "CTO & Co-founder",
      bio: "Ex-engineering lead at Stripe. 15 years building scalable systems.",
      initials: "SK",
    },
    {
      name: "Marcus Johnson",
      role: "Head of AI",
      bio: "PhD in ML from Stanford. Previously at OpenAI research team.",
      initials: "MJ",
    },
    {
      name: "Emma Williams",
      role: "Head of Design",
      bio: "Former design lead at Figma. Passionate about developer tools.",
      initials: "EW",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Founders Served" },
    { value: "50,000+", label: "Products Built" },
    { value: "1M+", label: "AI Generations" },
    { value: "4.9/5", label: "User Rating" },
  ];

  return (
    <>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
          {/* Subtle radial glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 0%, hsl(240 10% 20% / 0.3) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-card/80 backdrop-blur-sm border border-border/50 mb-8"
            >
              <Target className="size-3.5 text-amber-500" />
              <span className="text-sm font-medium text-foreground/80">
                About ProductOS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              style={{ lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              <span className="text-foreground">Making product development</span>
              <br />
              <span className="text-foreground/60">accessible to everyone.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              We&apos;re on a mission to democratize product development. With AI
              as your co-pilot, building great products shouldn&apos;t require a
              massive team or years of experience.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-border transition-colors text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/50 border border-border/50 mb-6">
                  <Sparkles className="size-3.5 text-amber-500" />
                  <span className="text-sm font-medium text-foreground/80">
                    Our Mission
                  </span>
                </div>

                <h2
                  className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Empowering solo founders and small teams
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The best products aren&apos;t always built by the biggest
                    teams. Some of the most innovative solutions come from solo
                    founders and small, scrappy teams who deeply understand their
                    users&apos; problems.
                  </p>
                  <p>
                    But building a product is hard. Market research, PRDs,
                    designs, code—it traditionally requires specialists in each
                    area. We&apos;re changing that.
                  </p>
                  <p className="text-foreground font-medium">
                    ProductOS gives every founder access to AI-powered expertise
                    across the entire product development lifecycle. From idea to
                    launch, we&apos;re your complete product team.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative p-8 rounded-xl bg-card border border-border/50"
              >
                {/* Subtle glow */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-30"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 100%, hsl(240 10% 15% / 0.5) 0%, transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    What we believe
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "AI should augment human creativity, not replace it",
                      "Great products can come from anywhere",
                      "Speed matters — ship fast, learn faster",
                      "Building in public creates accountability",
                    ].map((belief, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 shrink-0" />
                        {belief}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Our values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we build.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-border transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-foreground/60" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Meet the team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We&apos;re a small team of builders, designers, and AI
                enthusiasts passionate about making product development better.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-border transition-colors text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-lg font-semibold text-foreground/80 group-hover:border-border transition-colors">
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${member.name} on Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground">
                Built with ❤️ by{" "}
                <a
                  href="https://1labs.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground transition-colors underline underline-offset-4"
                >
                  1Labs AI
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-8 sm:p-12 rounded-xl bg-card border border-border overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-50 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 100%, hsl(240 10% 15% / 0.5) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/50 border border-border/50 mb-6">
                  <Zap className="size-3.5 text-amber-500" />
                  <span className="text-sm font-medium text-foreground/80">
                    Join us
                  </span>
                </div>

                <h2
                  className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Ready to build something amazing?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg leading-relaxed">
                  Start your product journey today. Free to get started, powerful
                  enough to scale.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-8 h-12 text-base font-medium shadow-lg shadow-foreground/10"
                    asChild
                  >
                    <a href="https://build.productos.dev/sign-up">
                      Start Building Free
                      <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-md px-8 h-12 text-base font-medium border-border/50 hover:bg-muted hover:border-border"
                    asChild
                  >
                    <a href="/">Back to Home</a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-6">
                  No credit card required · Free tier available
                </p>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  );
}
