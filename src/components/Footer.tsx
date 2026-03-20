"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-800/50 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="size-7 bg-[#4F9CF9] rounded flex items-center justify-center text-[11px] text-[#0B0F19] font-black">
            R
          </div>
          <span className="text-slate-500 text-sm font-medium">
            © 2025 Rishabh Mishra. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-600">
          <a href="mailto:hello@rishabhmishra.me" className="hover:text-[#4F9CF9] transition-colors"><Mail size={17} /></a>
          <a href="https://linkedin.com/in/rishabh-mishra" target="_blank" rel="noopener noreferrer" className="hover:text-[#4F9CF9] transition-colors"><Linkedin size={17} /></a>
          <a href="https://github.com/rishabhmishra" target="_blank" rel="noopener noreferrer" className="hover:text-[#4F9CF9] transition-colors"><Github size={17} /></a>
        </div>

        <p className="text-slate-600 text-sm font-mono">
          Built with Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
