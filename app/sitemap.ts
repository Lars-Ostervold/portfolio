import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://leerob.io/blog/${post.slug}`,
    lastModified: post.metadata.date,
  }));

  let routes = ['', '/blog', '/uses', '/projects'].map((route) => ({
    url: `https://lars-ostervold.vercel.app/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
