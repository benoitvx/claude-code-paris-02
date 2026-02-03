'use client'

import { useState } from 'react'
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation'
import Slide from './Slide'
import ProgressBar from './ui/ProgressBar'
import Navigation from './ui/Navigation'
import CoverSlide from './slides/CoverSlide'
import ProblemSlide from './slides/ProblemSlide'
import VisionSlide from './slides/VisionSlide'
import BuildingBlocksSlide from './slides/BuildingBlocksSlide'
import ArchitectureSlide from './slides/ArchitectureSlide'
import UseCasesSlide from './slides/UseCasesSlide'
import OpportunitySlide from './slides/OpportunitySlide'
import OneMoreThingSlide from './slides/OneMoreThingSlide'
import DemoSlide from './slides/DemoSlide'

const slides = [
  CoverSlide,
  ProblemSlide,
  VisionSlide,
  ArchitectureSlide,
  BuildingBlocksSlide,
  UseCasesSlide,
  OpportunitySlide,
  OneMoreThingSlide,
  DemoSlide,
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { goNext, goPrev } = useKeyboardNavigation(currentSlide, setCurrentSlide)

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-delacroix-dark">
      {slides.map((SlideComponent, index) => (
        <Slide key={index} isActive={currentSlide === index}>
          <SlideComponent />
        </Slide>
      ))}
      <ProgressBar currentSlide={currentSlide} />
      <Navigation currentSlide={currentSlide} goNext={goNext} goPrev={goPrev} />
    </div>
  )
}
