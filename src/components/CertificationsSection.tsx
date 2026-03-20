"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Gen AI Academy 2.0",
    issuer: "Google",
    date: "Jan 2026",
    credId: "2025H2S10GENAI-DA300687",
    badge: "🤖",
    color: "#4F9CF9",
  },
  {
    title: "Store, Process, and Manage Data on Google Cloud",
    issuer: "Google",
    date: "Jan 2026",
    credId: "21401722",
    badge: "☁️",
    color: "#00FFC6",
  },
  {
    title: "Streaming Analytics into BigQuery",
    issuer: "Google",
    date: "Jan 2026",
    credId: "21400320",
    badge: "📊",
    color: "#A78BFA",
  },
  {
    title: "Share Data Using Google Data Cloud",
    issuer: "Google",
    date: "Jan 2026",
    credId: "21399381",
    badge: "🗄️",
    color: "#4F9CF9",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google",
    date: "Dec 2025",
    credId: "21205961",
    badge: "🧠",
    color: "#00FFC6",
  },
  {
    title: "Get Started Using Google Analytics",
    issuer: "United Latino Students Association",
    date: "Dec 2025",
    credId: "170146332",
    badge: "📈",
    color: "#A78BFA",
  },
  {
    title: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google",
    date: "Dec 2025",
    credId: "21115657",
    badge: "⚙️",
    color: "#4F9CF9",
  },
  {
    title: "AI Tools Workshop",
    issuer: "Be10x",
    date: "Dec 2025",
    credId: "0270772f",
    badge: "✨",
    color: "#00FFC6",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-28 relative">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4">07 / Credentials</p>
          <h2 className="text-4xl font-black mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Verified credentials from Google Cloud, Gen AI Academy, and other platforms.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.credId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="glass-card rounded-2xl p-5 group cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{cert.badge}</span>
                <span className="text-[10px] font-mono font-bold" style={{ color: cert.color }}>
                  {cert.date}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2 leading-snug line-clamp-2 group-hover:text-[#4F9CF9] transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-500 mb-3 font-medium">{cert.issuer}</p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/50">
                <span className="text-[10px] font-mono text-slate-600 truncate max-w-[60%]">
                  ID: {cert.credId}
                </span>
                <Award size={13} className="text-slate-700 group-hover:text-[#00FFC6] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
