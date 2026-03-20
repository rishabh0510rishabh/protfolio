"use client";
import { motion } from "framer-motion";
import { Code2, Brain, Database, Globe, Zap, Cpu } from "lucide-react";

const focuses = [
  { icon: Code2, label: "Full-Stack Dev", color: "#4F9CF9", desc: "Building scalable web architectures" },
  { icon: Brain, label: "AI & ML", color: "#00FFC6", desc: "Intelligent automation & data models" },
  { icon: Database, label: "Data Systems", color: "#A78BFA", desc: "Robust & high-performance storage" },
  { icon: Zap, label: "Rapid Prototyping", color: "#F7DF1E", desc: "Turning ideas into MVPs quickly" },
  { icon: Cpu, label: "AI-Augmented", color: "#4F9CF9", desc: "Supercharged development workflow" },
  { icon: Globe, label: "Scalable Apps", color: "#00FFC6", desc: "Modern, performant web solutions" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4F9CF9]">01 / Concept</p>
              <h2 className="text-5xl font-black tracking-tight">
                Passion meets <br />
                <span className="text-gradient">Precision.</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#4F9CF9] to-[#00FFC6] rounded-full" />
            </div>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-semibold">Rishabh Mishra</span>, 
                a B.Tech IT student and AI-Augmented Developer focused on the 
                intersection of modern web tech and intelligent systems.
              </p>
              <p>
                I thrive in the space between backend logic and frontend elegance, 
                leveraging <span className="text-[#4F9CF9]">Python</span> and 
                <span className="text-[#00FFC6]"> React</span> to build tools that 
                don&apos;t just work—they excel.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">IT</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Specialization</span>
                </div>
                <div className="w-px h-10 bg-slate-800" />
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">AI</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Augmentation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Focus Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {focuses.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="glass-card-premium p-6 rounded-2xl group hover:bg-white/[0.03] transition-all"
                >
                  <div 
                    className="size-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${f.color}15`, color: f.color }}
                  >
                    <Icon size={20} />
                  </div>
                  <h4 className="text-white font-bold mb-2 transition-colors group-hover:text-[#4F9CF9]">{f.label}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
