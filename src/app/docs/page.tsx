import React from 'react';
import { Book, Code, Settings, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function DocsPage() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Liquid Glass Generator Documentation - Complete Developer Guide
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
              Complete technical reference guide for creating professional <strong>liquid glass effects</strong> 
              and building advanced <strong>CSS glass generators</strong>. Master Apple-style glassmorphism 
              with comprehensive documentation covering everything from basic backdrop-filter properties 
              to complex spatial computing interfaces. Our developer-friendly guides include 
              production-ready code examples, performance optimization techniques, and cross-browser 
              compatibility solutions for modern <strong>liquid glass CSS</strong> implementations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm mb-8">
              <div className="flex items-center space-x-2">
                <Book className="w-4 h-4 text-blue-400" />
                <span>Complete API Reference</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-green-400" />
                <span>200+ Code Examples</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Performance Optimization</span>
              </div>
              <div className="flex items-center space-x-2">
                <Settings className="w-4 h-4 text-purple-400" />
                <span>Framework Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <Book className="w-4 h-4 text-cyan-400" />
                <span>Browser Compatibility</span>
              </div>
            </div>
          </div>

          {/* Quick Start */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-white font-bold text-2xl mb-6">🚀 Quick Start</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Basic Glass Effect</h3>
                <p className="text-white/70 mb-4">
                  Start with this basic liquid glass effect that works across all modern browsers.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-green-400 overflow-x-auto">
                  <pre>{`.liquid-glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}`}</pre>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">iOS Style</h3>
                <p className="text-white/70 mb-4">
                  Apple's signature frosted glass effect for mobile interfaces.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-green-400 overflow-x-auto">
                  <pre>{`.ios-glass {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* CSS Properties */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-white font-bold text-2xl mb-6">📋 CSS Properties Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-white/80 border-b border-white/20">
                    <th className="text-left py-3 px-4">Property</th>
                    <th className="text-left py-3 px-4">Range</th>
                    <th className="text-left py-3 px-4">Purpose</th>
                    <th className="text-left py-3 px-4">Example</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-mono">background</td>
                    <td className="py-3 px-4">0.05 - 0.25 opacity</td>
                    <td className="py-3 px-4">Base transparency</td>
                    <td className="py-3 px-4 font-mono text-xs">rgba(255,255,255,0.15)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-mono">backdrop-filter</td>
                    <td className="py-3 px-4">8px - 30px blur</td>
                    <td className="py-3 px-4">Glass blur effect</td>
                    <td className="py-3 px-4 font-mono text-xs">blur(12px)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-mono">border</td>
                    <td className="py-3 px-4">0.1 - 0.3 opacity</td>
                    <td className="py-3 px-4">Edge definition</td>
                    <td className="py-3 px-4 font-mono text-xs">1px solid rgba(255,255,255,0.2)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-mono">box-shadow</td>
                    <td className="py-3 px-4">0.1 - 0.5 opacity</td>
                    <td className="py-3 px-4">Depth perception</td>
                    <td className="py-3 px-4 font-mono text-xs">0 8px 32px rgba(31,38,135,0.37)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Framework Integration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* React */}
            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-xl mb-4 flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span>React Integration</span>
              </h3>
              <p className="text-white/70 mb-4">Create reusable glass components:</p>
              <div className="bg-gray-900 rounded-lg p-4 text-xs font-mono text-green-400 overflow-x-auto">
                <pre>{`import React from 'react';

const GlassCard = ({ children, blur = 12 }) => (
  <div style={{
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: \`blur(\${blur}px)\`,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px'
  }}>
    {children}
  </div>
);`}</pre>
              </div>
            </div>

            {/* Vue */}
            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-xl mb-4 flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span>Vue.js Integration</span>
              </h3>
              <p className="text-white/70 mb-4">Vue component with props:</p>
              <div className="bg-gray-900 rounded-lg p-4 text-xs font-mono text-green-400 overflow-x-auto">
                <pre>{`<template>
  <div class="glass-card" :style="glassStyle">
    <slot />
  </div>
</template>

<script>
export default {
  props: ['blur', 'opacity'],
  computed: {
    glassStyle() {
      return {
        backdropFilter: \`blur(\${this.blur || 12}px)\`
      }
    }
  }
}
</script>`}</pre>
              </div>
            </div>
          </div>

          {/* Advanced Techniques */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-white font-bold text-2xl mb-6">🔬 Advanced Liquid Glass Techniques</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-blue-400 font-semibold text-lg mb-4">Multi-Layer Glass Effects</h3>
                <p className="text-white/70 mb-4">
                  Create depth with multiple <strong>liquid glass layers</strong> for complex spatial interfaces:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 text-xs font-mono text-green-400 overflow-x-auto">
                  <pre>{`/* Layered glass system */
.glass-background {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(25px);
}

.glass-middle {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  z-index: 1;
}

.glass-foreground {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  z-index: 2;
}`}</pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-purple-400 font-semibold text-lg mb-4">Dynamic Glass Adaptation</h3>
                <p className="text-white/70 mb-4">
                  Automatically adjust <strong>glassmorphism effects</strong> based on content and environment:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 text-xs font-mono text-green-400 overflow-x-auto">
                  <pre>{`/* Adaptive glass based on brightness */
.adaptive-glass {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}

/* Dark content adaptation */
.adaptive-glass[data-content="dark"] {
  background: rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 0, 0, 0.15);
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .adaptive-glass {
    background: rgba(255, 255, 255, 0.25);
    border-width: 2px;
  }
}`}</pre>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-green-400 font-semibold text-lg mb-4">Performance Optimization</h3>
                <p className="text-white/70 mb-4">
                  Optimize your <strong>CSS glass generator</strong> output for maximum performance:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 text-xs font-mono text-green-400 overflow-x-auto">
                  <pre>{`/* GPU-accelerated glass */
.optimized-glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  will-change: transform;
  transform: translate3d(0, 0, 0);
  isolation: isolate;
}

/* Reduce blur on scroll for performance */
.glass-on-scroll {
  backdrop-filter: blur(5px);
  transition: backdrop-filter 0.3s ease;
}

.glass-on-scroll:not(.scrolling) {
  backdrop-filter: blur(15px);
}`}</pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-yellow-400 font-semibold text-lg mb-4">Accessibility Features</h3>
                <p className="text-white/70 mb-4">
                  Ensure your <strong>liquid glass effects</strong> work for all users:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 text-xs font-mono text-green-400 overflow-x-auto">
                  <pre>{`/* Accessible glass design */
.accessible-glass {
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  .accessible-glass {
    transition: none;
    animation: none;
  }
}

/* High contrast support */
@media (forced-colors: active) {
  .accessible-glass {
    background: ButtonFace;
    border: 1px solid ButtonText;
    backdrop-filter: none;
  }
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Cross-Platform Implementation */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-white font-bold text-2xl mb-6">📱 Cross-Platform Liquid Glass Implementation</h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Our <strong>liquid glass generator</strong> produces code that works seamlessly across all modern platforms. 
              Here's how to implement <strong>glassmorphism effects</strong> in different environments while maintaining 
              Apple's design standards and ensuring optimal performance on every device.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  platform: "Web/CSS",
                  description: "Standard CSS implementation for web browsers",
                  code: `/* Web implementation */
.web-glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}

/* Progressive enhancement */
@supports not (backdrop-filter: blur()) {
  .web-glass {
    background: rgba(255, 255, 255, 0.8);
  }
}`
                },
                {
                  platform: "React Native",
                  description: "Native mobile implementation for iOS and Android",
                  code: `// React Native glass effect
import { BlurView } from '@react-native-blur/blur';

const GlassComponent = () => (
  <BlurView
    style={styles.glassContainer}
    blurType="light"
    blurAmount={10}
    reducedTransparencyFallbackColor="white"
  >
    {children}
  </BlurView>
);

const styles = StyleSheet.create({
  glassContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  }
});`
                },
                {
                  platform: "Flutter",
                  description: "Cross-platform mobile and desktop implementation",
                  code: `// Flutter glass effect widget
import 'dart:ui';

class GlassCard extends StatelessWidget {
  final Widget child;
  final double blur;
  
  const GlassCard({
    Key? key,
    required this.child,
    this.blur = 10.0,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(16),
      child: BackdropFilter(
        filter: ImageFilter.blur(
          sigmaX: blur,
          sigmaY: blur,
        ),
        child: Container(
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.15),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(
              color: Colors.white.withOpacity(0.2),
            ),
          ),
          child: child,
        ),
      ),
    );
  }
}`
                }
              ].map((impl, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-lg mb-2">{impl.platform}</h3>
                    <p className="text-white/60 text-sm">{impl.description}</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 text-xs font-mono text-green-400 overflow-x-auto">
                    <pre>{impl.code}</pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Browser Compatibility Matrix */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-white font-bold text-2xl mb-6">🌐 Browser Compatibility Matrix</h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Our <strong>liquid glass CSS</strong> works across all modern browsers. Here's the complete compatibility matrix 
              for <strong>backdrop-filter</strong> and related properties used in professional glassmorphism implementations:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-white/80 border-b border-white/20">
                    <th className="text-left py-3 px-4">Browser</th>
                    <th className="text-left py-3 px-4">backdrop-filter</th>
                    <th className="text-left py-3 px-4">CSS Masks</th>
                    <th className="text-left py-3 px-4">border-radius</th>
                    <th className="text-left py-3 px-4">Fallback Needed</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  {[
                                         { browser: "Chrome 76+", backdrop: "✅ Full", masks: "✅ Full", radius: "✅ Full", fallback: "❌ No" },
                     { browser: "Safari 14+", backdrop: "✅ Full", masks: "✅ Full", radius: "✅ Full", fallback: "❌ No" },
                     { browser: "Firefox 103+", backdrop: "✅ Full", masks: "✅ Full", radius: "✅ Full", fallback: "❌ No" },
                     { browser: "Edge 79+", backdrop: "✅ Full", masks: "✅ Full", radius: "✅ Full", fallback: "❌ No" },
                     { browser: "iOS Safari 14+", backdrop: "✅ Full", masks: "✅ Full", radius: "✅ Full", fallback: "❌ No" },
                    { browser: "Chrome Android", backdrop: "✅ Full", masks: "✅ Full", radius: "✅ Full", fallback: "❌ No" },
                    { browser: "IE 11", backdrop: "❌ None", masks: "⚠️ Partial", radius: "✅ Full", fallback: "✅ Yes" },
                    { browser: "Old Firefox", backdrop: "❌ None", masks: "⚠️ Partial", radius: "✅ Full", fallback: "✅ Yes" }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">{row.browser}</td>
                      <td className="py-3 px-4">{row.backdrop}</td>
                      <td className="py-3 px-4">{row.masks}</td>
                      <td className="py-3 px-4">{row.radius}</td>
                      <td className="py-3 px-4">{row.fallback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Best Practices */}
          <div className="glass-card p-8">
            <h2 className="text-white font-bold text-2xl mb-6">💡 Professional Liquid Glass Best Practices</h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Follow these expert guidelines to create production-ready <strong>liquid glass effects</strong> 
              that match Apple's quality standards and perform flawlessly across all devices and platforms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-green-400 font-semibold text-lg mb-4">✅ Professional Do's</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Use 10-20% transparency for optimal readability in liquid glass interfaces</li>
                  <li>• Add hardware acceleration with transform3d for smooth glassmorphism animations</li>
                  <li>• Test your CSS glass generator output on different background colors and images</li>
                  <li>• Include proper fallbacks for older browsers that don't support backdrop-filter</li>
                  <li>• Use consistent border-radius values throughout your liquid glass design system</li>
                  <li>• Implement proper color contrast ratios for accessibility compliance</li>
                  <li>• Optimize blur values for mobile devices to maintain 60fps performance</li>
                  <li>• Use CSS custom properties for dynamic liquid glass theming capabilities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-red-400 font-semibold text-lg mb-4">❌ Critical Don'ts</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Don't stack multiple glass layers without considering performance impact</li>
                                     <li>• Avoid excessive blur values (&gt;20px) on mobile devices for battery life</li>
                  <li>• Don't use liquid glass effects on dark backgrounds without proper contrast adjustment</li>
                  <li>• Don't overuse glassmorphism - limit to 2-3 key interface elements</li>
                  <li>• Avoid animating backdrop-filter property directly due to performance costs</li>
                  <li>• Don't ignore keyboard navigation and screen reader accessibility</li>
                  <li>• Avoid using liquid glass for critical interface elements without sufficient contrast</li>
                  <li>• Don't implement glass effects without testing on actual Apple devices</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
} 