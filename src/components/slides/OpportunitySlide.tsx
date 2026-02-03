'use client'

import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

const status = [
  { label: 'Sovereign inference operational: Albert API', done: true },
  { label: 'Vectorized datasets available: MediaTech on Hugging Face', done: true },
  { label: 'data.gouv MCP: in production', done: true },
  { label: 'Légifrance integration: in discussion', done: false },
  { label: 'Gateway architecture: designed', done: false },
]

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

      <div className="space-y-4 w-full max-w-2xl mb-10">
        {status.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
            className="flex items-start gap-4 text-lg"
          >
            <span className={`mt-1 text-xl ${item.done ? 'text-green-400' : 'text-delacroix-gold'}`}>
              {item.done ? '✓' : '⚒'}
            </span>
            <span className="text-delacroix-cream/80">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <AnimatedText delay={1.2}>
        <div className="text-center">
          <p className="text-sm text-delacroix-cream/40 mb-3">What we&apos;re building: Open source MCP Gateway, connected to France&apos;s sovereign AI infrastructure</p>
          <p className="text-xl text-delacroix-gold font-display">
            You see use cases for public data? Let&apos;s talk.
          </p>
        </div>
      </AnimatedText>
    </div>
  )
}
