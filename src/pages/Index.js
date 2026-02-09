import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ValueSection from "@/components/landing/ValueSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
const Index = () => {
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(Navbar, {}), _jsx(Hero, {}), _jsx(ProblemSection, {}), _jsx(SolutionSection, {}), _jsx(ValueSection, {}), _jsx(CTASection, {}), _jsx(Footer, {})] }));
};
export default Index;
