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
                  <div className="glass-card w-64 h-48 p-6 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-all cursor-pointer">
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

      {/* 用户评价/案例展示区块 */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Loved by Creators Worldwide</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">See what designers and developers are saying about our liquid glass generator.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 用户评价1 */}
            <div className="glass-card p-8 text-center">
              <div className="flex justify-center mb-4">
                <img src="/avatars/user1.jpg" alt="UI Designer testimonial" className="w-16 h-16 rounded-full border-2 border-blue-400" />
              </div>
              <p className="text-white/80 text-lg mb-4">"The best glass effect generator I've ever used. The code just works!"</p>
              <div className="text-blue-300 font-semibold">Jane, UI Designer</div>
            </div>
            {/* 用户评价2 */}
            <div className="glass-card p-8 text-center">
              <div className="flex justify-center mb-4">
                <img src="/avatars/user2.jpg" alt="Frontend Developer testimonial" className="w-16 h-16 rounded-full border-2 border-purple-400" />
              </div>
              <p className="text-white/80 text-lg mb-4">"Exported code fits perfectly in my React and Vue projects. Super easy!"</p>
              <div className="text-purple-300 font-semibold">Mike, Frontend Developer</div>
            </div>
            {/* 用户评价3 */}
            <div className="glass-card p-8 text-center">
              <div className="flex justify-center mb-4">
                <img src="/avatars/user3.jpg" alt="App Developer testimonial" className="w-16 h-16 rounded-full border-2 border-pink-400" />
              </div>
              <p className="text-white/80 text-lg mb-4">"I created beautiful iOS-style cards in minutes. Highly recommended!"</p>
              <div className="text-pink-300 font-semibold">Sara, App Developer</div>
            </div>
          </div>
        </div>
      </section>

      {/* 一键分享区块 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Share Your Glass Effect</h2>
          <p className="text-white/80 mb-8">Share your creations with friends and the world. Spread the magic of liquid glass!</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20Liquid%20Glass%20Generator!%20https://www.liquidglass.space" target="_blank" rel="noopener" className="glass-button text-white flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
              <span>Share on Twitter</span>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.liquidglass.space" target="_blank" rel="noopener" className="glass-button text-white flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              <span>Share on Facebook</span>
            </a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.liquidglass.space&title=Liquid%20Glass%20Generator%20Online%20Free" target="_blank" rel="noopener" className="glass-button text-white flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.369 4.267 5.455v6.285zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.068 0-1.143.925-2.069 2.069-2.069 1.143 0 2.068.926 2.068 2.069 0 1.142-.925 2.068-2.068 2.068zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
              <span>Share on LinkedIn</span>
            </a>
            <button onClick={() => {navigator.clipboard.writeText('https://www.liquidglass.space')}} className="glass-button text-white flex items-center space-x-2">
              <Code className="w-5 h-5" />
              <span>Copy Link</span>
            </button>
          </div>
          <div className="text-white/60 text-xs">Sharing helps us grow. Thank you!</div>
        </div>
      </section>

      {/* FAQ区块 */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-white/80">Everything you need to know about the liquid glass generator.</p>
          </div>
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Is the liquid glass generator really free?</h3>
              <p className="text-white/80">Yes! All features are 100% free to use. No login or credit card required.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Can I use the generated code in commercial projects?</h3>
              <p className="text-white/80">Absolutely. All generated code is MIT licensed and can be used in any personal or commercial project.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Which platforms are supported?</h3>
              <p className="text-white/80">You can export code for CSS, React, Vue, Flutter, Swift, and Kotlin. More platforms are coming soon!</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">How can I share my glass effect?</h3>
              <p className="text-white/80">Use the share buttons above or simply copy the link to share your creation with friends and colleagues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部信息区块 */}
      <footer className="py-12 bg-black/80 border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white/70 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} GlassForge. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <a href="mailto:hi@liquidglass.space" className="text-white/80 hover:text-blue-400 text-sm">Contact</a>
            <a href="/about" className="text-white/80 hover:text-blue-400 text-sm">About</a>
            <a href="/privacy" className="text-white/80 hover:text-blue-400 text-sm">Privacy Policy</a>
            <a href="https://twitter.com/liquidglassui" target="_blank" rel="noopener" className="text-white/80 hover:text-blue-400 text-sm">Twitter</a>
            {/* <a href="https://github.com/Alen-guo/glassforge" target="_blank" rel="noopener" className="text-white/80 hover:text-blue-400 text-sm">GitHub</a> */}
          </div>
        </div>
      </footer>
    </>
  );
} 