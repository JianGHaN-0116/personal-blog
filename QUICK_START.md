# 快速开始指南

## 📦 依赖安装

由于本地 npm 缓存可能有权限问题，推荐以下解决方案：

### 方案 1: 使用 cnpm（推荐）
```bash
# 安装 cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com

# 使用 cnpm 安装依赖
cnpm install

# 运行开发服务器
npm run dev
```

### 方案 2: 使用 yarn
```bash
# 安装 yarn
npm install -g yarn

# 使用 yarn 安装依赖
yarn install

# 运行开发服务器
yarn dev
```

### 方案 3: 直接在 Cloudflare Pages 构建
如果本地安装仍有问题，可以直接推送到 Git 仓库，让 Cloudflare Pages 在云端构建。

---

## 🚀 立即部署到 Cloudflare Pages

### 步骤 1: 推送到 GitHub

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Personalize blog for JianGHaN"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/JianGHaN-0116/your-blog-repo.git

# 推送到 GitHub
git push -u origin main
```

### 步骤 2: 连接 Cloudflare Pages

1. 访问 https://dash.cloudflare.com/
2. 进入 **Workers & Pages**
3. 点击 **Create application** → **Pages** → **Connect to Git**
4. 授权并选择你的 GitHub 仓库

### 步骤 3: 配置构建设置

在 Cloudflare Pages 设置页面：

| 配置项 | 值 |
|--------|-----|
| **Framework preset** | Astro |
| **Build command** | `npm install && npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` |

**环境变量**（可选）:
- `NODE_VERSION`: `18` 或 `20`

### 步骤 4: 开始部署

点击 **Save and Deploy**，等待 2-3 分钟，你的博客就上线了！

部署完成后会得到一个 URL，类似：
```
https://your-project-name.pages.dev
```

### 步骤 5: 更新配置文件中的 URL

部署成功后，更新以下文件：

**astro.config.mjs**:
```javascript
export default defineConfig({
  site: 'https://your-project-name.pages.dev',
  // ...
})
```

**public/robots.txt**:
```
Sitemap: https://your-project-name.pages.dev/sitemap-index.xml
```

提交并推送更改：
```bash
git add .
git commit -m "Update site URL"
git push
```

---

## ✍️ 添加你的第一篇博客

### 1. 创建新的 Markdown 文件

在 `src/content/blog/` 目录下创建新文件，例如 `my-first-post.md`:

```markdown
---
title: "我的第一篇博客"
description: "这是我在新博客上发布的第一篇文章"
pubDate: "Dec 20 2024"
heroImage: "/post_img.webp"
badge: "NEW"
tags: ["Blog", "Introduction"]
---

# 欢迎来到我的博客！

这是我的第一篇博客文章...

## 我的研究方向

- 网络安全
- IPv6 测绘
- AI 安全

...
```

### 2. 删除示例文章

删除 `src/content/blog/` 中的示例文章：
- `post1.md`
- `post2.md`
- `post3.md`

### 3. 推送更新

```bash
git add .
git commit -m "Add my first blog post"
git push
```

Cloudflare Pages 会自动检测推送并重新部署。

---

## 🎨 自定义外观

### 更改主题

编辑 `src/layouts/BaseLayout.astro` 第 21 行：

```html
<html lang="en" data-theme="lofi">
```

可用主题：
- `light`, `dark`, `cupcake`, `bumblebee`, `emerald`, `corporate`
- `synthwave`, `retro`, `cyberpunk`, `valentine`, `halloween`
- `garden`, `forest`, `aqua`, `lofi`, `pastel`, `fantasy`
- `wireframe`, `black`, `luxury`, `dracula`, `cmyk`, `autumn`
- `business`, `acid`, `lemonade`, `night`, `coffee`, `winter`

查看效果: https://daisyui.com/docs/themes/

### 更换头像

如果不想使用 GitHub 头像，可以：

1. 替换 `public/profile.webp` 为你自己的照片
2. 修改 `src/config.ts`:
```typescript
export const AVATAR = '/profile.webp'; // 改为本地路径
```

---

## 📱 社交链接配置

社交链接在 `src/components/SideBarFooter.astro` 中配置，当前已设置：
- GitHub
- Email
- RSS Feed

如需添加更多（Twitter, LinkedIn 等），可参考原模板的图标 SVG。

---

## 🔧 常见命令

```bash
# 开发模式（本地预览）
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 添加新内容
git add .
git commit -m "Update content"
git push
```

---

## ⚡ 快速检查清单

部署前确认：

- [ ] 已将代码推送到 GitHub
- [ ] 已连接 Cloudflare Pages
- [ ] 构建配置正确
- [ ] 站点成功部署
- [ ] 更新了 `astro.config.mjs` 中的 URL
- [ ] 更新了 `public/robots.txt`
- [ ] 删除或替换了示例博客文章
- [ ] 测试了所有页面（Home, Projects, Blog, CV）

---

## 🆘 遇到问题？

### 构建失败
1. 检查 Cloudflare Pages 的构建日志
2. 确认构建命令和输出目录配置正确
3. 确认 `pnpm-lock.yaml` 或 `package-lock.json` 已提交

### 样式丢失
1. 确认 `dist/` 目录被正确生成
2. 检查 `astro.config.mjs` 中的 `site` 配置

### 页面 404
1. 确认文件路径正确
2. 检查 Astro 路由配置
3. 清除浏览器缓存

### 本地开发环境问题
如果本地 npm/pnpm 有权限问题：
1. 使用 cnpm 或 yarn 替代
2. 或直接在 Cloudflare 云端构建

---

## 📚 更多资源

- **Astro 文档**: https://docs.astro.build/
- **Cloudflare Pages 文档**: https://developers.cloudflare.com/pages/
- **DaisyUI 主题**: https://daisyui.com/
- **Markdown 指南**: https://www.markdownguide.org/

---

## 🎉 完成！

现在你的个人博客已经准备就绪！开始分享你的研究和想法吧！
