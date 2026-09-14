# 即云API 文档站（DreaYunAPI Docs）

这是即云API文档站的部署工程。中文品牌显示为“即云API”，英文品牌显示为 `DreaYunAPI`，文档中的 API 地址为 `https://api.dreayun.com`。

> 当前工程默认通过 `X-Robots-Tag: noindex, nofollow` 禁止搜索引擎收录。建议先使用 GitHub 私有仓库和 Vercel 预览部署进行验收。

## 需要提交到 GitHub 的内容

```text
site/
mirror/
scripts/
server.ts
package.json
vercel.json
.gitignore
README.md
```

不要提交本地验证、探针、压缩包、依赖和宝塔部署产物：

```text
node_modules/
.vercel/
output/
probe/
skills/
docs/
REBUILD_PLAN.md
```

## 本地运行

需要 Node.js 24：

```powershell
npm start
```

默认访问地址：

```text
http://127.0.0.1:3000/
```

也可以指定端口：

```powershell
$env:PORT=4181
npm start
```

## 上传 GitHub

在项目根目录执行：

```powershell
git add site mirror scripts server.ts package.json vercel.json .gitignore README.md
git commit -m "Prepare DreaYunAPI docs for Vercel"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

如果已经配置过 `origin`，不要重复执行 `git remote add origin`，改用：

```powershell
git remote set-url origin https://github.com/你的用户名/你的仓库名.git
```

## Vercel 部署

1. 登录 Vercel，选择 **Add New → Project**。
2. 导入上面的 GitHub 仓库。
3. **Framework Preset** 选择 `Other`。
4. **Root Directory** 保持仓库根目录 `./`。
5. 不需要填写环境变量。
6. 保留仓库中的 `vercel.json`，点击 **Deploy**。

Vercel 会识别根目录的 `server.ts` 为 Node.js 服务入口；静态资源和镜像数据由该服务从 `site/` 与 `mirror/` 中读取。

## 关键说明

- 不要只上传 `site/`：深层路由、静态资源、API JSON 与响应替换依赖 `mirror/` 和 `scripts/serve.mjs`。
- 不需要上传 `node_modules/`：Vercel 会根据 `package.json` 处理运行环境。
- 项目没有构建命令，入口是 `server.ts`。
- `mirror/` 保留原始公开站点资源，品牌和 API 域名替换发生在 rebuild 响应层。
