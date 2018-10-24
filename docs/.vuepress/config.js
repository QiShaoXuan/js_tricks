module.exports = {
  title: 'js tricks',
  description: '常用的js方法，js_tricks',
  dest: './dist',
  base: '/js_tricks/',
  repo: 'https://qishaoxuan.github.io/js_tricks/',
  head: [
    ['link', { rel: 'icon', href: `/images/favicon.png` }],
  ],
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-include'), './')
    }
  },
  themeConfig: {
    nav: [
      { text: 'css tricks', link: 'https://qishaoxuan.github.io/css_tricks/' },
      // { text: 'you need to kown js', link: 'https://qishaoxuan.github.io/blog/' },
      { text: 'GitHub', link: 'https://github.com/QiShaoXuan/js_tricks' },
    ],
    sidebar: [
      '/dom/',
      '/bom/',
      '/array/',
      '/date/',
      '/number/',
      '/cookie/',
    ]
  }
}

