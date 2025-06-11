'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Play, 
  Book, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Code, 
  Sparkles,
  ChevronDown,
  ChevronRight,
  Video,
  Download,
  BookOpen
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function TutorialsPage() {
  const [expandedTutorial, setExpandedTutorial] = useState<string | null>(null);

  const toggleTutorial = (id: string) => {
    setExpandedTutorial(expandedTutorial === id ? null : id);
  };

  const tutorials = [
    {
      id: 'getting-started',
      title: 'Getting Started with Liquid Glass',
      description: 'Learn the fundamentals of creating liquid glass effects',
      difficulty: 'Beginner',
      duration: '10 min',
      views: '12.5K',
      rating: 4.9,
      category: 'Fundamentals',
      steps: [
        {
          title: 'Understanding Glassmorphism',
          content: 'Glassmorphism is a design trend that creates a translucent, frosted glass effect using CSS backdrop-filter and transparency.',
          code: `/* Basic glass effect */
.glass-element {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
}`
        },
        {
          title: 'Setting Up Your Environment',
          content: 'Modern browsers support backdrop-filter, but you\'ll need fallbacks for older versions.',
          code: `/* Browser compatibility */
@supports (backdrop-filter: blur(10px)) {
  .glass-element {
    backdrop-filter: blur(10px);
  }
}

@supports not (backdrop-filter: blur(10px)) {
  .glass-element {
    background: rgba(255, 255, 255, 0.8);
  }
}`
        },
        {
          title: 'Creating Your First Glass Card',
          content: 'Start with basic transparency and blur, then enhance with borders and shadows.',
          code: `/* Complete glass card */
.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  padding: 24px;
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
}`
        }
      ]
    },
    {
      id: 'ios-effects',
      title: 'Creating iOS-Style Glass Effects',
      description: 'Master Apple\'s signature frosted glass design language',
      difficulty: 'Intermediate',
      duration: '15 min',
      views: '8.7K',
      rating: 4.8,
      category: 'Apple Design',
      steps: [
        {
          title: 'iOS Design Principles',
          content: 'iOS glass effects use subtle transparency with medium blur for readability and visual hierarchy.',
          code: `/* iOS Control Center style */
.ios-control-center {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}`
        },
        {
          title: 'Navigation Bar Glass',
          content: 'iOS navigation bars use dynamic transparency that adapts to content behind.',
          code: `/* iOS Navigation Bar */
.ios-navbar {
  background: rgba(248, 248, 248, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

/* Dark mode variant */
@media (prefers-color-scheme: dark) {
  .ios-navbar {
    background: rgba(28, 28, 30, 0.8);
    border-bottom-color: rgba(255, 255, 255, 0.05);
  }
}`
        }
      ]
    },
    {
      id: 'vision-pro',
      title: 'Vision Pro Spatial Glass Design',
      description: 'Create Apple Vision Pro spatial computing interfaces',
      difficulty: 'Advanced',
      duration: '20 min',
      views: '5.2K',
      rating: 4.9,
      category: 'Spatial Computing',
      steps: [
        {
          title: 'Spatial Glass Principles',
          content: 'Vision Pro uses ultra-subtle transparency with high blur for depth perception in 3D space.',
          code: `/* Vision Pro spatial glass */
.spatial-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  background-image: linear-gradient(
    135deg, 
    rgba(255, 255, 255, 0.08), 
    transparent 50%
  );
}`
        },
        {
          title: 'Depth and Layering',
          content: 'Multiple glass layers create depth in spatial interfaces.',
          code: `/* Layered spatial glass */
.spatial-layer-1 {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  z-index: 1;
}

.spatial-layer-2 {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(30px);
  z-index: 2;
  transform: translateZ(10px);
}`
        }
      ]
    },
    {
      id: 'performance',
      title: 'Optimizing Glass Effects Performance',
      description: 'Best practices for smooth, performant glassmorphism',
      difficulty: 'Advanced',
      duration: '12 min',
      views: '6.3K',
      rating: 4.7,
      category: 'Performance',
      steps: [
        {
          title: 'GPU Acceleration',
          content: 'Use transform3d and will-change to trigger hardware acceleration.',
          code: `/* Hardware acceleration */
.optimized-glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  transform: translate3d(0, 0, 0);
  will-change: transform, backdrop-filter;
}

/* Optimize for animations */
.glass-hover {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-hover:hover {
  transform: translate3d(0, -2px, 0);
}`
        },
        {
          title: 'Mobile Optimization',
          content: 'Reduce blur and transparency on mobile devices for better performance.',
          code: `/* Mobile-first approach */
.responsive-glass {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
}

/* Enhanced for desktop */
@media (min-width: 768px) {
  .responsive-glass {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(15px);
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .glass-element {
    transition: none;
  }
}`
        }
      ]
    }
  ];

  const quickTips = [
    {
      title: 'Perfect Transparency Range',
      tip: 'Use 10-20% transparency for optimal readability while maintaining glass effect.',
      icon: '💡'
    },
    {
      title: 'Blur Sweet Spot',
      tip: 'Start with 10-15px blur for cards, 20-25px for backgrounds.',
      icon: '🎯'
    },
    {
      title: 'Border Magic',
      tip: 'Add subtle white borders (20-30% opacity) to enhance the glass illusion.',
      icon: '✨'
    },
    {
      title: 'Shadow Depth',
      tip: 'Use large, soft shadows with low opacity to create floating effect.',
      icon: '🌟'
    },
    {
      title: 'Dark Mode',
      tip: 'Adjust transparency and blur values for dark backgrounds.',
      icon: '🌙'
    },
    {
      title: 'Animation Timing',
      tip: 'Use cubic-bezier(0.4, 0, 0.2, 1) for smooth, Apple-like transitions.',
      icon: '⚡'
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Liquid Glass Tutorials
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Master the art of creating stunning <strong>liquid glass effects</strong> with our 
              comprehensive step-by-step tutorials and expert tips.
            </p>
            <div className="flex items-center justify-center space-x-6 text-white/60 text-sm mb-8">
              <div className="flex items-center space-x-2">
                <Video className="w-4 h-4 text-blue-400" />
                <span>Video Guides</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-green-400" />
                <span>Code Examples</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Step-by-Step</span>
              </div>
            </div>
            <Link href="/generator" className="glass-button bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 text-lg font-semibold inline-flex items-center space-x-2 transform hover:scale-105 transition-all">
              <Sparkles className="w-5 h-5" />
              <span>Start Practicing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Tips Section */}
          <div className="glass-card p-8 mb-16">
            <h2 className="text-white font-bold text-2xl mb-6 text-center">💡 Quick Tips & Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickTips.map((tip, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{tip.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-2">{tip.title}</h3>
                      <p className="text-white/70 text-xs leading-relaxed">{tip.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tutorials Section */}
          <div className="space-y-8">
            <h2 className="text-white font-bold text-3xl text-center mb-12">Complete Tutorial Series</h2>
            
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="glass-card overflow-hidden">
                
                {/* Tutorial Header */}
                <button
                  onClick={() => toggleTutorial(tutorial.id)}
                  className="w-full p-6 text-left hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-white font-bold text-xl">{tutorial.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                          tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {tutorial.difficulty}
                        </span>
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                          {tutorial.category}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm mb-3">{tutorial.description}</p>
                      <div className="flex items-center space-x-6 text-xs text-white/60">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{tutorial.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{tutorial.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{tutorial.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Play className="w-6 h-6 text-blue-400" />
                      {expandedTutorial === tutorial.id ? 
                        <ChevronDown className="w-5 h-5 text-white/60" /> : 
                        <ChevronRight className="w-5 h-5 text-white/60" />
                      }
                    </div>
                  </div>
                </button>

                {/* Tutorial Content */}
                {expandedTutorial === tutorial.id && (
                  <div className="px-6 pb-6 border-t border-white/10">
                    <div className="space-y-8 pt-6">
                      {tutorial.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {stepIndex + 1}
                            </div>
                          </div>
                          <div className="flex-1 space-y-4">
                            <h4 className="text-white font-semibold text-lg">{step.title}</h4>
                            <p className="text-white/80 leading-relaxed">{step.content}</p>
                            {step.code && (
                              <div className="bg-gray-900 rounded-lg overflow-hidden">
                                <div className="flex items-center justify-between p-3 border-b border-gray-700">
                                  <span className="text-gray-400 text-xs">CSS Code</span>
                                  <button className="text-gray-400 hover:text-white transition-colors">
                                    <Download className="w-4 h-4" />
                                  </button>
                                </div>
                                <div className="p-4 text-sm font-mono text-green-400 overflow-x-auto">
                                  <pre>{step.code}</pre>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Tutorial Actions */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-8">
                      <div className="flex items-center space-x-4">
                        <button className="glass-button text-white px-4 py-2 text-sm flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Mark Complete</span>
                        </button>
                        <button className="glass-button text-white px-4 py-2 text-sm flex items-center space-x-2">
                          <Book className="w-4 h-4" />
                          <span>Save Notes</span>
                        </button>
                      </div>
                      <Link 
                        href="/generator" 
                        className="glass-button bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-sm flex items-center space-x-2"
                      >
                        <Code className="w-4 h-4" />
                        <span>Try in Generator</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Learning Path */}
          <div className="glass-card p-8 mt-16">
            <h2 className="text-white font-bold text-2xl mb-6 text-center">🎯 Recommended Learning Path</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              {[
                { step: '1', title: 'Fundamentals', desc: 'Start with basic concepts' },
                { step: '2', title: 'Apple Styles', desc: 'Learn iOS & macOS effects' },
                { step: '3', title: 'Advanced', desc: 'Master Vision Pro & performance' },
                { step: '4', title: 'Practice', desc: 'Build your own projects' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      {item.step}
                    </div>
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    <p className="text-white/60 text-xs">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="w-5 h-5 text-white/40 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
} 