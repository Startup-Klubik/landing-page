import { AlertTriangle, Users, Search } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Documentation Lag",
    description: "When your team ships fast, static documentation struggles to keep up. Important system knowledge often lives in wikis that naturally fall out of sync with the code.",
  },
  {
    icon: Users,
    title: "The Knowledge Silo",
    description: "Relying on senior engineers as guides interrupts their deep work. Worse, it traps system knowledge in a few minds - leaving whenever they do.",
  },
  {
    icon: Search,
    title: "The Reverse-Engineering Reality",
    description: "As your system scales, its complexity naturally deepens. Navigating the codebase consumes valuable time that could be spent shipping new features.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-32 relative">
      <div className="container mx-auto px-6">
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
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              {/* Removed mb-6 so it doesn't create extra empty space at the bottom */}
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;