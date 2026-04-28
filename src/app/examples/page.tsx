'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Code, Star, ArrowRight, Copy, CheckCircle, Heart } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function ExamplesPage() {
  const [copiedExample, setCopiedExample] = useState<string | null>(null);

  const distortionPreviewStyle: React.CSSProperties = {
    backgroundImage: [
      "linear-gradient(135deg, rgba(8,12,24,0.25), rgba(8,12,24,0.55))",
      "radial-gradient(circle at 22% 25%, rgba(56, 189, 248, 0.42), transparent 34%)",
      "radial-gradient(circle at 78% 22%, rgba(244, 114, 182, 0.36), transparent 36%)",
      "radial-gradient(circle at 52% 78%, rgba(96, 165, 250, 0.26), transparent 38%)",
      "url('/images/banner3.jpg')",
    ].join(', '),
    backgroundSize: 'cover, auto, auto, auto, cover',
    backgroundPosition: 'center, center, center, center, center',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 12px 35px rgba(8, 14, 30, 0.28)',
  };

  const customDistortionCssV1 = `.liquid-glass-card {
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: 300px;
  border-radius: 28px;
  isolation: isolate;
  box-shadow: 0px 0px 21px -8px rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

.liquid-glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: 28px;
  box-shadow: inset 0 0 5px -8px rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0);
  pointer-events: none;
}

.liquid-glass-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 28px;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  filter: url(#glass-distortion-v1);
  -webkit-filter: url(#glass-distortion-v1);
  isolation: isolate;
  pointer-events: none;
}`;

  const distortionSnippetV1 = `<!-- Distortion Glass V1: copy into a standalone HTML file -->
<div class="glass-demo-stage">
  <svg width="0" height="0" style="position:absolute">
    <defs>
      <filter id="glass-distortion-v1" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.012" numOctaves="2" seed="92" result="noise" />
        <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
        <feDisplacementMap in="SourceGraphic" in2="blurred" scale="85" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>

  <div class="liquid-glass-card">
    <div class="card-content">
      <div class="card-header">
        <div class="user-info">
          <div class="avatar">
            <svg class="avatar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="user-details">
            <p class="user-name">Jane Doe</p>
            <p class="user-role">UX Designer</p>
          </div>
        </div>
        <svg class="notification-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      </div>
      <div class="card-body">
        <h3 class="card-title">Styled Component</h3>
        <p class="card-description">This is a sample of how your content might look inside.</p>
        <button class="glass-button">Get Started</button>
      </div>
      <p class="card-tip">Tip: Try adjusting the sliders and colors to see real-time changes!</p>
    </div>
  </div>
</div>

<style>
  .glass-demo-stage {
    min-height: 420px;
    display: grid;
    place-items: center;
    padding: 40px 20px;
    background:
      linear-gradient(135deg, rgba(8,12,24,0.25), rgba(8,12,24,0.55)),
      radial-gradient(circle at 22% 25%, rgba(56, 189, 248, 0.42), transparent 34%),
      radial-gradient(circle at 78% 22%, rgba(244, 114, 182, 0.36), transparent 36%),
      radial-gradient(circle at 52% 78%, rgba(96, 165, 250, 0.26), transparent 38%),
      url('/images/banner3.jpg') center/cover no-repeat;
  }

  .liquid-glass-card {
    position: relative;
    width: min(100%, 400px);
    min-height: 300px;
    border-radius: 28px;
    isolation: isolate;
    box-shadow: 0px 0px 21px -8px rgba(255, 255, 255, 0.3);
  }

  .liquid-glass-card::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: 28px;
    box-shadow: inset 0 0 5px -8px rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0);
    pointer-events: none;
  }

  .liquid-glass-card::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 28px;
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    filter: url(#glass-distortion-v1);
    -webkit-filter: url(#glass-distortion-v1);
    pointer-events: none;
  }

  .card-content {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    color: white;
    text-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }

  .card-header { display: flex; justify-content: space-between; align-items: flex-start; }
  .user-info { display: flex; align-items: center; gap: 12px; }
  .avatar { width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); border: 2px solid #3b82f6; display: flex; align-items: center; justify-content: center; }
  .avatar-icon { width: 20px; height: 20px; color: #3b82f6; }
  .user-details { display: flex; flex-direction: column; }
  .user-name { font-weight: 600; margin: 0; }
  .user-role { font-size: 12px; opacity: 0.7; margin: 0; }
  .notification-icon { width: 20px; height: 20px; opacity: 0.5; }
  .card-body { text-align: center; margin-top: 8px; }
  .card-title { font-size: 18px; font-weight: 700; margin: 0 0 4px 0; }
  .card-description { font-size: 14px; opacity: 0.7; margin: 0 0 16px 0; }
  .glass-button { width: 100%; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 8px 16px; border-radius: 8px; font-weight: 600; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
  .card-tip { font-size: 12px; text-align: center; color: #e0e6ed; margin: 16px 0 0 0; }
</style>`;

  const customDistortionCssV2 = `.liquid-glass-card {
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: 300px;
  border-radius: 28px;
  isolation: isolate;
  box-shadow: 0px 0px 21px -8px rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

.liquid-glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: 28px;
  box-shadow: inset 0 0 4px -8px rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0);
  pointer-events: none;
}

.liquid-glass-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 28px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  filter: url(#glass-distortion-v2);
  -webkit-filter: url(#glass-distortion-v2);
  isolation: isolate;
  pointer-events: none;
}`;

  const distortionSnippetV2 = `<!-- Distortion Glass V2: copy into a standalone HTML file -->
<div class="glass-demo-stage">
  <svg width="0" height="0" style="position:absolute">
    <defs>
      <filter id="glass-distortion-v2" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.018 0.018" numOctaves="2" seed="92" result="noise" />
        <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
        <feDisplacementMap in="SourceGraphic" in2="blurred" scale="120" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>

  <div class="liquid-glass-card">
    <div class="card-content">
      <div class="card-header">
        <div class="user-info">
          <div class="avatar">
            <svg class="avatar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="user-details">
            <p class="user-name">Jane Doe</p>
            <p class="user-role">UX Designer</p>
          </div>
        </div>
        <svg class="notification-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      </div>
      <div class="card-body">
        <h3 class="card-title">Styled Component</h3>
        <p class="card-description">This is a sample of how your content might look inside.</p>
        <button class="glass-button">Get Started</button>
      </div>
      <p class="card-tip">Tip: Try adjusting the sliders and colors to see real-time changes!</p>
    </div>
  </div>
</div>

<style>
  .glass-demo-stage {
    min-height: 420px;
    display: grid;
    place-items: center;
    padding: 40px 20px;
    background:
      linear-gradient(135deg, rgba(8,12,24,0.25), rgba(8,12,24,0.55)),
      radial-gradient(circle at 22% 25%, rgba(56, 189, 248, 0.42), transparent 34%),
      radial-gradient(circle at 78% 22%, rgba(244, 114, 182, 0.36), transparent 36%),
      radial-gradient(circle at 52% 78%, rgba(96, 165, 250, 0.26), transparent 38%),
      url('/images/banner3.jpg') center/cover no-repeat;
  }

  .liquid-glass-card {
    position: relative;
    width: min(100%, 400px);
    min-height: 300px;
    border-radius: 28px;
    isolation: isolate;
    box-shadow: 0px 0px 21px -8px rgba(255, 255, 255, 0.3);
  }

  .liquid-glass-card::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: 28px;
    box-shadow: inset 0 0 4px -8px rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0);
    pointer-events: none;
  }

  .liquid-glass-card::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 28px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    filter: url(#glass-distortion-v2);
    -webkit-filter: url(#glass-distortion-v2);
    pointer-events: none;
  }

  .card-content {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    color: white;
    text-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }

  .card-header { display: flex; justify-content: space-between; align-items: flex-start; }
  .user-info { display: flex; align-items: center; gap: 12px; }
  .avatar { width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); border: 2px solid #3b82f6; display: flex; align-items: center; justify-content: center; }
  .avatar-icon { width: 20px; height: 20px; color: #3b82f6; }
  .user-details { display: flex; flex-direction: column; }
  .user-name { font-weight: 600; margin: 0; }
  .user-role { font-size: 12px; opacity: 0.7; margin: 0; }
  .notification-icon { width: 20px; height: 20px; opacity: 0.5; }
  .card-body { text-align: center; margin-top: 8px; }
  .card-title { font-size: 18px; font-weight: 700; margin: 0 0 4px 0; }
  .card-description { font-size: 14px; opacity: 0.7; margin: 0 0 16px 0; }
  .glass-button { width: 100%; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 8px 16px; border-radius: 8px; font-weight: 600; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
  .card-tip { font-size: 12px; text-align: center; color: #e0e6ed; margin: 16px 0 0 0; }
</style>`;

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
      id: 'ios-card-v1',
      name: 'Distortion Glass V1',
      description: 'Original: low blur + softer displacement',
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
      css: distortionSnippetV1
    },
    {
      id: 'ios-card-v2',
      name: 'Distortion Glass V2',
      description: 'New: stronger displacement + 12px blur',
      category: 'Mobile',
      difficulty: 'Intermediate',
      popularity: 94,
      style: {
        background: 'rgba(255, 255, 255, 0.01)',
        backdropFilter: 'blur(1px)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '20px',
        boxShadow: '0 12px 48px rgba(31, 38, 135, 0.37)'
      },
      css: distortionSnippetV2
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
      
      <div className="page-shell pt-20">
        <div className="page-content max-w-7xl mx-auto px-6 py-12">
          <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
            <defs>
              <filter id="glass-distortion-v1" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.012 0.012"
                  numOctaves="2"
                  seed="92"
                  result="noise"
                />
                <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="blurred"
                  scale="85"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>

              <filter id="glass-distortion-v2" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.018 0.018"
                  numOctaves="2"
                  seed="92"
                  result="noise"
                />
                <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="blurred"
                  scale="120"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>
          </svg>
          
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
                  className="feature-preview-surface rounded-xl p-8 flex items-center justify-center min-h-[200px]"
                  style={example.id.startsWith('ios-card-') ? distortionPreviewStyle : undefined}
                >
                  {example.id.startsWith('ios-card-') ? (
                    <div className={`liquid-glass-card ${example.id === 'ios-card-v2' ? 'liquid-glass-card--v2' : 'liquid-glass-card--v1'}`}>
                      <div className="card-content">
                        <div className="card-header">
                          <div className="user-info">
                            <div className="avatar">
                              <svg className="avatar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                              </svg>
                            </div>
                            <div className="user-details">
                              <p className="user-name">Jane Doe</p>
                              <p className="user-role">UX Designer</p>
                            </div>
                          </div>
                          <svg className="notification-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                          </svg>
                        </div>
                        <div className="card-body">
                          <h3 className="card-title">Styled Component</h3>
                          <p className="card-description">This is a sample of how your content might look inside.</p>
                          <button className="distortion-button">Get Started</button>
                        </div>
                        <p className="card-tip">Tip: Try adjusting the sliders and colors to see real-time changes!</p>
                      </div>
                    </div>
                  ) : (
                    <div
                      style={example.style}
                      className="w-full max-w-xs p-6 flex flex-col justify-center items-center text-center hover:scale-105 transition-transform cursor-pointer"
                    >
                      <Sparkles className="w-8 h-8 text-white mb-3" />
                      <h4 className="text-white font-medium text-sm mb-2">{example.name}</h4>
                      <p className="text-white/70 text-xs">Hover to interact</p>
                    </div>
                  )}
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
                  <div className="p-4 text-xs font-mono text-green-400 overflow-auto max-h-64">
                    <pre className="whitespace-pre">{example.css}</pre>
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

      <style jsx>{`
        .liquid-glass-card {
          position: relative;
          width: min(100%, 400px);
          min-height: 300px;
          border-radius: 28px;
          isolation: isolate;
          box-shadow: 0px 0px 21px -8px rgba(255, 255, 255, 0.3);
          cursor: pointer;
        }

        .liquid-glass-card--v1::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: 28px;
          box-shadow: inset 0 0 5px -8px rgba(255, 255, 255, 0.7);
          background-color: rgba(255, 255, 255, 0);
          pointer-events: none;
        }

        .liquid-glass-card--v1::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: 28px;
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          filter: url(#glass-distortion-v1);
          -webkit-filter: url(#glass-distortion-v1);
          isolation: isolate;
          pointer-events: none;
        }

        .liquid-glass-card--v2::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: 28px;
          box-shadow: inset 0 0 4px -8px rgba(255, 255, 255, 0.7);
          background-color: rgba(255, 255, 255, 0);
          pointer-events: none;
        }

        .liquid-glass-card--v2::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: 28px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          filter: url(#glass-distortion-v2);
          -webkit-filter: url(#glass-distortion-v2);
          isolation: isolate;
          pointer-events: none;
        }

        .card-content {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
          color: white;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-icon {
          width: 20px;
          height: 20px;
          color: #3b82f6;
        }

        .user-details {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-weight: 600;
          margin: 0;
        }

        .user-role {
          font-size: 12px;
          opacity: 0.7;
          margin: 0;
        }

        .notification-icon {
          width: 20px;
          height: 20px;
          opacity: 0.5;
        }

        .card-body {
          text-align: center;
          margin-top: 8px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 4px 0;
        }

        .card-description {
          font-size: 14px;
          opacity: 0.7;
          margin: 0 0 16px 0;
        }

        .distortion-button {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }

        .distortion-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .distortion-button:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4);
        }

        .card-tip {
          font-size: 12px;
          text-align: center;
          color: #e0e6ed;
          margin: 16px 0 0 0;
        }
      `}</style>
    </>
  );
} 