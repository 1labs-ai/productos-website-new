export type ChangeCategory = "new" | "improved" | "fixed";

export interface ChangeItem {
  category: ChangeCategory;
  title: string;
  description: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  slug: string;
  title: string;
  summary: string;
  changes: ChangeItem[];
}

export const changelogEntries: ChangelogEntry[] = [
  {
    version: "1.0",
    date: "2025-02-20",
    slug: "v1-0-initial-launch",
    title: "Initial Launch",
    summary: "ProductOS is officially live! The AI-native product development platform that takes you from idea to launch.",
    changes: [
      {
        category: "new",
        title: "AI Product Manager",
        description: "Generate comprehensive PRDs, user stories, and product specs with AI assistance. Simply describe your idea and get a complete product document.",
      },
      {
        category: "new",
        title: "Design Agent",
        description: "Create beautiful UI mockups and design systems powered by AI. Get pixel-perfect designs without hiring a designer.",
      },
      {
        category: "new",
        title: "Code Generation",
        description: "Turn designs into production-ready React and Next.js code. Full-stack applications generated in minutes.",
      },
      {
        category: "new",
        title: "Project Dashboard",
        description: "Manage all your products in one place. Track progress, organize assets, and collaborate with your team.",
      },
      {
        category: "new",
        title: "Export & Deploy",
        description: "One-click export to GitHub and deployment to Vercel. Ship your product to production instantly.",
      },
    ],
  },
  {
    version: "0.9",
    date: "2025-02-01",
    slug: "v0-9-beta-release",
    title: "Beta Release",
    summary: "Opening up to early adopters. Major stability improvements and new collaboration features.",
    changes: [
      {
        category: "new",
        title: "Team Collaboration",
        description: "Invite team members to your workspace. Real-time collaboration on projects with role-based permissions.",
      },
      {
        category: "new",
        title: "Version History",
        description: "Track changes across all your documents and designs. Roll back to any previous version instantly.",
      },
      {
        category: "improved",
        title: "AI Response Quality",
        description: "Upgraded to latest foundation models for better understanding of product requirements and more accurate outputs.",
      },
      {
        category: "improved",
        title: "Generation Speed",
        description: "2x faster AI generation across all agents. Complex PRDs now generate in under 30 seconds.",
      },
      {
        category: "fixed",
        title: "Export Reliability",
        description: "Fixed issues with large project exports timing out. Improved error handling and retry logic.",
      },
    ],
  },
  {
    version: "0.8",
    date: "2025-01-15",
    slug: "v0-8-design-agent-improvements",
    title: "Design Agent Improvements",
    summary: "Major upgrade to our design generation capabilities with new component library and responsive design support.",
    changes: [
      {
        category: "new",
        title: "Component Library",
        description: "Pre-built UI component library with 50+ components. Buttons, forms, cards, navigation, and more.",
      },
      {
        category: "new",
        title: "Responsive Previews",
        description: "Preview your designs across desktop, tablet, and mobile viewports. Real-time responsive adjustments.",
      },
      {
        category: "new",
        title: "Design Tokens",
        description: "Automatic design token generation for colors, typography, and spacing. Export to CSS variables or Tailwind config.",
      },
      {
        category: "improved",
        title: "Color Palette Generation",
        description: "Smarter color palette suggestions based on your brand colors. Better accessibility contrast ratios.",
      },
      {
        category: "improved",
        title: "Typography Pairing",
        description: "AI-powered font pairing recommendations. Automatic fallback fonts and web font loading optimization.",
      },
      {
        category: "fixed",
        title: "SVG Export",
        description: "Fixed issues with complex SVG icons not exporting correctly. Better path optimization.",
      },
    ],
  },
  {
    version: "0.7",
    date: "2025-01-01",
    slug: "v0-7-code-generation-enhancements",
    title: "Code Generation Enhancements",
    summary: "Improved code quality with TypeScript support, better component architecture, and new framework options.",
    changes: [
      {
        category: "new",
        title: "TypeScript Support",
        description: "Full TypeScript support with proper type definitions. Generate type-safe code from day one.",
      },
      {
        category: "new",
        title: "API Route Generation",
        description: "Automatic API route scaffolding for Next.js. CRUD operations, authentication, and database integration.",
      },
      {
        category: "new",
        title: "Database Schema",
        description: "Generate Prisma schemas from your PRD. Automatic migrations and seed data generation.",
      },
      {
        category: "improved",
        title: "Component Architecture",
        description: "Better component composition with proper separation of concerns. Reusable, maintainable code structure.",
      },
      {
        category: "improved",
        title: "State Management",
        description: "Smarter state management patterns. React hooks, context, and Zustand integration where appropriate.",
      },
      {
        category: "fixed",
        title: "Import Statements",
        description: "Fixed duplicate import statements in generated code. Better tree-shaking compatibility.",
      },
      {
        category: "fixed",
        title: "Next.js App Router",
        description: "Fixed compatibility issues with Next.js 14 App Router. Proper server/client component boundaries.",
      },
    ],
  },
];

export const getCategoryColor = (category: ChangeCategory) => {
  switch (category) {
    case "new":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    case "improved":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "fixed":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export const getCategoryLabel = (category: ChangeCategory) => {
  switch (category) {
    case "new":
      return "New";
    case "improved":
      return "Improved";
    case "fixed":
      return "Fixed";
    default:
      return category;
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
