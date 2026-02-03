'use client'

import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

const useCases = [
  {
    tool: 'Claude Code / Cursor',
    description: 'Developer needs French legal context while coding a compliance feature',
  },
  {
    tool: 'Claude Desktop',
    description: 'Citizen asks about administrative procedures',
  },
  {
    tool: 'Custom agents',
    description: 'Automated legal research, policy monitoring',
  },
  {
    tool: 'Chatbots',
    description: 'Public service assistants with authoritative sources',
  },
]

export default function UseCasesSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-12 max-w-6xl mx-auto">
      <AnimatedText delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-3">
          Use Cases
        </h2>
        <p className="text-lg text-delacroix-cream/60 text-center mb-10">
          MCP Gateway works with any MCP-compatible client
        </p>
      </AnimatedText>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-10">
        {useCases.map((uc, i) => (
          <motion.div
            key={uc.tool}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
            className="p-5 bg-delacroix-brown/20 border border-delacroix-brown/40 rounded-lg hover:border-delacroix-gold/30 transition-colors"
          >
            <h3 className="text-lg font-bold text-delacroix-gold mb-1">{uc.tool}</h3>
            <p className="text-sm text-delacroix-cream/60">{uc.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Example */}
      <AnimatedText delay={1.0}>
        <div className="bg-delacroix-dark/60 border border-delacroix-brown/40 rounded-lg p-5 max-w-3xl">
          <p className="text-sm text-delacroix-gold mb-3 font-medium">
            &ldquo;What are the rules to create a non-profit association in France?&rdquo;
          </p>
          <div className="text-xs text-delacroix-cream/50 space-y-1">
            <p>&bull; Step-by-step procedure (from service-public.fr)</p>
            <p>&bull; Legal basis: Loi 1901, Article 2 (from Légifrance)</p>
            <p>&bull; Last updated: January 2026</p>
            <p>&bull; Direct links to official sources</p>
          </div>
        </div>
      </AnimatedText>
    </div>
  )
}
