/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    scrollRestoration: true
  }
}

const withMarkdoc = require('@markdoc/next.js');

// @ts-ignore
module.exports = withMarkdoc(/* options */)({
  ...nextConfig,
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
});