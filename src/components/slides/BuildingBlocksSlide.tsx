'use client'

import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

const sources = [
  { name: 'data.gouv.fr', content: '50k+ open datasets', ready: true },
  { name: 'Légifrance', content: 'All French laws & regulations', ready: false },
  { name: 'service-public.fr', content: 'Administrative procedures', ready: false },
  { name: 'CNIL', content: 'Data protection guidelines', ready: false },
  { name: 'Conseil constitutionnel', content: 'Constitutional case law', ready: false },
  { name: 'Travail-emploi', content: 'Labor law & employment', ready: false },
  { name: 'Administration directories', content: 'State & local admin contacts', ready: false },
]

export default function BuildingBlocksSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-12 max-w-6xl mx-auto">
      <AnimatedText delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Building Blocks
        </h2>
        <p className="text-lg text-delacroix-cream/60 text-center mb-8">
          Tabular Data: Solved. Unstructured Data: Not Yet.
        </p>
      </AnimatedText>

      <div className="w-full overflow-hidden rounded-lg border border-delacroix-brown/50">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-delacroix-brown/50 text-delacroix-gold text-sm uppercase tracking-wider">
              <th className="px-6 py-3">Source</th>
              <th className="px-6 py-3">Content</th>
              <th className="px-6 py-3 text-center">LLM-ready?</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((source, i) => (
              <motion.tr
                key={source.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                className="border-b border-delacroix-brown/20 text-sm md:text-base"
              >
                <td className="px-6 py-2.5 font-medium text-delacroix-cream">{source.name}</td>
                <td className="px-6 py-2.5 text-delacroix-cream/60">{source.content}</td>
                <td className="px-6 py-2.5 text-center text-lg">
                  {source.ready ? (
                    <span className="text-green-400">&#10003; MCP</span>
                  ) : (
                    <span className="text-red-400/60">&#10007;</span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatedText delay={1.2} className="mt-6 text-center">
        <p className="text-sm text-delacroix-gold/80">
          Good news: We&apos;ve started vectorizing these sources on Hugging Face &rarr; MediaTech (9 datasets, 1.5M+ documents)
        </p>
      </AnimatedText>
    </div>
  )
}
