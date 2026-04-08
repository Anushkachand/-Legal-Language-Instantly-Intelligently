import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="container mx-auto flex flex-col items-center px-6 py-20 text-center md:py-32">
      <h1 className="animate-fade-up text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
        Understand Legal Jargon
        <br />
        <span className="text-primary">In Plain English</span>
      </h1>
      <p className="mt-6 max-w-2xl animate-fade-up text-lg text-muted-foreground" style={{ animationDelay: "0.15s" }}>
        Paste any legal clause and our AI-powered simplifier breaks it down into clear, everyday language — no law degree needed.
      </p>
      <Button
        size="lg"
        className="mt-10 animate-fade-up rounded-full bg-primary px-8 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:bg-primary/90"
        style={{ animationDelay: "0.3s" }}
        onClick={() => document.getElementById("simplifier")?.scrollIntoView({ behavior: "smooth" })}
      >
        Get Started <ArrowDown className="ml-2 h-5 w-5" />
      </Button>
    </section>
  );
};

export default HeroSection;
