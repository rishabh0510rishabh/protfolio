"use client";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Wrench 
} from "lucide-react";

const stack = [
  {
    category: "Languages",
    icon: Code2,
    color: "#4F9CF9",
    items: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 82 },
      { name: "TypeScript", level: 75 },
      { name: "Java", level: 65 },
    ],
  },
  {
    category: "Frontend",
    icon: Layout,
    color: "#00FFC6",
    items: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind", level: 90 },
      { name: "Framer", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "#A78BFA",
    items: [
      { name: "Flask", level: 90 },
      { name: "Node.js", level: 75 },
      { name: "REST APIs", level: 88 },
      { name: "Auth", level: 80 },
    ],
  },
  {
    category: "Data & ML",
    icon: BrainCircuit,
    color: "#4F9CF9",
    items: [
      { name: "Pandas", level: 85 },
      { name: "Scikit-learn", level: 75 },
      { name: "PyTorch", level: 60 },
      { name: "NLP", level: 70 },
    ],
  },
  {
    category: "Storage",
    icon: Database,
    color: "#00FFC6",
    items: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 65 },
      { name: "Supabase", level: 85 },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    color: "#A78BFA",
    items: [
      { name: "Docker", level: 70 },
      { name: "GCP/AWS", level: 65 },
      { name: "Git", level: 90 },
      { name: "Postman", level: 85 },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4">03 / Expertise</p>
          <h2 className="text-5xl font-black mb-6">
            Tech <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            A curated selection of technologies I use to build high-performance, 
            intelligent applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="glass-card-premium p-8 rounded-3xl group hover:border-[#4F9CF9]/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="p-3 rounded-2xl bg-white/5 group-hover:bg-[#4F9CF9]/10 transition-colors"
                  style={{ color: group.color }}
                >
                  <group.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  {group.category}
                </h4>
              </div>

              <ul className="space-y-5">
                {group.items.map((item, ii) => (
                  <li key={item.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-800/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full shadow-[0_0_10px_rgba(79,156,249,0.3)]"
                        style={{
                          background: `linear-gradient(90deg, ${group.color}, ${group.color}CC)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: gi * 0.1 + ii * 0.05,
                          duration: 1,
                          ease: "circOut",
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
