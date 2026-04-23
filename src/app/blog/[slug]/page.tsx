'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Code, Palette, Smartphone } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import GlassCard from '@/components/glass/GlassCard';
import CodePreview from '@/components/glass/CodePreview';

export default function BlogArticlePage() {
  return (
    <>
      <Navbar />
      
      <div className="page-shell pt-20">
        <div className="page-content max-w-4xl mx-auto px-6 py-12">
          
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <GlassCard preset="vision-pro" className="p-8 mb-8">
            <div className="flex items-center space-x-4 text-sm text-white/60 mb-4">
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                Design Theory
              </span>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>January 15, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Liquid Glass Design: The Complete Guide to Apple's WWDC 2024 Design Language
            </h1>
            
            <p className="text-xl text-white/80 mb-6">
              Deep dive into Apple's latest design philosophy and how to implement liquid glass effects in your projects. Learn the theory, principles, and best practices that make this design system so compelling.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">GlassForge Team</div>
                  <div className="text-white/60 text-sm">UI/UX Design Experts</div>
                </div>
              </div>
              
              <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all">
                <Share2 className="w-4 h-4 text-white" />
                <span className="text-white">Share</span>
              </button>
            </div>
          </GlassCard>

          {/* Article Content */}
          <GlassCard preset="ios" className="p-8 mb-8">
            <div className="prose prose-invert prose-lg max-w-none">
              
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
                What is Liquid Glass Design?
              </h2>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                Liquid Glass design represents a revolutionary approach to user interface design that Apple introduced during WWDC 2024. This design language combines the ethereal beauty of frosted glass with the fluidity of liquid motion, creating interfaces that feel both tangible and weightless.
              </p>
              
              <p className="text-white/80 mb-8 leading-relaxed">
                Unlike traditional flat design or even its predecessor, glassmorphism, liquid glass design emphasizes depth, transparency, and subtle motion that mimics the natural behavior of liquid substances. This creates a more immersive and tactile user experience that's particularly powerful in spatial computing environments like Apple Vision Pro.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Palette className="w-6 h-6 mr-3 text-purple-400" />
                Core Design Principles
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">1. Controlled Transparency</h3>
                  <p className="text-white/80">
                    Transparency levels should be carefully controlled to maintain readability while creating depth. The sweet spot is typically between 5-15% opacity for background elements.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">2. Appropriate Blur Values</h3>
                  <p className="text-white/80">
                    Backdrop blur effects should enhance content hierarchy without overwhelming the interface. Values between 8-15px work best for most applications.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">3. Subtle Reflections</h3>
                  <p className="text-white/80">
                    Light reflections and highlights should be subtle and purposeful, mimicking how light would naturally interact with glass surfaces.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-green-400" />
                Implementation Example
              </h2>
              
              <p className="text-white/80 mb-4">
                Here's a practical example of how to implement a basic liquid glass card component using CSS:
              </p>
            </div>
          </GlassCard>

          {/* Code Example */}
          <div className="mb-8">
            <CodePreview
              code={`.liquid-glass-card {
  /* Background with controlled transparency */
  background: rgba(255, 255, 255, 0.1);
  
  /* Essential backdrop blur */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  /* Subtle border for definition */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  
  /* Depth through shadows */
  box-shadow: 
    0 8px 32px rgba(31, 38, 135, 0.37),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  /* Smooth transitions */
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.liquid-glass-card:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 12px 48px rgba(31, 38, 135, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}`}
              language="css"
              fileName="liquid-glass.css"
            />
          </div>

          {/* More Content */}
          <GlassCard preset="macos" className="p-8 mb-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Smartphone className="w-6 h-6 mr-3 text-cyan-400" />
                Mobile Considerations
              </h2>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                When implementing liquid glass effects on mobile devices, performance is crucial. Mobile GPUs handle backdrop filters differently, and excessive blur can significantly impact frame rates and battery life.
              </p>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">⚠️ Performance Tip</h3>
                <p className="text-white/80">
                  On mobile devices, reduce blur values by 30-50% and consider using CSS transforms instead of changing blur values for animations.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-6">Accessibility Best Practices</h2>
              
              <p className="text-white/80 mb-4 leading-relaxed">
                Liquid glass design must remain accessible to all users. Here are key considerations:
              </p>
              
              <ul className="space-y-3 text-white/80 mb-8">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Ensure sufficient color contrast between text and glass backgrounds</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Provide alternative visual cues beyond just transparency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Test with screen readers and keyboard navigation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Respect user preferences for reduced motion and transparency</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mb-6">Conclusion</h2>
              
              <p className="text-white/80 leading-relaxed">
                Liquid glass design represents the evolution of modern UI design, offering a perfect balance between aesthetics and functionality. When implemented thoughtfully, it can create truly magical user experiences that feel both futuristic and familiar. The key is to always prioritize usability and accessibility while leveraging the visual appeal of glass effects.
              </p>
            </div>
          </GlassCard>

          {/* Related Articles */}
          <GlassCard preset="vision-pro" className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/glass-effects-mobile-best-practices" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h4 className="text-white font-medium mb-2">10 Best Practices for Mobile Glass Effects</h4>
                <p className="text-white/60 text-sm">Performance optimization and design considerations for mobile apps.</p>
              </Link>
              <Link href="/blog/vision-pro-spatial-glass-interfaces" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h4 className="text-white font-medium mb-2">Vision Pro UI Design</h4>
                <p className="text-white/60 text-sm">Creating spatial glass interfaces for AR/VR applications.</p>
              </Link>
            </div>
          </GlassCard>
        </div>
      </div>
    </>
  );
}