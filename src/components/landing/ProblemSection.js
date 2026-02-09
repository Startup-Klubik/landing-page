import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { id: "problem", className: "py-32 relative", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "max-w-3xl mx-auto text-center mb-20", children: [_jsx("p", { className: "text-primary font-mono text-sm mb-4 tracking-wider uppercase", children: "The Hidden Cost" }), _jsxs("h2", { className: "section-heading mb-6", children: ["You're paying developers to be", " ", _jsx("span", { className: "text-gradient", children: "confused" })] }), _jsx("p", { className: "section-subheading mx-auto", children: "Less than a third of your engineering payroll goes toward writing new code. The rest? Pure code comprehension overhead." })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-6", children: problems.map((problem, index) => (_jsxs("div", { className: "feature-card group", style: { animationDelay: `${index * 0.1}s` }, children: [_jsx("div", { className: "w-12 h-12 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors", children: _jsx(problem.icon, { className: "w-6 h-6 text-destructive" }) }), _jsx("h3", { className: "text-xl font-semibold mb-3", children: problem.title }), _jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: problem.description }), _jsxs("div", { className: "pt-6 border-t border-border/50", children: [_jsx("span", { className: "font-mono text-3xl font-bold text-destructive", children: problem.stat }), _jsx("span", { className: "text-sm text-muted-foreground ml-2", children: problem.statLabel })] })] }, index))) })] }) }));
};
export default ProblemSection;
