"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "rishabhmishra0510@gmail.com", href: "mailto:rishabhmishra0510@gmail.com", color: "#4F9CF9" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rishabh-mishra", href: "https://linkedin.com/in/rishabh-mishra", color: "#00FFC6" },
  { icon: Github, label: "GitHub", value: "github.com/rishabhmishra", href: "https://github.com/rishabhmishra", color: "#4F9CF9" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">10 / Contact</p>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Looking for a developer who understands the intersection of AI and scalable architecture?
            Reach out for collaborations, internship opportunities, or just a chat.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 px-6 py-4 glass-card rounded-2xl border border-slate-800/60 hover:border-[#4F9CF9]/50 group transition-all hover:shadow-[0_0_30px_rgba(79,156,249,0.1)]"
                >
                  <div
                    className="p-2 rounded-lg transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${link.color}15` }}
                  >
                    <Icon size={18} style={{ color: link.color }} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{link.label}</div>
                    <div className="text-sm text-white font-medium">{link.value}</div>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-600 group-hover:text-[#4F9CF9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-2" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
