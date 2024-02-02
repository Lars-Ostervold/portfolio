export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://lars-ostervold.vercel.app/sitemap.xml',
    host: 'https://lars-ostervold.vercel.app/',
  };
}
