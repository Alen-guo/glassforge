'use client';

import React from 'react';
import { Heart, Code, CheckCircle, Target, Zap, Mail, ArrowRight, Rocket } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="page-shell overflow-hidden pt-20">
        <div className="page-content pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About GlassForge
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              A free tool for generating <strong>liquid glass effects</strong> — built by an indie developer
              who wanted clean, production-ready glassmorphism code without all the manual fiddling.
            </p>
          </div>
        </div>
      </section>

      {/* Why I built this */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why I Built This
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Apple&apos;s liquid glass design language is beautiful, but replicating it accurately in code
                takes a lot of trial and error — tweaking blur, transparency, border glow, and shadow
                until it finally looks right. GlassForge automates that process so you can focus
                on building instead of experimenting.
              </p>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                The generator outputs real code for CSS, React, Vue, Flutter, SwiftUI, and more.
                No design-tool exports, no runtime dependencies — just clean copy-paste snippets
                you can drop straight into your project.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time preview backed by WebGL shaders',
                  'Production-ready code for 10+ frameworks',
                  'No sign-up, no paywalls — free to use',
                  'All processing runs in your browser, nothing is sent to a server',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl mx-auto flex items-center justify-center shadow-2xl">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white text-2xl font-bold">An Indie Side Project</h3>
                <p className="text-white/70 leading-relaxed">
                  GlassForge started as a weekend experiment and grew from there. It is maintained
                  by a solo developer who uses it in real projects. Features get added when they
                  solve a real problem, not to hit a roadmap.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">2024</div>
                    <div className="text-white/60 text-sm">First released</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">10+</div>
                    <div className="text-white/60 text-sm">Export formats</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Smart Code Generation</h3>
              <p className="text-white/70 leading-relaxed">
                Adjust blur, transparency, border glow, and corner radius — the generator
                computes optimal CSS values and outputs framework-specific snippets instantly.
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Live WebGL Preview</h3>
              <p className="text-white/70 leading-relaxed">
                The preview panel uses real WebGL shader rendering — the same technique Apple uses —
                so what you see accurately matches what the effect looks like in production.
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Multi-Framework Export</h3>
              <p className="text-white/70 leading-relaxed">
                CSS, React, React TypeScript, Vue, Svelte, Flutter, SwiftUI, Jetpack Compose,
                Tailwind, Emotion, and Styled Components — all from the same parameter set.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-card p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">What is Next</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-white/80">
              {[
                'More presets based on popular design systems',
                'Component-level code export with accessibility attributes',
                'Animation variants (hover, focus, active states)',
                'Dark / light mode aware glass styles',
                'Figma plugin for design-to-code workflow',
                'More community-submitted glass presets',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Have a feature request, found a bug, or just want to say hi?
            I read every message and try to respond within a day or two.
          </p>
          <div className="glass-card p-8 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:alenguo7578@gmail.com"
                className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                alenguo7578@gmail.com
              </a>
            </div>
            <p className="text-white/50 text-sm mt-6">
              For bug reports, feature ideas, or collaboration inquiries.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
