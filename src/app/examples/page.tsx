'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Code, Star, ArrowRight, Copy, CheckCircle, Heart } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function ExamplesPage() {
  const [copiedExample, setCopiedExample] = useState<string | null>(null);

  const copyToClipboard = async (text: string, exampleId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedExample(exampleId);
      setTimeout(() => setCopiedExample(null), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const examples = [
    {
      id: 'ios-card',
      name: 'iOS Glass Card',
      description: 'Classic iOS frosted glass effect',
      category: 'Mobile',
      difficulty: 'Beginner',
      popularity: 98,
      style: {
        background: 'rgba(255, 255, 255, 0.01)',
        backdropFilter: 'blur(1px)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '20px',
        boxShadow: '0 12px 48px rgba(31, 38, 135, 0.37)'
      },
      css: `.ios-glass-card {
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(1px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 12px 48px rgba(31, 38, 135, 0.37);
}`
    },
    {
      id: 'vision-pro',
      name: 'Vision Pro Glass',
      description: 'Apple Vision Pro spatial glass',
      category: 'Spatial',
      difficulty: 'Advanced',
      popularity: 95,
      style: {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(25px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '28px',
        boxShadow: '0 0 48px rgba(99, 102, 241, 0.4), 0 16px 64px rgba(31, 38, 135, 0.4)'
      },
      css: `.vision-pro-glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 32px;
  box-shadow: 0 0 48px rgba(99, 102, 241, 0.4), 0 16px 64px rgba(31, 38, 135, 0.4);
}`
    },
    {
      id: 'macos-window',
      name: 'macOS Window',
      description: 'macOS translucent window effect',
      category: 'Desktop',
      difficulty: 'Intermediate',
      popularity: 87,
      style: {
        background: 'rgba(255, 255, 255, 0.18)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.35)',
        borderRadius: '14px',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.4)'
      },
      css: `.macos-window {
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.4);
}`
    },
    {
      id: 'material-glass',
      name: 'Material Glass',
      description: 'Google Material Design glass',
      category: 'Web',
      difficulty: 'Beginner',
      popularity: 92,
      style: {
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(6px)',
        border: '2px solid rgba(255, 255, 255, 0.45)',
        borderRadius: '8px',
        boxShadow: '0 6px 24px rgba(31, 38, 135, 0.65)'
      },
      css: `.material-glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  border: 2px solid rgba(255, 255, 255, 0.45);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 6px 24px rgba(31, 38, 135, 0.65);
}`
    }
  ];

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
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Liquid Glass Examples
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Explore our collection of <strong>liquid glass effects</strong> with ready-to-use code. 
              Perfect for modern interfaces.
            </p>
            <Link href="/generator" className="glass-button bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 text-lg font-semibold inline-flex items-center space-x-2 transform hover:scale-105 transition-all">
              <Sparkles className="w-5 h-5" />
              <span>Create Your Own</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Examples Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {examples.map((example) => (
              <div key={example.id} className="glass-card p-6 space-y-6">
                
                {/* Example Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-white font-bold text-xl">{example.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${
                        example.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        example.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {example.difficulty}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm mb-2">{example.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-white/60">
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{example.category}</span>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3 text-pink-400" />
                        <span>{example.popularity}% love this</span>
                      </div>
                    </div>
                  </div>
                  <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                </div>

                {/* Live Preview */}
                <div 
                  className="rounded-xl p-8 flex items-center justify-center min-h-[200px] bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/Examples.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div 
                    style={example.style}
                    className="w-full max-w-xs p-6 flex flex-col justify-center items-center text-center hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Sparkles className="w-8 h-8 text-white mb-3" />
                    <h4 className="text-white font-medium text-sm mb-2">{example.name}</h4>
                    <p className="text-white/70 text-xs">Hover to interact</p>
                  </div>
                </div>

                {/* Code Preview */}
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between p-3 border-b border-gray-700">
                    <span className="text-gray-400 text-xs">styles.css</span>
                    <button
                      onClick={() => copyToClipboard(example.css, example.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedExample === example.id ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="p-4 text-xs font-mono text-green-400 overflow-x-auto">
                    <pre>{example.css}</pre>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => copyToClipboard(example.css, example.id)}
                    className="flex-1 glass-button text-white py-2 text-sm flex items-center justify-center space-x-2"
                  >
                    {copiedExample === example.id ? <CheckCircle className="w-4 h-4" /> : <Code className="w-4 h-4" />}
                    <span>{copiedExample === example.id ? 'Copied!' : 'Copy CSS'}</span>
                  </button>
                  <Link 
                    href="/generator" 
                    className="flex-1 glass-button text-white py-2 text-sm flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Customize</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Combinations */}
          <div className="glass-card p-8">
            <h2 className="text-white font-bold text-2xl mb-6 text-center">Popular Glass Combinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'iOS + Medium Blur', desc: 'Perfect for mobile interfaces', usage: '68%' },
                { name: 'Vision Pro + High Transparency', desc: 'Ideal for spatial computing', usage: '45%' },
                { name: 'Material + Strong Border', desc: 'Great for web applications', usage: '52%' }
              ].map((combo, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{combo.name}</h3>
                  <p className="text-white/70 text-sm">{combo.desc}</p>
                  <div className="text-blue-300 font-bold text-lg">{combo.usage}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
} 