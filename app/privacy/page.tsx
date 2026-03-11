import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Shield, Mail, Globe, Database, Users, Lock, Eye, Trash2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | ProductOS",
  description: "Privacy Policy for ProductOS - How we collect, use, and protect your data.",
  openGraph: {
    title: "Privacy Policy | ProductOS",
    description: "Privacy Policy for ProductOS - How we collect, use, and protect your data.",
    type: "website",
  },
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "data-collection", title: "1. Data We Collect" },
  { id: "how-we-use", title: "2. How We Use Your Data" },
  { id: "data-sharing", title: "3. Data Sharing" },
  { id: "data-retention", title: "4. Data Retention" },
  { id: "your-rights", title: "5. Your Rights" },
  { id: "cookies", title: "6. Cookies & Tracking" },
  { id: "international", title: "7. International Transfers" },
  { id: "children", title: "8. Children's Privacy" },
  { id: "changes", title: "9. Changes to This Policy" },
  { id: "contact", title: "10. Contact Us" },
]

const dataTypes = [
  {
    icon: Users,
    title: "Account Information",
    items: ["Name and email address", "Profile information", "Authentication credentials"],
  },
  {
    icon: Database,
    title: "Usage Data",
    items: ["Features used and interactions", "Session duration and frequency", "Error logs and performance data"],
  },
  {
    icon: Globe,
    title: "Technical Data",
    items: ["IP address and browser type", "Device information", "Operating system"],
  },
  {
    icon: Lock,
    title: "Payment Data",
    items: ["Billing address", "Payment method (processed by Stripe)", "Transaction history"],
  },
]

const rights = [
  { icon: Eye, title: "Access", description: "Request a copy of your personal data" },
  { icon: Lock, title: "Rectification", description: "Correct inaccurate personal data" },
  { icon: Trash2, title: "Erasure", description: "Request deletion of your data" },
  { icon: Shield, title: "Portability", description: "Export your data in a portable format" },
]

