# GlassForge 开发文档

## 🚀 快速开始

### 启动开发服务器
```bash
npm run dev
```

访问 `http://localhost:3000` 查看应用

### 构建生产版本
```bash
npm run build
npm start
```

## 📁 项目结构

```
src/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # 根布局，包含SEO优化
│   └── page.tsx           # 主页面，液态玻璃生成器界面
├── components/             # React组件
│   ├── ui/                # 基础UI组件
│   ├── glass/             # 玻璃效果专用组件
│   └── layout/            # 布局组件
├── lib/                   # 核心逻辑
│   ├── utils.ts           # 通用工具函数
│   └── glass-generator.ts # 液态玻璃效果生成核心逻辑
├── hooks/                 # 自定义React hooks
│   └── use-glass-store.ts # Zustand状态管理
├── types/                 # TypeScript类型定义
│   └── glass.ts           # 玻璃效果相关类型
└── styles/                # 样式文件
    └── globals.css        # 全局样式，包含玻璃效果CSS类
```

## 🎨 核心功能

### 1. 液态玻璃效果生成器
- **位置**: `src/lib/glass-generator.ts`
- **功能**: 根据参数生成CSS、React、Vue、Flutter代码
- **预设**: iOS、Vision Pro、macOS、Material Design

### 2. 状态管理
- **位置**: `src/hooks/use-glass-store.ts`
- **技术**: Zustand + 本地持久化
- **功能**: 管理玻璃参数、预设、用户首选项

### 3. 自定义样式系统
- **位置**: `src/styles/globals.css` + `tailwind.config.ts`
- **特色**: 苹果设计语言、液态玻璃效果类、响应式设计

## 🛠️ 开发规范

### TypeScript 规则
- ✅ 严格模式，禁用any类型
- ✅ 完整的接口定义
- ✅ 函数返回类型声明

### 样式规范
- ✅ Tailwind CSS优先
- ✅ 自定义玻璃效果类
- ✅ 苹果风格缓动函数
- ❌ 禁止内联样式

### 组件规范
- ✅ 函数式组件
- ✅ TypeScript接口定义
- ✅ 性能优化 (useMemo/useCallback)
- ❌ 禁止类组件

## 📈 SEO优化

### 关键词策略
- **主关键词**: "liquid glass" (8.1K月搜索量)
- **长尾词**: "liquid glass generator online free"
- **技术词**: "apple liquid glass effect css"

### Meta标签优化
- ✅ 完整的OpenGraph标签
- ✅ Twitter Cards
- ✅ 结构化数据
- ✅ 移动端优化

## 🚫 开发禁忌

### 代码质量
- ❌ 任何 `any` 类型
- ❌ 中文变量名
- ❌ 内联样式
- ❌ 未优化的大型组件

### 性能要求
- ❌ 响应时间 > 100ms的交互
- ❌ 未压缩的资源
- ❌ 阻塞渲染的脚本

## 🔧 开发工具

### 代码检查
```bash
npm run lint          # ESLint检查
npm run type-check     # TypeScript类型检查
```

### 性能监控
- Core Web Vitals集成
- 实时性能追踪
- 用户体验指标

## 📚 API文档

### 核心函数

#### `generateLiquidGlassCSS(params: GlassEffectParams): GeneratedCSS`
生成液态玻璃CSS代码

#### `generateCode(params: GlassEffectParams, format: ExportFormat, config: ExportConfig): string`
根据格式导出代码（CSS/React/Vue/Flutter）

#### `validateGlassParams(params: Partial<GlassEffectParams>): GlassEffectParams`
验证和规范化玻璃参数

### 状态管理

#### `useGlassStore`
主要状态管理store

#### `useGlassParams()`
获取当前玻璃参数

#### `useGlassActions()`
获取参数操作函数

## 🎯 下一步开发

### 第一阶段 (MVP)
- [x] 核心玻璃效果生成器
- [x] 基础UI界面
- [x] CSS代码导出
- [ ] 预设切换功能
- [ ] 参数实时更新

### 第二阶段
- [ ] React/Vue组件导出
- [ ] 3D预览效果
- [ ] 代码美化
- [ ] 设置导入/导出

### 第三阶段
- [ ] Figma插件
- [ ] 用户账户系统
- [ ] 高级动画控制
- [ ] 社区分享功能

## 🐛 常见问题

### 1. 类型错误
确保安装了所有类型定义包：
```bash
npm install --save-dev @types/react @types/node
```

### 2. 样式不生效
检查Tailwind配置和CSS导入：
```bash
npm run build  # 重新构建Tailwind
```

### 3. 状态持久化失败
清除浏览器localStorage：
```javascript
localStorage.removeItem('glassforge-store')
```

## 📞 获取帮助

- 📧 Email: dev@glassforge.dev
- 💬 Discord: [GlassForge Community]
- 📖 文档: https://docs.glassforge.dev
- 🐛 Bug报告: GitHub Issues

---

**记住：每一行代码都要服务于创造世界上最好的液态玻璃效果生成器！** 🌟 