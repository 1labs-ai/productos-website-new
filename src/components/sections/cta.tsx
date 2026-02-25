import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 px-4 border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to ship your next product?
        </h2>
        <p className="text-lg text-muted-foreground">
          Join hundreds of founders building and launching products in days, not months.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button size="lg" asChild>
            <Link href="/sign-up">
              Get Started Free
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/pricing">
              View Pricing
            </Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          No credit card required
        </p>
      </div>
    </section>
  );
}
