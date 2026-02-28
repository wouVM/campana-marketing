import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'pl'],
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/how-it-works': {
      en: '/how-it-works',
      pl: '/jak-to-dziala',
    },
    '/technology': {
      en: '/technology',
      pl: '/technologia',
    },
    '/pricing': {
      en: '/pricing',
      pl: '/cennik',
    },
    '/for-agencies': {
      en: '/for-agencies',
      pl: '/dla-agencji',
    },
    '/for-businesses': {
      en: '/for-businesses',
      pl: '/dla-firm',
    },
    '/security': {
      en: '/security',
      pl: '/bezpieczenstwo',
    },
    '/faq': '/faq',
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/about': {
      en: '/about',
      pl: '/o-nas',
    },
    '/contact': {
      en: '/contact',
      pl: '/kontakt',
    },
    '/privacy': {
      en: '/privacy',
      pl: '/prywatnosc',
    },
    '/terms': {
      en: '/terms',
      pl: '/regulamin',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
