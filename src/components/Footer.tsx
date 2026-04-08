import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="glass-strong mt-16">
      <div className="container mx-auto flex flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2">
          <Scale className="h-5 w-5 text-primary" />
          <span className="font-bold text-foreground">
            Clause<span className="text-primary">Simplify</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ClauseSimplify. Making legal language accessible to everyone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
