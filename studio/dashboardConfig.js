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
                  buildHookId: '5f71f3cff1ba8b2bf7f85fd5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8g6nuc6s',
                  apiId: '2de23a45-3cb1-443b-ae1a-686407b26714'
                },
                {
                  buildHookId: '5f71f3cfa975172695d35f9c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yfei62eh',
                  apiId: '107b1e6e-bf9f-4762-862d-b290af8e396e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cjgrauco/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yfei62eh.netlify.app', category: 'apps'}
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
