'use client';

import React from 'react';

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  target,
  rel,
  type = 'button'
}) => {
  // 根据变体选择样式
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-white/10 border-white/20 hover:bg-white/20';
      case 'secondary':
        return 'bg-white/5 border-white/15 hover:bg-white/15';
      case 'outline':
        return 'bg-white/5 border-white/30 hover:bg-white/10';
      default:
        return 'bg-white/10 border-white/20 hover:bg-white/20';
    }
  };

  // 根据尺寸设置样式
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  // 完整的玻璃效果样式
  const glassStyles = `
    ${getSizeStyles()}
    ${getVariantStyles()}
    font-medium
    text-white
    rounded-lg
    border
    backdrop-blur-lg
    transition-all
    duration-300
    transform
    hover:scale-105
    active:scale-95
    shadow-lg
    ${disabled ? 'opacity-50 pointer-events-none' : ''}
    ${className}
  `;

  // 如果有 href 属性，渲染为链接
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`inline-block ${glassStyles}`}
        onClick={onClick}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
        }}
      >
        {children}
      </a>
    );
  }

  // 渲染为按钮
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={glassStyles}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
      }}
    >
      {children}
    </button>
  );
};

export default GlassButton; 