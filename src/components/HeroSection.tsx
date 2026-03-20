"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Download, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-[#4F9CF9]/8 blur-[140px] rounded-full pointer-events-none pulse-glow" />
      <div className="absolute bottom-10 left-[5%] w-[350px] h-[350px] bg-[#00FFC6]/5 blur-[100px] rounded-full pointer-events-none pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-[#A78BFA]/5 blur-[100px] rounded-full pointer-events-none pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-6 w-full py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00FFC6]/8 border border-[#00FFC6]/20 text-[#00FFC6] text-xs font-bold uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFC6]/75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFC6]" />
            </span>
            Open to Opportunities
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tighter"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient relative">
              Rishabh
              <motion.span
                className="absolute -right-6 -top-3"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 0.9, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles size={20} className="text-[#00FFC6]" />
              </motion.span>
            </span>
          </motion.h1>

          {/* Typing sub-headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="text-xl sm:text-2xl font-bold flex flex-wrap items-center gap-2">
              <span className="text-white/90">AI-Augmented</span>
              <span className="text-[#4F9CF9] bg-[#4F9CF9]/10 px-3 py-1 rounded-lg border border-[#4F9CF9]/20">Full-Stack</span>
              <span className="text-white/90">Developer</span>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Specializing in scalable, AI-driven applications with{" "}
              <span className="text-white/80 font-medium">Python, React, and Next.js</span>. 
              Bridging the gap between complex data and intuitive user experiences.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#4F9CF9] to-[#3b82f6] text-[#0B0F19] font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-[#4F9CF9]/25"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/16PF3kSYxZYLrfMn8caMajqBtetnkYq9p/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 glass-card rounded-xl font-bold hover:border-[#4F9CF9]/40"
            >
              <Download size={18} className="text-[#4F9CF9]" /> Resume
            </a>
            <a
              href="https://github.com/rishabh0510rishabh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 glass-card rounded-xl font-bold hover:border-slate-500"
            >
              <Github size={18} /> GitHub
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-8 pt-6"
          >
            {[
              { value: "1.2k+", label: "Commits", color: "#4F9CF9" },
              { value: "10+", label: "Projects", color: "#00FFC6" },
              { value: "5+", label: "Hackathons", color: "#A78BFA" },
            ].map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <div className="text-2xl font-black font-mono transition-colors" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Creative Visual */}
        <div className="hidden lg:flex justify-center items-center relative h-[500px]">
          {/* Rotating orbital ring */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-[#4F9CF9]/8 rotate-slow" />
          <div className="absolute w-[320px] h-[320px] rounded-full border border-[#00FFC6]/6 rotate-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
          <div className="absolute w-[240px] h-[240px] rounded-full border border-[#A78BFA]/5 rotate-slow" style={{ animationDuration: "20s" }} />

          {/* Pulsing center glow */}
          <div className="absolute w-32 h-32 bg-[#4F9CF9]/10 rounded-full blur-2xl pulse-glow" />

          {/* Central code block */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative z-20 glass-card-premium rounded-2xl p-5 font-mono text-xs leading-relaxed w-64 shadow-2xl"
          >
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="text-slate-500">
              <span className="text-[#A78BFA]">const</span>{" "}
              <span className="text-[#4F9CF9]">dev</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-[#00FFC6]">{`{`}</span>
            </div>
            <div className="pl-3 text-slate-400">
              <span className="text-[#4F9CF9]">name</span>: <span className="text-[#00FFC6]">&quot;Rishabh&quot;</span>,
            </div>
            <div className="pl-3 text-slate-400">
              <span className="text-[#4F9CF9]">stack</span>: <span className="text-[#A78BFA]">[</span><span className="text-[#00FFC6]">&quot;Python&quot;</span>, <span className="text-[#00FFC6]">&quot;React&quot;</span><span className="text-[#A78BFA]">]</span>,
            </div>
            <div className="pl-3 text-slate-400">
              <span className="text-[#4F9CF9]">ai</span>: <span className="text-[#FFBD2E]">true</span>,
            </div>
            <div className="text-[#00FFC6]">{`}`}<span className="text-white">;</span></div>
            <div className="mt-1 text-[#4F9CF9]">
              dev.<span className="text-white">build</span>(<span className="text-[#00FFC6]">&quot;amazing&quot;</span>);
              <span className="cursor-blink text-[#4F9CF9] ml-0.5">|</span>
            </div>
          </motion.div>

          {/* Floating tech nodes */}
          {[
            { emoji: "🐍", label: "Python", x: -160, y: -120, delay: 0 },
            { emoji: "⚛️", label: "React", x: 160, y: -80, delay: 0.3 },
            { emoji: "🧠", label: "AI/ML", x: -140, y: 100, delay: 0.6 },
            { emoji: "☁️", label: "Cloud", x: 150, y: 120, delay: 0.9 },
            { emoji: "🚀", label: "DevOps", x: 0, y: -180, delay: 0.4 },
          ].map((node) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + node.delay, type: "spring" }}
              className="absolute float-animation"
              style={{
                left: `calc(50% + ${node.x}px)`,
                top: `calc(50% + ${node.y}px)`,
                transform: "translate(-50%, -50%)",
                animationDelay: `${node.delay * 2}s`,
              }}
            >
              <div className="glass-card w-14 h-14 rounded-xl flex flex-col items-center justify-center gap-0.5 hover:scale-110 transition-transform cursor-default">
                <span className="text-xl">{node.emoji}</span>
                <span className="text-[8px] text-slate-500 font-mono font-bold">{node.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-slate-700 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#4F9CF9]" />
        </motion.div>
        <span className="text-[10px] font-mono">scroll</span>
      </motion.div>
    </section>
  );
}
