import { Clock, Lock, Compass } from "lucide-react";
import { colors, anim1, anim2, anim3 } from "./problem_svgs";

const problems = [
  {
    icon: Clock,
    title: 'Documentation Lag',
    description: 'When your team ships fast, static docs struggle to keep up. Critical system knowledge gets trapped in wikis that instantly fall out of sync with your code.',
    iconColor: '#ff4444',
    svg: anim1,
    bgGradient: `linear-gradient(to bottom right, ${colors.shadowGrey}, #2a1a23)`,
    borderColor: `#332222`
  },
  {
    icon: Lock,
    title: 'The Knowledge Silo',
    description: 'Relying on senior engineers as guides interrupts their deep work. Worse, it traps system knowledge in a few minds — leaving whenever they do.',
    iconColor: colors.purple,
    svg: anim2,
    bgGradient: `linear-gradient(to bottom right, ${colors.shadowGrey}, ${colors.purple}15)`,
    borderColor: `${colors.purple}33`
  },
  {
    icon: Compass,
    title: 'Reverse-Engineering Reality',
    description: 'As your system scales, complexity deepens. Blindly navigating the codebase to trace dependencies consumes valuable time meant for shipping features.',
    iconColor: colors.autumnLeaf,
    svg: anim3,
    bgGradient: `linear-gradient(to bottom right, ${colors.shadowGrey}, ${colors.autumnLeaf}15)`,
    borderColor: `${colors.autumnLeaf}33`
  }
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-32 relative overflow-x-clip">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">
            The Hidden Costs
          </p>
          <h2 className="section-heading mb-6">
            Understanding the {" "}
            <span className="text-gradient">friction</span>
          </h2>
          <p className="section-subheading mx-auto">
            Growth creates complexity, and complexity creates cognitive load.
          </p>
          <p className="section-subheading mx-auto">
            Unlocking your team's true capacity starts with understanding these three natural bottlenecks.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="feature-card group relative flex flex-col overflow-hidden p-0 border border-border/40 hover:border-border/80 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* SVG Preview Box */}
              <div
                className="p-6 aspect-[4/3] flex items-center justify-center relative overflow-hidden border-b border-border/40"
                style={{ background: problem.bgGradient }}
              >
                <div dangerouslySetInnerHTML={{ __html: problem.svg }} className="w-full h-full drop-shadow-2xl z-10" />
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
              </div>

              {/* Description & Content */}
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-border/50 flex items-center justify-center mb-6 transition-colors"
                  style={{ backgroundColor: `${problem.iconColor}15`, borderColor: `${problem.iconColor}33` }}>
                  <problem.icon className="w-6 h-6" style={{ color: problem.iconColor }} />
                </div>

                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;