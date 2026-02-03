'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { SLIDE_TRANSITION } from '@/lib/constants'

interface SlideProps {
  children: ReactNode
  isActive: boolean
  className?: string
}

export default function Slide({ children, isActive, className = '' }: SlideProps) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={SLIDE_TRANSITION}
          className={`absolute inset-0 w-screen h-screen overflow-hidden flex items-center justify-center ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
