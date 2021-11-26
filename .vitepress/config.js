/*
 * @Author: zzz
 * @LastEditors: zzz
 */
require('sucrase/register')

const { mdPlugin } = require('./plugins/plugins')

module.exports = {
  lang: 'zh-Hans',
  title: 'css-animation-demo',
  description: '学习前端动效，收集优秀按理。',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', async: '' }]
  ],
  themeConfig: {
    repo: 'jiejiege123/css-animation-demo',
    logo: '/logo.svg',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页面',
    lastUpdated: '上次更新',

    // algolia: {
    //   apiKey: 'c57105e511faa5558547599f120ceeba',
    //   indexName: 'vitepress'
    // },

    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },

    nav: [
      { text: '文档', link: '/guide/css', activeMatch: '^/guide/'
        // items: [
        //   {text: 'CSS', link: '/guide/', activeMatch: '^/guide/' },
        //   {text: 'SVG', link: '/guide/', activeMatch: '^/guide/' },
        //   {text: 'Canvas', link: '/guide/', activeMatch: '^/guide/' },
        // ] 
      },
      // { text: '指南', link: '/guide/', activeMatch: '^/$|^/guide/' },
      {
        text: '示例',
        items: [
          {text: 'CSS', link: '/demo/css/loading', activeMatch: '^/demo/css/' },
          {text: 'SVG', link: '/demo/svg/basics', activeMatch: '^/demo/svg/' },
          {text: 'Canvas', link: '/demo/canvas/basics', activeMatch: '^/demo/canvas/' },
        ] 
      },
      // {
      //   text: '发行说明',
      //   link: 'https://github.com/vuejs/vitepress/releases'
      // }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/demo/': getConfigSidebar(),
      // '/': getGuideSidebar()
    }
  },

  markdown: {
    anchor: {
      renderPermalink: require('./plugins/render-perma-link')
    },
    config: (md) => mdPlugin(md),

  }
}

function getGuideSidebar() {
  return [
    {
      text: '教程',
      children: [
        { text: 'CSS', link: '/guide/css' },
        { text: 'SVG', link: '/guide/svg' },
        { text: 'Canvas', link: '/guide/canvas' },
      ]
    }
    // {
    //   text: '使用',
    //   children: [
    //     { text: '基本使用', link: '/guide/use' },
    //     { text: 'TODO', link: '/guide/todo' },
      
    //   ]
    // }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: '示例',
      children: [{ text: 'Loading 加载', link: '/demo/css/loading' }]
    },
    // {
    //   text: '主题设置',
    //   children: [
    //     { text: '首页', link: '/config/homepage' },
    //   ]
    // }
  ]
}
