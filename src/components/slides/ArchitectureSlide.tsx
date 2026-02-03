'use client'

import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

const dataSources = [
  'data.gouv MCP',
  'Légifrance',
  'service-public',
  'CNIL',
  'Conseil constit.',
  'travail-emploi',
  'annuaires admin',
]

const principles = [
  'Mandatory sourcing: every response traceable to official text',
  'Real-time sync with legal updates',
  'Sovereign hosting (SecNumCloud)',
  'Open source',
]

export default function ArchitectureSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-12 max-w-6xl mx-auto">
      <AnimatedText delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-10">
          Architecture
        </h2>
      </AnimatedText>

      {/* Diagram */}
      <div className="flex flex-col items-center gap-4 mb-8">
        {/* Client */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="px-8 py-3 bg-delacroix-brown/40 border border-delacroix-gold/30 rounded-lg text-delacroix-cream text-center"
        >
          Claude / Cursor / Any MCP Client
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="text-delacroix-gold/40 text-2xl"
        >
          &darr;
        </motion.div>

        {/* Gateway */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="px-10 py-4 bg-gradient-to-r from-tricolor-blue/20 via-delacroix-brown/60 to-tricolor-red/20 border-2 border-delacroix-gold rounded-xl text-xl font-bold text-delacroix-gold text-center"
        >
          MCP Gateway
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.1 }}
          className="text-delacroix-gold/40 text-2xl"
        >
          &darr;
        </motion.div>

        {/* Data sources grid */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
          {dataSources.map((source, i) => (
            <motion.div
              key={source}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.3 + i * 0.08 }}
              className="px-4 py-2 bg-delacroix-brown/30 border border-delacroix-brown/50 rounded text-sm text-delacroix-cream/80"
            >
              {source}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Principles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-delacroix-cream/50"
      >
        {principles.map((p) => (
          <span key={p} className="flex items-center gap-2">
            <span className="text-delacroix-gold">&#9679;</span> {p}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
