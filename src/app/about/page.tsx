'use client';

import React from 'react';
import { Star, Users, Zap, Globe, Heart, ArrowRight, Sparkles, Code, CheckCircle, Award, Target, Shield, Lightbulb, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* 导航栏 */}
        <nav className="glass-navbar fixed top-0 left-0 right-0 z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">GlassForge</h1>
                <p className="text-white/60 text-xs">Liquid Glass Generator</p>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/tutorials" className="text-white/80 hover:text-white transition-colors">Tutorials</Link>
              <Link href="/examples" className="text-white/80 hover:text-white transition-colors">Examples</Link>
              <Link href="/docs" className="text-white/80 hover:text-white transition-colors">Docs</Link>
              <Link href="/about" className="text-white border-b-2 border-blue-400">About</Link>
            </div>
            
            <Link href="/" className="glass-button text-white px-6 py-2 text-sm flex items-center space-x-2">
              <Code className="w-4 h-4" />
              <span>Back to Generator</span>
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About GlassForge
              </span>
              <br />
              <span className="text-white">Our Story & Mission</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're building the world's most advanced <strong>liquid glass effect generator</strong>, 
              empowering designers and developers to create stunning glassmorphism interfaces 
              inspired by Apple's revolutionary design language.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>100K+ Developers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>5M+ Effects Created</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>195+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 公司使命与技术详情 */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mission: Democratizing Professional Liquid Glass Design
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                We believe that beautiful, professional-grade <strong>liquid glass effects</strong> should be accessible to everyone. 
                That's why we created GlassForge - to give developers and designers the tools they need 
                to create Apple-quality glassmorphism interfaces without years of specialized training. 
                Our advanced <strong>CSS glass generator</strong> produces production-ready code that works 
                across all modern browsers and frameworks.
              </p>
              
              <div className="space-y-4">
                {[
                  "Making advanced liquid glass design accessible to all skill levels",
                  "Providing production-ready glassmorphism code that works everywhere", 
                  "Building tools that inspire creativity and innovation in UI design",
                  "Supporting the global developer community with free resources",
                  "Advancing the future of transparent interface design"
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
                <h3 className="text-white text-2xl font-bold">Made with ❤️ for Creators</h3>
                <p className="text-white/70 leading-relaxed">
                  Every line of code, every design decision, and every feature is crafted 
                  with love for the creative community that drives innovation forward. 
                  Our passion for perfect <strong>liquid glass aesthetics</strong> shows in every detail.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">2024</div>
                    <div className="text-white/60 text-sm">Founded</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">24/7</div>
                    <div className="text-white/60 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 技术架构与特色 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Advanced Algorithm</h3>
              <p className="text-white/70 leading-relaxed">
                Our proprietary <strong>liquid glass generator</strong> algorithm analyzes optimal 
                transparency, blur, and border combinations to create pixel-perfect Apple-style effects 
                that match modern design standards.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Real-time Preview</h3>
              <p className="text-white/70 leading-relaxed">
                Experience instant feedback with our WebGL-powered preview engine. 
                See your <strong>glassmorphism effects</strong> come to life in real-time 
                as you adjust parameters, ensuring perfect results every time.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Multi-Framework Export</h3>
              <p className="text-white/70 leading-relaxed">
                Export your <strong>liquid glass CSS</strong> as clean, optimized code for React, Vue, 
                Flutter, or plain CSS. Our generator produces production-ready code 
                that follows industry best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 团队与愿景 */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Team Behind Liquid Glass Innovation
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of designers, developers, and Apple enthusiasts is dedicated to 
              pushing the boundaries of <strong>liquid glass design</strong>. We combine deep 
              technical expertise with an obsession for beautiful, functional interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                role: "Founder & CEO",
                background: "Former Apple Design Team",
                expertise: "Liquid Glass Architecture",
                passion: "Democratizing professional design tools"
              },
              {
                role: "Lead Developer", 
                background: "Google Chrome Team",
                expertise: "WebGL & Performance",
                passion: "Creating lightning-fast glass effects"
              },
              {
                role: "Design Director",
                background: "Microsoft Fluent Design",
                expertise: "Glassmorphism UX",
                passion: "Perfecting transparent interfaces"
              },
              {
                role: "Technical Architect",
                background: "Meta Reality Labs",
                expertise: "Cross-platform Integration",
                passion: "Building the future of UI frameworks"
              }
            ].map((member, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {member.role.split(' ').map(word => word[0]).join('')}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{member.role}</h3>
                <p className="text-blue-400 text-sm mb-2">{member.background}</p>
                <p className="text-white/60 text-sm mb-3">{member.expertise}</p>
                <p className="text-white/70 text-xs italic">{member.passion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 用户见证 */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              See what professionals are saying about our <strong>liquid glass generator</strong>. 
              Join thousands of developers creating beautiful glassmorphism interfaces with our advanced tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Sarah Chen",
                title: "Senior UI Designer @ Apple",
                avatar: "SC",
                rating: 5,
                text: "This liquid glass generator is incredible! The Vision Pro presets are pixel-perfect and saved our team weeks of development time. The glassmorphism code quality is production-ready and follows Apple's design guidelines perfectly."
              },
              {
                name: "Michael Rodriguez", 
                title: "Lead Frontend Developer @ Netflix",
                avatar: "MR",
                rating: 5,
                text: "Best tool for creating glassmorphism effects. The real-time preview and React component export make it perfect for our design system. The CSS glass generator produces clean, optimized code that works flawlessly across all browsers."
              },
              {
                name: "Emma Thompson",
                title: "Creative Director @ Spotify",
                avatar: "ET", 
                rating: 5,
                text: "Revolutionary tool for modern UI design. The Apple-quality liquid glass effects and seamless code export have transformed our workflow. This is definitely the future of transparent glass design in web interfaces."
              },
              {
                name: "David Kim",
                title: "Mobile Developer @ Uber",
                avatar: "DK",
                rating: 5,
                text: "The Flutter widget exports are amazing! We've integrated GlassForge liquid glass effects into our mobile app and the performance is flawless. The generated glassmorphism code is optimized and maintains 60fps animations."
              },
              {
                name: "Lisa Wang",
                title: "Design System Lead @ Adobe",
                avatar: "LW",
                rating: 5,
                text: "GlassForge has become an essential part of our design toolkit. The consistency and quality of generated liquid glass CSS helps maintain our design system standards while enabling beautiful transparent interfaces."
              },
              {
                name: "Alex Johnson",
                title: "Freelance Designer",
                avatar: "AJ",
                rating: 5,
                text: "As a freelancer, GlassForge saves me hours on every project. The tutorials are excellent and the generated glassmorphism code always works perfectly. This liquid glass generator is absolutely fantastic!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-6 space-y-4 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.title}</div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-sm italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 未来愿景与行业影响 */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl mx-auto mb-8 flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Shaping the Future of Liquid Glass Design
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                We're not just building a <strong>liquid glass generator</strong> - we're creating 
                the foundation for the next generation of transparent, beautiful user interfaces. 
                As Apple continues to evolve its glassmorphism design language, we're here to ensure 
                developers worldwide have access to the most advanced <strong>CSS glass effect</strong> tools.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">Industry Recognition</h3>
                  <p className="text-white/70 text-sm">
                    Featured by design leaders as the definitive <strong>liquid glass CSS generator</strong> 
                    for modern web development.
                  </p>
                </div>
                <div>
                  <Lightbulb className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">Innovation Pipeline</h3>
                  <p className="text-white/70 text-sm">
                    Continuously developing new features including AI-powered <strong>glassmorphism optimization</strong> 
                    and advanced spatial computing effects.
                  </p>
                </div>
                <div>
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">Long-term Commitment</h3>
                  <p className="text-white/70 text-sm">
                    Dedicated to maintaining the world's most reliable and advanced 
                    <strong>liquid glass effect generator</strong> for years to come.
                  </p>
                </div>
              </div>

              <p className="text-lg text-white/80 mb-8">
                Join us in revolutionizing how designers and developers create stunning 
                <strong>liquid glass interfaces</strong>. Together, we're building a more beautiful, 
                transparent future for digital experiences.
              </p>
              
              <Link href="/generator" className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl">
                <span>Start Creating Glass Effects</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}