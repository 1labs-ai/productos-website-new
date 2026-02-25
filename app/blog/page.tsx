import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getPosts, type WordPressPost } from "@/lib/wordpress"
import { Calendar, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | ProductOS",
  description: "Latest articles on AI-native product development, shipping faster, and building better products.",
  openGraph: {
    title: "Blog | ProductOS",
    description: "Latest articles on AI-native product development, shipping faster, and building better products.",
    type: "website",
  },
}

export const revalidate = 3600 // ISR: Revalidate every hour

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function truncateExcerpt(text: string, maxLength: number = 120): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

function PostCard({ post }: { post: WordPressPost }) {
  const primaryCategory = post.categories[0]

  return (
    <article className="group flex flex-col h-full bg-card rounded-lg border border-border/50 overflow-hidden transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1">
      {/* Featured Image */}
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden bg-muted">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt || post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-card">
            <span className="text-4xl font-bold text-muted-foreground/20">
              {post.title.charAt(0)}
            </span>
          </div>
        )}
        {/* Category Badge */}
        {primaryCategory && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground border border-border/50">
              {primaryCategory.name}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-foreground/80 transition-colors">
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
          {truncateExcerpt(post.excerpt)}
        </p>

        {/* Meta Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {/* Author */}
            <div className="flex items-center gap-1.5">
              {post.author?.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              ) : (
                <User className="size-3.5" />
              )}
              <span>{post.author?.name || 'ProductOS Team'}</span>
            </div>
            
            <span className="text-border">•</span>
            
            {/* Date */}
            <div className="flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </div>

          {/* Read More */}
          <Link 
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-xs font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Read more
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">No posts yet</h3>
      <p className="text-muted-foreground max-w-sm">
        We&apos;re working on some great content. Check back soon for articles on AI-native product development.
      </p>
    </div>
  )
}

export default async function BlogPage() {
  const { posts } = await getPosts({ perPage: 12 })

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.025em' }}>
            Blog
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest articles on AI-native product development, shipping faster, and building better products.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </>
  )
}
