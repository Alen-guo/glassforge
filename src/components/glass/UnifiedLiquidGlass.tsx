'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// 动态导入第三方液态玻璃组件
const LiquidGlass = dynamic(() => import('liquid-glass-react'), {
  ssr: false,
  loading: () => (
    <div className="glass-card animate-pulse">
      <div className="text-white/60 text-sm">Loading glass effect...</div>
    </div>
  )
});

// 统一的液态玻璃组件参数接口
interface UnifiedLiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // 液态玻璃参数
  displacementScale?: number;
  blurAmount?: number;
  saturation?: number;
  aberrationIntensity?: number;
  elasticity?: number;
  cornerRadius?: number;
  padding?: string;
  mode?: 'standard' | 'polar' | 'prominent' | 'shader';
  // 预设模式
  preset?: 'ios' | 'vision-pro' | 'macos' | 'material' | 'custom';
}

// 预设配置
const PRESETS = {
  ios: {
    displacementScale: 15,
    blurAmount: 0.02,
    saturation: 70,
    aberrationIntensity: 0.5,
    elasticity: 0.05,
    cornerRadius: 20,
    mode: 'prominent' as const
  },
  'vision-pro': {
    displacementScale: 35,
    blurAmount: 0.08,
    saturation: 120,
    aberrationIntensity: 1.5,
    elasticity: 0.15,
    cornerRadius: 28,
    mode: 'shader' as const
  },
  macos: {
    displacementScale: 25,
    blurAmount: 0.04,
    saturation: 90,
    aberrationIntensity: 0.8,
    elasticity: 0.08,
    cornerRadius: 14,
    mode: 'standard' as const
  },
  material: {
    displacementScale: 20,
    blurAmount: 0.03,
    saturation: 100,
    aberrationIntensity: 0.6,
    elasticity: 0.06,
    cornerRadius: 8,
    mode: 'prominent' as const
  },
  custom: {
    displacementScale: 30,
    blurAmount: 0.05,
    saturation: 100,
    aberrationIntensity: 1,
    elasticity: 0.1,
    cornerRadius: 16,
    mode: 'standard' as const
  }
};

export default function UnifiedLiquidGlass({
  children,
  className = '',
  style = {},
  preset = 'custom',
  displacementScale,
  blurAmount,
  saturation,
  aberrationIntensity,
  elasticity,
  cornerRadius,
  padding = '24px',
  mode,
  ...props
}: UnifiedLiquidGlassProps): JSX.Element {
  
  // 获取预设配置
  const presetConfig = PRESETS[preset];
  
  // 合并参数，用户自定义参数优先
  const finalParams = {
    displacementScale: displacementScale ?? presetConfig.displacementScale,
    blurAmount: blurAmount ?? presetConfig.blurAmount,
    saturation: saturation ?? presetConfig.saturation,
    aberrationIntensity: aberrationIntensity ?? presetConfig.aberrationIntensity,
    elasticity: elasticity ?? presetConfig.elasticity,
    cornerRadius: cornerRadius ?? presetConfig.cornerRadius,
    mode: mode ?? presetConfig.mode,
    padding
  };

  return (
    <div className={`relative ${className}`} style={style} {...props}>
      <LiquidGlass
        displacementScale={finalParams.displacementScale}
        blurAmount={finalParams.blurAmount}
        saturation={finalParams.saturation}
        aberrationIntensity={finalParams.aberrationIntensity}
        elasticity={finalParams.elasticity}
        cornerRadius={finalParams.cornerRadius}
        padding={finalParams.padding}
        mode={finalParams.mode}
      >
        {children}
      </LiquidGlass>
    </div>
  );
}

// 导出预设类型供其他组件使用
export type LiquidGlassPreset = keyof typeof PRESETS;
export { PRESETS as LIQUID_GLASS_PRESETS }; 