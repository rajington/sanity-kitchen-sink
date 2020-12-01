export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc68be8f6603f22e9846eb8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ptg6qzwv',
                  apiId: '9a75e0a6-bf0f-46c8-96b0-a04df7c05bfb'
                },
                {
                  buildHookId: '5fc68be8dff6b12069653805',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5a4k2mqb',
                  apiId: '1f67659f-2186-4d12-98b3-dfbe891cc449'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rajington/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5a4k2mqb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
