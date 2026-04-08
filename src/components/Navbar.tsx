import { Scale } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="glass-strong sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">
            Clause<span className="text-primary">Simplify</span>
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#hero" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Home
          </a>
          <a href="#simplifier" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Simplifier
          </a>
          <a href="#footer" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
