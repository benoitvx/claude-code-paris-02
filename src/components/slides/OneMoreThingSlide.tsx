'use client'

import { motion } from 'framer-motion'
import { BASE_PATH } from '@/lib/constants'

export default function OneMoreThingSlide() {
  return (
    <div className="relative w-full h-full bg-black flex flex-col items-center justify-center">
      {/* Presenter silhouette */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 flex items-end justify-center"
      >
        <img
          src={`${BASE_PATH}/images/presenter-silhouette.svg`}
          alt=""
          className="h-[70%] object-contain opacity-50"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl text-white/40 mb-6 font-display italic"
        >
          One more thing...
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-8"
        >
          Live Demo
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="space-y-3"
        >
          <p className="text-xl text-delacroix-gold">
            MCP App on Real Estate Data
          </p>
          <p className="text-base text-white/50">
            DVF (Demandes de Valeurs Foncières) — France&apos;s open real estate transaction database
          </p>
          <p className="text-sm text-white/30 mt-6">
            Every property sale in France since 2019 &bull; Query via MCP + interactive map
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          className="text-lg text-delacroix-gold/60 mt-12 font-display italic"
        >
          This is what public data + MCP can look like.
        </motion.p>
      </div>
    </div>
  )
}
