import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
    AppState,
    GlassEffectParams,
    GlassPresetType,
    UserPreferences,
    Scene3DConfig,
    ExportFormat,
    ExportConfig
} from '@/types/glass';
import {
    DEFAULT_GLASS_PARAMS,
    GLASS_PRESETS,
    validateGlassParams,
    generateSimpleCSS,
    generateSimpleReact,
    generateSimpleVue,
    generateSimpleFlutter,
    generateCode
} from '@/lib/glass-generator';

interface GlassStore extends AppState {
    // Actions for glass parameters
    updateParams: (params: Partial<GlassEffectParams>) => void;
    resetParams: () => void;
    setPreset: (preset: GlassPresetType) => void;

    // Actions for UI state
    setShowCodePanel: (show: boolean) => void;
    setShow3DPreview: (show: boolean) => void;

    // Actions for preferences
    updatePreferences: (preferences: Partial<UserPreferences>) => void;

    // Actions for 3D scene
    updateScene3D: (config: Partial<Scene3DConfig>) => void;

    // Utility actions
    exportSettings: () => string;
    importSettings: (settings: string) => boolean;
}

// 默认用户首选项
const DEFAULT_PREFERENCES: UserPreferences = {
    defaultPreset: 'ios',
    autoSave: true,
    theme: 'auto',
    defaultExportFormat: 'css',
};

// 默认3D场景配置
const DEFAULT_SCENE_3D: Scene3DConfig = {
    enable3D: false,
    cameraPosition: [0, 0, 5],
    lightIntensity: 1,
    environmentMap: undefined,
};

// 默认应用状态
const DEFAULT_APP_STATE: AppState = {
    currentParams: DEFAULT_GLASS_PARAMS,
    currentPreset: 'ios',
    preferences: DEFAULT_PREFERENCES,
    scene3D: DEFAULT_SCENE_3D,
    showCodePanel: false,
    show3DPreview: false,
};

export const useGlassStore = create<GlassStore>()(
    persist(
        (set, get) => ({
            // 初始状态
            ...DEFAULT_APP_STATE,

            // 更新玻璃参数
            updateParams: (newParams: Partial<GlassEffectParams>) => {
                set((state) => {
                    const validatedParams = validateGlassParams({
                        ...state.currentParams,
                        ...newParams,
                    });

                    return {
                        currentParams: validatedParams,
                        currentPreset: 'custom', // 自定义参数时切换到custom预设
                    };
                });
            },

            // 重置参数为默认值
            resetParams: () => {
                set({
                    currentParams: DEFAULT_GLASS_PARAMS,
                    currentPreset: 'custom',
                });
            },

            // 设置预设
            setPreset: (preset: GlassPresetType) => {
                const presetConfig = GLASS_PRESETS[preset];
                if (presetConfig) {
                    set({
                        currentParams: presetConfig.params,
                        currentPreset: preset,
                    });
                }
            },

            // 切换代码面板显示
            setShowCodePanel: (show: boolean) => {
                set({ showCodePanel: show });
            },

            // 切换3D预览显示
            setShow3DPreview: (show: boolean) => {
                set({ show3DPreview: show });
            },

            // 更新用户首选项
            updatePreferences: (newPreferences: Partial<UserPreferences>) => {
                set((state) => ({
                    preferences: {
                        ...state.preferences,
                        ...newPreferences,
                    },
                }));
            },

            // 更新3D场景配置
            updateScene3D: (newConfig: Partial<Scene3DConfig>) => {
                set((state) => ({
                    scene3D: {
                        ...state.scene3D,
                        ...newConfig,
                    },
                }));
            },

            // 导出设置为JSON字符串
            exportSettings: (): string => {
                const state = get();
                const exportData = {
                    currentParams: state.currentParams,
                    currentPreset: state.currentPreset,
                    preferences: state.preferences,
                    scene3D: state.scene3D,
                    exportTimestamp: new Date().toISOString(),
                    version: '1.0.0',
                };
                return JSON.stringify(exportData, null, 2);
            },

            // 从JSON字符串导入设置
            importSettings: (settings: string): boolean => {
                try {
                    const importData = JSON.parse(settings);

                    // 验证数据结构
                    if (!importData || typeof importData !== 'object') {
                        return false;
                    }

                    const newState: Partial<AppState> = {};

                    // 验证并导入参数
                    if (importData.currentParams) {
                        newState.currentParams = validateGlassParams(importData.currentParams);
                    }

                    // 验证并导入预设
                    if (importData.currentPreset &&
                        Object.keys(GLASS_PRESETS).includes(importData.currentPreset)) {
                        newState.currentPreset = importData.currentPreset;
                    }

                    // 验证并导入首选项
                    if (importData.preferences) {
                        newState.preferences = {
                            ...DEFAULT_PREFERENCES,
                            ...importData.preferences,
                        };
                    }

                    // 验证并导入3D场景配置
                    if (importData.scene3D) {
                        newState.scene3D = {
                            ...DEFAULT_SCENE_3D,
                            ...importData.scene3D,
                        };
                    }

                    // 应用新状态
                    set((state) => ({
                        ...state,
                        ...newState,
                    }));

                    return true;
                } catch (error) {
                    console.error('Failed to import settings:', error);
                    return false;
                }
            },
        }),
        {
            name: 'glassforge-store', // localStorage中的键名
            partialize: (state) => ({
                // 只持久化这些字段
                currentParams: state.currentParams,
                currentPreset: state.currentPreset,
                preferences: state.preferences,
                scene3D: state.scene3D,
            }),
        }
    )
);

// 选择器函数，用于性能优化
export const useGlassParams = (): GlassEffectParams =>
    useGlassStore((state) => state.currentParams);

export const useCurrentPreset = (): GlassPresetType =>
    useGlassStore((state) => state.currentPreset);

export const useUserPreferences = (): UserPreferences =>
    useGlassStore((state) => state.preferences);

export const useUIState = () =>
    useGlassStore((state) => ({
        showCodePanel: state.showCodePanel,
        show3DPreview: state.show3DPreview,
    }));

export const useScene3DConfig = (): Scene3DConfig =>
    useGlassStore((state) => state.scene3D);

// 自定义hook：获取玻璃参数更新函数
export const useGlassActions = () => {
    const store = useGlassStore();
    return {
        updateParams: store.updateParams,
        resetParams: store.resetParams,
        setPreset: store.setPreset,
        setShowCodePanel: store.setShowCodePanel,
        setShow3DPreview: store.setShow3DPreview,
        updatePreferences: store.updatePreferences,
        updateScene3D: store.updateScene3D,
        exportSettings: store.exportSettings,
        importSettings: store.importSettings,
        // 添加代码生成方法
        generateCSS: () => generateSimpleCSS(store.currentParams),
        generateReactCode: () => generateSimpleReact(store.currentParams),
        generateVueCode: () => generateSimpleVue(store.currentParams),
        generateFlutterCode: () => generateSimpleFlutter(store.currentParams),
        // 添加参数访问
        glassParams: store.currentParams,
        applyPreset: store.setPreset,
        updateParam: (key: string, value: any) => {
            store.updateParams({ [key]: value });
        },
        // 通用代码生成方法
        generateCode: (format: ExportFormat, config: ExportConfig) =>
            generateCode(store.currentParams, format, config)
    };
}; 