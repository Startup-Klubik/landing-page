import { Code2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-1 group">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Code2 className="w-4 h-4 text-primary" />
          </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
