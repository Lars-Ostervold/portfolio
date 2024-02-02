import { getthoughtsPosts } from 'app/db/thoughts';

export default async function sitemap() {
  let thoughtss = getthoughtsPosts().map((post) => ({
    url: `https://lars-ostervold.vercel.app/thoughts/${post.slug}`,
    lastModified: post.metadata.date,
  }));

  let routes = ['', '/thoughts', '/uses', '/projects'].map((route) => ({
    url: `https://lars-ostervold.vercel.app/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...thoughtss];
}
