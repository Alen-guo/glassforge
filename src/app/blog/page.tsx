'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import GlassCard from '@/components/glass/GlassCard';

const blogPosts = [
  {
    id: 1,
    title: 'Liquid Glass Design: The Complete Guide to Apple\'s WWDC 2024 Design Language',
    excerpt: 'Deep dive into Apple\'s latest design philosophy and how to implement liquid glass effects in your projects. Learn the theory, principles, and best practices.',
    author: 'GlassForge Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Design Theory',
    slug: 'liquid-glass-design-complete-guide',
    featured: true
  },
  {
    id: 2,
    title: '10 Best Practices for Implementing Glass Effects in Mobile Apps',
    excerpt: 'Performance optimization techniques and design considerations when implementing glassmorphism in iOS and Android applications.',
    author: 'UI/UX Expert',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Mobile Design',
    slug: 'glass-effects-mobile-best-practices'
  },
  {
    id: 3,
    title: 'CSS vs JavaScript: Which Approach is Better for Glass Effects?',
    excerpt: 'Compare different implementation methods for liquid glass effects. Performance benchmarks, browser compatibility, and use case recommendations.',
    author: 'Frontend Developer',
    date: '2024-01-05',
    readTime: '12 min read',
    category: 'Development',
    slug: 'css-vs-javascript-glass-effects'
  },
  {
    id: 4,
    title: 'Vision Pro UI Design: Creating Spatial Glass Interfaces',
    excerpt: 'How to design for Apple Vision Pro using liquid glass effects. Spatial design principles and AR/VR interface considerations.',
    author: 'AR/VR Designer',
    date: '2024-01-01',
    readTime: '10 min read',
    category: 'AR/VR Design',
    slug: 'vision-pro-spatial-glass-interfaces'
  },
  {
    id: 5,
    title: 'Accessibility in Glass Design: Making Transparent UIs Inclusive',
    excerpt: 'Ensure your glass effects are accessible to all users. Color contrast, screen readers, and inclusive design principles.',
    author: 'Accessibility Expert',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Accessibility',
    slug: 'accessibility-glass-design-inclusive'
  },
  {
    id: 6,
    title: 'React Glass Components: Building a Design System',
    excerpt: 'Create reusable glass components in React. TypeScript support, theming, and component architecture best practices.',
    author: 'React Developer',
    date: '2023-12-25',
    readTime: '15 min read',
    category: 'React',
    slug: 'react-glass-components-design-system'
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Navbar />
      
      <div className="page-shell pt-20">
        <div className="page-content max-w-7xl mx-auto px-6 py-12">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Liquid Glass
              </span>
              <br />
              <span className="text-white">Design Blog</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Expert insights, tutorials, and best practices for creating stunning glass effects. 
              Learn from industry professionals and stay ahead of design trends.
            </p>
          </div>

          {/* Featured Article */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-yellow-400" />
                Featured Article
              </h2>
              <GlassCard preset="vision-pro" className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 text-sm text-white/60 mb-4">
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white/70">{featuredPost.author}</span>
                      </div>
                      
                      <Link 
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-all"
                      >
                        <span className="text-white">Read More</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-white/40" />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          )}

          {/* Articles Grid */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <GlassCard key={post.id} preset="ios" className="p-6 group hover:scale-105 transition-transform">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-white/60">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        post.category === 'Design Theory' ? 'bg-purple-500/20 text-purple-300' :
                        post.category === 'Mobile Design' ? 'bg-blue-500/20 text-blue-300' :
                        post.category === 'Development' ? 'bg-green-500/20 text-green-300' :
                        post.category === 'AR/VR Design' ? 'bg-pink-500/20 text-pink-300' :
                        post.category === 'Accessibility' ? 'bg-orange-500/20 text-orange-300' :
                        'bg-cyan-500/20 text-cyan-300'
                      }`}>
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-2 text-xs text-white/60">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-blue-300 hover:text-blue-200 text-sm font-medium flex items-center space-x-1"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20">
            <GlassCard preset="macos" className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-white/80 mb-6">
                Get the latest tutorials, design insights, and glass effect techniques delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                />
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </>
  );
}