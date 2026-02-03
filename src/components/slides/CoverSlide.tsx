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
          MCP Leading the People
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-delacroix-gold/80 mb-8"
        >
          My take on how to connect Claude &amp; co to French Public Data
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center gap-4 text-base text-delacroix-cream/60"
        >
          <img
            src={`${BASE_PATH}/images/benoitvinceneux.png`}
            alt="Benoit Vinceneux"
            className="w-12 h-12 rounded-full object-cover border-2 border-delacroix-gold/30"
          />
          <div className="text-left">
            <p>Benoit Vinceneux &middot; <a
              href="https://www.linkedin.com/in/benoitvinceneux/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-delacroix-gold hover:text-delacroix-cream transition-colors underline underline-offset-2"
            >LinkedIn</a></p>
            <p className="text-sm mt-0.5">CPO Data &amp; MCP — French Prime Minister&apos;s Digital Office</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
