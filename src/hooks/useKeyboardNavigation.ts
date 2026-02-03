'use client'

import { useEffect, useCallback } from 'react'
import { TOTAL_SLIDES } from '@/lib/constants'

export function useKeyboardNavigation(
  currentSlide: number,
  setCurrentSlide: (slide: number | ((prev: number) => number)) => void
) {
  const goNext = useCallback(() => {
    setCurrentSlide((prev: number) => Math.min(prev + 1, TOTAL_SLIDES - 1))
  }, [setCurrentSlide])

  const goPrev = useCallback(() => {
    setCurrentSlide((prev: number) => Math.max(prev - 1, 0))
  }, [setCurrentSlide])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault()
          goNext()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          goPrev()
          break
        case 'f':
        case 'F':
          e.preventDefault()
          toggleFullscreen()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev, toggleFullscreen])

  // Swipe support
  useEffect(() => {
    let touchStartX = 0
    let touchStartY = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY
      const dx = touchEndX - touchStartX
      const dy = touchEndY - touchStartY

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) goNext()
        else goPrev()
      }
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goNext, goPrev])

  return { goNext, goPrev, toggleFullscreen }
}
