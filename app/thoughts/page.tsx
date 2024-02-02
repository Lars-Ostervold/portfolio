import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getthoughtsPosts } from 'app/db/thoughts';
import { TagBar } from 'app/components/TagBar';

export const metadata = {
  title: 'thoughts',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function thoughtsPage() {
  
  let allthoughtss = getthoughtsPosts();

  // Extract all unique tags from the thoughts posts
  let tags = Array.from(
    new Set(allthoughtss.flatMap((post) => post.metadata.tags))
  ).filter((tag): tag is string => tag !== undefined);
  
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my thoughts
      </h1>

      <TagBar tags={tags} thoughtss={allthoughtss} />

    </section>
  );
}

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();

//   return <ViewCounter allViews={views} slug={slug} />;
// }