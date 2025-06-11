import type {
  GlassEffectParams,
  GlassPreset,
  GlassPresetType,
  GeneratedCSS,
  ExportFormat,
  ExportConfig
} from '@/types/glass';

/**
 * 默认的玻璃效果参数
 */
export const DEFAULT_GLASS_PARAMS: GlassEffectParams = {
  // 基础玻璃效果
  transparency: 10,
  blur: 20,
  borderOpacity: 20,
  reflection: 50,
  depth: 5,

  // 尺寸和形状
  width: 300,
  height: 180,
  padding: 24,
  borderRadius: 16,
  borderWidth: 1,

  // 组件类型和样式
  componentType: 'card',
  shadowType: 'medium',
  gradientOverlay: true,
  innerGlow: true,

  // 动画和交互
  animationDuration: 300,
  enableAnimation: true,
  hoverEffect: 'lift',
};

/**
 * 预设配置
 */
export const GLASS_PRESETS: Record<GlassPresetType, GlassPreset> = {
  ios: {
    name: 'iOS Glass',
    type: 'ios',
    description: 'Classic iOS frosted glass effect',
    params: {
      // 基础玻璃效果
      transparency: 1,
      blur: 1,
      borderOpacity: 20,
      reflection: 30,
      depth: 4,
      // 尺寸和形状
      width: 280,
      height: 160,
      padding: 20,
      borderRadius: 20,
      borderWidth: 2,
      // 组件类型和样式
      componentType: 'card',
      shadowType: 'soft',
      gradientOverlay: true,
      innerGlow: false,
      // 动画和交互
      animationDuration: 300,
      enableAnimation: true,
      hoverEffect: 'lift',
    },
  },
  'vision-pro': {
    name: 'Vision Pro',
    type: 'vision-pro',
    description: 'Next-generation spatial glass effect',
    params: {
      // 极高透明度和模糊，营造空间计算的深度感
      transparency: 3,
      blur: 25,
      borderOpacity: 8,
      reflection: 80,
      depth: 8,
      width: 350,
      height: 220,
      padding: 32,
      borderRadius: 28,
      borderWidth: 1,
      componentType: 'modal',
      shadowType: 'glow',
      gradientOverlay: true,
      innerGlow: true,
      animationDuration: 500,
      enableAnimation: true,
      hoverEffect: 'glow',
    },
  },
  macos: {
    name: 'macOS Glass',
    type: 'macos',
    description: 'macOS window glass effect',
    params: {
      // 经典桌面窗口风格，中等透明度，清晰边框
      transparency: 18,
      blur: 12,
      borderOpacity: 35,
      reflection: 25,
      depth: 4,
      width: 320,
      height: 190,
      padding: 24,
      borderRadius: 14,
      borderWidth: 1,
      componentType: 'navbar',
      shadowType: 'medium',
      gradientOverlay: false,
      innerGlow: false,
      animationDuration: 250,
      enableAnimation: true,
      hoverEffect: 'scale',
    },
  },
  material: {
    name: 'Material Glass',
    type: 'material',
    description: 'Google Material Design glass morphism',
    params: {
      // Material Design风格，低模糊，强对比，硬阴影
      transparency: 25,
      blur: 6,
      borderOpacity: 45,
      reflection: 10,
      depth: 6,
      width: 300,
      height: 170,
      padding: 20,
      borderRadius: 8,
      borderWidth: 2,
      componentType: 'button',
      shadowType: 'hard',
      gradientOverlay: false,
      innerGlow: false,
      animationDuration: 200,
      enableAnimation: true,
      hoverEffect: 'lift',
    },
  },
  custom: {
    name: 'Custom',
    type: 'custom',
    description: 'Fully customizable glass effect',
    params: DEFAULT_GLASS_PARAMS,
  },
};

/**
 * 生成液态玻璃CSS代码
 */
