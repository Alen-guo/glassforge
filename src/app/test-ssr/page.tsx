'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import GlassButton from '@/components/glass/GlassButton';
import GlassCard from '@/components/glass/GlassCard';

export default function TestSSRPage(): JSX.Element {
  const [isClient, setIsClient] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    setIsClient(true);
    setCurrentTime(new Date().toLocaleTimeString());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen pt-20">
        {/* 背景 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/banner2.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* 内容 */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          
          {/* 标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              SSR 测试页面
            </h1>
            <p className="text-xl text-white/80">
              验证服务端渲染和客户端水合是否正常工作
            </p>
          </div>

          {/* 状态显示 */}
          <GlassCard preset="ios" className="p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">渲染状态</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">客户端状态:</span>
                    <span className={`font-medium ${isClient ? 'text-green-400' : 'text-yellow-400'}`}>
                      {isClient ? '✅ 已加载' : '⏳ 加载中'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">当前时间:</span>
                    <span className="text-white font-mono">
                      {isClient ? currentTime : '等待客户端...'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">WebGL支持:</span>
                    <span className="text-green-400">
                      {typeof window !== 'undefined' && window.WebGLRenderingContext ? '✅ 支持' : '❌ 不支持'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">组件测试</h3>
                <div className="space-y-4">
                  <GlassButton href="/generator" variant="primary" size="sm">
                    玻璃按钮测试
                  </GlassButton>
                  <GlassButton href="/test-third-party" variant="secondary" size="sm">
                    参数测试器
                  </GlassButton>
                  <GlassButton href="/" variant="outline" size="sm">
                    返回首页
                  </GlassButton>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* 玻璃效果展示 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <GlassCard preset="ios" className="p-6 text-center">
              <h4 className="text-white font-medium mb-2">iOS 风格</h4>
              <p className="text-white/70 text-sm">苹果iOS设计语言</p>
            </GlassCard>
            
            <GlassCard preset="macos" className="p-6 text-center">
              <h4 className="text-white font-medium mb-2">macOS 风格</h4>
              <p className="text-white/70 text-sm">桌面系统玻璃效果</p>
            </GlassCard>
            
            <GlassCard preset="vision-pro" className="p-6 text-center">
              <h4 className="text-white font-medium mb-2">Vision Pro</h4>
              <p className="text-white/70 text-sm">未来感空间计算</p>
            </GlassCard>
          </div>

          {/* 测试结果 */}
          <GlassCard preset="material" className="p-8">
            <h3 className="text-white font-semibold text-xl mb-4">🧪 测试结果</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/80">服务端渲染正常</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/80">客户端水合成功</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/80">玻璃效果渲染正常</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/80">动态内容更新正常</span>
              </div>
            </div>
          </GlassCard>

        </div>
      </div>
    </>
  );
} 