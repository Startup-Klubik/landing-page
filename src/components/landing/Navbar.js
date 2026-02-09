import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
const Navbar = () => {
    return (_jsx("nav", { className: "nav-blur fixed top-0 left-0 right-0 z-50", children: _jsxs("div", { className: "container mx-auto px-6 h-16 flex items-center justify-between", children: [_jsxs("a", { href: "/", className: "flex items-center gap-2 group", children: [_jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors", children: _jsx(Code2, { className: "w-4 h-4 text-primary" }) }), _jsx("span", { className: "font-semibold text-lg", children: "Dokero" })] }), _jsxs("div", { className: "hidden md:flex items-center gap-8", children: [_jsx("a", { href: "#problem", className: "text-muted-foreground hover:text-foreground transition-colors text-sm", children: "The Problem" }), _jsx("a", { href: "#solution", className: "text-muted-foreground hover:text-foreground transition-colors text-sm", children: "Solution" }), _jsx("a", { href: "#value", className: "text-muted-foreground hover:text-foreground transition-colors text-sm", children: "ROI" })] }), _jsxs("div", { className: "flex items-center gap-3", 
            children: [_jsx(Button, { variant: "ghost", size: "sm", className: "hidden sm:inline-flex", 
                children: "Sign In" }), _jsx(Button, { variant: "hero", size: "sm", children: "Book a Demo" })] })] }) }));
};
export default Navbar;
