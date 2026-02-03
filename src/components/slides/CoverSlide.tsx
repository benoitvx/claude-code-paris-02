'use client'

import { motion } from 'framer-motion'
import { BASE_PATH } from '@/lib/constants'

export default function CoverSlide() {
  return (
    <div className="relative w-full h-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BASE_PATH}/images/delacroix.jpg)` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-delacroix-dark/90 via-delacroix-dark/50 to-delacroix-dark/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-display font-bold text-delacroix-cream mb-6 drop-shadow-2xl"
        >
          MCP Leading the AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-delacroix-gold/80 mb-8"
        >
          Connecting Claude &amp; co to French Public Data
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-base text-delacroix-cream/60"
        >
          <p>Benoit Vinceneux</p>
          <p className="text-sm mt-1">CPO Data &amp; MCP — French Prime Minister&apos;s Digital Office</p>
        </motion.div>
      </div>
    </div>
  )
}
