# Task 8: Newsletter & Volunteer Section Developer

## Summary
Created NewsletterSection and VolunteerSection components for the SANCA Pretoria website and integrated them into page.tsx.

## Work Completed
1. **NewsletterSection.tsx** (`/home/z/my-project/src/components/sanca/NewsletterSection.tsx`)
   - Dark green gradient background with diamond pattern overlay
   - Animated heading with gold gradient accent
   - Email signup form with glow-focus input and btn-ripple subscribe button
   - Privacy note and stats row (2,500+ subscribers, Monthly updates, No spam)
   - Decorative right-side element with rotating rings and floating dots
   - Full Framer Motion whileInView animations, mobile responsive

2. **VolunteerSection.tsx** (`/home/z/my-project/src/components/sanca/VolunteerSection.tsx`)
   - White background with cream accent orbs
   - Two side-by-side cards (Volunteer + Donate) that stack on mobile
   - Volunteer card: green gradient border, HeartHandshake icon, 3 bullet points, outline CTA
   - Donate card: gold gradient border, Heart icon, 3 impact cards (R250/R500/R1000), gold CTA
   - hover-lift on cards, staggered whileInView animations

3. **page.tsx** updated with imports and correct ordering:
   - TestimonialsSection → VolunteerSection → NewsletterSection → EmergencyCTA

## Verification
- ESLint: zero errors
- Dev server: compiling and rendering with 200 status codes
