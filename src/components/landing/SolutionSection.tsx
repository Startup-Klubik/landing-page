import { GitBranch, Zap, GraduationCap, Workflow } from "lucide-react";
import ScreenshotCarousel from "./ScreenshotCarousel";
import { colors, anim1, anim2, anim3, anim4 } from "./features_svgs";

const features = [
  {
    icon: Workflow,
    title: "Instant Architecture Diagrams",
    description: "Get an interactive visual map of your system. Complex dependencies become clear in seconds, not hours.",
    highlight: "Visual-first",
    svg: anim1,
    bgGradient: `linear-gradient(to bottom right, ${colors.purple}20, ${colors.shadowGrey}, ${colors.autumnLeaf}20)`
  },
  {
    icon: GraduationCap,
    title: "Instant Knowledge Transfer",
    description: "Generate visual, step-by-step tutorials on demand. Whether a new hire is ramping up or a developer is fixing a bug in a teammate's undocumented code, anyone can gain context without reverse-engineering.",
    highlight: "Self-serve",
    svg: anim2,
    bgGradient: `linear-gradient(to bottom right, ${colors.autumnLeaf}20, ${colors.shadowGrey}, ${colors.purple}20)`
  },
  {
    icon: GitBranch,
    title: "On-Demand & Always in Sync",
    description: "Your visuals and tutorials are dynamically processed in real-time, providing an accurate reflection of your current system.",
    highlight: "Auto-sync",
    svg: anim3,
    bgGradient: `linear-gradient(to bottom right, ${colors.shadowGrey}, ${colors.shadowGrey}, ${colors.purple}30)`
  },
  {
    icon: Zap,
    title: "Chat with Dokero",
    description: "Ask questions like 'Which services depend on the payment module?' or 'Map the user data flow,' and get an instant, interactive visual map backed by exact code references.",
    highlight: "AI-powered",
    svg: anim4,
    bgGradient: `linear-gradient(to top right, ${colors.purple}20, ${colors.shadowGrey}, ${colors.autumnLeaf}20)`
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-32 relative overflow-x-clip">
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
            Let Dokero read and understand every line. Give your developers instant access to the context they need to stay in the flow.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative flex flex-col overflow-hidden p-0 border border-border/40 hover:border-border/80 transition-colors"
            >
              {/* SVG Preview Box */}
              <div
                className="p-6 aspect-[4/3] flex items-center justify-center relative overflow-hidden border-b border-border/40"
                style={{ background: feature.bgGradient }}
              >
                <div dangerouslySetInnerHTML={{ __html: feature.svg }} className="w-full h-full drop-shadow-2xl z-10" />
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              </div>

              {/* Description & Content */}
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="absolute top-8 right-8">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3 pr-24">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
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
              Turn complex code into clear, interactive diagrams on demand. See how easily your team can map dependencies and understand their systems.
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
