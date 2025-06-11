import React from 'react';
import Link from 'next/link';
import { Home, Search, ArrowLeft, Sparkles } from 'lucide-react';

export default function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404动画效果 */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold text-white/10 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-card p-8 backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl">
              <Sparkles className="w-16 h-16 text-blue-400 mx-auto animate-pulse" />
            </div>
          </div>
        </div>

        {/* 错误信息 */}
        <div className="glass-card p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            页面未找到
          </h1>
          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            抱歉，您访问的页面不存在。可能是链接错误，或者页面已被移动。
            让我们帮您回到正确的地方继续探索 <strong>液态玻璃效果</strong>！
          </p>

          {/* 建议链接 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link 
              href="/"
              className="glass-button p-4 text-left hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <Home className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-white font-semibold">返回首页</div>
                  <div className="text-white/60 text-sm">探索液态玻璃生成器</div>
                </div>
              </div>
            </Link>

            <Link 
              href="/generator"
              className="glass-button p-4 text-left hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-white font-semibold">玻璃生成器</div>
                  <div className="text-white/60 text-sm">创建苹果风格效果</div>
                </div>
              </div>
            </Link>

            <Link 
              href="/examples"
              className="glass-button p-4 text-left hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <Search className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-white font-semibold">效果示例</div>
                  <div className="text-white/60 text-sm">查看预设效果</div>
                </div>
              </div>
            </Link>

            <Link 
              href="/tutorials"
              className="glass-button p-4 text-left hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <ArrowLeft className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="text-white font-semibold">学习教程</div>
                  <div className="text-white/60 text-sm">掌握玻璃效果</div>
                </div>
              </div>
            </Link>
          </div>

          {/* 搜索建议 */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-white/60 text-sm mb-4">
              或者尝试搜索您需要的内容：
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'liquid glass',
                'iOS效果',
                'Vision Pro',
                'CSS生成器',
                'React组件',
                'glassmorphism'
              ].map((term, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 底部链接 */}
        <div className="flex items-center justify-center space-x-6 text-white/60 text-sm">
          <Link href="/" className="hover:text-white transition-colors">
            首页
          </Link>
          <span>•</span>
          <Link href="/about" className="hover:text-white transition-colors">
            关于我们
          </Link>
          <span>•</span>
          <Link href="/docs" className="hover:text-white transition-colors">
            文档
          </Link>
        </div>
      </div>
    </div>
  );
} 