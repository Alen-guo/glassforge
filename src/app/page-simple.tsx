'use client';

import React from 'react';
import Link from 'next/link';
import { Play, Globe, Star, Users, Zap, Sparkles, ArrowRight, Code, Palette, CheckCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function HomePage(): JSX.Element {
  return (
    <>
      {/* 导航栏 */}
      <Navbar />
      
      {/* Hero Section - 强大的SEO第一屏 */}
      <section className="min-h-screen relative overflow-hidden">
        {/* 背景动效 */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* 主标题 - SEO H1 */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Liquid Glass
              </span>
              <br />
              <span className="text-white">Effect Generator</span>
            </h1>

            {/* 核心价值主张 - SEO描述 */}
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Create stunning <strong>Apple-style liquid glass effects</strong> with our professional online generator. 
              Export clean code for <strong>CSS, React, Vue, Flutter</strong> and more. The most advanced 
              <strong>liquid glass generator</strong> trusted by thousands of developers worldwide.
            </p>

            {/* CTA按钮组 */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link href="/generator" className="glass-button bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 text-lg font-semibold flex items-center space-x-3 transform hover:scale-105 transition-all">
                <Play className="w-5 h-5" />
                <span>Start Creating Free</span>
              </Link>
              <Link href="/examples" className="glass-button text-white px-8 py-4 text-lg flex items-center space-x-3">
                <Globe className="w-5 h-5" />
                <span>View Examples</span>
              </Link>
            </div>

            {/* 社会证明 */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>50K+ Developers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>1M+ Effects Created</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 功能特色 */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose GlassForge?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Professional <strong>liquid glass generator</strong> with real-time preview and multi-platform export.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 特色1 */}
            <div className="glass-card p-8 text-center space-y-6 group hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">Real-time Preview</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                See your liquid glass effects come to life instantly. Adjust parameters and watch the magic happen in real-time.
              </p>
            </div>

            {/* 特色2 */}
            <div className="glass-card p-8 text-center space-y-6 group hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">Multi-Platform Export</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Export clean, production-ready code for CSS, React, Vue, Flutter, Swift, and Kotlin. One tool, all platforms.
              </p>
            </div>

            {/* 特色3 */}
            <div className="glass-card p-8 text-center space-y-6 group hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">Apple Design System</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Built-in presets for iOS, Vision Pro, and macOS. Create authentic Apple-style interfaces with one click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 快速演示 */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              See It In Action
            </h2>
            <p className="text-xl text-white/80">
              Experience the power of liquid glass effects
            </p>
          </div>

          {/* 演示卡片 */}
          <div className="glass-card p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* 左侧：预览 */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                  <div
                    className="glass-card w-64 h-48 p-6 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-all cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">Glass Card</h4>
                    <p className="text-white/80 text-sm">
                      Beautiful liquid glass effect with perfect transparency and blur
                    </p>
                  </div>
                </div>
              </div>

              {/* 右侧：特性 */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Instant Generation</h4>
                    <p className="text-white/70 text-sm">Create professional liquid glass effects in seconds, no design experience required.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Copy & Paste Ready</h4>
                    <p className="text-white/70 text-sm">Generated code is clean, optimized, and ready to use in your projects immediately.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Cross-Platform</h4>
                    <p className="text-white/70 text-sm">Works perfectly on web, mobile, and desktop applications across all modern platforms.</p>
                  </div>
                </div>
                
                <Link href="/generator" className="glass-button bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 text-lg font-semibold inline-flex items-center space-x-2 transform hover:scale-105 transition-all mt-6">
                  <span>Try It Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="glass-card p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Amazing Glass Effects?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join thousands of developers and designers using <strong>GlassForge</strong> to create 
              stunning liquid glass interfaces. It's completely free to use.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/generator" className="glass-button bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 text-lg font-semibold flex items-center space-x-3 transform hover:scale-105 transition-all">
                <Sparkles className="w-5 h-5" />
                <span>Start Creating Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/examples" className="glass-button text-white px-8 py-4 text-lg flex items-center space-x-3">
                <Globe className="w-5 h-5" />
                <span>Browse Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 