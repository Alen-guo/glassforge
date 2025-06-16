'use client';

import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';

// 动态导入第三方包，避免SSR问题
const LiquidGlass = dynamic(() => import('liquid-glass-react'), {
  ssr: false,
  loading: () => (
    <div className="text-white animate-pulse p-4 border border-white/20 rounded bg-white/5 backdrop-blur-sm">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
      <p className="text-center mt-2 text-sm">Loading liquid glass...</p>
    </div>
  )
});

// 参数接口定义
interface LiquidGlassParams {
  displacementScale: number;
  blurAmount: number;
  saturation: number;
  aberrationIntensity: number;
  elasticity: number;
  cornerRadius: number;
  mode: 'standard' | 'polar' | 'prominent' | 'shader';
}

export default function TestThirdPartyPage(): JSX.Element {
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [params, setParams] = useState<LiquidGlassParams>({
    displacementScale: 30,
    blurAmount: 0.01,
    saturation: 100,
    aberrationIntensity: 1,
    elasticity: 0.1,
    cornerRadius: 16,
    mode: 'standard'
  });

  useEffect(() => {
    setIsClient(true);
    // 延迟设置加载状态，确保组件完全挂载
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // 参数更新函数
  const updateParam = useCallback((key: keyof LiquidGlassParams, value: any) => {
    setParams(prev => ({ ...prev, [key]: value }));
  }, []);

  // 重置参数函数
  const resetParams = useCallback(() => {
    setParams({
      displacementScale: 30,
      blurAmount: 0.01,
      saturation: 100,
      aberrationIntensity: 1,
      elasticity: 0.1,
      cornerRadius: 16,
      mode: 'standard'
    });
  }, []);

  // 服务端渲染时显示加载状态
  if (!isClient) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/banner2.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 text-white text-xl flex items-center space-x-3">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Initializing Parameter Tester...</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* 可滚动的主容器 */}
      <div className="min-h-screen pt-20 overflow-x-hidden">
        
        {/* 背景图片区域 */}
        <div 
          className="min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url('/images/banner2.jpg')`,
            backgroundAttachment: 'scroll'
          }}
        >
          {/* 背景遮罩 */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* 左侧参数控制面板 */}
          <div className="fixed left-4 top-20 bottom-4 w-72 z-30 overflow-y-auto">
            <div 
              className="p-6 h-full rounded-xl border border-white/10"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <h2 className="text-white font-bold text-xl mb-6">🎛️ Parameters</h2>
            
            <div className="space-y-6">
              
              {/* Displacement Scale */}
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Displacement Scale: {params.displacementScale}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={params.displacementScale}
                  onChange={(e) => updateParam('displacementScale', Number(e.target.value))}
                    className="slider w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                  <div className="text-xs text-white/60 mt-1">Controls distortion strength</div>
              </div>

              {/* Blur Amount */}
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Blur Amount: {params.blurAmount.toFixed(3)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="0.2"
                  step="0.001"
                  value={params.blurAmount}
                  onChange={(e) => updateParam('blurAmount', Number(e.target.value))}
                    className="slider w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                  <div className="text-xs text-white/60 mt-1">Background blur intensity</div>
              </div>

              {/* Saturation */}
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Saturation: {params.saturation}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="1"
                  value={params.saturation}
                  onChange={(e) => updateParam('saturation', Number(e.target.value))}
                    className="slider w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                  <div className="text-xs text-white/60 mt-1">Color vibrancy level</div>
              </div>

              {/* Aberration Intensity */}
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Aberration Intensity: {params.aberrationIntensity.toFixed(1)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={params.aberrationIntensity}
                  onChange={(e) => updateParam('aberrationIntensity', Number(e.target.value))}
                    className="slider w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                  <div className="text-xs text-white/60 mt-1">Chromatic aberration effect</div>
              </div>

              {/* Elasticity */}
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Elasticity: {params.elasticity.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={params.elasticity}
                  onChange={(e) => updateParam('elasticity', Number(e.target.value))}
                    className="slider w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                  <div className="text-xs text-white/60 mt-1">Animation responsiveness</div>
              </div>

              {/* Corner Radius */}
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Corner Radius: {params.cornerRadius}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={params.cornerRadius}
                  onChange={(e) => updateParam('cornerRadius', Number(e.target.value))}
                    className="slider w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                  <div className="text-xs text-white/60 mt-1">Corner roundness</div>
              </div>

              {/* Mode Selection */}
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                    Mode: {params.mode.toUpperCase()}
                </label>
                <select
                  value={params.mode}
                  onChange={(e) => updateParam('mode', e.target.value as any)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="standard">Standard</option>
                  <option value="polar">Polar</option>
                  <option value="prominent">Prominent</option>
                  <option value="shader">Shader</option>
                </select>
                  <div className="text-xs text-white/60 mt-1">Rendering mode</div>
              </div>

              {/* 重置按钮 */}
                <button
                  onClick={resetParams}
                  className="w-full py-3 px-4 bg-blue-600/80 hover:bg-blue-600 border border-blue-400/50 rounded-lg text-white font-medium transition-all duration-200 hover:scale-105"
                >
                  🔄 Reset to Default
                </button>

                {/* 预设按钮 */}
                <div className="space-y-3">
                  <h4 className="text-white/90 font-medium text-sm">Quick Presets</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setParams({
                        displacementScale: 60,
                        blurAmount: 0.08,
                        saturation: 150,
                        aberrationIntensity: 2,
                        elasticity: 0.2,
                        cornerRadius: 8,
                        mode: 'shader'
                      })}
                      className="py-2 px-3 bg-purple-600/80 hover:bg-purple-600 border border-purple-400/50 rounded text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      🔥 Intense
                    </button>
                    <button
                      onClick={() => setParams({
                        displacementScale: 15,
                        blurAmount: 0.02,
                        saturation: 70,
                        aberrationIntensity: 0.5,
                        elasticity: 0.05,
                        cornerRadius: 24,
                        mode: 'prominent'
                      })}
                      className="py-2 px-3 bg-green-600/80 hover:bg-green-600 border border-green-400/50 rounded text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      ✨ Subtle
                    </button>
                    <button
                      onClick={() => setParams({
                        displacementScale: 45,
                        blurAmount: 0.06,
                        saturation: 120,
                        aberrationIntensity: 1.2,
                        elasticity: 0.12,
                        cornerRadius: 18,
                        mode: 'polar'
                      })}
                      className="py-2 px-3 bg-cyan-600/80 hover:bg-cyan-600 border border-cyan-400/50 rounded text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      🌊 Wave
                    </button>
              <button
                onClick={() => setParams({
                        displacementScale: 80,
                        blurAmount: 0.15,
                        saturation: 200,
                        aberrationIntensity: 3,
                        elasticity: 0.3,
                        cornerRadius: 6,
                        mode: 'shader'
                      })}
                      className="py-2 px-3 bg-red-600/80 hover:bg-red-600 border border-red-400/50 rounded text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      🌪️ Extreme
              </button>
                  </div>
                </div>

            </div>
          </div>
        </div>

        {/* 右侧信息面板 */}
          <div className="fixed right-4 top-20 bottom-4 w-72 z-30 overflow-y-auto">
            <div 
              className="p-6 h-full rounded-xl border border-white/10"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <h2 className="text-white font-bold text-xl mb-6">📊 Live Stats</h2>
            
            <div className="space-y-6 text-white/80">
              <div>
                  <h3 className="text-white font-medium mb-3">🎯 Current Values</h3>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/70">Mode:</span>
                      <span className="text-white font-medium">{params.mode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Displacement:</span>
                      <span className="text-white">{params.displacementScale}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Blur:</span>
                      <span className="text-white">{params.blurAmount.toFixed(3)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Saturation:</span>
                      <span className="text-white">{params.saturation}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Aberration:</span>
                      <span className="text-white">{params.aberrationIntensity.toFixed(1)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Elasticity:</span>
                      <span className="text-white">{params.elasticity.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-3">🎨 Mode Info</h3>
                  <p className="text-sm text-white/70">
                    {params.mode === 'standard' && 'Basic liquid glass distortion with balanced performance and smooth animations.'}
                    {params.mode === 'polar' && 'Polar coordinate-based distortion creating unique circular patterns and flows.'}
                    {params.mode === 'prominent' && 'Enhanced visibility with high contrast rendering for maximum impact.'}
                    {params.mode === 'shader' && 'Advanced WebGL shaders with complex mathematical transformations.'}
                </p>
              </div>

              <div>
                  <h3 className="text-white font-medium mb-3">🚀 Performance</h3>
                <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/70">WebGL:</span>
                      <span className="text-green-400">
                        {typeof window !== 'undefined' && window.WebGLRenderingContext ? 'Supported' : 'Not Available'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Rendering:</span>
                      <span className="text-green-400">Hardware Accelerated</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Frame Rate:</span>
                      <span className="text-green-400">60 FPS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">GPU Memory:</span>
                      <span className="text-blue-400">Optimized</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-3">💡 Pro Tips</h3>
                  <ul className="text-sm space-y-2 list-disc list-inside text-white/70">
                    <li>Higher displacement = more dramatic distortion</li>
                    <li>Lower blur values = sharper background details</li>
                    <li>Saturation affects color vibrancy intensity</li>
                    <li>Try different modes for unique visual styles</li>
                    <li>Lower elasticity = smoother, fluid animations</li>
                    <li>Experiment with corner radius for shape variety</li>
                  </ul>
                </div>

                  <div>
                  <h3 className="text-white font-medium mb-3">🎪 Quick Actions</h3>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => setParams({
                        displacementScale: 80,
                        blurAmount: 0.15,
                        saturation: 200,
                        aberrationIntensity: 3,
                        elasticity: 0.3,
                        cornerRadius: 6,
                        mode: 'shader'
                      })}
                      className="py-2 px-3 bg-red-600/80 hover:bg-red-600 border border-red-400/50 rounded text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      🌪️ Extreme
                    </button>
                    <button
                      onClick={() => setParams({
                        displacementScale: 45,
                        blurAmount: 0.06,
                        saturation: 120,
                        aberrationIntensity: 1.2,
                        elasticity: 0.12,
                        cornerRadius: 18,
                        mode: 'polar'
                      })}
                      className="py-2 px-3 bg-cyan-600/80 hover:bg-cyan-600 border border-cyan-400/50 rounded text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      🌊 Wave
                    </button>
                    <button
                      onClick={() => setParams({
                        displacementScale: 25,
                        blurAmount: 0.04,
                        saturation: 90,
                        aberrationIntensity: 0.7,
                        elasticity: 0.06,
                        cornerRadius: 30,
                        mode: 'prominent'
                      })}
                      className="py-2 px-3 bg-amber-600/80 hover:bg-amber-600 border border-amber-400/50 rounded text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      ✨ Elegant
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
          {/* 中央内容区域 */}
          <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20" style={{marginLeft: '300px', marginRight: '300px'}}>
            
            {/* 导航提示 */}
            <div className="w-full flex justify-center mb-8">
              <div className="flex items-center gap-4 px-6 py-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80 text-sm">Controls</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80 text-sm">Live Preview</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80 text-sm">Statistics</span>
                </div>
              </div>
            </div>

            {/* 页面标题 */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                🧪 Liquid Glass Parameter Tester
              </h1>
              <p className="text-xl text-white/90 drop-shadow mb-4">
                Adjust parameters in real-time
              </p>
              <div className="flex justify-center gap-6 text-sm text-white/70">
                <span>🎛️ 6+ Parameters</span>
                <span>⚡ Real-time Updates</span>
                <span>🎨 4 Render Modes</span>
                <span>🚀 WebGL Powered</span>
              </div>
            </div>

            {/* 主要的 Liquid Glass 展示区域 */}
            <div className="w-full flex justify-center mb-30">
              {isLoaded ? (
                <LiquidGlass
                  displacementScale={params.displacementScale}
                  blurAmount={params.blurAmount}
                  saturation={params.saturation}
                  aberrationIntensity={params.aberrationIntensity}
                  elasticity={params.elasticity}
                  cornerRadius={params.cornerRadius}
                  mode={params.mode}
                >
                  <div className="text-center ">
                    <h2 className="text-white font-bold text-3xl mb-4">
                      Liquid Glass Effect
                    </h2>
                    <p className="text-white/90 text-lg mb-3">
                      Real-time parameter adjustment
                    </p>
                    <div className="text-white/70 text-base">
                      {params.mode.toUpperCase()} Mode | Scale: {params.displacementScale}
                    </div>
                  </div>
                </LiquidGlass>
              ) : (
                <div className="text-white animate-pulse p-8 border border-white/20 rounded bg-white/5 backdrop-blur-sm min-w-[400px] min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className="w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
                      <div className="w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <p className="text-lg">Loading Liquid Glass Effect...</p>
                  </div>
                </div>
              )}
            </div>

            {/* 继续可滚动的展示区域 */}
            <div className="w-full mx-auto relative"
              style={{marginLeft: '30px', marginRight: '20px'}}
            >

              {/* 效果对比展示 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                
                {/* 对比1: 低强度 */}
                <div className="text-center">
                  {isLoaded ? (
                    <LiquidGlass
                      displacementScale={15}
                      blurAmount={0.02}
                      saturation={70}
                      aberrationIntensity={0.5}
                      elasticity={0.05}
                      cornerRadius={24}
                      padding="30px 40px"
                      mode="prominent"
                    >
                      <div className="text-center">
                        <h3 className="text-white font-semibold text-lg mb-2">
                          Subtle Effect
                        </h3>
                        <p className="text-white/80 text-sm">
                          Minimal distortion for elegant design
                        </p>
                      </div>
                    </LiquidGlass>
                  ) : (
                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-white">
                      <div className="animate-pulse">Loading...</div>
                    </div>
                  )}
                  <p className="text-white/60 text-sm mt-4">Perfect for professional interfaces</p>
                </div>

                {/* 对比2: 高强度 */}
                <div className="text-center">
                  {isLoaded ? (
                    <LiquidGlass
                      displacementScale={70}
                      blurAmount={0.12}
                      saturation={180}
                      aberrationIntensity={2.5}
                      elasticity={0.25}
                      cornerRadius={8}
                      padding="30px 40px"
                      mode="shader"
                    >
                      <div className="text-center">
                        <h3 className="text-white font-semibold text-lg mb-2">
                          Dynamic Effect
                        </h3>
                        <p className="text-white/80 text-sm">
                          High-impact visual experience
                        </p>
                      </div>
                    </LiquidGlass>
                  ) : (
                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-white">
                      <div className="animate-pulse">Loading...</div>
                    </div>
                  )}
                  <p className="text-white/60 text-sm mt-4">Great for creative projects</p>
                </div>

              </div>

              {/* 模式展示 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Standard Mode */}
                <div className="text-center">
                  {isLoaded ? (
                    <LiquidGlass
                      displacementScale={35}
                      blurAmount={0.05}
                      saturation={100}
                      aberrationIntensity={1}
                      elasticity={0.1}
                      cornerRadius={12}
                      padding="24px 32px"
                      mode="standard"
                    >
                      <div className="text-center">
                        <h4 className="text-white font-medium text-sm mb-1">
                          Standard
                        </h4>
                        <p className="text-white/70 text-xs">
                          Balanced
                        </p>
                      </div>
                    </LiquidGlass>
                  ) : (
                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white text-sm">
                      Loading...
                    </div>
                  )}
                </div>

                {/* Polar Mode */}
                <div className="text-center">
                  {isLoaded ? (
                    <LiquidGlass
                      displacementScale={35}
                      blurAmount={0.05}
                      saturation={100}
                      aberrationIntensity={1}
                      elasticity={0.1}
                      cornerRadius={12}
                      padding="24px 32px"
                      mode="polar"
                    >
                      <div className="text-center">
                        <h4 className="text-white font-medium text-sm mb-1">
                          Polar
                        </h4>
                        <p className="text-white/70 text-xs">
                          Circular
                        </p>
                      </div>
                    </LiquidGlass>
                  ) : (
                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white text-sm">
                      Loading...
                    </div>
                  )}
                </div>

                {/* Prominent Mode */}
                <div className="text-center">
                  {isLoaded ? (
                    <LiquidGlass
                      displacementScale={35}
                      blurAmount={0.05}
                      saturation={100}
                      aberrationIntensity={1}
                      elasticity={0.1}
                      cornerRadius={12}
                      padding="24px 32px"
                      mode="prominent"
                    >
                      <div className="text-center">
                        <h4 className="text-white font-medium text-sm mb-1">
                          Prominent
                        </h4>
                        <p className="text-white/70 text-xs">
                          Enhanced
                        </p>
                      </div>
                    </LiquidGlass>
                  ) : (
                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white text-sm">
                      Loading...
                    </div>
                  )}
                </div>

                {/* Shader Mode */}
                <div className="text-center">
                  {isLoaded ? (
                    <LiquidGlass
                      displacementScale={35}
                      blurAmount={0.05}
                      saturation={100}
                      aberrationIntensity={1}
                      elasticity={0.1}
                      cornerRadius={12}
                      padding="24px 32px"
                      mode="shader"
                    >
                      <div className="text-center">
                        <h4 className="text-white font-medium text-sm mb-1">
                          Shader
                        </h4>
                        <p className="text-white/70 text-xs">
                          Advanced
                        </p>
                      </div>
                    </LiquidGlass>
                  ) : (
                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white text-sm">
                      Loading...
                    </div>
                  )}
                </div>

              </div>

            </div>

            {/* 技术信息和使用指南 */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* 关于液态玻璃效果 */}
              <div 
                className="px-8 py-6 rounded-2xl border border-white/10"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'none'
                }}
              >
                <h3 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
                  💎 About Liquid Glass
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Advanced WebGL-powered effects inspired by Apple's WWDC 2024 design language. 
                  Each effect uses real-time mathematical transformations and shader computations 
                  to create smooth, organic distortions.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Technology:</span>
                    <span className="text-white">WebGL 2.0 + GLSL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Performance:</span>
                    <span className="text-green-400">60 FPS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Compatibility:</span>
                    <span className="text-blue-400">Modern Browsers</span>
                  </div>
                </div>
              </div>

              {/* 使用指南 */}
              <div 
                className="px-8 py-6 rounded-2xl border border-white/10"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'none'
                }}
              >
                <h3 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
                  🎯 Usage Guide
                </h3>
                <div className="space-y-3 text-sm text-white/80">
                  <div>
                    <span className="text-white font-medium">🎛️ Left Panel:</span> Adjust all effect parameters in real-time
                  </div>
              <div>
                    <span className="text-white font-medium">📊 Right Panel:</span> Monitor values and performance metrics
              </div>
              <div>
                    <span className="text-white font-medium">🎨 Center:</span> Live preview with multiple comparison modes
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-white font-medium">💡 Pro Tip:</span> 
                    <span className="text-white/70"> Try the preset buttons for quick effect combinations!</span>
                  </div>
                </div>
              </div>

            </div>

            {/* 底部技术标签 */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                WebGL 2.0
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                Real-time Shaders
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-400/30">
                Hardware Accelerated
              </span>
              <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-400/30">
                Apple Design
              </span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-400/30">
                Interactive UI
              </span>
        </div>

          </div>
        </div>

      </div>

      {/* 自定义样式 */}
      <style jsx>{`
        /* 滑块样式 */
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }

        /* 滚动条样式 */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        /* 平滑滚动 */
        html {
          scroll-behavior: smooth;
        }

        /* select样式优化 */
        select option {
          background: rgba(0, 0, 0, 0.9);
          color: white;
        }
      `}</style>
    </>
  );
}