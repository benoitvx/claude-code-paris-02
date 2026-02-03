'use client'

import { motion } from 'framer-motion'
import { BASE_PATH } from '@/lib/constants'

export default function OneMoreThingSlide() {
  return (
    <div className="relative w-full h-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Macron background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src={`${BASE_PATH}/images/macron.jpeg`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-12 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-8"
        >
          There are amazing things to build on public data.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-3xl md:text-5xl font-display font-bold text-delacroix-gold leading-tight mb-12"
        >
          We&apos;re giving you the tools to do it.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.0 }}
          className="text-5xl md:text-7xl font-display font-bold italic text-white drop-shadow-2xl"
        >
          For sure.
        </motion.p>
      </div>
    </div>
  )
}
