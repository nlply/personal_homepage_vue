module.exports = {
    pages: {
      index: {
        entry: 'src/main.js', // 入口文件
        title: "Welcome to Yang Liu' Website"
      }
    },
    // 博文 .md 按纯文本导入，由 src/blog 解析渲染
    configureWebpack: {
      module: {
        rules: [{ test: /\.md$/, type: 'asset/source' }]
      }
    }
  }
