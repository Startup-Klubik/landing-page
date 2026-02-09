import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("section", { id: "solution", className: "py-32 relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" }), _jsxs("div", { className: "container mx-auto px-6 relative z-10", children: [_jsxs("div", { className: "max-w-3xl mx-auto text-center mb-20", children: [_jsx("p", { className: "text-primary font-mono text-sm mb-4 tracking-wider uppercase", children: "The Solution" }), _jsxs("h2", { className: "section-heading mb-6", children: ["A Senior Architect that", " ", _jsx("span", { className: "text-gradient", children: "never sleeps" })] }), _jsx("p", { className: "section-subheading mx-auto", children: "Dokero lives alongside your codebase, reading and understanding every line. Your developers get instant answers, not more meetings." })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto", children: features.map((feature, index) => (_jsxs("div", { className: "feature-card group relative", children: [_jsx("div", { className: "absolute top-6 right-6", children: _jsx("span", { className: "text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full", children: feature.highlight }) }), _jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors", children: _jsx(feature.icon, { className: "w-6 h-6 text-primary" }) }), _jsx("h3", { className: "text-xl font-semibold mb-3", children: feature.title }), _jsx("p", { className: "text-muted-foreground leading-relaxed", children: feature.description })] }, index))) }), _jsx("div", { className: "mt-20 max-w-4xl mx-auto", children: _jsxs("div", { className: "code-block p-1", children: [_jsxs("div", { className: "flex items-center gap-2 px-4 py-3 border-b border-border/50", children: [_jsx("div", { className: "w-3 h-3 rounded-full bg-destructive/50" }), _jsx("div", { className: "w-3 h-3 rounded-full bg-primary/50" }), _jsx("div", { className: "w-3 h-3 rounded-full bg-secondary/50" }), _jsx("span", { className: "ml-4 text-xs text-muted-foreground", children: "dokero-cli" })] }), _jsxs("div", { className: "p-6 space-y-3", children: [_jsxs("div", { className: "flex items-start gap-2", children: [_jsx("span", { className: "text-primary", children: "$" }), _jsx("span", { className: "text-foreground", children: "dokero ask \"How does the payment flow work?\"" })] }), _jsxs("div", { className: "text-muted-foreground pl-4 border-l-2 border-primary/30", children: [_jsx("p", { className: "mb-2", children: "Analyzing codebase..." }), _jsx("p", { className: "text-foreground", children: "The payment flow consists of 3 main components:" }), _jsx("p", { className: "text-primary", children: "\u2192 PaymentController \u2192 StripeService \u2192 OrderRepository" }), _jsx("p", { className: "mt-2", children: "Interactive diagram generated. Opening in browser..." })] })] })] }) })] })] }));
};
export default SolutionSection;
