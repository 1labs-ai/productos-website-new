"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BlogCard } from "@/components/blog/blog-card";

const posts = [
  {
    slug: "ai-native-development",
    title: "The Rise of AI-Native Product Development",
    excerpt: "How AI is transforming the way we build products, from ideation to deployment. Discover the new paradigm that's reshaping how teams work.",
    date: "Feb 20, 2026",
    category: "Product",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "context-preservation",
    title: "Why Context Preservation Matters in AI Workflows",
    excerpt: "The hidden cost of context switching and how to eliminate it. Learn why maintaining context is crucial for AI-assisted development.",
    date: "Feb 15, 2026",
    category: "Engineering",
    readTime: "8 min read",
  },
  {
    slug: "building-with-agents",
    title: "Building Products with AI Agents",
    excerpt: "A practical guide to leveraging AI agents in your product development workflow. From planning to deployment.",
    date: "Feb 10, 2026",
    category: "Tutorial",
    readTime: "12 min read",
  },
  {
    slug: "future-of-prototyping",
    title: "The Future of Rapid Prototyping",
    excerpt: "How AI is enabling teams to go from idea to prototype in hours, not weeks. The new speed of innovation.",
    date: "Feb 5, 2026",
    category: "Product",
    readTime: "6 min read",
  },
  {
    slug: "design-to-code",
    title: "From Design to Code: Bridging the Gap",
    excerpt: "How AI is finally solving the handoff problem between designers and developers.",
    date: "Jan 28, 2026",
    category: "Design",
    readTime: "7 min read",
  },
  {
    slug: "ai-product-management",
    title: "AI-Assisted Product Management",
    excerpt: "Leveraging AI to make better product decisions, prioritize features, and understand user needs.",
    date: "Jan 20, 2026",
    category: "Product",
    readTime: "9 min read",
  },
];

const categories = ["All", "Product", "Engineering", "Design", "Tutorial"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = posts.find((post) => post.featured);
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && !post.featured;
  });

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights on AI, product development, and building the future.
            </p>
          </motion.div>

          {/* Featured Post Hero */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <a href={`/blog/${featuredPost.slug}`} className="block group">
                <article className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent border border-white/10 hover:border-white/20 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">
                        Featured
                      </span>
                      <span>·</span>
                      <span>{featuredPost.category}</span>
                      <span>·</span>
                      <span>{featuredPost.date}</span>
                      <span>·</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                </article>
              </a>
            </motion.div>
          )}

          {/* Filters & Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground">No posts found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
