# Design Guidelines: Task Resistance Helper

## Design Approach
**Hybrid Approach**: Combine Headspace's calming, supportive aesthetic with Linear's clean typography and purposeful interactions. Focus on emotional safety and guided progression through the flow.

## Core Design Principles
- **Progressive Disclosure**: Reveal complexity gradually, one step at a time
- **Emotional Safety**: Soft edges, generous spacing, non-judgmental tone
- **Clear Direction**: Always show users where they are and what's next
- **Breathing Room**: Never overwhelm with too much at once

## Typography System
**Font Stack**: 
- Headings: Inter (600-700 weight) via Google Fonts
- Body: Inter (400-500 weight)

**Scale**:
- Hero/Landing H1: text-5xl md:text-6xl font-semibold
- Section Headings: text-3xl md:text-4xl font-semibold
- Questionnaire Questions: text-2xl md:text-3xl font-semibold
- Body Text: text-lg leading-relaxed
- Small Labels/Helper: text-sm

## Layout System
**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
**Container Strategy**:
- Landing page: Full-width sections with max-w-6xl inner containers
- Task input/Questionnaire: max-w-2xl centered cards
- Results page: max-w-4xl for comfortable reading

## Page-Specific Layouts

### Landing Page
**Hero Section** (min-h-[85vh]):
- Large hero image: Serene workspace or person in focused state (warm, natural lighting)
- Centered content overlay with backdrop blur
- H1 + supporting tagline + primary CTA
- Subtle scroll indicator

**How It Works** (3-step process):
- Three-column grid (lg:grid-cols-3, md:grid-cols-1)
- Icon + number + title + description per step
- Visual connectors between steps on desktop

**Trust Section**:
- Single column, centered text (max-w-3xl)
- Supportive messaging about emotional resistance being normal
- Secondary CTA to begin

### Task Input Screen
**Centered Card Layout**:
- Single card (max-w-2xl) with generous padding (p-8 md:p-12)
- Progress indicator at top (Step 1 of 4)
- Large text input (min-h-32) with placeholder guidance
- Floating label pattern for elegance
- Helper text below input with character count
- Primary button aligned right, secondary "Back to home" link left

### Questionnaire Flow
**Card-Based Progression**:
- One question per screen in centered card
- Progress bar at top showing completion (w-full h-2 rounded-full)
- Question text prominent at top
- Response options as large, tappable cards (min-h-16)
- Radio buttons styled as cards with border emphasis on selection
- Navigation: "Back" (text link) and "Next" (primary button) at bottom

**Question Card Pattern**:
```
[Progress: ████░░░░ 50%]

Question text here?

[○ Response option 1    ]
[○ Response option 2    ]
[○ Response option 3    ]
[○ Response option 4    ]

<Back           Next>
```

### Results Page
**Split Layout**:
- Top section: Diagnosis card (p-8, rounded-2xl, centered)
  - Icon/visual representing resistance type
  - H2 with diagnosis name
  - Paragraph explaining the pattern
  
- Guidance Section: 
  - Two-column grid (lg:grid-cols-2) for strategies
  - Each strategy as card with icon, title, and description
  
- Action Footer:
  - Primary CTA: "Start Another Task"
  - Secondary link: "Share This Insight"

## Component Library

### Buttons
**Primary**: Rounded-full, px-8 py-4, text-lg font-medium, shadow-lg
**Secondary**: Rounded-full, px-8 py-4, text-lg font-medium, border-2
**Text Links**: Underline on hover, font-medium

### Cards
- Rounded-2xl with shadow-sm
- Padding: p-6 to p-8 depending on content
- Hover: Subtle shadow lift (transition-shadow)
- Active/Selected: Border emphasis (border-2)

### Form Inputs
- Rounded-xl borders
- Padding: px-4 py-3
- Focus: Ring effect (ring-2 ring-offset-2)
- Floating labels for elegance

### Progress Indicators
- Linear bar: Full-width, rounded-full, height h-2
- Step indicators: Numbered circles with connecting lines

### Navigation
**Landing**: Minimal header with logo left, CTA button right (sticky)
**Flow Pages**: Breadcrumb-style progress, no full navigation (reduce distraction)

## Spacing & Rhythm
- Section vertical padding: py-20 md:py-24
- Card internal spacing: p-8 md:p-12
- Component gaps: gap-6 to gap-8
- Form field spacing: space-y-6

## Images

### Hero Image
**Location**: Landing page hero section, full-width background
**Description**: Wide shot of peaceful, organized workspace with natural light - desk with minimal items, plants, soft morning sunlight. Should feel calm and inviting, not sterile. Alternative: Person in comfortable setting, appearing focused but relaxed (side profile or from behind for privacy).
**Treatment**: Overlay with subtle gradient for text readability

### Results Page (optional visual)
**Description**: Abstract geometric shapes or soft illustrations representing different resistance types (can be generated icon set)

## Animation Philosophy
**Minimal and Purposeful**:
- Page transitions: Gentle fade (200ms)
- Card selection: Scale and shadow change (150ms)
- Progress bar: Smooth width transition (300ms)
- Button hover: Subtle scale (1.02) and shadow
**NO** scroll-triggered animations, parallax, or complex micro-interactions

## Accessibility
- Minimum touch target: 44x44px
- Focus states visible on all interactive elements
- Proper heading hierarchy (h1→h2→h3)
- ARIA labels for progress indicators
- Keyboard navigation support throughout flow

This creates a supportive, guided experience that reduces anxiety around task resistance while maintaining professional polish.