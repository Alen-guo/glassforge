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

export default function TutorialsPage(): JSX.Element {
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
      
      <div 
        className="min-h-screen pt-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('/images/banner2.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto px-6 py-12">
          
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tutorials
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Learn how to create stunning liquid glass effects with our comprehensive tutorials
            </p>
          </div>

          {/* 教程列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 基础教程 */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
              <p className="text-white/80 mb-6">
                Learn the basics of liquid glass effects and how to use our generator.
              </p>
              <div className="space-y-3">
                <div className="text-white/70">• Understanding glass morphism</div>
                <div className="text-white/70">• Basic parameter controls</div>
                <div className="text-white/70">• Exporting your designs</div>
              </div>
            </div>

            {/* 高级教程 */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Advanced Techniques</h2>
              <p className="text-white/80 mb-6">
                Master advanced techniques for professional liquid glass effects.
              </p>
              <div className="space-y-3">
                <div className="text-white/70">• Background color optimization</div>
                <div className="text-white/70">• Animation and hover effects</div>
                <div className="text-white/70">• Cross-browser compatibility</div>
              </div>
            </div>
          </div>

          {/* 来访问主生成器 */}
          <div className="text-center mt-12">
            <p className="text-white/80 mb-6">
              Ready to start creating? Try our liquid glass generator!
            </p>
            <a 
              href="/generator" 
              className="glass-button px-8 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 inline-block"
            >
              Open Generator
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 