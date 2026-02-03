'use client'

import { TOTAL_SLIDES } from '@/lib/constants'

interface NavigationProps {
  currentSlide: number
  goNext: () => void
  goPrev: () => void
}

export default function Navigation({ currentSlide, goNext, goPrev }: NavigationProps) {
  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-3 z-50 text-sm text-delacroix-cream/50">
      <button
        onClick={goPrev}
        disabled={currentSlide === 0}
        className="disabled:opacity-20 hover:text-delacroix-cream transition-colors"
        aria-label="Previous slide"
      >
        &larr;
      </button>
      <span className="tabular-nums">
        {currentSlide + 1} / {TOTAL_SLIDES}
      </span>
      <button
        onClick={goNext}
        disabled={currentSlide === TOTAL_SLIDES - 1}
        className="disabled:opacity-20 hover:text-delacroix-cream transition-colors"
        aria-label="Next slide"
      >
        &rarr;
      </button>
    </div>
  )
}
