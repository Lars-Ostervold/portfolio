import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';
import { TagBar } from 'app/components/TagBar';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  
  let allBlogs = getBlogPosts();

  // Extract all unique tags from the blog posts
  let tags = Array.from(
    new Set(allBlogs.flatMap((post) => post.metadata.tags))
  ).filter((tag): tag is string => tag !== undefined);
  
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my blog
      </h1>

      <TagBar tags={tags} blogs={allBlogs} />

    </section>
  );
}

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();

//   return <ViewCounter allViews={views} slug={slug} />;
// }