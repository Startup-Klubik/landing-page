import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="hero-glow hero-glow-primary bottom-0 left-1/2 -translate-x-1/2 animate-pulse-slow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">
            Start Small. Scale Fast.
          </p>
          
          <h2 className="section-heading mb-6">
            Ready to recover your{" "}
            <span className="text-gradient">engineering velocity?</span>
          </h2>
          
          <p className="section-subheading mx-auto mb-10">
            Begin with a 2-month Discovery Phase. We'll map your bottlenecks, 
            configure the engine, and prove the value before you commit.
          </p>

          {/* Features list */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>2-month pilot program</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Results-based expansion</span>
            </div>
          </div>

          {/* CTA */}
          <Button variant="hero" size="xl">
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Talk to our founding team. See the engine in action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
