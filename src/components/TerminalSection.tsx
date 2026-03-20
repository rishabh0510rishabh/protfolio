"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type LogLine = { prompt?: string; output: string | string[]; color?: string };

const commands: Record<string, LogLine[]> = {
  whoami: [
    {
      output:
        '"Rishabh Mishra: AI-Augmented Full-Stack Developer dedicated to engineering efficient, scalable backend services with a pinch of AI magic."',
      color: "text-slate-300",
    },
  ],
  skills: [
    { output: "Python  Flask  SQLite  MongoDB  Pandas  NumPy  Scikit-learn", color: "text-[#4F9CF9]" },
    { output: "GCP  Vercel  Docker  Git  REST APIs  Prompt Engineering", color: "text-[#00FFC6]" },
  ],
  projects: [
    { output: "1. Railway Ticket Booking System  [Flask · SQLite · QR Auth]", color: "text-slate-300" },
    { output: "2. Smart Invoice Generator        [Flask · Chart.js · PDF]", color: "text-slate-300" },
  ],
  hackathons: [
    { output: "✅ Synapse.AI — DTU Delhi       (Mar 2026)", color: "text-slate-400" },
    { output: "✅ InnovateNSUT — NSUT Delhi    (Feb 2026)", color: "text-slate-400" },
    { output: "✅ RIFT Hackathon — PW          (Jan 2026)", color: "text-slate-400" },
    { output: "✅ DataVerse — KIET            (Dec 2025)", color: "text-slate-400" },
    { output: "✅ Elite Hack 1.0 — Global      (Dec 2025)", color: "text-slate-400" },
  ],
  contact: [
    { output: "email    → hello@rishabhmishra.me", color: "text-[#4F9CF9]" },
    { output: "linkedin → linkedin.com/in/rishabh-mishra", color: "text-[#4F9CF9]" },
    { output: "github   → github.com/rishabh0510rishabh", color: "text-[#4F9CF9]" },
  ],
  help: [
    { output: "Available commands: whoami  skills  projects  hackathons  contact", color: "text-[#00FFC6]" },
  ],
  clear: [],
};

type HistoryEntry = { cmd: string; lines: LogLine[] };

export default function TerminalSection() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    { cmd: "help", lines: commands.help },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll just the terminal container, not the whole page
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setHistory([]);
    } else {
      const output = commands[cmd] ?? [{ output: `command not found: ${cmd}. type 'help' for available commands.`, color: "text-red-400" }];
      setHistory((prev) => [...prev, { cmd, lines: output }]);
    }
    setInput("");
  };

  return (
    <section className="py-24 border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4">09 / Interactive</p>
          <h2 className="text-4xl font-black">Developer Terminal</h2>
          <p className="text-slate-400 mt-3">
            Type a command to explore my portfolio. Try:{" "}
            {Object.keys(commands).filter(c=>c!=='clear').map((c, i, a) => (
              <span key={c}>
                <code
                  className="text-[#4F9CF9] font-mono cursor-pointer hover:underline"
                  onClick={() => setInput(c)}
                >
                  {c}
                </code>
                {i < a.length - 2 ? ", " : i === a.length - 2 ? ", or " : ""}
              </span>
            ))}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal title bar */}
          <div className="bg-slate-800/80 px-4 py-2.5 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <span className="font-mono text-xs text-slate-500">rishabh@portfolio — bash</span>
            <div className="w-16" />
          </div>

          {/* Terminal body */}
          <div ref={containerRef} className="bg-[#0B0F19] p-6 font-mono text-sm min-h-[280px] max-h-[400px] overflow-y-auto">
            {history.map((entry, i) => (
              <div key={i} className="mb-3">
                <div className="flex gap-2">
                  <span className="text-[#00FFC6]">rishabh@portfolio:~$</span>
                  <span className="text-slate-200">{entry.cmd}</span>
                </div>
                {entry.lines.map((line, li) => (
                  <div key={li} className={`mt-1 pl-4 ${line.color ?? "text-slate-300"}`}>
                    {line.output}
                  </div>
                ))}
              </div>
            ))}
            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex gap-2 items-center">
              <span className="text-[#00FFC6] shrink-0">rishabh@portfolio:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent outline-none text-slate-200 flex-1 caret-[#4F9CF9]"
                autoComplete="off"
                spellCheck={false}
              />
              <span className="cursor-blink text-[#4F9CF9] font-bold">|</span>
            </form>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
