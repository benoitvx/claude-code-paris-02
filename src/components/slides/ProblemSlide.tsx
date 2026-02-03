'use client'

import AnimatedText from '@/components/ui/AnimatedText'

export default function ProblemSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-16 max-w-5xl mx-auto">
      <AnimatedText delay={0.1}>
        <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-12">
          LLMs <span className="text-tricolor-red">Hallucinate</span> on Public Data
        </h2>
      </AnimatedText>

      <div className="space-y-8 text-xl md:text-2xl text-delacroix-cream/70 text-center">
        <AnimatedText delay={0.4}>
          <p className="italic border-l-4 border-delacroix-gold/40 pl-6 text-left">
            Ask an LLM about a French administrative procedure
            <br />
            <span className="text-delacroix-cream/40">&rarr; you get outdated information.</span>
          </p>
        </AnimatedText>

        <AnimatedText delay={0.7}>
          <p className="italic border-l-4 border-delacroix-gold/40 pl-6 text-left">
            Ask about a law
            <br />
            <span className="text-delacroix-cream/40">&rarr; it might have been amended 6 months ago.</span>
          </p>
        </AnimatedText>

        <AnimatedText delay={1.0}>
          <p className="text-lg text-delacroix-gold mt-8">
            Same problem Context7 solved for technical docs, but for government data.
          </p>
        </AnimatedText>

        <AnimatedText delay={1.2}>
          <p className="text-base text-delacroix-cream/50 mt-4">
            The stakes are higher: wrong legal information can have real consequences for citizens.
          </p>
        </AnimatedText>
      </div>
    </div>
  )
}
