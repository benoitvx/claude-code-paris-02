# Backlog

## Animation Guidelines

- **Style:** Subtle and professional (not flashy)
- **Duration:** 500ms for transitions
- **Easing:** ease-out or ease-in-out
- **No scroll:** Each slide must fit viewport (100vh × 100vw)

## Phase 1: Setup ✅ → 🔨

- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Install Framer Motion
- [ ] Set up GitHub Actions for Pages deployment
- [ ] Configure next.config.js for static export + basePath `/claude-code-paris-02`
- [ ] Add global styles: overflow hidden, 100vh/100vw

## Phase 2: Core Components

- [ ] Create Presentation wrapper component
- [ ] Create Slide base component with transitions
- [ ] Implement useKeyboardNavigation hook (←→ arrows)
- [ ] Add swipe gesture support (mobile)
- [ ] Create ProgressBar component
- [ ] Add fullscreen toggle (F key)

## Phase 3: Slides

### Cover Slide
- [ ] Add Delacroix image as background
- [ ] Create title reveal animation ("MCP Leading the AI")
- [ ] Add subtitle with speaker info
- [ ] Smoke/fade overlay effect

### Problem Slide
- [ ] Dramatic text animation
- [ ] Highlight "hallucinate" with color
- [ ] Context7 comparison mention

### Building Blocks Slide
- [ ] Animated table (rows appear sequentially)
- [ ] ✅/❌ status indicators
- [ ] MediaTech dataset link

### Architecture Slide
- [ ] Progressive diagram build animation
- [ ] ASCII art → styled boxes
- [ ] Highlight "MCP Gateway" center

### Use Cases Slide
- [ ] Cards grid layout
- [ ] Hover effects
- [ ] Example query with response preview

### Opportunity Slide
- [ ] Animated checklist
- [ ] Status badges (✅ / 🔨)
- [ ] CTA: "Let's talk"

### One More Thing Slide
- [ ] Dark transition
- [ ] Steve Jobs silhouette reveal
- [ ] DVF demo teaser text
- [ ] Dramatic pause effect

## Phase 4: Polish

- [ ] Test all animations performance
- [ ] Mobile responsiveness
- [ ] Add presenter notes (optional)
- [ ] Optimize images
- [ ] Add meta tags / OG image

## Phase 5: Deploy

- [ ] Test GitHub Actions workflow
- [ ] Verify deployment URL works
- [ ] Test on multiple devices

---

## Assets Needed

- [x] Delacroix painting → `public/images/delacroix.jpg`
- [x] Presenter silhouette → `public/images/presenter-silhouette.svg` (keynote pose, SVG)

## Design Constraints

- Target resolution: 1920×1080 (16:9 projector)
- No scroll on any slide
- Text must be readable from back of room (large fonts)
- High contrast for projector visibility

## Ideas for Later

- [ ] Presenter mode with timer
- [ ] PDF export
- [ ] Interactive DVF demo embedded
- [ ] QR code slide for resources
