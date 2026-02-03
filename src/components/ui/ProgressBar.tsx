'use client'

import { motion } from 'framer-motion'
import { TOTAL_SLIDES } from '@/lib/constants'

interface ProgressBarProps {
  currentSlide: number
}

export default function ProgressBar({ currentSlide }: ProgressBarProps) {
  const progress = ((currentSlide + 1) / TOTAL_SLIDES) * 100

  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 bg-delacroix-brown/30 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-tricolor-blue via-tricolor-white to-tricolor-red"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </div>
  )
}
