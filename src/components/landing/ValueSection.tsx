import { Calculator, TrendingUp, Users2 } from "lucide-react";

const ValueSection = () => {
  return (
    <section id="value" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">
            The ROI
          </p>
          <h2 className="section-heading mb-6">
            The math is{" "}
            <span className="text-gradient">undeniable</span>
          </h2>
          <p className="section-subheading mx-auto">
            Transform wasted comprehension time into shipping velocity.
          </p>
        </div>

        {/* Value proposition cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Cost card */}
          <div className="stat-card text-center">
            <div className="w-14 h-14 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-7 h-7 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-sm mb-2">Annual cost per senior dev</p>
            <p className="font-mono text-4xl font-bold mb-2">900K</p>
            <p className="text-muted-foreground text-sm">DKK / year</p>
          </div>

          {/* Recovery card */}
          <div className="stat-card text-center glow-box">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm mb-2">Capacity recovered per dev</p>
            <p className="font-mono text-4xl font-bold text-gradient mb-2">270K</p>
            <p className="text-muted-foreground text-sm">DKK / year</p>
          </div>

          {/* Team card */}
          <div className="stat-card text-center">
            <div className="w-14 h-14 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center mx-auto mb-6">
              <Users2 className="w-7 h-7 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-sm mb-2">Value gained (10 devs)</p>
            <p className="font-mono text-4xl font-bold mb-2">2.7M</p>
            <p className="text-muted-foreground text-sm">DKK / year</p>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Deploying Dokero is the mathematical equivalent of
            </p>
            <p className="text-3xl font-bold mb-4">
              Hiring <span className="text-gradient">3 senior engineers</span>
            </p>
            <p className="text-muted-foreground">
              Without the recruiting fees. Without the onboarding time. Without the monthly payroll.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
