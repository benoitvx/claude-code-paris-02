'use client'

import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

export default function OpportunitySlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-12 max-w-5xl mx-auto">
      <AnimatedText delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-3">
          The Opportunity
        </h2>
        <p className="text-lg text-delacroix-cream/60 text-center mb-10">
          First EU Country with Native MCP for Public Data
        </p>
      </AnimatedText>

      <div className="space-y-4 w-full max-w-3xl mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-start gap-4 text-lg"
        >
          <span className="mt-1 text-xl text-green-400">&#10003;</span>
          <span className="text-delacroix-cream/80">Sovereign inference operational: Albert API</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex items-start gap-4 text-lg"
        >
          <span className="mt-1 text-xl text-green-400">&#10003;</span>
          <span className="text-delacroix-cream/80">
            Vectorized datasets available on{' '}
            <a
              href="https://huggingface.co/AgentPublic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-delacroix-gold hover:text-delacroix-cream transition-colors underline underline-offset-2"
            >
              Hugging Face
            </a>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex items-start gap-4 text-lg"
        >
          <span className="mt-1 text-xl text-green-400">&#10003;</span>
          <span className="text-delacroix-cream/80">
            MCP data.gouv : ready &rarr;{' '}
            <span className="text-delacroix-gold font-mono text-base">mcp.data.gouv.fr/mcp</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.75 }}
          className="flex items-start gap-4 text-lg"
        >
          <span className="mt-1 text-xl text-delacroix-gold">&#9874;</span>
          <span className="text-delacroix-cream/80">Légifrance integration: in discussion</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="flex items-start gap-4 text-lg"
        >
          <span className="mt-1 text-xl text-delacroix-gold">&#9874;</span>
          <span className="text-delacroix-cream/80">Gateway architecture: designed</span>
        </motion.div>
      </div>

      <AnimatedText delay={1.2}>
        <p className="text-xl text-delacroix-gold font-display text-center">
          You see use cases for public data? Let&apos;s talk.
        </p>
      </AnimatedText>
    </div>
  )
}
