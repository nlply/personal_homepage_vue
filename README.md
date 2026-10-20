# My PH

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 写博客
每篇博文是 `src/posts/` 下的一个文件夹，文件夹名就是网址：`src/posts/my-post/index.md` → `/blog/my-post`。

```markdown
---
title: 文章标题
date: 2026-10-10
---

正文用 Markdown 写。图片放在同一个文件夹里，用相对路径引用：

![说明](figure.png)
```

- 文件夹名以 `_` 开头（如 `_my-post`）是草稿：只在 `npm run serve` 时显示，正式构建不会打包。去掉 `_` 即发布，网址不变。
- 在 VS Code 里可以用 Markdown 预览（`Cmd+K V`）边写边看，图片可以直接拖进或粘贴到编辑器。
- 写法示例见 `src/posts/_example-post/index.md`。
- `npm run build` 会额外生成 `dist/404.html`，这样在 GitHub Pages 上直接打开文章链接也能正常显示。

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
