import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

export function BlogCard({ slug, title, excerpt, date, category, readTime }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group p-6 rounded-2xl bg-card border border-white/5 hover:border-white/10 transition-all hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 duration-300">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
            {category}
          </span>
          <span>·</span>
          <span>{date}</span>
          <span>·</span>
          <span>{readTime}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-2 mb-4">
          {excerpt}
        </p>
        
        <span className="inline-flex items-center text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
          Read more <ArrowRight className="ml-1 w-4 h-4" />
        </span>
      </article>
    </Link>
  );
}
