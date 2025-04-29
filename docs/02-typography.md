Typography System: The Creator Personal Portfolio
(Portfolio Website Implementation Guide)

Psychological Foundation
Our typography system embodies the Creator archetype—innovative, expressive, and visionary. It balances artistic distinctiveness with professional clarity to showcase technical skills while inspiring creativity. Each typographic choice reinforces the portfolio's focus on transformation and originality.

Primary Typeface (Body & UI): Outfit (or Work Sans, Monserrat)
Chosen for its modern character with creative flair while maintaining excellent readability across devices and contexts.

- Balance of creativity and professionalism
- Clear legibility for technical content
- Distinctive character that stands out from standard portfolios
- Consistent rendering across all platforms

```css
body {
  font-family: 'Outfit', 'Work Sans', 'Montserrat', system-ui, sans-serif;
}
```

Secondary / Display Typeface (Headlines & Accent): Manrope, (or Space Grotesk)
To inject creative personality and distinction without sacrificing professionalism:

- Creative distinction: Sets apart from typical developer portfolios
- Innovation signaling: Contemporary feel aligned with tech innovation
- Visual impact: Creates memorable impressions for portfolio visitors

Type Scale
A balanced scale that allows for creative expression while maintaining clear hierarchy for portfolio navigation and content comprehension:

```css
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],      // UI elements, metadata
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // Supporting text, captions
  'base': ['1rem', { lineHeight: '1.6' }],        // BODY - Primary content
  'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // Featured content, project descriptions
  'xl': ['1.375rem', { lineHeight: '1.75rem' }],  // Section introductions
  '2xl': ['1.625rem', { lineHeight: '2rem' }],    // Page titles, section headers
  '3xl': ['2rem', { lineHeight: '2.25rem' }],     // Project titles, major section headers
  '4xl': ['2.75rem', { lineHeight: '1.2' }],      // Landing page statements
  '5xl': ['3.25rem', { lineHeight: '1.1' }],      // Hero headlines
  '6xl': ['4rem', { lineHeight: '1.1' }],         // Primary hero statement
  '7xl': ['5rem', { lineHeight: '1' }],           // Major impact headlines
}
```

Typographic Hierarchy (Creator Implementation)
Headlines (Inspiration Layer)

- Font: Manrope (or Space Grotesk)
- Weight: 500 (Medium) to 700 (Bold) - Creative without being excessive
- Sizes: 3xl-7xl (larger sizes for landing page impact)
- Tracking: Slightly tighter (tracking-tight) for headlines - Creates distinctive character
- Case: Mixed approach; primarily sentence case with strategic use of ALL CAPS for emphasis
- Purpose: Capture attention, inspire creative interest, establish portfolio identity

Body Text (Expression Layer)

- Font: Outfit (or Work Sans, Montserrat)
- Weight: 400 (Regular); 600 (SemiBold) for emphasis within project descriptions
- Size: base (1rem/16px) for general content, lg (1.125rem) for featured project descriptions
- Line Height: 1.6 (leading-relaxed) - Balanced for technical readability and creative breathing room
- Purpose: Communicate technical capabilities and creative approach with clarity and personality

Supporting Text (Detail Layer)
- Font: Inter (or Open Sans, Nunito)
- Weight: 400 (Regular)
- Size: sm (0.875rem)
- Color: Use muted colors (text-muted-foreground or similar)
- Purpose: Provide essential context, citations, or secondary information without distracting from the core message.

Portfolio-Specific Applications
Landing Page

- Hero Headline: 6xl/7xl, high-impact statement of creative positioning
- Subheading: 3xl/4xl, clear articulation of technical specialization
- Navigation: lg/xl, distinctive treatment with creative hover states

Projects Section

- Project Titles: 3xl, emphasize
creative nature of each project
- Project Descriptions: base/lg, balance technical detail with creative narrative
- Technical Stack Labels: sm, clean presentation of technologies used

About Section

- Section Header: 4xl, creative presentation of your identity
- Personal Story: base/lg, engaging narrative of your creative journey
- Skills/Capabilities: Visually interesting presentation using typographic hierarchy

Implementation Guidelines
Next.js / Tailwind / Shadcn Setup
Install Fonts:
```bash
npm install @fontsource/outfit @fontsource/manrope
```

Import in app/layout.tsx:
```typescript
import '@fontsource/outfit/variable.css'
import '@fontsource/manrope/variable.css'
```

Configure tailwind.config.js:
```javascript
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit Variable"', ...fontFamily.sans],
        display: ['"Manrope Variable"', ...fontFamily.sans],
      },
      fontSize: {
        // Copy the fontSize configuration from above
      }
    },
  },
}
```

CSS Custom Properties
Define core typography variables reflecting the Everyman system:
```css
:root {
  --font-sans: 'Outfit Variable', system-ui, sans-serif;
  --font-display: 'Manrope Variable', system-ui, sans-serif;
  --line-height-body: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
}

body {
  font-family: var(--font-sans);
  line-height: var(--line-height-body);
}
```

Component Examples
Hero Section (Landing Page)
```tsx
<section className="min-h-screen flex flex-col justify-center">
  <h1 className="font-display font-bold text-6xl md:text-7xl tracking-tight leading-tight mb-6">
    Transforming ideas into digital experiences
  </h1>
  <p className="text-xl md:text-2xl max-w-2xl">
    I build innovative AI solutions and data visualizations that bring creative visions to life.
  </p>
  <div className="mt-12">
    <Button size="lg" className="mr-4">View My Work</Button>
    <Button variant="outline" size="lg">Contact Me</Button>
  </div>
</section>
```
Project Card
```tsx
<Card className="overflow-hidden">
  <CardHeader>
    <CardTitle className="font-display text-3xl tracking-tight">Project Title</CardTitle>
    <CardDescription className="text-lg">Brief project description highlighting creative approach</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="mb-4">
      <img src="/project-image.jpg" alt="Project preview" className="rounded-lg" />
    </div>
    <p className="mb-4">Detailed description of the project showcasing both technical skills and creative thinking.</p>
    <div className="flex flex-wrap gap-2">
      <Badge>React</Badge>
      <Badge>Next.js</Badge>
      <Badge>AI Integration</Badge>
    </div>
  </CardContent>
  <CardFooter>
    <Button>View Project</Button>
  </CardFooter>
</Card>
```
Responsive Considerations

- Maintain creative impact while ensuring legibility across all devices
- Reduce headline sizes proportionally on smaller screens while preserving style
- Increase touch targets for mobile navigation
- Preserve distinctive typographic character at all breakpoints