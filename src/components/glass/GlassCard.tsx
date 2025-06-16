'use client';

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  preset?: 'ios' | 'vision-pro' | 'macos' | 'material';
  onClick?: () => void;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  preset = 'ios',
  onClick,
  hover = true
}) => {
  // 根据预设选择样式
  const getPresetStyles = () => {
    switch (preset) {
      case 'ios':
        return 'bg-white/10 border-white/20';
      case 'vision-pro':
        return 'bg-white/15 border-white/25';
      case 'macos':
        return 'bg-white/8 border-white/15';
      case 'material':
        return 'bg-white/12 border-white/30';
      default:
        return 'bg-white/10 border-white/20';
    }
  };

  const cardStyles = `
    ${getPresetStyles()}
    rounded-xl
    border
    backdrop-blur-lg
    transition-all
    duration-300
    shadow-lg
    ${hover ? 'hover:scale-105 hover:bg-white/15' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  return (
    <div 
      className={cardStyles}
      onClick={onClick}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard; 