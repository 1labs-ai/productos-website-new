import { Shield, Lock, Users, Zap, Globe, HeadphonesIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const features = [
  { icon: Shield, title: "Enterprise Security", description: "SOC 2 Type 2 certified with zero data retention." },
  { icon: Lock, title: "SSO & SCIM", description: "SAML-based SSO with automatic user provisioning." },
  { icon: Users, title: "Team Management", description: "Centralized billing, usage controls, and analytics." },
  { icon: Zap, title: "Custom Limits", description: "Tailored usage limits and shared resource pools." },
  { icon: Globe, title: "Compliance", description: "GDPR, CCPA compliant with data residency options." },
  { icon: HeadphonesIcon, title: "Premium Support", description: "Dedicated account manager with SLA guarantees." },
];

export default function EnterprisePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build products at scale
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The choice for ambitious engineering teams. Trusted by Fortune 500 companies.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 border-t border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Enterprise-grade features</h2>
              <p className="text-muted-foreground">Everything you need to deploy at scale</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-xl bg-card border border-border/50">
                  <feature.icon className="size-8 text-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 border-t border-border/50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">Talk to our team about enterprise pricing.</p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
