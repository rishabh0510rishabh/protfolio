'use client'
 
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card-premium p-12 rounded-3xl max-w-lg w-full text-center space-y-8"
      >
        <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">⚠️</span>
        </div>
        <h2 className="text-3xl font-black text-white">Something went wrong!</h2>
        <p className="text-slate-400">
          An unexpected error occurred. We apologize for the inconvenience.
          Our team has been notified.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#4F9CF9] text-[#0B0F19] font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-[#4F9CF9]/20"
          >
            <RefreshCw size={18} />
            Try again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 glass-card rounded-xl font-bold hover:border-slate-500 transition-all"
          >
            <Home size={18} />
            Go Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
