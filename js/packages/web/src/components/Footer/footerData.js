export const footerConf = (props) => {

  return {
    showShopName: true,
    showEmailSubscriber: true,
    emailSubscriberText:'Join our mailing list for updates about our artists and more.',
    components: [
      {
        // title: props?.children?._owner?.memoizedProps.prismicContent && props?.children?._owner?.memoizedProps.prismicContent[0].data.site_map[0].text,
        title: 'Site map',
        links: [
          {
            label: 'Explore',
            url: '/',
          },
          {
            label: 'About',
            url: 'https://starlight-marketplace.notion.site/About-Starlight-2972ed691eb24b5e9e6b39ac745f8183',
          },
          {
            label: 'How it works',
            url: 'https://starlight-marketplace.notion.site/Help-Desk-a59417ed77bc4eccba2384ab691ded53',
          },
          {
            label: 'Partnerships',
            url: 'https://www.notion.so/starlight-marketplace/Help-Desk-a59417ed77bc4eccba2384ab691ded53#3c61207bb82840a6a5c0a2b00415498d',
          },
        ],
      },
      {
        // title: props?.children?._owner?.memoizedProps.prismicContent && props?.children?._owner?.memoizedProps.prismicContent[0].data.community[0].text,
        title: 'Community',
        links: [
          {
            label: 'NEUM Token',
            url: 'https://starlight-marketplace.notion.site/Neum-Token-9ee734d7130545118282e73f5d3f3ea9',
          },
          {
            label: 'FAQ',
            url: 'https://starlight-marketplace.notion.site/Help-Desk-a59417ed77bc4eccba2384ab691ded53',
          },
          {
            label: 'Apply for gallery',
            url: 'https://www.notion.so/starlight-marketplace/Help-Desk-a59417ed77bc4eccba2384ab691ded53#f30840819c4b425c86190cb50c1974d2',
          },
          {
            label: 'Report a bug',
            url: 'https://www.notion.so/starlight-marketplace/Help-Desk-a59417ed77bc4eccba2384ab691ded53#78b86363e16a4f70a6e7a8ca3b6274a4',
          },
        ],
      },
      // {
      //   title: 'Follow us',
      //   links: [
      //     {
      //       label: 'Instagram',
      //       url: 'www.solana.com',
      //     },
      //     {
      //       label: 'Twitter',
      //       url: 'www.solana.com',
      //     },
      //     {
      //       label: 'Discord',
      //       url: 'www.solana.com',
      //     },
      //   ],
      // },
    ],
  }
};