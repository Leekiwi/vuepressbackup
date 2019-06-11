module.exports = {
  title: "kiwi'Note",
  description: '种一棵树最好的时间是十年前，其次是现在。',
  base: '/myvuepress/',
  // dest: './dist/',
  head: ['link', { rel: 'icon', href: '/favicon.ico' }],
  // 主题配置
  themeConfig: {
    logo: '/logo.jpg',
    pageSize: 5,
    // 顶部导航
    nav: [
      { text: '博客', link: '/blog/' },
      {text:'书架',link:'/book/'},
      { text: '语雀', link: 'https://www.yuque.com/zhaodaole00/' },
      { text: '关于我', link: '/about/' }
    ],
    // algolia: {
    //   apiKey: '0ffd71ab2bbe35e6a719e15d0338ac0d',
    //   indexName: 'index'
    // },
    // 侧边栏
    sidebar: 'auto',
    sidebarDepth: 2, // 默认 1 提取到 h2，0 为禁用，2 为 h2，h3
    displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
    activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题

    // Git 仓库和编辑链接
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/Leekiwi/myvuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',

    // 以下为可选的编辑链接选项

    // // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑此页面',
    lastUpdated: '上次更新时间' // string | boolean
  },
  // 语言配置
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN' // 将会被设置为 <html> 的 lang 属性
    }
  },
  plugins: {
    // 内容更新的刷新提示
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: '有内容更新',
        buttonText: '刷新'
      }
    },
    // 博客配置
    '@vuepress/blog': {
      postsDir: '_posts',
      categoryIndexPageUrl: '/categories/',
      tagIndexPageUrl: '/tags/',
      permalink: '/:year/:month/:slug'
    },
    // 博客分页
    '@vuepress/pagination': {
      postsFilter: ({ type }) => type === 'post',
      postsSorter: (prev, next) => {
        const prevTime = new Date(prev.frontmatter.date).getTime();
        const nextTime = new Date(next.frontmatter.date).getTime();
        return prevTime - nextTime > 0 ? -1 : 1;
      },
      layout: 'blog',
      paginationDir: 'blog/page',
      perPagePosts: 5,
      firstPagePath: '/blog/'
    },
    // '@vuepress/google-analytics': {
    //   ga: 'UA-134526816-1'
    // },
    // 图片的放大
    '@vuepress/medium-zoom': {
      selector: '.content img'
    },
    // 全局注册组件
    '@vuepress/register-components': {
      componentsDir: [],
      components: [
        // {
        //   name: 'V-Card',
        //   path: 'path/to/card.vue'
        // }
      ]
    },
    '@vssue/vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github',

      // 其他的 Vssue 配置
      owner: 'Leekiwi',
      repo: 'my-vssue',
      clientId: 'f90af83e9bed34ad3c74',
      clientSecret: '797277c53d2bc11c2de77a1f9324046ee5d21107'
    },
    // 页面滚动时自动激活侧边栏链接
    '@vuepress/links': {}
  },
  markdown: {}
};