module.exports = {
    base: '/pages/',
    title: 'Tony Tom',
    description: 'Vue press blog',
    themeConfig: {
      nav: [
        { 
          text: 'Home', 
          link: '/' 
        },
        { 
          text: 'Blogs',
          link: '/blog/' 
        }
      ],
      sidebar: 'auto',
    },
    extraWatchFiles: [
    ],
    plugins: [
     [ 'social-share',
      {
        networks: ['twitter', 'facebook','whatsapp']
      }
    ],
    ['go-top'],
    ],
   
   
  }