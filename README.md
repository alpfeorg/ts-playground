# TypeScript Types Practice

这是一个用于练习和测试 TypeScript 类型系统的项目。项目采用 Node.js 环境，使用 ESM 模块系统，提供了实时开发和测试环境。

## 项目特点

- 🚀 实时开发环境：文件修改后自动重新执行
- 📦 使用 ESM 模块系统
- 🔍 完整的 TypeScript 类型支持
- 🎯 独立的示例文件，便于学习和测试
- 🔄 热重载支持

## 技术栈

- TypeScript
- Node.js
- nodemon (文件监听)
- ts-node (直接执行 TypeScript)

## 开始使用

1. 安装依赖：

```bash
npm install
```

2. 启动开发环境：

```bash
npm run dev
```

3. 构建项目：

```bash
npm run build
```

4. 运行构建后的代码：

```bash
npm start
```

## 项目结构

```
ts-types/
├── package.json          # 项目配置
├── tsconfig.json         # TypeScript 配置
├── nodemon.json          # nodemon 配置
└── src/
    ├── main.ts          # 主入口文件
    └── examples/        # 示例文件目录
        ├── basic-types.ts    # 基础类型示例
        └── generics.ts       # 泛型示例
```

## 开发指南

### 添加新的示例

1. 在 `src/examples` 目录下创建新的示例文件，例如 `advanced-types.ts`：

```typescript
// 高级类型示例
console.log('\n=== Advanced Types Example ===\n');

// 你的示例代码
```

2. 在 `src/main.ts` 中导入新示例：

```typescript
import './examples/advanced-types.js';
```

### 示例文件结构

每个示例文件应该包含：

- 清晰的标题和描述
- 类型定义
- 示例代码
- 控制台输出

### 开发流程

1. 启动开发环境：

```bash
npm run dev
```

2. 修改或添加示例文件
3. 保存文件后，代码会自动重新执行
4. 在控制台查看输出结果

## 测试和验证

- 每个示例文件都是独立的，可以单独测试
- 使用 TypeScript 的类型检查确保类型正确
- 通过控制台输出验证代码行为

## 示例类型

目前包含的示例：

- 基础类型（字符串、数字、布尔值等）
- 数组和元组
- 对象类型
- 联合类型
- 泛型函数
- 泛型接口
- 泛型类
- 类型约束

## 注意事项

- 确保使用 ESM 的导入导出语法
- 文件扩展名在导入时需要包含 `.js`
- 保持示例代码的独立性和可读性

## 贡献

欢迎添加新的类型示例或改进现有示例。请确保：

1. 示例代码清晰易懂
2. 包含适当的注释
3. 遵循项目的代码风格
4. 提供有意义的控制台输出
