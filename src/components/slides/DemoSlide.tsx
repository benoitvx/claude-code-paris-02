'use client'

import { motion } from 'framer-motion'
import { BASE_PATH } from '@/lib/constants'

export default function DemoSlide() {
  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center">
      <motion.video
        src={`${BASE_PATH}/images/demo-dvf.mp4`}
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
