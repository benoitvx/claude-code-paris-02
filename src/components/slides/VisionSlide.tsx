'use client'

import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

export default function VisionSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-12 max-w-6xl mx-auto">
      <AnimatedText delay={0.1}>
        <h2 className="text-5xl md:text-7xl font-display font-bold text-center mb-14">
          From <span className="text-tricolor-red">hallucination</span> to <span className="text-green-400">citation</span>.
        </h2>
      </AnimatedText>

      {/* Before / After */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl mb-12">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-red-950/20 border border-red-400/20 rounded-xl p-6"
        >
          <p className="text-sm uppercase tracking-wider text-red-400/60 mb-4">Today</p>
          <p className="text-base text-delacroix-cream/70 italic mb-4">
            &ldquo;According to French law, you need 2 people to create an association...&rdquo;
          </p>
          <div className="flex items-center gap-2 text-red-400/60 text-sm">
            <span>&#10007;</span>
            <span>No source</span>
          </div>
          <div className="flex items-center gap-2 text-red-400/60 text-sm mt-1">
            <span>&#10007;</span>
            <span>Possibly outdated</span>
          </div>
          <div className="flex items-center gap-2 text-red-400/60 text-sm mt-1">
            <span>&#10007;</span>
            <span>No way to verify</span>
          </div>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-green-950/20 border border-green-400/20 rounded-xl p-6"
        >
          <p className="text-sm uppercase tracking-wider text-green-400/60 mb-4">With MCP Gateway</p>
          <p className="text-base text-delacroix-cream/70 italic mb-4">
            &ldquo;According to French law, you need 2 people to create an association...&rdquo;
          </p>
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <span>&#10003;</span>
            <span>Source: Légifrance, Loi 1901, Art. 2</span>
          </div>
          <div className="flex items-center gap-2 text-green-400 text-sm mt-1">
            <span>&#10003;</span>
            <span>Updated: January 2026</span>
          </div>
          <div className="flex items-center gap-2 text-green-400 text-sm mt-1">
            <span>&#10003;</span>
            <span>Direct link to official text</span>
          </div>
        </motion.div>
      </div>

      <AnimatedText delay={1.2}>
        <p className="text-lg text-delacroix-cream/50 text-center">
          We need a protocol to connect AI to authoritative public data.
        </p>
      </AnimatedText>
    </div>
  )
}
