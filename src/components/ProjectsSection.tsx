"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Railway Ticket Booking System",
    description:
      "Flask-based intelligent reservation engine with dynamic seat allocation, QR-based ticket validation, encrypted PDF e-ticket generation, and role-based authentication.",
    tags: ["Python", "Flask", "SQLite", "QR Auth", "PDF Gen"],
    features: ["Seat allocation algorithm", "Role-based authentication", "PDF e-tickets", "QR codes"],
    icon: "🚂",
    github: "https://github.com/rishabh0510rishabh/railway-booking-system",
    demo: "https://github.com/rishabh0510rishabh/railway-booking-system",
    gradient: "from-[#4F9CF9]/15 to-[#00FFC6]/8",
    accent: "#4F9CF9",
  },
  {
    title: "Smart Invoice Generator",
    description:
      "Full-stack billing solution with automated GST calculation, real-time sales analytics dashboard using Chart.js, and batch PDF invoice generation for small enterprises.",
    tags: ["Flask", "Chart.js", "SQLite", "Pandas", "Analytics"],
    features: ["Invoice automation", "Sales analytics", "PDF invoices", "GST calculation"],
    icon: "📊",
    github: "https://github.com/rishabh0510rishabh/Invoice-generator",
    demo: "https://github.com/rishabh0510rishabh/Invoice-generator",
    gradient: "from-[#00FFC6]/12 to-[#A78BFA]/8",
    accent: "#00FFC6",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4">04 / Work</p>
          <h2 className="text-4xl font-black">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card-premium rounded-3xl overflow-hidden group flex flex-col"
            >
              {/* Project visual */}
              <div className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-[#0B0F19]/30" />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <motion.span
                  className="text-7xl relative z-10"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.icon}
                </motion.span>
              </div>

              <div className="p-8 flex-1 flex flex-col space-y-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#4F9CF9] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

                {/* Key features */}
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-500">
                      <span
                        className="size-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: project.accent }}
                      />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-3 border-t border-slate-800/50">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
                    <Github size={15} /> Source Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-semibold text-[#4F9CF9] hover:text-[#4F9CF9]/70 transition-colors">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
