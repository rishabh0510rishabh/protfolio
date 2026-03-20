"use client";
import { motion } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";

const hackathons = [
  { name: "Synapse.AI Hackathon", org: "DTU, Delhi", year: "Mar 2026" },
  { name: "InnovateNSUT", org: "NSUT, Delhi", year: "Feb 2026" },
  { name: "RIFT Hackathon", org: "Physics Wallah Innovation", year: "Jan 2026" },
  { name: "DataVerse", org: "KIET, Ghaziabad", year: "Dec 2025" },
  { name: "Elite Hack 1.0", org: "Global Hackathon", year: "Dec 2025" },
];

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="py-28 relative">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4">05 / Builder Mindset</p>
          <h2 className="text-4xl font-black mb-4">
            Hackathon <span className="text-gradient">Veteran</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Participated in <span className="text-white font-bold">5+ national and global hackathons</span>,
            building real solutions under pressure—from AI systems to smart city prototypes.
          </p>
        </motion.div>

        {/* Compact hackathon badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {hackathons.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 cursor-default group"
            >
              <Trophy
                size={14}
                className="shrink-0 transition-colors text-slate-600 group-hover:text-[#4F9CF9]"
              />
              <div>
                <span className="text-sm font-bold text-white">{h.name}</span>
                <span className="text-xs text-slate-500 ml-2 font-mono">{h.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-8"
        >
          {[
            { val: "5+", label: "Hackathons" },
            { val: "All", label: "Participation" },
            { val: "48hrs", label: "Avg Build Time" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black font-mono text-[#4F9CF9]">{s.val}</div>
              <div className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
