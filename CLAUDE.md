# Claude Code Paris 02

Interactive presentation for "MCP Leading the AI" talk at Claude Code Paris meetup.

## Project Overview

A Next.js 14 presentation app showcasing France's MCP Gateway for public data. Visual style inspired by Delacroix's "Liberty Leading the People" painting.

**Repo:** `claude-code-paris-02`
**Deploy URL:** `https://benoitvx.github.io/claude-code-paris-02/`

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Static export for GitHub Pages

## Key Requirements

### Visual Design
- Cover slide uses Delacroix painting as background with "MCP Leading the AI" title overlay
- Dark, dramatic color palette inspired by the painting (warm tones, smoke effects)
- French tricolor accents (subtle)
- Bold typography, impactful visuals
- "One More Thing" slide features Steve Jobs silhouette
- **Animations: subtle and professional** (not flashy)
- **Transitions: smooth (500ms duration)**

### Layout Constraints
- **NO SCROLL on any slide** — each slide must fit 100vh × 100vw
- Content must be designed for viewport-fit (typical projector: 1920×1080)
- Use responsive sizing but prioritize 16:9 aspect ratio
- If content is too long, split into multiple slides or reduce

### Navigation
- Keyboard arrows (← →) for navigation
- Swipe support on mobile
- Progress indicator
- Fullscreen mode (F key)
- **No presenter mode needed** — single screen mirroring

### Slides Structure
1. Cover - Delacroix background + title reveal animation
2. The Problem - "LLMs Hallucinate on Public Data"
3. Building Blocks - Animated table (data sources)
4. Architecture - Progressive diagram build
5. Use Cases - Cards with examples
6. The Opportunity - Checklist with status
7. One More Thing - Steve Jobs + DVF Demo teaser

### Deployment
- GitHub Pages via GitHub Actions
- Static export (`output: 'export'`)
- Base path configuration for GitHub Pages

## File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Presentation.tsx
│   ├── Slide.tsx
│   ├── slides/
│   │   ├── CoverSlide.tsx
│   │   ├── ProblemSlide.tsx
│   │   ├── BuildingBlocksSlide.tsx
│   │   ├── ArchitectureSlide.tsx
│   │   ├── UseCasesSlide.tsx
│   │   ├── OpportunitySlide.tsx
│   │   └── OneMoreThingSlide.tsx
│   └── ui/
│       ├── AnimatedText.tsx
│       ├── ProgressBar.tsx
│       └── Navigation.tsx
├── hooks/
│   └── useKeyboardNavigation.ts
└── lib/
    └── constants.ts
public/
└── images/           # All media assets go here
    ├── delacroix.jpg # ✅ Already added
    └── steve-jobs.png # TODO: add silhouette
content/
└── slides.md         # Source content for slides
```

## GitHub Pages Config

```js
// next.config.js
const nextConfig = {
  output: 'export',
  basePath: '/claude-code-paris-02',
  images: { unoptimized: true },
}
```

## Commands

```bash
npm run dev      # Development
npm run build    # Build for production
npm run export   # Static export
```

## Conventions

- Commits: emoji + description concise
- Components: PascalCase
- Animations: use Framer Motion variants
- All content in English

## Content Source

Presentation content is in `/content/slides.md` (extracted from project files).

## Notes

- Image assets need to be added to public/images/
- Test on mobile for swipe navigation
- Ensure animations are performant
