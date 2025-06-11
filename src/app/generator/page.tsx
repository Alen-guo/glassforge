'use client';

import React, { useState, useCallback } from 'react';
import { Copy, Download, Settings, Sparkles, Code, Palette, CheckCircle, RefreshCw, Heart } from 'lucide-react';
import { useGlassActions, useGlassParams, useCurrentPreset } from '@/hooks/use-glass-store';
import Navbar from '@/components/layout/Navbar';

export default function GeneratorPage() {
  const [copySuccess, setCopySuccess] = useState(false);
  const [exportFormat, setExportFormat] = useState<'css' | 'react' | 'vue' | 'flutter' | 'swift' | 'kotlin'>('css');
  const [backgroundImage, setBackgroundImage] = useState<string>('banner1.jpg');
  
  // 使用玻璃效果状态管理
  const currentPreset = useCurrentPreset();
  const glassParams = useGlassParams();
  const {
    applyPreset,
    updateParam,
    generateCSS,
    generateReactCode,
    generateVueCode,
    generateFlutterCode,
    resetParams
  } = useGlassActions();

  // 复制到剪贴板功能
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  }, []);

  // 获取当前格式的代码
  const getCurrentCode = useCallback(() => {
    switch (exportFormat) {
      case 'css': return generateCSS();
      case 'react': return generateReactCode();
      case 'vue': return generateVueCode();
      case 'flutter': return generateFlutterCode();
      default: return generateCSS();
    }
  }, [exportFormat, generateCSS, generateReactCode, generateVueCode, generateFlutterCode]);

  // 生成实时样式对象
  const getLiveGlassStyle = useCallback(() => {
    const { 
      transparency, blur, borderOpacity, reflection, depth, 
      width, height, padding, borderRadius, borderWidth,
      shadowType, gradientOverlay, innerGlow,
      enableAnimation, animationDuration, hoverEffect
    } = glassParams;

    // 根据阴影类型调整阴影
    const getShadow = () => {
      const baseOpacity = 0.1 + (depth * 0.03);
      switch (shadowType) {
        case 'soft':
          return `0 ${depth * 3}px ${depth * 12}px rgba(31, 38, 135, ${baseOpacity * 0.7})`;
        case 'medium':
          return `0 ${depth * 2}px ${depth * 8}px rgba(31, 38, 135, ${baseOpacity})`;
        case 'hard':
          return `0 ${depth * 1}px ${depth * 4}px rgba(31, 38, 135, ${baseOpacity * 1.3})`;
        case 'glow':
          return `0 0 ${depth * 6}px rgba(99, 102, 241, ${baseOpacity}), 0 ${depth * 2}px ${depth * 8}px rgba(31, 38, 135, ${baseOpacity})`;
        default:
          return `0 ${depth * 2}px ${depth * 8}px rgba(31, 38, 135, ${baseOpacity})`;
      }
    };

    return {
      width: `${width}px`,
      height: `${height}px`,
      padding: `${padding}px`,
      background: `rgba(255, 255, 255, ${transparency / 100})`,
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      border: `${borderWidth}px solid rgba(255, 255, 255, ${borderOpacity / 100})`,
      borderRadius: `${borderRadius}px`,
      boxShadow: innerGlow 
        ? `${getShadow()}, inset 0 1px 0 rgba(255, 255, 255, ${reflection / 100})`
        : getShadow(),
      backgroundImage: gradientOverlay 
        ? `linear-gradient(135deg, rgba(255, 255, 255, ${reflection / 300}), transparent 50%)`
        : 'none',
      transition: enableAnimation ? `all ${animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)` : 'none',
      cursor: hoverEffect !== 'none' ? 'pointer' : 'default'
    };
  }, [glassParams]);

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Liquid Glass Generator
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Create stunning <strong>liquid glass effects</strong> with real-time preview. 
              Customize every parameter and export clean code for any platform.
            </p>
            <div className="flex items-center justify-center space-x-6 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Real-time Preview</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Multi-platform Export</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Apple Design System</span>
              </div>
            </div>
          </div>

          {/* 生成器主界面 - 新的布局 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            
            {/* 左侧：参数控制面板 */}
            <div className="lg:col-span-1 space-y-6 max-h-screen overflow-y-auto">
              
              {/* 背景选择 */}
              <div className="glass-card">
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center space-x-2">
                  <span>🖼️</span>
                  <span>Preview Background</span>
                </h3>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { file: 'banner1.jpg', name: 'Cosmic Purple', },
                    { file: 'banner2.jpg', name: 'Aurora Gradient',},
                    { file: 'banner3.jpg', name: 'Ocean Waves', }
                  ].map((bg) => (
                    <button
                      key={bg.file}
                      onClick={() => setBackgroundImage(bg.file)}
                      className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        backgroundImage === bg.file
                          ? 'border-blue-400 ring-2 ring-blue-400/30'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                      style={{
                        backgroundImage: `url('/images/${bg.file}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Apple 预设选择 */}
              <div className="glass-card">
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center space-x-2">
                  <Palette className="w-5 h-5" />
                  <span>Apple Design Presets</span>
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'ios', name: 'iOS Glass', desc: 'Classic iOS frosted glass', color: 'from-blue-500 to-cyan-500' },
                    { id: 'vision-pro', name: 'Vision Pro', desc: 'Spatial computing glass', color: 'from-purple-500 to-pink-500' },
                    { id: 'macos', name: 'macOS Window', desc: 'Desktop window glass', color: 'from-green-500 to-blue-500' },
                    { id: 'material', name: 'Material Glass', desc: 'Google Material Design', color: 'from-orange-500 to-red-500' },
                  ].map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => applyPreset(preset.id as any)}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        currentPreset === preset.id
                          ? 'bg-blue-500/20 border-blue-400 text-white'
                          : 'glass-button text-white border-white/20 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${preset.color} rounded-lg flex-shrink-0`}></div>
                        <div className="flex-1">
                          <div className="font-medium">{preset.name}</div>
                          <div className="text-xs text-white/60">{preset.desc}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 高级参数控制 */}
              <div className="glass-card">
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Glass Parameters</span>
                </h3>
                <div className="space-y-6">
                  
                  {/* 透明度 */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-white text-sm font-medium">Transparency</label>
                      <span className="text-blue-300 text-sm font-mono">{glassParams.transparency}%</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={glassParams.transparency}
                      onChange={(e) => updateParam('transparency', parseInt(e.target.value))}
                      className="glass-slider w-full"
                    />
                    <div className="text-xs text-white/60 mt-1">💡 Lower = more transparent</div>
                  </div>

                  {/* 模糊强度 */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-white text-sm font-medium">Blur Intensity</label>
                      <span className="text-blue-300 text-sm font-mono">{glassParams.blur}px</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="25"
                      value={glassParams.blur}
                      onChange={(e) => updateParam('blur', parseInt(e.target.value))}
                      className="glass-slider w-full"
                    />
                    <div className="text-xs text-white/60 mt-1">💡 Sweet spot: 8-15px</div>
                  </div>

                  {/* 边框透明度 */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-white text-sm font-medium">Border Opacity</label>
                      <span className="text-blue-300 text-sm font-mono">{glassParams.borderOpacity}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      value={glassParams.borderOpacity}
                      onChange={(e) => updateParam('borderOpacity', parseInt(e.target.value))}
                      className="glass-slider w-full"
                    />
                    <div className="text-xs text-white/60 mt-1">💡 Subtle borders work best</div>
                  </div>

                  {/* 玻璃反射 */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-white text-sm font-medium">Glass Reflection</label>
                      <span className="text-blue-300 text-sm font-mono">{glassParams.reflection}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="80"
                      value={glassParams.reflection}
                      onChange={(e) => updateParam('reflection', parseInt(e.target.value))}
                      className="glass-slider w-full"
                    />
                    <div className="text-xs text-white/60 mt-1">💡 Adds subtle highlight</div>
                  </div>

                  {/* 深度等级 */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-white text-sm font-medium">Depth Level</label>
                      <span className="text-blue-300 text-sm font-mono">{glassParams.depth}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="8"
                      value={glassParams.depth}
                      onChange={(e) => updateParam('depth', parseInt(e.target.value))}
                      className="glass-slider w-full"
                    />
                    <div className="text-xs text-white/60 mt-1">💡 Controls shadow intensity</div>
                  </div>

                  {/* 新增：尺寸控制 */}
                  <div className="border-t border-white/20 pt-6">
                    <h4 className="text-white font-semibold text-sm mb-4">📐 Size & Shape</h4>
                    
                    {/* 宽度 */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-white text-sm font-medium">Width</label>
                        <span className="text-blue-300 text-sm font-mono">{glassParams.width}px</span>
                      </div>
                      <input
                        type="range"
                        min="150"
                        max="500"
                        value={glassParams.width}
                        onChange={(e) => updateParam('width', parseInt(e.target.value))}
                        className="glass-slider w-full"
                      />
                      <div className="text-xs text-white/60 mt-1">💡 Fits preview area</div>
                    </div>

                    {/* 高度 */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-white text-sm font-medium">Height</label>
                        <span className="text-blue-300 text-sm font-mono">{glassParams.height}px</span>
                      </div>
                      <input
                        type="range"
                        min="80"
                        max="300"
                        value={glassParams.height}
                        onChange={(e) => updateParam('height', parseInt(e.target.value))}
                        className="glass-slider w-full"
                      />
                      <div className="text-xs text-white/60 mt-1">💡 Optimal for components</div>
                    </div>

                    {/* 内边距 */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-white text-sm font-medium">Padding</label>
                        <span className="text-blue-300 text-sm font-mono">{glassParams.padding}px</span>
                      </div>
                      <input
                        type="range"
                        min="8"
                        max="40"
                        value={glassParams.padding}
                        onChange={(e) => updateParam('padding', parseInt(e.target.value))}
                        className="glass-slider w-full"
                      />
                      <div className="text-xs text-white/60 mt-1">💡 Inner spacing</div>
                    </div>

                    {/* 圆角 */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-white text-sm font-medium">Border Radius</label>
                        <span className="text-blue-300 text-sm font-mono">{glassParams.borderRadius}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="40"
                        value={glassParams.borderRadius}
                        onChange={(e) => updateParam('borderRadius', parseInt(e.target.value))}
                        className="glass-slider w-full"
                      />
                      <div className="text-xs text-white/60 mt-1">💡 0=square, 40=very round</div>
                    </div>

                    {/* 边框宽度 */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-white text-sm font-medium">Border Width</label>
                        <span className="text-blue-300 text-sm font-mono">{glassParams.borderWidth}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="5"
                        value={glassParams.borderWidth}
                        onChange={(e) => updateParam('borderWidth', parseInt(e.target.value))}
                        className="glass-slider w-full"
                      />
                    </div>
                  </div>

                  {/* 新增：组件类型 */}
                  <div className="border-t border-white/20 pt-6">
                    <h4 className="text-white font-semibold text-sm mb-4">🧩 Component Type</h4>
                    <select 
                      value={glassParams.componentType}
                      onChange={(e) => updateParam('componentType', e.target.value)}
                      className="w-full glass-select text-sm"
                    >
                      <option value="card">Card Component</option>
                      <option value="button">Button</option>
                      <option value="modal">Modal Dialog</option>
                      <option value="navbar">Navigation Bar</option>
                      <option value="input">Input Field</option>
                      <option value="badge">Badge/Tag</option>
                    </select>
                  </div>

                  {/* 新增：阴影类型 */}
                  <div className="border-t border-white/20 pt-6">
                    <h4 className="text-white font-semibold text-sm mb-4">🌟 Shadow Type</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {['soft', 'medium', 'hard', 'glow'].map((type) => (
                        <button
                          key={type}
                          onClick={() => updateParam('shadowType', type)}
                          className={`p-2 rounded-lg text-xs transition-all ${
                            glassParams.shadowType === type
                              ? 'bg-blue-500/20 border border-blue-400 text-blue-300'
                              : 'bg-white/5 border border-white/20 text-white/70 hover:bg-white/10'
                          }`}
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 新增：视觉效果 */}
                  <div className="border-t border-white/20 pt-6">
                    <h4 className="text-white font-semibold text-sm mb-4">✨ Visual Effects</h4>
                    
                    <label className="flex items-center space-x-3 text-white text-sm mb-3">
                      <input
                        type="checkbox"
                        checked={glassParams.gradientOverlay}
                        onChange={(e) => updateParam('gradientOverlay', e.target.checked)}
                        className="w-4 h-4 rounded bg-white/20 border-white/30"
                      />
                      <span>Gradient Overlay</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 text-white text-sm">
                      <input
                        type="checkbox"
                        checked={glassParams.innerGlow}
                        onChange={(e) => updateParam('innerGlow', e.target.checked)}
                        className="w-4 h-4 rounded bg-white/20 border-white/30"
                      />
                      <span>Inner Glow</span>
                    </label>
                  </div>

                  {/* 动画和交互控制 */}
                  <div className="border-t border-white/20 pt-6">
                    <h4 className="text-white font-semibold text-sm mb-4">🎬 Animation & Interaction</h4>
                    
                    <label className="flex items-center space-x-3 text-white text-sm mb-4">
                      <input
                        type="checkbox"
                        checked={glassParams.enableAnimation}
                        onChange={(e) => updateParam('enableAnimation', e.target.checked)}
                        className="w-4 h-4 rounded bg-white/20 border-white/30"
                      />
                      <span>Enable Smooth Animation</span>
                    </label>
                    
                    {glassParams.enableAnimation && (
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-white text-sm">Animation Duration</label>
                          <span className="text-blue-300 text-sm font-mono">{glassParams.animationDuration}ms</span>
                        </div>
                        <input
                          type="range"
                          min="100"
                          max="1000"
                          step="50"
                          value={glassParams.animationDuration}
                          onChange={(e) => updateParam('animationDuration', parseInt(e.target.value))}
                          className="glass-slider w-full"
                        />
                      </div>
                    )}

                    {/* 悬停效果 */}
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Hover Effect</label>
                      <div className="text-xs text-white/60 mb-3">🖱️ Hover over the preview component to see the effect</div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { value: 'none', label: 'None' },
                          { value: 'lift', label: 'Lift' },
                          { value: 'glow', label: 'Glow' },
                          { value: 'scale', label: 'Scale' }
                        ].map((effect) => (
                          <button
                            key={effect.value}
                            onClick={() => updateParam('hoverEffect', effect.value)}
                            className={`p-2 rounded-lg text-xs transition-all ${
                              glassParams.hoverEffect === effect.value
                                ? 'bg-blue-500/20 border border-blue-400 text-blue-300'
                                : 'bg-white/5 border border-white/20 text-white/70 hover:bg-white/10'
                            }`}
                          >
                            {effect.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 重置按钮 */}
                  <button
                    onClick={resetParams}
                    className="w-full glass-button text-white py-3 text-sm flex items-center justify-center space-x-2 mt-6"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Reset to Default</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 中间：固定预览区域 */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 glass-card p-6 min-h-[600px]">
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Live Preview</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Real-time</span>
                </h3>

                {/* 背景选择器 */}
                <div className="mb-4">
                  <label className="text-white text-sm font-medium mb-2 block">🖼️ Preview Background</label>
                  <select
                    value={backgroundImage}
                    onChange={(e) => setBackgroundImage(e.target.value)}
                    className="w-full glass-select text-sm"
                  >
                    <option value="banner1.jpg">Cosmic Purple - Deep space vibes</option>
                    <option value="banner2.jpg">Aurora Gradient - Northern lights</option>
                    <option value="banner3.jpg">Ocean Waves - Fluid patterns</option>
                  </select>
                </div>
                
                {/* 预览背景 */}
                <div 
                  className="rounded-xl p-6 min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    backgroundImage: `url('/images/${backgroundImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* 添加半透明遮罩以提高对比度 */}
                  <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                  
                  {/* 内容区域 */}
                  <div className="relative z-10 w-full flex items-center justify-center">
                  {/* 动态组件预览 */}
                  {(() => {
                    const style = getLiveGlassStyle();
                    
                    // 增强悬停效果，使其更明显
                    const getHoverEffects = () => {
                      if (glassParams.hoverEffect === 'none') return {};
                      
                      const effects: any = {
                        transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)'
                      };
                      
                      switch (glassParams.hoverEffect) {
                        case 'lift':
                          effects.transform = 'translateY(-8px)';
                          effects.boxShadow = `${style.boxShadow}, 0 20px 40px rgba(0, 0, 0, 0.3)`;
                          break;
                        case 'scale':
                          effects.transform = 'scale(1.05)';
                          effects.boxShadow = `${style.boxShadow}, 0 15px 30px rgba(0, 0, 0, 0.2)`;
                          break;
                        case 'glow':
                          effects.filter = 'brightness(1.2) saturate(1.3)';
                          effects.boxShadow = `${style.boxShadow}, 0 0 30px rgba(99, 102, 241, 0.4)`;
                          break;
                      }
                      
                      return effects;
                    };
                    
                    const hoverStyle = {
                      ...style,
                      ...getHoverEffects()
                    };
                    
                    // 通用悬停处理函数
                    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
                      if (glassParams.hoverEffect !== 'none') {
                        Object.assign((e.currentTarget as HTMLElement).style, getHoverEffects());
                      }
                    };
                    
                    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
                      if (glassParams.hoverEffect !== 'none') {
                        Object.assign((e.currentTarget as HTMLElement).style, {
                          transform: 'none',
                          filter: 'none',
                          boxShadow: style.boxShadow
                        });
                      }
                    };

                    switch (glassParams.componentType) {
                      case 'button':
                        return (
                          <div 
                            style={style}
                            className="flex items-center justify-center space-x-3 font-semibold text-white hover:text-white transition-all cursor-pointer preview-content"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <Sparkles className="w-5 h-5" />
                            <span>Glass Button</span>
                          </div>
                        );
                      
                      case 'modal':
                        return (
                          <div 
                            style={style}
                            className="space-y-6 relative overflow-hidden cursor-pointer preview-content"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-white font-bold text-xl">Modal Dialog</h3>
                              <button className="text-white/60 hover:text-white">✕</button>
                            </div>
                            <div className="space-y-4">
                              <p className="text-white/80 text-sm">
                                This is a beautiful liquid glass modal with {glassParams.transparency}% transparency.
                              </p>
                              <div className="flex space-x-3">
                                <div className="flex-1 bg-white/10 rounded-lg py-2 px-3 text-center text-white text-sm">
                                  Cancel
                                </div>
                                <div className="flex-1 bg-blue-500/30 rounded-lg py-2 px-3 text-center text-white text-sm font-semibold">
                                  Confirm
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      
                      case 'navbar':
                        return (
                          <div 
                            style={{...style, width: '100%', maxWidth: '400px'}}
                            className="flex items-center justify-between cursor-pointer"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className="flex items-center space-x-4 preview-content">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg"></div>
                              <span className="text-white font-semibold">Logo</span>
                            </div>
                            <div className="flex items-center space-x-6 text-white/80 text-sm">
                              <span>Home</span>
                              <span>About</span>
                              <span>Contact</span>
                            </div>
                          </div>
                        );
                      
                      case 'input':
                        return (
                          <div 
                            style={{...style, width: '100%', maxWidth: '300px'}} 
                            className="space-y-2 cursor-pointer"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <label className="text-white text-sm font-medium preview-content">Glass Input Field</label>
                            <div className="relative">
                              <input 
                                type="text" 
                                placeholder="Type something..." 
                                className="w-full bg-transparent text-white placeholder-white/50 border-0 outline-none"
                              />
                              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                            </div>
                          </div>
                        );
                      
                      case 'badge':
                        return (
                          <div 
                            style={{...style, display: 'inline-flex', alignItems: 'center', padding: '8px 16px'}}
                            className="text-white text-sm font-medium cursor-pointer preview-content"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                            Online Badge
                          </div>
                        );
                      
                      default: // card
                        return (
                          <div 
                            style={style}
                            className="text-center space-y-4 relative overflow-hidden cursor-pointer"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                              <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <div className="preview-content">
                              <h4 className="text-white text-lg font-bold mb-2">Liquid Glass Card</h4>
                              <p className="text-white/70 text-sm leading-relaxed">
                                {glassParams.transparency}% transparency, {glassParams.blur}px blur
                              </p>
                            </div>
                            <div className="flex space-x-3">
                              <div className="flex-1 bg-white/10 rounded-lg py-2 text-white text-sm text-center">
                                Action
                              </div>
                              <div className="flex-1 bg-blue-500/20 rounded-lg py-2 text-white text-sm text-center">
                                Primary
                              </div>
                            </div>
                          </div>
                        );
                    }
                  })()}
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧：代码导出面板 */}
            <div className="lg:col-span-1 space-y-6 max-h-screen overflow-y-auto">
              
              {/* 导出格式选择 */}
              <div className="glass-card">
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span>Export Code</span>
                </h3>
                
                <div className="space-y-4">
                  {/* 分类格式选择 */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {/* 样式框架 */}
                    <div className="col-span-2">
                      <h4 className="text-white/70 text-xs font-medium mb-2 uppercase tracking-wide">🎨 Styles</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {[
                          { value: 'css', label: 'CSS', desc: 'Pure CSS' },
                          { value: 'tailwind', label: 'Tailwind', desc: 'Utility classes' }
                        ].map((format) => (
                          <button
                            key={format.value}
                            onClick={() => setExportFormat(format.value as any)}
                            className={`p-2 rounded text-xs transition-all ${
                              exportFormat === format.value
                                ? 'bg-blue-500/20 border border-blue-400 text-blue-300'
                                : 'bg-white/5 border border-white/20 text-white/70 hover:bg-white/10'
                            }`}
                          >
                            <div className="font-medium">{format.label}</div>
                            <div className="text-xs opacity-60">{format.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 前端框架 */}
                    <div className="col-span-2 mt-3">
                      <h4 className="text-white/70 text-xs font-medium mb-2 uppercase tracking-wide">⚛️ Components</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {[
                          { value: 'react', label: 'React', desc: 'JSX component' },
                          { value: 'react-ts', label: 'React TS', desc: 'TypeScript' },
                          { value: 'vue', label: 'Vue 3', desc: 'Composition API' },
                          { value: 'svelte', label: 'Svelte', desc: 'SvelteKit' }
                        ].map((format) => (
                          <button
                            key={format.value}
                            onClick={() => setExportFormat(format.value as any)}
                            className={`p-2 rounded text-xs transition-all ${
                              exportFormat === format.value
                                ? 'bg-blue-500/20 border border-blue-400 text-blue-300'
                                : 'bg-white/5 border border-white/20 text-white/70 hover:bg-white/10'
                            }`}
                          >
                            <div className="font-medium">{format.label}</div>
                            <div className="text-xs opacity-60">{format.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 移动端 */}
                    <div className="col-span-2 mt-3">
                      <h4 className="text-white/70 text-xs font-medium mb-2 uppercase tracking-wide">📱 Mobile</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {[
                          { value: 'flutter', label: 'Flutter', desc: 'Dart widget' },
                          { value: 'swiftui', label: 'SwiftUI', desc: 'iOS native' }
                        ].map((format) => (
                          <button
                            key={format.value}
                            onClick={() => setExportFormat(format.value as any)}
                            className={`p-2 rounded text-xs transition-all ${
                              exportFormat === format.value
                                ? 'bg-blue-500/20 border border-blue-400 text-blue-300'
                                : 'bg-white/5 border border-white/20 text-white/70 hover:bg-white/10'
                            }`}
                          >
                            <div className="font-medium">{format.label}</div>
                            <div className="text-xs opacity-60">{format.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-4 text-xs font-mono text-green-400 max-h-80 overflow-y-auto">
                    <pre className="whitespace-pre-wrap">{getCurrentCode()}</pre>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => copyToClipboard(getCurrentCode())}
                      className="flex-1 glass-button text-white py-3 text-sm flex items-center justify-center space-x-2"
                    >
                      {copySuccess ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copySuccess ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                    <button className="glass-button text-white px-4 py-3 text-sm">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 快速操作 */}
              <div className="glass-card">
                <h3 className="text-white font-semibold text-lg mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full glass-button text-white py-3 text-sm text-left px-4 flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>Save as Favorite</span>
                  </button>
                  <button className="w-full glass-button text-white py-3 text-sm text-left px-4 flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Export as Image</span>
                  </button>
                  <button className="w-full glass-button text-white py-3 text-sm text-left px-4 flex items-center space-x-2">
                    <Code className="w-4 h-4" />
                    <span>Share Preview Link</span>
                  </button>
                </div>
              </div>

              {/* 技巧提示 */}
              <div className="glass-card">
                <h3 className="text-white font-semibold text-lg mb-4">💡 Pro Tips</h3>
                <div className="space-y-3 text-sm text-white/80">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lower transparency for subtle effects</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use Vision Pro preset for spatial UI</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Enable animations for better UX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 