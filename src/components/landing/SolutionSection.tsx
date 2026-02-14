import { GitBranch, Zap, GraduationCap, Workflow } from "lucide-react";
import ScreenshotCarousel from "./ScreenshotCarousel";

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

        {/* App screenshots carousel */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              See Dokero in <span className="text-gradient">Action</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transform complex codebases into interactive architecture diagrams.
              Explore how engineering teams visualize and understand their systems instantly.
            </p>
          </div>

          <ScreenshotCarousel
            images={[
              "/knowledge-hub.png",
              "/tutorial-flow.png",
              "/git-diff.png",
            ]}
            autoPlay={true}
            interval={5000}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