export default function PrivacyPage() {
  const lastUpdated = "March 11, 2026"

  return (
    <>
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-muted/50 border border-border">
              <Shield className="w-4 h-4 mr-2" />
              Privacy
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.025em' }}>
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="p-6 bg-card/50 border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <section id="overview" className="mb-12 scroll-mt-24">
                    <p className="text-muted-foreground text-lg mb-6">
                      At ProductOS, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                      disclose, and safeguard your information when you use our platform.
                    </p>
                    <Card className="p-6 bg-gradient-to-r from-blue-500/10 to-primary/10 border-border">
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Our Commitment:</strong> We are committed to GDPR compliance and 
                        protecting your data rights. We only collect data necessary to provide and improve our services.
                      </p>
                    </Card>
                  </section>

                  <section id="data-collection" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">1. Data We Collect</h2>
                    <p className="text-muted-foreground mb-6">
                      We collect information that you provide directly to us and information collected automatically 
                      when you use our Services.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {dataTypes.map((type) => (
                        <Card key={type.title} className="p-5 bg-card/50 border-border">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <type.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground">{type.title}</h3>
                          </div>
                          <ul className="space-y-1">
                            {type.items.map((item) => (
                              <li key={item} className="text-sm text-muted-foreground">• {item}</li>
                            ))}
                          </ul>
                        </Card>
                      ))}
                    </div>
                  </section>

                  <section id="how-we-use" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Data</h2>
                    <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-400 text-sm">✓</span>
                        </span>
                        <span><strong className="text-foreground/90">Provide Services:</strong> Process your requests, manage your account, and deliver the features you use.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-400 text-sm">✓</span>
                        </span>
                        <span><strong className="text-foreground/90">Improve Products:</strong> Analyze usage patterns to enhance performance and develop new features.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-400 text-sm">✓</span>
                        </span>
                        <span><strong className="text-foreground/90">Communicate:</strong> Send service updates, security alerts, and (with consent) marketing communications.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-400 text-sm">✓</span>
                        </span>
                        <span><strong className="text-foreground/90">Security:</strong> Detect, prevent, and address fraud, abuse, and security issues.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-400 text-sm">✓</span>
                        </span>
                        <span><strong className="text-foreground/90">Legal Compliance:</strong> Comply with applicable laws and legal obligations.</span>
                      </li>
                    </ul>
                  </section>

                  <section id="data-sharing" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">3. Data Sharing</h2>
                    <p className="text-muted-foreground mb-4">
                      We do not sell your personal information. We may share your data with:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li><strong className="text-foreground/90">Service Providers:</strong> Third parties who perform services on our behalf (e.g., payment processing, hosting)</li>
                      <li><strong className="text-foreground/90">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                      <li><strong className="text-foreground/90">Legal Requirements:</strong> When required by law or to protect our rights</li>
                      <li><strong className="text-foreground/90">With Consent:</strong> When you have given us explicit permission</li>
                    </ul>
                    <Card className="p-4 bg-amber-500/10 border-amber-500/20">
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-amber-400">AI Training:</strong> We do not use your project data or generated content to train AI models. 
                        Your data remains yours.
                      </p>
                    </Card>
                  </section>

                  <section id="data-retention" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Retention</h2>
                    <p className="text-muted-foreground mb-4">
                      We retain your personal data only for as long as necessary to fulfill the purposes outlined in this 
                      policy, unless a longer retention period is required by law.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Account data: Retained while your account is active, plus 30 days after deletion</li>
                      <li>Project data: Retained while your account is active, deleted upon account closure</li>
                      <li>Usage logs: Retained for 90 days for analytics, then anonymized</li>
                      <li>Payment records: Retained for 7 years for legal compliance</li>
                    </ul>
                  </section>

                  <section id="your-rights" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">5. Your Rights</h2>
                    <p className="text-muted-foreground mb-6">
                      Under GDPR and other privacy laws, you have the following rights regarding your personal data:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {rights.map((right) => (
                        <Card key={right.title} className="p-4 bg-card/50 border-border">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                              <right.icon className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{right.title}</h4>
                              <p className="text-sm text-muted-foreground">{right.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      To exercise these rights, contact us at{" "}
                      <a href="mailto:privacy@productos.dev" className="text-primary hover:underline">
                        privacy@productos.dev
                      </a>. We will respond within 30 days.
                    </p>
                  </section>

                  <section id="cookies" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">6. Cookies & Tracking</h2>
                    <p className="text-muted-foreground mb-4">
                      We use cookies and similar tracking technologies to enhance your experience:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li><strong className="text-foreground/90">Essential Cookies:</strong> Required for the platform to function properly</li>
                      <li><strong className="text-foreground/90">Analytics Cookies:</strong> Help us understand how you use ProductOS</li>
                      <li><strong className="text-foreground/90">Preference Cookies:</strong> Remember your settings and preferences</li>
                    </ul>
                    <p className="text-muted-foreground">
                      You can manage cookie preferences through your browser settings. Note that disabling certain cookies 
                      may affect functionality.
                    </p>
                  </section>

                  <section id="international" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">7. International Transfers</h2>
                    <p className="text-muted-foreground">
                      ProductOS is a product of One Infinity Labs, Inc., based in the United States. If you access our Services from outside the US, your data 
                      may be transferred to and processed in the US. We implement appropriate safeguards for international 
                      transfers, including Standard Contractual Clauses approved by the European Commission.
                    </p>
                  </section>

                  <section id="children" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">8. Children&apos;s Privacy</h2>
                    <p className="text-muted-foreground">
                      ProductOS is not intended for children under 18. We do not knowingly collect personal information 
                      from children. If we learn we have collected data from a child under 18, we will delete it promptly.
                    </p>
                  </section>

                  <section id="changes" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">9. Changes to This Policy</h2>
                    <p className="text-muted-foreground">
                      We may update this Privacy Policy periodically. We will notify you of material changes by posting 
                      the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this 
                      policy periodically.
                    </p>
                  </section>

                  <section id="contact" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">10. Contact Us</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have questions about this Privacy Policy or your data, please contact us:
                    </p>
                    <Card className="p-6 bg-card/50 border-border">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">Email:</span>
                          <a href="mailto:privacy@productos.dev" className="text-primary hover:underline transition-colors">
                            privacy@productos.dev
                          </a>
                        </div>
                      </div>
                    </Card>
                  </section>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
