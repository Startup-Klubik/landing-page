import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src="Icon-500-500-color.svg"
            alt="Dokero Logo"
            className="w-8 h-8"
          />
          <span className="font-semibold text-lg">Dokero</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            The Problem
          </a>
          <a href="#solution" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Solution
          </a>
          <a href="#value" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            ROI
          </a>
        </div>

        <Button variant="hero" size="sm">
          Book a Demo
        </Button>

      </div>
    </nav>
  );
};

export default Navbar;
