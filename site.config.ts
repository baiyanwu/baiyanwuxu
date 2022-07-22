import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '33bf20fa383a439995b3916b6371e2c3',
                 
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'biaynwu.love',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'Travis Fischer',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: 'flyerXu88',
  github: 'baiyanwu',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: "https://baiyanwu.love/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F47d51ca4-fa78-4922-aee3-925e90a5f32a%252FMimicShhans.png%3Ftable%3Dblock%26id%3D33bf20fa-383a-4399-95b3-916b6371e2c3%26cache%3Dv2&w=1200&q=75",
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/about': '2022-96dfe23a1feb4b979c9a5877a6ae1321',
    '/blog': 'Android-abd8ac1c56424d7eb594f272c8ab57a6'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '2022-96dfe23a1feb4b979c9a5877a6ae1321'
    },
    {
      title: 'Blog',
      pageId: 'Android-abd8ac1c56424d7eb594f272c8ab57a6'
    }
  ]
})
