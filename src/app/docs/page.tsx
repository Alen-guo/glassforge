'use client';

import React from 'react';
import Link from 'next/link';
import { Book, Code, Star, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import UnifiedLiquidGlass from '@/components/glass/UnifiedLiquidGlass';

export default function DocsPage(): JSX.Element {
  return (
    <>
      <Navbar />
      
      <div 
        className="min-h-screen pt-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('/images/banner2.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
          
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Learn how to create stunning liquid glass effects with our comprehensive documentation
            </p>
          </div>

          {/* 快速开始 */}
          <div className="mb-16">
            <UnifiedLiquidGlass preset="ios" className="mb-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Quick Start Guide</h2>
                <p className="text-white/80 mb-6">
                  Get started with liquid glass effects in under 5 minutes
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/generator" className="glass-button bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105">
                    Try Generator
                  </Link>
                  <Link href="/test-third-party" className="glass-button bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105">
                    Parameter Tester
                  </Link>
                </div>
              </div>
            </UnifiedLiquidGlass>
          </div>

          {/* 预设演示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* iOS 预设 */}
            <UnifiedLiquidGlass preset="ios">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">iOS Style</h3>
                <p className="text-white/70 text-sm">
                  Perfect for mobile interfaces with subtle transparency and smooth edges
                </p>
              </div>
            </UnifiedLiquidGlass>

            {/* Vision Pro 预设 */}
            <UnifiedLiquidGlass preset="vision-pro">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Vision Pro</h3>
                <p className="text-white/70 text-sm">
                  Advanced spatial glass effects for AR/VR interfaces
                </p>
              </div>
            </UnifiedLiquidGlass>

            {/* macOS 预设 */}
            <UnifiedLiquidGlass preset="macos">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">macOS</h3>
                <p className="text-white/70 text-sm">
                  Classic desktop window glass with balanced transparency
                </p>
              </div>
            </UnifiedLiquidGlass>

            {/* Material 预设 */}
            <UnifiedLiquidGlass preset="material">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Material</h3>
                <p className="text-white/70 text-sm">
                  Google Material Design glassmorphism principles
                </p>
              </div>
            </UnifiedLiquidGlass>

          </div>

          {/* 特性介绍 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/80">Real-time parameter adjustment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/80">Multiple rendering modes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/80">Built-in Apple presets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/80">WebGL powered performance</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
              <p className="text-white/80 mb-6">
                Ready to create amazing liquid glass effects? Start with our interactive tools.
              </p>
              <div className="space-y-3">
                <Link href="/generator" className="block w-full glass-button text-white px-4 py-3 text-center rounded-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Open Generator</span>
                  </div>
                </Link>
                <Link href="/test-third-party" className="block w-full glass-button-secondary text-white px-4 py-3 text-center rounded-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center space-x-2">
                    <Code className="w-4 h-4" />
                    <span>Parameter Tester</span>
                  </div>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
} 