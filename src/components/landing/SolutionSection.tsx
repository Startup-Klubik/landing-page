import { GitBranch, Zap, GraduationCap, Workflow } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Instant Architecture Diagrams",
    description: "Ask a question, get an interactive visual map of your system. Complex dependencies become clear in seconds, not hours.",
    highlight: "Visual-first",
  },
  {
    icon: GitBranch,
    title: "Always Up-to-Date",
    description: "Connected to your repository. When code changes, documentation updates automatically. No more stale wikis.",
    highlight: "Auto-sync",
  },
  {
    icon: Zap,
    title: "Natural Language Queries",
    description: "Ask 'How does user authentication work?' and get instant, contextual answers with code references.",
    highlight: "AI-powered",
  },
  {
    icon: GraduationCap,
    title: "Onboarding on Autopilot",
    description: "New hires get AI-guided interactive tutorials. Reduce onboarding time by up to 80%.",
    highlight: "Self-serve",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">
            The Solution
          </p>
          <h2 className="section-heading mb-6">
            A Senior Architect that{" "}
            <span className="text-gradient">never sleeps</span>
          </h2>
          <p className="section-subheading mx-auto">
            Dokero lives alongside your codebase, reading and understanding every line. 
            Your developers get instant answers, not more meetings.
          </p>
        </div>

        {/* Features grid */}
     <div className="grid md:grid-cols-2 gap-16 md:gap-28 max-w-4xl mx-auto">

          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative"
            >
              <div className="absolute top-6 right-6">
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Code demo placeholder */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="code-block p-1">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive/50" />
              <div className="w-3 h-3 rounded-full bg-primary/50" />
              <div className="w-3 h-3 rounded-full bg-secondary/50" />
              <span className="ml-4 text-xs text-muted-foreground">dokero-cli</span>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-primary">$</span>
                <span className="text-foreground">dokero ask "How does the payment flow work?"</span>
              </div>
              <div className="text-muted-foreground pl-4 border-l-2 border-primary/30">
                <p className="mb-2">Analyzing codebase...</p>
                <p className="text-foreground">The payment flow consists of 3 main components:</p>
                <p className="text-primary">→ PaymentController → StripeService → OrderRepository</p>
                <p className="mt-2">Interactive diagram generated. Opening in browser...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
