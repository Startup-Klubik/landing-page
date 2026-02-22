import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Shield, Clock, Sparkles, Mail } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 500));

    toast.success("Thanks! We'll contact you soon.");
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="demo-form" className="py-32 relative overflow-x-clip">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="hero-glow hero-glow-primary bottom-0 left-1/2 -translate-x-1/2 animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">
            Validate first. Deploy with confidence.
          </p>

          <h2 className="section-heading mb-6">
            Ready to see your {" "}
            <span className="text-gradient">team's true potential?</span>
          </h2>

          <p className="section-subheading mx-auto mb-10">
            Begin with a 2-month Discovery Phase. We'll map your specific needs,
            tailor the solution to your workflow, and plan out any security compliance.
          </p>

          {/* Features list */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Fixed-Scope Discovery Phase</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>Custom Blueprint & Prototype</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Milestone-Gated Scaling</span>
            </div>
          </div>

          {/* Email Form */}
          <div className="max-w-md mx-auto">
            <p className="text-base text-foreground/80 mb-6 text-center">
              Leave your email to schedule a meeting and discuss your team's current velocity and overall goals.
            </p>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="pl-10"
                    aria-label="Email address"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="sm"
                  variant="default"
                >
                  {isSubmitting ? "Sending..." : "Get Started"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg font-medium mb-2">Thanks! We'll be in touch soon.</p>
                <p className="text-sm text-muted-foreground">
                  We'll reach out to schedule your demo.
                </p>
              </div>
            )}
            {!isSubmitted && (
              <p className="mt-4 text-sm text-muted-foreground text-center">
                Talk to our founding team. No sales pitch, just solutions.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
