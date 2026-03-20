"use client";
import { motion } from "framer-motion";
import { Lightbulb, Search, Layers, Code, Rocket } from "lucide-react";

const stages = [
  { icon: Lightbulb, label: "Idea", desc: "Define problem and goals", color: "#4F9CF9", ai: "ChatGPT / Gemini" },
  { icon: Search, label: "Research", desc: "Market & tech research", color: "#00FFC6", ai: "Perplexity AI" },
  { icon: Layers, label: "Architecture", desc: "Design system & data models", color: "#4F9CF9", ai: "AI-assisted diagrams" },
  { icon: Code, label: "Build", desc: "Code, test, iterate", color: "#00FFC6", ai: "Cursor / Copilot" },
  { icon: Rocket, label: "Deploy", desc: "CI/CD to cloud", color: "#4F9CF9", ai: "GCP / Vercel" },
];

export default function WorkflowSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4">08 / Process</p>
          <h2 className="text-4xl font-black">Developer Workflow</h2>
          <p className="text-slate-400 mt-3">How I approach building software — from idea to production.</p>
        </motion.div>

        {/* Arrow process */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex md:flex-col items-center flex-1 group"
              >
                <div className="flex-1 flex flex-col items-center relative">
                  {/* Stage card */}
                  <div className="glass-card w-full md:w-auto px-5 py-6 rounded-2xl border border-slate-800/60 hover:border-[#4F9CF9]/40 hover:shadow-[0_0_30px_rgba(79,156,249,0.1)] transition-all text-center">
                    <div
                      className="inline-flex p-3 rounded-xl mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${stage.color}15` }}
                    >
                      <Icon size={22} style={{ color: stage.color }} />
                    </div>
                    <div className="font-black text-white text-lg mb-1">{stage.label}</div>
                    <div className="text-xs text-slate-400 mb-3">{stage.desc}</div>
                    <div
                      className="text-[10px] font-mono font-bold px-2 py-1 rounded-full"
                      style={{ backgroundColor: `${stage.color}15`, color: stage.color }}
                    >
                      {stage.ai}
                    </div>
                  </div>

                  {/* Connector arrow for desktop */}
                  {i < stages.length - 1 && (
                    <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 items-center">
                      <div className="w-5 h-px bg-[#4F9CF9]/30" />
                      <div
                        className="w-0 h-0"
                        style={{
                          borderLeft: "6px solid rgba(79,156,249,0.4)",
                          borderTop: "4px solid transparent",
                          borderBottom: "4px solid transparent",
                        }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
