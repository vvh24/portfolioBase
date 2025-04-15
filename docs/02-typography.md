Typography System: The Everyman AI Consultancy
(Dr. Evelyn Reed's Strategic Recommendations)

Psychological Foundation
Our typography system is engineered for clarity, warmth, and approachability. It leverages reading behavior patterns to deliver unfiltered clarity while embodying the approachable energy of the Everyman archetype. Each choice optimizes processing while reinforcing our core identity.
(Dr. Reed's Note: Clarity and warmth are the Everyman's tools – they invite connection and understanding.)

Primary Typeface (Body & UI): Inter (or Open Sans, Nunito)
Chosen for its exceptional clarity and neutral baseline, Inter serves as the vehicle for approachable truth in body copy and functional UI elements. Its neutrality allows the message to resonate universally.
- Low cognitive load: Ensures ideas are easily processed.
- High recognition speed: Directness and efficiency.
- Cultural adaptability: Approachability is universal.
- Strong cross-device rendering: Consistency across platforms.

```css
body {
  font-family: 'Inter', 'Open Sans', Arial, sans-serif;
}
```

Secondary / Display Typeface (Headlines & Accent): Rounded, friendly sans-serif
To inject the Everyman personality. Rounded sans-serif fonts evoke warmth, familiarity, and a rejection of overly stylized or aggressive typefaces. This font provides:
- Friendly Contrast: Breaks from the expected corporate sharpness.
- Approachability: Signals inclusivity without pretense.
- Familiar Edge: Visually represents the 'common path'.

Type Scale
The scale provides structure, but its application creates the Everyman dynamic. We retain a functional scale but encourage comfortable contrast between levels.

```css
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],      // Utility, fine print
  'sm': ['0.875rem', { lineHeight: '1.25rem' }], // Supporting context
  'base': ['1rem', { lineHeight: '1.625' }],     // BODY - Slightly looser leading for readability
  'lg': ['1.125rem', { lineHeight: '1.75rem' }], // Sub-headings
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],  // Sub-headings
  '2xl': ['1.5rem', { lineHeight: '2rem' }],     // Key statements, minor headlines
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // Headlines
  '4xl': ['2.5rem', { lineHeight: '2.75rem' }],  // IMPACT Headlines - Increased jump
  '5xl': ['3.25rem', { lineHeight: '1' }],       // MAJOR Impact
  '6xl': ['4rem', { lineHeight: '1' }],          // Statements
  '7xl': ['5rem', { lineHeight: '1' }],
  '8xl': ['6rem', { lineHeight: '1' }],
  '9xl': ['8rem', { lineHeight: '1' }],
}
```

Psychological Hierarchy (Everyman Application)
Structured for clarity and connection.

Headlines (Connection Layer)
- Font: Rounded, friendly sans-serif
- Weight: 500 (Medium) to 700 (Bold) - Strong, not overly heavy unless intentional.
- Sizes: 3xl-7xl+ (Use larger sizes for stronger statements)
- Tracking: Normal (tracking-normal) - Creates comfort and readability.
- Case: Sentence case primarily; Uppercase for highly intentional, short, impactful statements ONLY.
- Purpose: Invite understanding, set a relatable context.

Body Text (Clarity Layer)
- Font: Inter (or Open Sans, Nunito)
- Weight: 400 (Regular); 500 (Medium) for emphasis within text.
- Size: base (1rem/16px)
- Line Height: 1.625 (leading-relaxed) - Slightly more open than default for better processing of ideas.
- Purpose: Deliver clear and relatable information with maximum readability and credibility.

Supporting Text (Detail Layer)
- Font: Inter (or Open Sans, Nunito)
- Weight: 400 (Regular)
- Size: sm (0.875rem)
- Color: Use muted colors (text-muted-foreground or similar)
- Purpose: Provide essential context, citations, or secondary information without distracting from the core message.

Responsive Behavior
Ensure clarity and connection are maintained across all devices. Scale headline impact appropriately for smaller screens while preserving body text legibility.

Implementation Guidelines
Next.js / Tailwind / Shadcn Setup
Install Fonts:
```bash
npm install @fontsource/inter @fontsource/open-sans @fontsource/nunito
```

Import in app/layout.tsx:
```typescript
import '@fontsource/inter/variable.css'
import '@fontsource/open-sans'
import '@fontsource/nunito'
```

Configure tailwind.config.js:
```javascript
const defaultTheme = require('tailwindcss/defaultTheme')
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', '"Open Sans"', '"Nunito"', ...fontFamily.sans],
      },
    },
  },
}
```

CSS Custom Properties
Define core typography variables reflecting the Everyman system:
```css
:root {
  --font-sans: 'Inter var', 'Open Sans', 'Nunito', system-ui, sans-serif;
  --line-height-body: 1.625;
}

body {
  @apply font-sans; /* Apply base font to body */
}
```

Psychological Testing Protocol (Everyman Focus)
Validate against:
- Clarity & Comprehension: Can the message be understood?
- Perceived Warmth/Connection: Does it feel approachable and inclusive?
- Authenticity/Honesty Rating: Does it seem relatable and trustworthy?
- Brand Archetype Alignment: Does the typography feel like an Everyman?
- Memorability & Impact: Does it invite connection and understanding?

Accessibility Considerations (Everyman Framing)
Accessibility as Connection: Ensure WCAG 2.1 AAA compliance not just as a requirement, but as an act of democratizing access to information, challenging exclusionary design norms.
- Clarity for All: Ideas must be accessible; ensure contrast ratios (minimum 4.5:1 for body) and scalability (200%+) are rigorously met.

Research References
(Dr. Reed's Note: While standard cognitive research supports clarity, the application for Everyman effect draws from archetypal theory and analysis of inclusive brand aesthetics.)
- "Typography and Cognitive Load" - Journal of Digital Psychology, 2024 (Supports baseline clarity)
- "Cross-Cultural Typography Perception" - International Design Research Quarterly (Informs adaptability)
- "Reading Patterns in Digital Interfaces" - Human-Computer Interaction Studies (Supports hierarchy/layout)
- Mark, M. & Pearson, C.S. (2001). The Hero and the Outlaw. (Archetypal framework)
- Analysis of Inclusive Brand Visual Languages (Internal or Cited Research)

This revised system maintains the crucial foundation of legibility while deliberately infusing the typography with the warmth, clarity, and approachable nature of the Everyman. It uses type not just to inform, but to connect and invite understanding. Remember, the Everyman leads by fostering connection, and your typography must reflect that inclusive stance.