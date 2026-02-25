# ProductOS Web Standards
**Version:** 1.0  
**Last Updated:** February 25, 2026  
**Applies To:** All ProductOS web properties (www.productos.dev, build.productos.dev, design.productos.dev, develop.productos.dev)

> **⚠️ MANDATORY FOR ALL SUB-AGENTS**  
> Read this document before making ANY changes to ProductOS websites.  
> These standards ensure consistency, security, and discoverability across all surfaces.

---

## Table of Contents
1. [SEO Requirements](#seo-requirements)
2. [GEO (LLM Optimization)](#geo-llm-optimization)
3. [Security Requirements](#security-requirements)
4. [Performance Requirements](#performance-requirements)
5. [Accessibility Requirements](#accessibility-requirements)
6. [Code Quality](#code-quality)
7. [Checklists](#checklists)

---

## SEO Requirements

### Metadata (MANDATORY for every page)

Every page MUST have proper metadata. Use Next.js Metadata API:

```typescript
// app/[page]/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',  // Will become "Page Title | ProductOS" via template
  description: 'Compelling description under 160 chars with target keywords.',
  openGraph: {
    title: 'Page Title',
    description: 'Same or slightly different for social.',
    type: 'website', // or 'article' for blog posts
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Concise description for Twitter.',
  },
  alternates: {
    canonical: 'https://www.productos.dev/page-slug',
  },
}
```

### For Dynamic Pages (Blog, etc.)

Use `generateMetadata` for dynamic content:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const data = await fetchData(params.slug)
  return {
    title: data.title,
    description: data.excerpt.slice(0, 160),
    openGraph: {
      title: data.title,
      description: data.excerpt,
      type: 'article',
      publishedTime: data.date,
      images: data.image ? [{ url: data.image }] : undefined,
    },
  }
}
```

### Structured Data (JSON-LD)

Use components from `@/components/structured-data`:

```typescript
import { 
  OrganizationSchema,     // Site-wide (in layout.tsx)
  SoftwareApplicationSchema,  // Site-wide
  ArticleSchema,          // Blog posts
  FAQSchema,              // Pages with FAQs
  BreadcrumbSchema,       // Inner pages
} from '@/components/structured-data'

// Usage in page:
<ArticleSchema
  title={post.title}
  description={post.excerpt}
  datePublished={post.date}
  authorName={post.author}
/>
```

### Sitemap

Dynamic sitemap is at `app/sitemap.ts`. When adding new pages:
1. Static pages → Add to `staticPages` array
2. Dynamic pages → Add fetch logic for dynamic content

### robots.txt

Located at `public/robots.txt`. Already configured to:
- Allow all crawlers
- Permit AI crawlers (GPTBot, PerplexityBot, anthropic-ai)
- Block `/api/` and `/_next/`

---

## GEO (LLM Optimization)

### What is GEO?
Generative Engine Optimization ensures ProductOS appears in AI-powered search results (ChatGPT, Perplexity, Google AI Overviews).

### llms.txt File
Located at `public/llms.txt`. Update when:
- Adding new features
- Changing pricing
- Adding integrations
- Updating company info

### Content Best Practices for LLM Discoverability

1. **Entity-Rich Content**: Include specific facts, not vague claims
   ```
   ❌ "ProductOS is fast"
   ✅ "ProductOS reduces MVP development time from 90 days to 8 days on average"
   ```

2. **Statistics**: Include real numbers
   ```
   - 10,000+ founders served
   - 50,000+ products built
   - 70% reduction in documentation time
   ```

3. **FAQ Sections**: LLMs love pulling from FAQs
   - Add FAQSchema to any page with Q&A content
   - Use clear question/answer format

4. **Comparison Content**: Create "ProductOS vs X" blog posts
   - Direct comparisons rank well in LLM responses
   - Be factual, not promotional

---

## Security Requirements

### Security Headers (Configured in next.config.mjs)

All ProductOS sites MUST have these headers:

| Header | Value | Purpose |
|--------|-------|---------|
| X-Frame-Options | DENY | Prevent clickjacking |
| X-Content-Type-Options | nosniff | Prevent MIME sniffing |
| Referrer-Policy | strict-origin-when-cross-origin | Control referrer info |
| Permissions-Policy | camera=(), microphone=(), geolocation=() | Limit browser features |
| Content-Security-Policy | (see config) | Prevent XSS |

### XSS Prevention

**NEVER trust user input or external content:**

```typescript
// ❌ DANGEROUS - Never do this
<div dangerouslySetInnerHTML={{ __html: userContent }} />

// ✅ SAFE - Always sanitize
import DOMPurify from 'isomorphic-dompurify'

const sanitized = DOMPurify.sanitize(content, {
  ALLOWED_TAGS: ['p', 'h1', 'h2', 'h3', 'a', 'img', 'ul', 'ol', 'li', 'strong', 'em', 'code', 'pre'],
  ALLOWED_ATTR: ['href', 'src', 'alt', 'class'],
})

<div dangerouslySetInnerHTML={{ __html: sanitized }} />
```

### Dependencies

- Run `npm audit` before every PR
- No high/critical vulnerabilities allowed
- Update dependencies monthly

### Environment Variables

- Never commit secrets to git
- Use Vercel environment variables
- Prefix client-side vars with `NEXT_PUBLIC_`

---

## Performance Requirements

### Core Web Vitals Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| LCP (Largest Contentful Paint) | < 2.5s | Page load speed |
| INP (Interaction to Next Paint) | < 200ms | Responsiveness |
| CLS (Cumulative Layout Shift) | < 0.1 | Visual stability |

### Image Optimization

**ALWAYS use Next.js Image component:**

```typescript
import Image from 'next/image'

// ✅ Correct
<Image 
  src="/hero.png" 
  alt="Descriptive alt text"
  width={1200}
  height={630}
  priority  // Only for above-fold images
/>

// ❌ Never use raw img tags
<img src="/hero.png" />
```

**Image Guidelines:**
- Use WebP/AVIF formats (auto-converted by Next.js)
- Max dimensions: 1920px width for full-bleed, 800px for content
- Lazy load below-fold images (default behavior)
- Always include `alt` text

### Bundle Size

**Target: < 300KB total JavaScript**

```typescript
// ✅ Tree-shake imports
import { motion } from 'framer-motion/m'
import { ArrowRight } from 'lucide-react'

// ❌ Don't import entire libraries
import * as Icons from 'lucide-react'
import framerMotion from 'framer-motion'
```

**Lazy load heavy components:**

```typescript
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('@/components/chart'), {
  loading: () => <Skeleton />,
  ssr: false,
})
```

### Caching

Static assets are cached with immutable headers (configured in next.config.mjs).

For API routes, set appropriate cache headers:
```typescript
export async function GET() {
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

1. **Color Contrast**: Minimum 4.5:1 for text, 3:1 for large text
2. **Keyboard Navigation**: All interactive elements must be keyboard accessible
3. **Focus States**: Visible focus indicators on all interactive elements
4. **Alt Text**: All images must have descriptive alt text
5. **Semantic HTML**: Use proper heading hierarchy (h1 → h2 → h3)

```typescript
// ✅ Good accessibility
<button 
  aria-label="Close dialog"
  className="focus:ring-2 focus:ring-offset-2"
>
  <X className="w-4 h-4" aria-hidden="true" />
</button>

// ❌ Bad accessibility  
<div onClick={handleClick}>Click me</div>
```

### Screen Reader Support

- Use `aria-label` for icon-only buttons
- Use `aria-hidden="true"` for decorative elements
- Use `role` attributes when semantic HTML isn't possible

---

## Code Quality

### TypeScript

- **No `any` types** (use `unknown` if truly unknown)
- **No `// @ts-ignore`** comments
- **No `ignoreBuildErrors: true`** (fix errors, don't hide them)

### Component Guidelines

```typescript
// ✅ Good component structure
interface Props {
  title: string
  description?: string
  children: React.ReactNode
}

export function Card({ title, description, children }: Props) {
  return (
    <div className="...">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}

// ❌ Bad - no types, inline styles
export function Card(props) {
  return <div style={{padding: 20}}>{props.title}</div>
}
```

### File Organization

```
app/
├── layout.tsx          # Root layout with global metadata
├── page.tsx            # Homepage
├── sitemap.ts          # Dynamic sitemap
├── [page]/
│   ├── page.tsx        # Page component with metadata export
│   └── components/     # Page-specific components (if needed)
components/
├── shared/             # Reusable components (see DESIGN_SYSTEM.md)
├── ui/                 # shadcn/ui components
├── structured-data.tsx # JSON-LD schemas
└── [feature]/          # Feature-specific components
```

---

## Checklists

### Pre-PR Checklist

- [ ] `npm run build` passes with zero errors
- [ ] `npm audit` shows no high/critical vulnerabilities
- [ ] All new pages have Metadata exports
- [ ] All images use Next.js Image component
- [ ] No console.log statements in production code
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Dark/light mode works correctly
- [ ] All links work (no 404s)

### New Page Checklist

- [ ] Metadata (title, description, openGraph, twitter)
- [ ] Canonical URL
- [ ] Structured data (if applicable)
- [ ] Added to sitemap (if static page)
- [ ] Accessible (keyboard nav, screen reader)
- [ ] Mobile responsive

### Blog Post Checklist

- [ ] Title under 60 characters
- [ ] Meta description 150-160 characters
- [ ] Featured image (1200x630)
- [ ] ArticleSchema added
- [ ] Content sanitized with DOMPurify
- [ ] Internal links to relevant pages
- [ ] Alt text on all images

---

## Related Documentation

- **DESIGN_SYSTEM.md** - UI components, colors, typography
- **SEO_AUDIT.md** - Detailed SEO implementation guide
- **PERFORMANCE_SECURITY_AUDIT.md** - Security headers, optimization details

---

*This document is the source of truth for ProductOS web standards. All sub-agents must follow these guidelines.*
