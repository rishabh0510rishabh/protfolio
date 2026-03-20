"use client";
import { motion } from "framer-motion";
import { Bot, Sparkles, BarChart2, Zap } from "lucide-react";

const cards = [
  {
    icon: Bot,
    title: "AI Assisted Development",
    desc: "Leveraging LLMs for rapid prototyping, debugging acceleration, and complex architecture planning.",
    color: "#4F9CF9",
    glow: "rgba(79,156,249,0.12)",
  },
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    desc: "Designing structured prompts for consistent, high-quality AI outputs in development workflows.",
    color: "#00FFC6",
    glow: "rgba(0,255,198,0.12)",
  },
  {
    icon: BarChart2,
    title: "Data-Driven Applications",
    desc: "Building analytics-first applications powered by machine learning and intuitive data visualization.",
    color: "#A78BFA",
    glow: "rgba(167,139,250,0.12)",
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    desc: "Streamlining development with Python scripts, CI/CD pipelines, and serverless cloud functions.",
    color: "#4F9CF9",
    glow: "rgba(79,156,249,0.12)",
  },
];

export default function AISection() {
  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4">02 / AI Workflow</p>
          <h2 className="text-4xl font-black mb-4">
            AI-Augmented{" "}
            <span className="text-gradient">Development</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Combining human creativity with AI capabilities to build better software, faster.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card-premium p-6 rounded-2xl group cursor-default"
                style={{
                  // @ts-ignore
                  "--hover-glow": card.glow,
                }}
              >
                <div
                  className="mb-5 inline-flex p-3 rounded-xl transition-all group-hover:scale-110 group-hover:shadow-lg"
                  style={{ backgroundColor: `${card.color}12`, color: card.color }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold mb-3 text-white">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>

                {/* Bottom shimmer line */}
                <div className="mt-4 h-px w-full shimmer" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
