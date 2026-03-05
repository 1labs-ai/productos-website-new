"use client";

import { useState, useEffect } from "react";
import { PitchDeckContent } from "./pitch-deck-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

// Logo component
function Logo({ className = "size-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M4 32 L18 4 L32 32 Z" fill="#E5E5E5" />
      <path d="M18 4 L4 32 L18 32 Z" fill="#B3B3B3" />
      <path d="M18 4 L18 32 L32 4 Z" fill="#808080" />
    </svg>
  );
}

export default function PitchDeckPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [viewerName, setViewerName] = useState("");
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    linkedin: "",
  });

  // Check if user already has a session
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("/api/pitch-deck/session");
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          setViewerName(data.viewer.name);
        }
      } catch (error) {
        console.error("Session check failed:", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkSession();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/pitch-deck/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Registration failed");
      }

      setIsAuthenticated(true);
      setViewerName(formData.name);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Logo className="size-16 animate-pulse" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show pitch deck if authenticated
  if (isAuthenticated) {
    return <PitchDeckContent />;
  }

  // Registration gate
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo className="size-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-2">ProductOS</h1>
          <p className="text-muted-foreground">
            Enter your details to view our pitch deck
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your name *"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="h-12"
            />
          </div>
          
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email address *"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="h-12"
            />
          </div>

          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone number (optional)"
              value={formData.phone}
              onChange={handleInputChange}
              className="h-12"
            />
          </div>

          <div>
            <Input
              type="text"
              name="company"
              placeholder="Company / VC Firm (optional)"
              value={formData.company}
              onChange={handleInputChange}
              className="h-12"
            />
          </div>

          <div>
            <Input
              type="url"
              name="linkedin"
              placeholder="LinkedIn URL (optional)"
              value={formData.linkedin}
              onChange={handleInputChange}
              className="h-12"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <Button
            type="submit"
            className="w-full h-12 text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait...
              </>
            ) : (
              "View Pitch Deck"
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-4">
            Your information helps us follow up with interested investors.
            <br />
            We respect your privacy and won&apos;t spam you.
          </p>
        </form>
      </div>
    </div>
  );
}
