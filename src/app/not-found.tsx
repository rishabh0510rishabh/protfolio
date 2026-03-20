'use client'

import { motion } from 'framer-motion'
import { Home, Search } from 'lucide-react'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center px-6 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F9CF9]/5 blur-[160px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center space-y-8"
      >
        <div className="space-y-2">
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-[12rem] font-black leading-none text-gradient opacity-20 select-none"
          >
            404
          </motion.h1>
          <h2 className="text-4xl font-black text-white mt-[-4rem]">Page Not Found</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#4F9CF9] text-[#0B0F19] font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-[#4F9CF9]/20"
          >
            <Home size={18} />
            Return Home
          </Link>
          <Link
            href="/#projects"
            className="flex items-center justify-center gap-2 px-8 py-4 glass-card rounded-xl font-bold hover:border-slate-500 transition-all text-slate-300"
          >
            <Search size={18} />
            View Projects
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
