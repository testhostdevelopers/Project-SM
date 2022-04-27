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
            url: '/',
          },
          {
            label: 'How it works',
            url: '/',
          },
          {
            label: 'Partnerships',
            url: '/',
          },
        ],
      },
      {
        // title: props?.children?._owner?.memoizedProps.prismicContent && props?.children?._owner?.memoizedProps.prismicContent[0].data.community[0].text,
        title: 'Community',
        links: [
          {
            label: 'NEUM Token',
            url: '/',
          },
          {
            label: 'FAQ',
            url: '/',
          },
          {
            label: 'Apply for gallery',
            url: '/',
          },
          {
            label: 'Report a bug',
            url: '/',
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