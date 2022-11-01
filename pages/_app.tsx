import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../public/globals.css';
import '../public/prism.css';
import '../public/scrollbar.css';

// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';
import Footer from '../components/Footer';
import Page from '../components/Page';
import Hero from '../components/Hero';
import { NavLinks } from '../components/NavLinks';

const topNavLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Laboratory',
    href: '/lab',
  },
  {
    name: 'Publications',
    href: '/publications',
  },
];

const TITLE = 'Adebiyi Adedotun';
const DESCRIPTION = 'User Interface and Frontend Engineer';
const OPENGRAPH = 'https://orangeman.dev/orangeman-opengraph.png';

function SEOHead({
  title = TITLE,
  description = DESCRIPTION,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Head>
      <title>{`${TITLE} | ${title}`}</title>
      <link rel="shortcut icon" href="../public/favicon.ico" />
      <link rel="icon" href="../public/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,viewport-fit=cover"
      />
      <meta name="referrer" content="strict-origin" />

      {/* Default */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://orangeman.dev" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OPENGRAPH} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={OPENGRAPH} />
      <meta content="@adebiyial" name="twitter:creator" />
      <meta content="@adebiyial" name="twitter:site" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
    </Head>
  );
}

function getHeroText(pathname: string) {
  switch (pathname.toLowerCase()) {
    case 'blog':
      return 'Blog';
    case 'projects':
      return 'Projects';
    case 'lab':
      return 'Laboratory';
    case 'publications':
      return 'Publications';
    default:
      return 'Adebiyi Adedotun is a User Interface and Frontend Engineer.';
  }
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const isBlogPage = router.asPath.startsWith('/blog');
  const isSingleBlogPost =
    isBlogPage && router.pathname.replace('/blog', '').length !== 0;

  const { pathname } = router;
  const heroText = getHeroText(pathname.replace('/', ''));

  // Removes the current path from the list.
  const computedTopNavLinks = topNavLinks.filter(
    (link) => link.href !== pathname
  );

  function getComputedTopNavLinks() {
    const res = topNavLinks.filter((link) => link.href !== pathname);
    console.log(res);

    return res;
  }

  return (
    <div className="root">
      <SEOHead />
      <Page>
        {!isSingleBlogPost && <Hero text={heroText} />}
        <NavLinks
          {...{ links: getComputedTopNavLinks(), className: 'top-nav' }}
        />
        <Component {...pageProps} />
        <Footer />
      </Page>
      <Analytics />
    </div>
  );
}

export default MyApp;
