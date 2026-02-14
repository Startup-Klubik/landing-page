import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glows */}
      <div className="hero-glow hero-glow-primary -top-40 -left-40 animate-pulse-slow" />
      <div className="hero-glow hero-glow-secondary top-1/2 -right-40 animate-pulse-slow delay-200" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              AI-Powered Documentation Engine
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up delay-100">
            Your developers spend{" "}
            <span className="text-gradient glow-text">58%</span>{" "}
            of their time{" "}
            <span className="text-muted-foreground">reading code</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up delay-200 max-w-2xl mx-auto">
            Not writing it. Not shipping features.{" "}
            <span className="text-foreground">Just trying to understand it.</span>
          </p>

          <p className="text-lg text-muted-foreground mb-10 animate-slide-up delay-300">
            Dokero gives them the answers instantly.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-400">
            <Button variant="hero" size="xl">
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground animate-slide-up delay-400">
            <div className="flex items-center gap-2">
              <span className="font-mono text-primary">30%</span>
              <span>capacity recovered</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-primary">2.7M</span>
              <span>DKK saved per 10 devs</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-primary">80%</span>
              <span>faster onboarding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
