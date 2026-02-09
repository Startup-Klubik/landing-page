import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold">Dokero</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="mailto:hello@dokero.dev" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Dokero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
