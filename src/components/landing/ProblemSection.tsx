import { AlertTriangle, Users, Search } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "The Maintenance Trap",
    description: "Documentation is dead on arrival. By the time it's written, the code has already changed. Wikis become graveyards of outdated information.",
    stat: "100%",
    statLabel: "of wikis become stale",
  },
  {
    icon: Users,
    title: "The Knowledge Silo",
    description: "Your senior engineers become the 'source of truth.' They spend their expensive hours answering questions instead of building.",
    stat: "40%",
    statLabel: "of senior time lost",
  },
  {
    icon: Search,
    title: "The Reverse-Engineering Reality",
    description: "Developers stop being builders and become detectives. Hours spent reading thousands of lines just to add one feature or fix a bug.",
    stat: "58%",
    statLabel: "of time wasted",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">
            The Hidden Cost
          </p>
          <h2 className="section-heading mb-6">
            You're paying developers to be{" "}
            <span className="text-gradient">confused</span>
          </h2>
          <p className="section-subheading mx-auto">
            Less than a third of your engineering payroll goes toward writing new code. 
            The rest? Pure code comprehension overhead.
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
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {problem.description}
              </p>
              
              <div className="pt-6 border-t border-border/50">
                <span className="font-mono text-3xl font-bold text-destructive">
                  {problem.stat}
                </span>
                <span className="text-sm text-muted-foreground ml-2">
                  {problem.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
