import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src="Icon-500-500-color.svg"
              alt="Dokero Logo"
              width="32"
              height="32"
              className="w-8 h-8"
            />
            <span className="font-semibold">Dokero</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            {/* <a href="#" className="hover:text-foreground transition-colors"> */}
            {/*   Terms */}
            {/* </a> */}
            <a href="mailto:contact@dokero.dev" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 Dokero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
