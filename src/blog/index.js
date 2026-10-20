import MarkdownIt from 'markdown-it'

// 博客总开关：false 时主页不显示博客栏目，文章页也打不开；改成 true 即恢复
const BLOG_ENABLED = false

// 每篇博文是 src/posts/ 下的一个文件夹：index.md + 文中用到的图片/视频
// 文件夹名就是网址里的 slug：src/posts/my-post/index.md → /blog/my-post
// 文件夹名以 _ 开头的是草稿（_my-post → /blog/my-post）：只在本地 npm run serve 时显示，
// 正式构建时连同图片整个不打包，线上的 JS 里也看不到草稿内容
const mdFiles = process.env.NODE_ENV === 'production'
  ? require.context('../posts', true, /^\.\/[^_/][^/]*\/index\.md$/)
  : require.context('../posts', true, /^\.\/[^/]+\/index\.md$/)
const assetFiles = process.env.NODE_ENV === 'production'
  ? require.context('../posts', true, /^\.\/[^_/][^/]*\/.+\.(png|jpe?g|gif|svg|webp|avif|mp4|webm)$/i)
  : require.context('../posts', true, /^\.\/[^/]+\/.+\.(png|jpe?g|gif|svg|webp|avif|mp4|webm)$/i)

// 资源路径（如 ./my-post/cover.png）→ webpack 打包后的 URL
const assets = {}
assetFiles.keys().forEach((key) => {
  const mod = assetFiles(key)
  assets[key] = mod.default || mod
})

// html: true 允许在 Markdown 里直接写 <img width="..."> / <video> 等标签
const md = new MarkdownIt({ html: true, linkify: true })

// 只解析简单的 `key: value` 行，够用且不必引入 YAML 库
function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!match) return { meta: {}, body: raw }
  const meta = {}
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/)
    if (kv) meta[kv[1]] = kv[2].trim().replace(/^(['"])(.*)\1$/, '$2')
  }
  return { meta, body: raw.slice(match[0].length) }
}

// 把文中的相对路径（相对 index.md 所在文件夹）解析成 require.context 的 key
function resolveKey(dir, url) {
  const parts = dir.split('/').filter((seg) => seg && seg !== '.')
  for (const seg of url.split(/[?#]/)[0].split('/')) {
    if (seg === '..') parts.pop()
    else if (seg && seg !== '.') parts.push(seg)
  }
  return './' + parts.join('/')
}

function safeDecode(url) {
  try {
    return decodeURI(url)
  } catch (e) {
    return url
  }
}

// 外链、站内绝对路径、锚点保持不变
const NOT_RELATIVE = /^([a-z][a-z0-9+.-]*:|\/|#)/i

// 同时处理 Markdown 图片和手写 HTML 标签里的 src/href/poster
function rewriteAssetUrls(html, dir) {
  return html.replace(/(\s(?:src|href|poster))="([^"]*)"/g, (all, attr, url) => {
    if (NOT_RELATIVE.test(url)) return all
    const asset = assets[resolveKey(dir, safeDecode(url))]
    return asset ? `${attr}="${asset}"` : all
  })
}

// 按日期倒序；date 写成 2026-10-10 这种格式即可正确排序
export const posts = (BLOG_ENABLED ? mdFiles.keys() : [])
  .map((key) => {
    const dir = key.slice(0, -'/index.md'.length)
    const slug = dir.slice(2).replace(/^_/, '')
    const { meta, body } = parseFrontMatter(mdFiles(key))
    return {
      slug,
      title: meta.title || slug,
      date: meta.date || '',
      draft: dir.startsWith('./_'),
      dir,
      body,
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

const htmlCache = {}

export function getPost(slug) {
  const post = posts.find((p) => p.slug === slug)
  if (!post) return null
  if (!htmlCache[slug]) htmlCache[slug] = rewriteAssetUrls(md.render(post.body), post.dir)
  return { ...post, html: htmlCache[slug] }
}
