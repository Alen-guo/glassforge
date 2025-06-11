// 液态玻璃效果的核心类型定义

/**
 * 玻璃效果参数接口
 */
export interface GlassEffectParams {
    // 基础玻璃效果
    /** 透明度 (0-100) */
    transparency: number;
    /** 模糊强度 (0-100) */
    blur: number;
    /** 边框透明度 (0-100) */
    borderOpacity: number;
    /** 反射强度 (0-100) */
    reflection: number;
    /** 深度层级 (1-10) */
    depth: number;

    // 尺寸和形状
    /** 宽度 (100-800px) */
    width: number;
    /** 高度 (60-400px) */
    height: number;
    /** 内边距 (8-48px) */
    padding: number;
    /** 圆角 (0-50px) */
    borderRadius: number;
    /** 边框宽度 (0-5px) */
    borderWidth: number;

    // 组件类型和样式
    /** 组件类型 */
    componentType: 'card' | 'button' | 'modal' | 'navbar' | 'input' | 'badge';
    /** 阴影类型 */
    shadowType: 'soft' | 'medium' | 'hard' | 'glow';
    /** 渐变叠加 */
    gradientOverlay: boolean;
    /** 内发光 */
    innerGlow: boolean;

    // 动画和交互
    /** 动画持续时间 (ms) */
    animationDuration: number;
    /** 是否启用动画 */
    enableAnimation: boolean;
    /** 悬停效果 */
    hoverEffect: 'none' | 'lift' | 'glow' | 'scale';
}

/**
 * 预设类型
 */
export type GlassPresetType = 'ios' | 'vision-pro' | 'macos' | 'material' | 'custom';

/**
 * 玻璃效果预设
 */
export interface GlassPreset {
    /** 预设名称 */
    name: string;
    /** 预设类型 */
    type: GlassPresetType;
    /** 预设参数 */
    params: GlassEffectParams;
    /** 预设描述 */
    description: string;
    /** 预览图片URL */
    preview?: string;
}

/**
 * 代码导出格式
 */
export type ExportFormat =
    | 'css'
    | 'react'
    | 'react-ts'
    | 'vue'
    | 'vue-ts'
    | 'svelte'
    | 'flutter'
    | 'swift'
    | 'swiftui'
    | 'kotlin'
    | 'compose'
    | 'tailwind'
    | 'emotion'
    | 'styled-components';

/**
 * 导出配置
 */
export interface ExportConfig {
    /** 导出格式 */
    format: ExportFormat;
    /** 是否包含注释 */
    includeComments: boolean;
    /** 是否压缩代码 */
    minify: boolean;
    /** 类名前缀 */
    classPrefix?: string;
}

/**
 * 生成的CSS代码
 */
export interface GeneratedCSS {
    /** CSS代码 */
    code: string;
    /** CSS变量 */
    variables: Record<string, string>;
    /** 类名 */
    className: string;
}

/**
 * 3D场景配置
 */
export interface Scene3DConfig {
    /** 是否启用3D预览 */
    enable3D: boolean;
    /** 相机位置 */
    cameraPosition: [number, number, number];
    /** 光照强度 */
    lightIntensity: number;
    /** 环境贴图 */
    environmentMap?: string;
}

/**
 * 用户首选项
 */
export interface UserPreferences {
    /** 默认预设 */
    defaultPreset: GlassPresetType;
    /** 是否自动保存 */
    autoSave: boolean;
    /** 主题模式 */
    theme: 'light' | 'dark' | 'auto';
    /** 默认导出格式 */
    defaultExportFormat: ExportFormat;
}

/**
 * 应用状态
 */
export interface AppState {
    /** 当前玻璃效果参数 */
    currentParams: GlassEffectParams;
    /** 当前预设 */
    currentPreset: GlassPresetType;
    /** 用户首选项 */
    preferences: UserPreferences;
    /** 3D场景配置 */
    scene3D: Scene3DConfig;
    /** 是否显示代码面板 */
    showCodePanel: boolean;
    /** 是否显示3D预览 */
    show3DPreview: boolean;
} 