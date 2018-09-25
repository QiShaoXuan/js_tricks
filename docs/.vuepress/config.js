module.exports = {
  title: 'js tricks',
  description: '常用的js方法，js_tricks',
  dest: './dist',
  base:'/js_tricks/',
  repo: 'https://qishaoxuan.github.io/js_tricks/', // 添加 github 链接
  themeConfig: {
    nav: [
       { text: 'GitHub', link: 'https://github.com/QiShaoXuan/js_tricks' },
    ],
    sidebar:[
      '/methods/',
      '/dom/',
      '/bom/',
      '/array/',
      '/date/',
      '/number/',
    ]
  }
}
