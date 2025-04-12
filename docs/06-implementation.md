# Implementation Guide

## Project Setup

### Next.js 14 Setup

```bash
# Initial setup
npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app
```

### Key Dependencies

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-tabs": "^1.0.4",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.292.0",
    "tailwind-merge": "^2.0.0",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

### Directory Structure

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # shadcn components
│   └── shared/       # reusable components
├── styles/
│   ├── globals.css
│   └── typography.css
└── lib/
    └── utils.ts      # utility functions
```

## Configuration Files

### Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Typography System (from 02-typography.md)
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      
      // Color System (from 03-color-system.md)
      colors: {
        primary: {
          // ...color values from color system
        },
        // ...other color definitions
      },

      // Spacing System (from 04-spacing-layout.md)
      spacing: {
        // ...spacing values
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

export default config
```

### Component Configuration

```typescript
// components.json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## Implementation Checklist

### 1. Typography Implementation

1. Install Inter font:
```typescript
// layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
```

2. Apply base typography styles:
```css
/* globals.css */
@layer base {
  :root {
    --font-sans: 'Inter var';
  }

  body {
    @apply text-base text-gray-900 leading-relaxed;
  }

  h1 {
    @apply text-4xl font-semibold tracking-tight lg:text-5xl;
  }
  /* ...other typography styles */
}
```

### 2. Color System Implementation

1. Define color variables:
```css
/* globals.css */
@layer base {
  :root {
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    /* ...other color variables */
  }
}
```

2. Create color utility classes:
```css
/* globals.css */
@layer utilities {
  .gradient-brand {
    @apply bg-gradient-to-r from-primary-600 to-primary-500;
  }
}
```

### 3. Component Implementation

#### Example Button Component
```typescript
// components/ui/button.tsx
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
        // ...other variants
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
```

## Testing Protocol

### 1. Visual Regression Testing
- Use tools like Chromatic or Percy
- Test across breakpoints
- Validate color contrast
- Check typography scaling

### 2. Accessibility Testing
- Automated testing with axe-core
- Manual keyboard navigation testing
- Screen reader compatibility
- Color contrast validation

### 3. Performance Testing
- Lighthouse metrics
- Core Web Vitals
- Bundle size analysis
- Runtime performance

### 4. Psychological Testing
- User interaction recording
- Heat map analysis
- Eye-tracking studies
- A/B testing key components

## Quality Assurance Checklist

### Typography
- [ ] Font loading optimization
- [ ] Responsive type scaling
- [ ] Line length constraints
- [ ] Proper hierarchy implementation

### Colors
- [ ] Contrast ratios met
- [ ] Color blindness testing
- [ ] Dark mode compatibility
- [ ] System color preferences

### Layout
- [ ] Responsive breakpoints
- [ ] Grid system implementation
- [ ] Spacing consistency
- [ ] Container queries where needed

### Components
- [ ] Accessibility compliance
- [ ] Interaction states
- [ ] Loading states
- [ ] Error handling

## Maintenance Guidelines

### 1. Version Control
- Use semantic versioning
- Document breaking changes
- Maintain changelog
- Tag releases

### 2. Documentation
- Keep design tokens updated
- Document component variants
- Maintain usage examples
- Update testing protocols

### 3. Performance Monitoring
- Track Core Web Vitals
- Monitor bundle sizes
- Analyze runtime performance
- Test new browser versions

### 4. Accessibility Audits
- Regular WCAG compliance checks
- Screen reader testing
- Keyboard navigation testing
- Color contrast validation

## Resources

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

### Design Psychology References
- See individual system documents for specific research references
- Regular updates based on new research findings
- Cross-reference with UX psychology studies
- Monitor industry best practices