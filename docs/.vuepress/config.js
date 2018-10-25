module.exports = {
  title: 'js tricks',
  description: '常用的js方法，js_tricks',
  dest: './dist',
  base: '/js_tricks/',
  repo: 'https://qishaoxuan.github.io/js_tricks/',
  head: [
    ['link', { rel: 'icon', href: `/images/favicon.png` }],
    ['meta', { name: 'theme-color', content: '#00adb5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#00adb5' }],
    ['meta', {name:'description', itemprop: 'description', content: '常用的js方法，js_tricks' }],
    ['meta', { itemprop: 'name', content: 'js_trick' }],
    ['meta', { itemprop: 'image', content: '/js_tricks/images/favicon.png' }],
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
      // { text: 'blog', link: 'https://qishaoxuan.github.io/blog/' },
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

