# Task 3-g: Integrate consultation-warm.png into ContactSection

## Summary
Successfully integrated the AI-generated consultation room image into the ContactSection component's right column, below the "Extra note card".

## Changes Made
- **File**: `/home/z/my-project/src/components/sanca/ContactSection.tsx`
- Added consultation-warm.png image block after the "Extra note card" in the right column

## Image Integration Details
- **Image path**: `/images/sanca/consultation-warm.png` (864x1152, portrait)
- **Container**: `group rounded-2xl overflow-hidden shadow-premium-md`
- **Gold accent line**: 2px gradient from-sanca-gold to-sanca-gold-light at top
- **Image styling**: `w-full h-48 sm:h-56 object-cover`
- **Hover effect**: `group-hover:scale-105` with `duration-700 ease-out`
- **Gradient overlay**: `from-sanca-green-dark/80 via-sanca-green-dark/40 to-transparent` at bottom
- **Text overlay**: "A safe space to share your story" — italic white serif with drop-shadow
- **Animation**: motion.div with whileInView fade-up (0.6s, 0.15s delay)
- **Uses `<img>` tag** (not Next.js Image)

## Verification
- Lint passes cleanly
- Dev server compiles and serves 200
- No existing functionality altered
