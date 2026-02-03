'use client'

import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

const useCases = [
  { tool: 'Claude Code / Cursor', description: 'French legal context while coding' },
  { tool: 'Claude Desktop', description: 'Administrative procedures' },
  { tool: 'Custom agents', description: 'Legal research, policy monitoring' },
  { tool: 'Chatbots', description: 'Public service assistants' },
]

export default function UseCasesSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-12 max-w-6xl mx-auto">
      <AnimatedText delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-3">
          Use Cases
        </h2>
        <p className="text-lg text-delacroix-cream/60 text-center mb-8">
          MCP Gateway works with any MCP-compatible client
        </p>
      </AnimatedText>

      {/* Example - hero block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-delacroix-dark/80 border-2 border-delacroix-gold/30 rounded-xl p-8 max-w-3xl w-full mb-8"
      >
        <p className="text-xl md:text-2xl text-delacroix-gold font-display font-bold mb-6 text-center">
          &ldquo;What are the rules to create a non-profit association in France?&rdquo;
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-delacroix-cream/70">
          <div className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">&#10003;</span>
            <span>Step-by-step procedure<br /><span className="text-delacroix-cream/40">from service-public.fr</span></span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">&#10003;</span>
            <span>Legal basis: Loi 1901, Art. 2<br /><span className="text-delacroix-cream/40">from Légifrance</span></span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">&#10003;</span>
            <span>Last updated: January 2026</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">&#10003;</span>
            <span>Direct links to official sources</span>
          </div>
        </div>
      </motion.div>

      {/* Use cases - compact row */}
      <div className="flex flex-wrap justify-center gap-3">
        {useCases.map((uc, i) => (
          <motion.div
            key={uc.tool}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.0 + i * 0.1 }}
            className="px-4 py-2 bg-delacroix-brown/20 border border-delacroix-brown/40 rounded text-sm text-delacroix-cream/50"
          >
            <span className="text-delacroix-cream/70 font-medium">{uc.tool}</span>
            <span className="mx-2 text-delacroix-brown">&middot;</span>
            {uc.description}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
