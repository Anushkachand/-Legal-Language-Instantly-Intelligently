import { useState } from "react";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const SAMPLE_OUTPUTS: Record<string, string> = {};

const simplifyClause = (input: string): string => {
  if (!input.trim()) return "";

  const lower = input.toLowerCase();

  if (lower.includes("indemnif"))
    return "This means one party agrees to cover any losses, damages, or legal costs that the other party might face because of this agreement.";
  if (lower.includes("force majeure"))
    return "If something completely unexpected happens (like a natural disaster or pandemic), neither side will be blamed for not being able to meet their obligations.";
  if (lower.includes("non-compete") || lower.includes("noncompete"))
    return "After leaving, you agree not to work for or start a competing business for a certain period of time and within a specific area.";
  if (lower.includes("confidential") || lower.includes("nda"))
    return "You must keep all shared private information secret and not share it with anyone outside of this agreement.";
  if (lower.includes("terminat"))
    return "Either party can end this agreement by giving advance written notice. Some obligations may still apply after the agreement ends.";
  if (lower.includes("arbitrat"))
    return "Instead of going to court, any disagreements will be settled through a private arbitration process.";
  if (lower.includes("liability"))
    return "There's a cap on how much one party would owe the other if something goes wrong — it won't exceed a set amount.";

  return "In simpler terms: This clause outlines specific rights and obligations between the parties involved. It sets boundaries on what each side can and cannot do, and describes the consequences if those boundaries are crossed.";
};

const ClauseSimplifier = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSimplify = () => {
    if (!input.trim()) return;
    setLoading(true);
    setOutput("");
    setTimeout(() => {
      setOutput(simplifyClause(input));
      setLoading(false);
    }, 1800);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="simplifier" className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-3xl">
        {/* Input Card */}
        <div className="glass rounded-2xl p-6 shadow-xl md:p-8">
          <label htmlFor="clause-input" className="mb-2 block text-sm font-semibold text-foreground">
            Paste your legal clause
          </label>
          <textarea
            id="clause-input"
            rows={6}
            className="w-full resize-none rounded-xl border border-border bg-background/60 p-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder='e.g. "The indemnifying party shall defend, indemnify, and hold harmless..."'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={handleSimplify}
            disabled={loading || !input.trim()}
            size="lg"
            className="mt-4 w-full rounded-full bg-secondary text-lg font-bold text-secondary-foreground shadow-md transition-transform hover:scale-[1.02] hover:bg-secondary/90 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin-slow" />
            ) : (
              <Sparkles className="mr-2 h-5 w-5" />
            )}
            {loading ? "Simplifying..." : "Simplify Clause"}
          </Button>
        </div>

        {/* Output Card */}
        {(output || loading) && (
          <div className="mt-8 animate-fade-up glass rounded-2xl p-6 shadow-xl md:p-8">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-primary">Simplified Version</h3>
              {output && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="text-muted-foreground hover:text-primary"
                >
                  {copied ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
              )}
            </div>
            {loading ? (
              <div className="flex items-center gap-3 py-8">
                <Loader2 className="h-6 w-6 animate-spin-slow text-primary" />
                <span className="text-muted-foreground">Analyzing legal language...</span>
              </div>
            ) : (
              <p className="text-lg leading-relaxed text-foreground">{output}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ClauseSimplifier;