export function generateLiquidGlassCSS(params: GlassEffectParams): GeneratedCSS {
  const {
    transparency,
    blur,
    borderOpacity,
    reflection,
    depth,
    width,
    height,
    padding,
    borderRadius,
    borderWidth,
    shadowType,
    gradientOverlay,
    innerGlow,
    animationDuration,
    enableAnimation,
    hoverEffect
  } = params;

  // 计算具体的CSS值
  const backgroundAlpha = transparency / 100;
  const borderAlpha = borderOpacity / 100;
  const blurValue = `${blur}px`;

  // 根据阴影类型计算阴影效果
  const getShadow = () => {
    const baseOpacity = Math.min(depth * 0.05, 0.3);
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

  const reflectionGradient = gradientOverlay && reflection > 0
    ? `linear-gradient(135deg, rgba(255, 255, 255, ${reflection / 1000}), transparent 50%)`
    : 'none';

  // 根据悬停效果计算变换
  const getHoverTransform = () => {
    switch (hoverEffect) {
      case 'lift': return 'translateY(-4px)';
      case 'scale': return 'scale(1.02)';
      case 'glow': return 'none';
      default: return 'none';
    }
  };

  const getHoverFilter = () => {
    return hoverEffect === 'glow' ? 'brightness(1.1)' : 'none';
  };

  // CSS变量
  const variables = {
    '--glass-transparency': backgroundAlpha.toString(),
    '--glass-blur': blurValue,
    '--glass-border-opacity': borderAlpha.toString(),
    '--glass-width': `${width}px`,
    '--glass-height': `${height}px`,
    '--glass-padding': `${padding}px`,
    '--glass-border-radius': `${borderRadius}px`,
    '--glass-border-width': `${borderWidth}px`,
    '--glass-animation-duration': `${animationDuration}ms`,
  };

  // 生成CSS代码
  const cssCode = `
.liquid-glass {
  /* 尺寸和布局 */
  width: ${width}px;
  height: ${height}px;
  padding: ${padding}px;
  
  /* 背景和透明度 */
  background: rgba(255, 255, 255, ${backgroundAlpha});
  
  /* 模糊效果 */
  backdrop-filter: blur(${blurValue});
  -webkit-backdrop-filter: blur(${blurValue});
  
  /* 边框 */
  border: ${borderWidth}px solid rgba(255, 255, 255, ${borderAlpha});
  border-radius: ${borderRadius}px;
  
  /* 阴影和深度 */
  box-shadow: ${getShadow()}${innerGlow ? `, inset 0 1px 0 rgba(255, 255, 255, ${reflection / 100})` : ''};
  
  /* 反射效果 */
  ${reflectionGradient !== 'none' ? `background-image: ${reflectionGradient};` : ''}
  
  /* 动画 */
  ${enableAnimation ? `transition: all ${animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1);` : ''}
  
  /* 悬停指针 */
  cursor: ${hoverEffect !== 'none' ? 'pointer' : 'default'};
}

.liquid-glass:hover {
  ${enableAnimation && hoverEffect !== 'none' ? `
  background: rgba(255, 255, 255, ${Math.min(backgroundAlpha + 0.02, 0.2)});
  transform: ${getHoverTransform()};
  filter: ${getHoverFilter()};
  ` : ''}
}

/* 响应式设计 */
@media (max-width: 768px) {
  .liquid-glass {
    backdrop-filter: blur(${Math.max(blur * 0.7, 5)}px);
    -webkit-backdrop-filter: blur(${Math.max(blur * 0.7, 5)}px);
  }
}

/* 无障碍支持 */
@media (prefers-reduced-motion: reduce) {
  .liquid-glass {
    transition: none;
  }
}`.trim();

  return {
    code: cssCode,
    variables,
    className: 'liquid-glass',
  };
}

/**
 * 生成React组件代码
 */
export function generateReactComponent(params: GlassEffectParams, config: ExportConfig): string {
  const { code } = generateLiquidGlassCSS(params);
  const { includeComments, classPrefix = 'Glass' } = config;

  const componentName = `${classPrefix}Component`;
  const className = `${classPrefix.toLowerCase()}-glass`;

  const comments = includeComments ? `
/**
 * Liquid Glass React Component
 * Generated by GlassForge
 */` : '';

  return `${comments}
import React from 'react';
import './glass.css';

interface ${componentName}Props {
  children?: React.ReactNode;
  className?: string;
}

const ${componentName}: React.FC<${componentName}Props> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={\`${className} \${className}\`}>
      {children}
    </div>
  );
};

export default ${componentName};

/* CSS Styles */
${code.replace(/liquid-glass/g, className)}`.trim();
}

/**
 * 生成Vue组件代码
 */
export function generateVueComponent(params: GlassEffectParams, config: ExportConfig): string {
  const { code } = generateLiquidGlassCSS(params);
  const { includeComments, classPrefix = 'Glass' } = config;

  const componentName = `${classPrefix}Component`;
  const className = `${classPrefix.toLowerCase()}-glass`;

  const comments = includeComments ? `
<!-- Liquid Glass Vue Component -->
<!-- Generated by GlassForge -->` : '';

  return `${comments}
<template>
  <div :class="[\`${className}\`, className]">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  className?: string;
}

defineProps<Props>();
</script>

<style scoped>
${code.replace(/liquid-glass/g, className)}
</style>`.trim();
}

/**
 * 生成Flutter代码
 */
export function generateFlutterCode(params: GlassEffectParams, config: ExportConfig): string {
  const { includeComments, classPrefix = 'Glass' } = config;
  const {
    transparency,
    blur,
    borderOpacity,
  } = params;

  const comments = includeComments ? `
// Liquid Glass Flutter Widget
// Generated by GlassForge` : '';

  return `${comments}
import 'dart:ui';
import 'package:flutter/material.dart';

class ${classPrefix}Container extends StatelessWidget {
  final Widget? child;
  final double? width;
  final double? height;
  final EdgeInsetsGeometry? padding;
  final EdgeInsetsGeometry? margin;

  const ${classPrefix}Container({
    Key? key,
    this.child,
    this.width,
    this.height,
    this.padding,
    this.margin,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: height,
      margin: margin,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16.0),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: ${blur}, sigmaY: ${blur}),
          child: Container(
            padding: padding,
            decoration: BoxDecoration(
              color: Colors.white.withOpacity(${transparency / 100}),
              borderRadius: BorderRadius.circular(16.0),
              border: Border.all(
                color: Colors.white.withOpacity(${borderOpacity / 100}),
                width: 1.0,
              ),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.1),
                  blurRadius: 32.0,
                  offset: Offset(0, 8),
                ),
              ],
            ),
            child: child,
          ),
        ),
      ),
    );
  }
}`.trim();
}

/**
 * 根据格式生成代码
 */
export function generateCode(
  params: GlassEffectParams,
  format: ExportFormat,
  config: ExportConfig
): string {
  switch (format) {
    case 'css':
      return generateLiquidGlassCSS(params).code;
    case 'tailwind':
      return generateTailwindCode(params);
    case 'react':
      return generateReactComponent(params, config);
    case 'react-ts':
      return generateReactTSComponent(params, config);
    case 'vue':
      return generateVueComponent(params, config);
    case 'vue-ts':
      return generateVueTSComponent(params, config);
    case 'svelte':
      return generateSvelteComponent(params, config);
    case 'flutter':
      return generateFlutterCode(params, config);
    case 'swiftui':
      return generateSwiftUICode(params, config);
    case 'compose':
      return generateComposeCode(params, config);
    case 'emotion':
      return generateEmotionCode(params, config);
    case 'styled-components':
      return generateStyledComponentsCode(params, config);
    default:
      return generateLiquidGlassCSS(params).code;
  }
}

/**
 * 生成Tailwind CSS代码
 */
export function generateTailwindCode(params: GlassEffectParams): string {
  const { transparency, blur, borderOpacity, borderRadius, padding } = params;

  return `<!-- Tailwind Glass Component -->
<div class="
  backdrop-blur-${Math.round(blur / 4)}
  bg-white/[${transparency / 100}]
  border
  border-white/[${borderOpacity / 100}]
  rounded-${borderRadius < 8 ? 'sm' : borderRadius < 16 ? 'lg' : 'xl'}
  p-${Math.round(padding / 4)}
  shadow-lg
  hover:shadow-xl
  transition-all
  duration-300
">
  <!-- Content goes here -->
</div>`;
}

/**
 * 生成React TypeScript组件
 */
export function generateReactTSComponent(params: GlassEffectParams, config: ExportConfig): string {
  const { includeComments, classPrefix = 'Glass' } = config;
  const componentName = `${classPrefix}Component`;

  const comments = includeComments ? `
/**
 * Liquid Glass React TypeScript Component
 * Generated by GlassForge
 */` : '';

  return `${comments}
import React, { ReactNode } from 'react';

interface ${componentName}Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ${componentName}: React.FC<${componentName}Props> = ({ 
  children, 
  className = '',
  onClick 
}) => {
  const glassStyle: React.CSSProperties = {
    width: '${params.width}px',
    height: '${params.height}px',
    padding: '${params.padding}px',
    background: 'rgba(255, 255, 255, ${params.transparency / 100})',
    backdropFilter: 'blur(${params.blur}px)',
    WebkitBackdropFilter: 'blur(${params.blur}px)',
    border: '${params.borderWidth}px solid rgba(255, 255, 255, ${params.borderOpacity / 100})',
    borderRadius: '${params.borderRadius}px',
    transition: '${params.enableAnimation ? `all ${params.animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)` : 'none'}',
    cursor: onClick ? 'pointer' : 'default'
  };

  return (
    <div 
      style={glassStyle} 
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ${componentName};`;
}

/**
 * 生成Vue TypeScript组件
 */
export function generateVueTSComponent(params: GlassEffectParams, config: ExportConfig): string {
  const { includeComments } = config;

  const comments = includeComments ? `
<!-- Liquid Glass Vue TypeScript Component -->
<!-- Generated by GlassForge -->` : '';

  return `${comments}
<template>
  <div 
    :style="glassStyle" 
    :class="className"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
});

const emit = defineEmits<{
  click: []
}>();

const glassStyle = computed(() => ({
  width: '${params.width}px',
  height: '${params.height}px',
  padding: '${params.padding}px',
  background: 'rgba(255, 255, 255, ${params.transparency / 100})',
  backdropFilter: 'blur(${params.blur}px)',
  WebkitBackdropFilter: 'blur(${params.blur}px)',
  border: '${params.borderWidth}px solid rgba(255, 255, 255, ${params.borderOpacity / 100})',
  borderRadius: '${params.borderRadius}px',
  transition: '${params.enableAnimation ? `all ${params.animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)` : 'none'}'
}));

const handleClick = () => {
  emit('click');
};
</script>`;
}

/**
 * 生成Svelte组件
 */
export function generateSvelteComponent(params: GlassEffectParams, config: ExportConfig): string {
  const { includeComments } = config;

  const comments = includeComments ? `
<!-- Liquid Glass Svelte Component -->
<!-- Generated by GlassForge -->` : '';

  return `${comments}
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let className: string = '';
  
  const dispatch = createEventDispatcher();
  
  function handleClick() {
    dispatch('click');
  }
</script>

<div 
  class={className}
  style="
    width: ${params.width}px;
    height: ${params.height}px;
    padding: ${params.padding}px;
    background: rgba(255, 255, 255, ${params.transparency / 100});
    backdrop-filter: blur(${params.blur}px);
    -webkit-backdrop-filter: blur(${params.blur}px);
    border: ${params.borderWidth}px solid rgba(255, 255, 255, ${params.borderOpacity / 100});
    border-radius: ${params.borderRadius}px;
    transition: ${params.enableAnimation ? `all ${params.animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)` : 'none'};
  "
  on:click={handleClick}
  role="button"
  tabindex="0"
  on:keydown={(e) => e.key === 'Enter' && handleClick()}
>
  <slot />
</div>`;
}

/**
 * 生成SwiftUI代码
 */
export function generateSwiftUICode(params: GlassEffectParams, config: ExportConfig): string {
  const { includeComments } = config;

  const comments = includeComments ? `
// Liquid Glass SwiftUI Component
// Generated by GlassForge` : '';

  return `${comments}
import SwiftUI

struct GlassCard<Content: View>: View {
    let content: Content
    
    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }
    
    var body: some View {
        content
            .frame(
                width: ${params.width},
                height: ${params.height}
            )
            .padding(${params.padding})
            .background(
                Rectangle()
                    .fill(.ultraThinMaterial)
                    .opacity(${params.transparency / 100})
            )
            .background(
                RoundedRectangle(cornerRadius: ${params.borderRadius})
                    .stroke(
                        Color.white.opacity(${params.borderOpacity / 100}),
                        lineWidth: ${params.borderWidth}
                    )
            )
            .clipShape(RoundedRectangle(cornerRadius: ${params.borderRadius}))
            ${params.enableAnimation ? `.animation(.easeInOut(duration: ${params.animationDuration / 1000}), value: UUID())` : ''}
    }
}

// Usage:
// GlassCard {
//     VStack {
//         Text("Hello, Glass!")
//         Button("Action") { }
//     }
// }`;
}

/**
 * 生成Jetpack Compose代码
 */
export function generateComposeCode(params: GlassEffectParams, config: ExportConfig): string {
  const { includeComments } = config;

  const comments = includeComments ? `
/**
 * Liquid Glass Jetpack Compose Component
 * Generated by GlassForge
 */` : '';

  return `${comments}
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.blur
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@Composable
fun GlassCard(
    modifier: Modifier = Modifier,
    onClick: (() -> Unit)? = null,
    content: @Composable () -> Unit
) {
    Box(
        modifier = modifier
            .width(${params.width}.dp)
            .height(${params.height}.dp)
            .background(
                color = Color.White.copy(alpha = ${params.transparency / 100}f),
                shape = RoundedCornerShape(${params.borderRadius}.dp)
            )
            .border(
                width = ${params.borderWidth}.dp,
                color = Color.White.copy(alpha = ${params.borderOpacity / 100}f),
                shape = RoundedCornerShape(${params.borderRadius}.dp)
            )
            .blur(radius = ${params.blur}.dp)
            .padding(${params.padding}.dp)
                         \${onClick != null ? '.clickable { onClick() }' : ''}
    ) {
        content()
    }
}

// Usage:
// GlassCard(
//     onClick = { /* Handle click */ }
// ) {
//     Column {
//         Text("Hello, Glass!")
//         Button("Action") { }
//     }
// }`;
}

/**
 * 生成Emotion代码
 */
export function generateEmotionCode(params: GlassEffectParams, config: ExportConfig): string {
  const { includeComments } = config;

  const comments = includeComments ? `
/** @jsxImportSource @emotion/react */
// Liquid Glass Emotion Component
// Generated by GlassForge` : '';

  return `${comments}
import { css } from '@emotion/react';

const glassStyle = css\`
  width: ${params.width}px;
  height: ${params.height}px;
  padding: ${params.padding}px;
  background: rgba(255, 255, 255, ${params.transparency / 100});
  backdrop-filter: blur(${params.blur}px);
  -webkit-backdrop-filter: blur(${params.blur}px);
  border: ${params.borderWidth}px solid rgba(255, 255, 255, ${params.borderOpacity / 100});
  border-radius: ${params.borderRadius}px;
  transition: ${params.enableAnimation ? `all ${params.animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)` : 'none'};
  
  &:hover {
    transform: ${params.hoverEffect === 'lift' ? 'translateY(-2px)' :
      params.hoverEffect === 'scale' ? 'scale(1.02)' : 'none'};
    filter: ${params.hoverEffect === 'glow' ? 'brightness(1.1)' : 'none'};
  }
\`;

const GlassCard = ({ children, className, ...props }) => (
  <div css={glassStyle} className={className} {...props}>
    {children}
  </div>
);

export default GlassCard;`;
}

/**
 * 生成Styled Components代码
 */
export function generateStyledComponentsCode(params: GlassEffectParams, config: ExportConfig): string {
  const { includeComments } = config;

  const comments = includeComments ? `
// Liquid Glass Styled Components
// Generated by GlassForge` : '';

  return `${comments}
import styled from 'styled-components';

const GlassCard = styled.div\`
  width: ${params.width}px;
  height: ${params.height}px;
  padding: ${params.padding}px;
  background: rgba(255, 255, 255, ${params.transparency / 100});
  backdrop-filter: blur(${params.blur}px);
  -webkit-backdrop-filter: blur(${params.blur}px);
  border: ${params.borderWidth}px solid rgba(255, 255, 255, ${params.borderOpacity / 100});
  border-radius: ${params.borderRadius}px;
  transition: ${params.enableAnimation ? `all ${params.animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)` : 'none'};
  
  &:hover {
    transform: ${params.hoverEffect === 'lift' ? 'translateY(-2px)' :
      params.hoverEffect === 'scale' ? 'scale(1.02)' : 'none'};
    filter: ${params.hoverEffect === 'glow' ? 'brightness(1.1)' : 'none'};
  }
\`;

export default GlassCard;`;
}

/**
 * 验证玻璃效果参数
 */
export function validateGlassParams(params: Partial<GlassEffectParams>): GlassEffectParams {
  const validated: GlassEffectParams = {
    // 基础玻璃效果 - 优化范围以获得更好的视觉效果
    transparency: Math.max(1, Math.min(50, params.transparency ?? DEFAULT_GLASS_PARAMS.transparency)),
    blur: Math.max(2, Math.min(25, params.blur ?? DEFAULT_GLASS_PARAMS.blur)),
    borderOpacity: Math.max(5, Math.min(60, params.borderOpacity ?? DEFAULT_GLASS_PARAMS.borderOpacity)),
    reflection: Math.max(0, Math.min(80, params.reflection ?? DEFAULT_GLASS_PARAMS.reflection)),
    depth: Math.max(1, Math.min(8, params.depth ?? DEFAULT_GLASS_PARAMS.depth)),

    // 尺寸和形状 - 适应预览区域
    width: Math.max(150, Math.min(500, params.width ?? DEFAULT_GLASS_PARAMS.width)),
    height: Math.max(80, Math.min(300, params.height ?? DEFAULT_GLASS_PARAMS.height)),
    padding: Math.max(8, Math.min(40, params.padding ?? DEFAULT_GLASS_PARAMS.padding)),
    borderRadius: Math.max(0, Math.min(40, params.borderRadius ?? DEFAULT_GLASS_PARAMS.borderRadius)),
    borderWidth: Math.max(0, Math.min(5, params.borderWidth ?? DEFAULT_GLASS_PARAMS.borderWidth)),

    // 组件类型和样式
    componentType: params.componentType ?? DEFAULT_GLASS_PARAMS.componentType,
    shadowType: params.shadowType ?? DEFAULT_GLASS_PARAMS.shadowType,
    gradientOverlay: params.gradientOverlay ?? DEFAULT_GLASS_PARAMS.gradientOverlay,
    innerGlow: params.innerGlow ?? DEFAULT_GLASS_PARAMS.innerGlow,

    // 动画和交互
    animationDuration: Math.max(0, Math.min(2000, params.animationDuration ?? DEFAULT_GLASS_PARAMS.animationDuration)),
    enableAnimation: params.enableAnimation ?? DEFAULT_GLASS_PARAMS.enableAnimation,
    hoverEffect: params.hoverEffect ?? DEFAULT_GLASS_PARAMS.hoverEffect,
  };

  return validated;
}

/**
 * 简化的CSS代码生成（用于实时预览）
 */
export function generateSimpleCSS(params: GlassEffectParams): string {
  const {
    transparency, blur, borderOpacity, reflection, depth,
    width, height, padding, borderRadius, borderWidth,
    shadowType, gradientOverlay, innerGlow,
    animationDuration, enableAnimation, hoverEffect
  } = params;

  // 根据阴影类型计算阴影
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

  const getHoverTransform = () => {
    switch (hoverEffect) {
      case 'lift': return 'translateY(-4px)';
      case 'scale': return 'scale(1.02)';
      case 'glow': return 'none';
      default: return 'none';
    }
  };

  const getHoverFilter = () => {
    return hoverEffect === 'glow' ? 'brightness(1.1)' : 'none';
  };

  return `.liquid-glass {
  width: ${width}px;
  height: ${height}px;
  padding: ${padding}px;
  background: rgba(255, 255, 255, ${transparency / 100});
  backdrop-filter: blur(${blur}px);
  -webkit-backdrop-filter: blur(${blur}px);
  border: ${borderWidth}px solid rgba(255, 255, 255, ${borderOpacity / 100});
  border-radius: ${borderRadius}px;
  box-shadow: ${getShadow()}${innerGlow ? `, inset 0 1px 0 rgba(255, 255, 255, ${reflection / 100})` : ''};
  ${gradientOverlay ? `background-image: linear-gradient(135deg, rgba(255, 255, 255, ${reflection / 300}), transparent 50%);` : ''}
  transition: ${enableAnimation ? `all ${animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)` : 'none'};
  cursor: ${hoverEffect !== 'none' ? 'pointer' : 'default'};
}

.liquid-glass:hover {
  ${hoverEffect !== 'none' && enableAnimation ? `
  background: rgba(255, 255, 255, ${Math.min(transparency + 3, 100) / 100});
  transform: ${getHoverTransform()};
  filter: ${getHoverFilter()};
  ` : ''}
}`;
}

/**
 * 简化的React代码生成
 */
export function generateSimpleReact(params: GlassEffectParams): string {
  const { transparency, blur, borderOpacity, reflection, depth, animationDuration, enableAnimation } = params;

  return `import React from 'react';

const GlassCard = ({ children, className = '' }) => {
  const glassStyle = {
    background: 'rgba(255, 255, 255, ${transparency / 100})',
    backdropFilter: 'blur(${blur}px)',
    WebkitBackdropFilter: 'blur(${blur}px)',
    border: '1px solid rgba(255, 255, 255, ${borderOpacity / 100})',
    borderRadius: '16px',
    boxShadow: \`0 ${depth * 2}px ${depth * 8}px rgba(31, 38, 135, ${0.1 + (depth * 0.03)}), inset 0 1px 0 rgba(255, 255, 255, ${reflection / 100})\`,
    backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, ${reflection / 1000}), transparent 50%)',
    transition: '${enableAnimation ? `all ${animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)` : 'none'}'
  };

  return (
    <div style={glassStyle} className={className}>
      {children}
    </div>
  );
};

export default GlassCard;`;
}

/**
 * 简化的Vue代码生成
 */
export function generateSimpleVue(params: GlassEffectParams): string {
  const { transparency, blur, borderOpacity, reflection, depth, animationDuration, enableAnimation } = params;

  return `<template>
  <div :style="glassStyle" :class="className">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  className: { type: String, default: '' }
});

const glassStyle = computed(() => ({
  background: 'rgba(255, 255, 255, ${transparency / 100})',
  backdropFilter: 'blur(${blur}px)',
  WebkitBackdropFilter: 'blur(${blur}px)',
  border: '1px solid rgba(255, 255, 255, ${borderOpacity / 100})',
  borderRadius: '16px',
  boxShadow: \`0 ${depth * 2}px ${depth * 8}px rgba(31, 38, 135, ${0.1 + (depth * 0.03)}), inset 0 1px 0 rgba(255, 255, 255, ${reflection / 100})\`,
  backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, ${reflection / 1000}), transparent 50%)',
  transition: '${enableAnimation ? `all ${animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)` : 'none'}'
}));
</script>`;
}

/**
 * 简化的Flutter代码生成
 */
export function generateSimpleFlutter(params: GlassEffectParams): string {
  const { transparency, blur, borderOpacity, reflection, depth } = params;

  return `import 'dart:ui';
import 'package:flutter/material.dart';

class GlassCard extends StatelessWidget {
  final Widget child;
  
  const GlassCard({Key? key, required this.child}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(${transparency / 100}),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: Colors.white.withOpacity(${borderOpacity / 100}),
        ),
        boxShadow: [
          BoxShadow(
            color: const Color(0x1F1F2687).withOpacity(${0.1 + (depth * 0.03)}),
            blurRadius: ${depth * 8},
            offset: Offset(0, ${depth * 2}),
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: ${blur}, sigmaY: ${blur}),
          child: child,
        ),
      ),
    );
  }
}`;
}