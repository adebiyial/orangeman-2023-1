import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../public/globals.css';
import { Analytics } from '@vercel/analytics/react';

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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="root">
      <SEOHead />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default MyApp;
