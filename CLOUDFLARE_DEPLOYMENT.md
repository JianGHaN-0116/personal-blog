# Cloudflare Pages 部署指南

## 方式一：通过 Cloudflare Dashboard 部署（推荐）

### 1. 准备 Git 仓库
确保你的代码已推送到 GitHub/GitLab：
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. 连接 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** > **Create application** > **Pages**
3. 点击 **Connect to Git**
4. 选择你的 GitHub/GitLab 仓库
5. 配置构建设置：
   - **Framework preset**: Astro
   - **Build command**: `pnpm install && pnpm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (默认)
   - **Node.js version**: 18 或更高

### 3. 环境变量（可选）
如果需要，在 **Environment variables** 中添加：
- `NODE_VERSION`: `18` 或 `20`

### 4. 部署
点击 **Save and Deploy**，Cloudflare 会自动构建并部署你的站点。

### 5. 配置自定义域名（可选）
部署完成后，在 **Custom domains** 中添加你的域名。

---

## 方式二：通过 Wrangler CLI 部署

### 1. 安装 Wrangler
```bash
npm install -g wrangler
# 或
pnpm add -g wrangler
```

### 2. 登录 Cloudflare
```bash
wrangler login
```

### 3. 构建项目
```bash
pnpm install
pnpm run build
```

### 4. 部署到 Pages
```bash
wrangler pages deploy dist --project-name=jianghan-blog
```

首次部署时会创建项目，后续部署会自动更新。

---

## 本地测试

### 安装依赖
```bash
pnpm install
```

### 开发服务器
```bash
pnpm run dev
```
访问 http://localhost:4321

### 构建预览
```bash
pnpm run build
pnpm run preview
```

---

## 配置说明

### 更新站点 URL
部署后，更新 `astro.config.mjs` 中的 `site` 字段为你的 Cloudflare Pages URL：
```javascript
export default defineConfig({
  site: 'https://jianghan-blog.pages.dev', // 或你的自定义域名
  // ...
})
```

### 更新 robots.txt
修改 `public/robots.txt`，将 sitemap URL 更新为你的域名：
```
Sitemap: https://jianghan-blog.pages.dev/sitemap-index.xml
```

---

## 自动部署

连接 Git 仓库后，每次推送到主分支都会自动触发部署：
```bash
git add .
git commit -m "Update content"
git push
```

---

## 常见问题

### Q: 构建失败提示找不到 pnpm？
A: 在 Cloudflare Pages 设置中添加环境变量 `NPM_FLAGS` = `--version`，或将构建命令改为 `npm install && npm run build`

### Q: 如何使用 pnpm？
A: Cloudflare Pages 默认支持 pnpm。如果遇到问题，确保 `pnpm-lock.yaml` 已提交到仓库。

### Q: 如何回滚部署？
A: 在 Cloudflare Dashboard 的 **Deployments** 页面，点击历史部署的 **Rollback** 按钮。

### Q: 如何配置分支预览？
A: 推送到非主分支会自动创建预览部署，URL 格式为 `<branch>.<project>.pages.dev`

---

## 性能优化

Cloudflare Pages 自动提供：
- 全球 CDN 分发
- 自动 HTTPS
- HTTP/2 和 HTTP/3
- 图片优化（需额外配置）
- 无限带宽

---

## 下一步

1. ✅ 推送代码到 Git 仓库
2. ✅ 连接 Cloudflare Pages
3. ✅ 配置构建设置
4. ✅ 部署站点
5. 🔄 更新站点 URL 和 robots.txt
6. 🔄 添加自定义域名（可选）
7. 🔄 开始写博客！
