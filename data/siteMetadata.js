/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Gustavo Huguenin - Blog',
  author: 'Gustavo Huguenin',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteRepo: 'https://github.com/dias-gxstavo/blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  email: 'gustavohuguenin9@gmail.com',
  github: 'https://github.com/dias-gxstavo',
  linkedin: 'https://www.linkedin.com/in/gustavo-huguenin-dias',
  locale: 'pt-BR',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
