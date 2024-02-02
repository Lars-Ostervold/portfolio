import Link from 'next/link';
import { getViewsCount } from 'app/db/queries';
import { getthoughtsPosts } from 'app/db/thoughts';
import { TagBar } from 'app/components/TagBar';

export const metadata = {
  title: 'thoughts',
  description: 'Read my thoughts on the world.',
};

export default function thoughtsPage() {
  
  let allthoughts = getthoughtsPosts();

  // Extract all unique tags from the thoughts posts
  let tags = Array.from(
    new Set(allthoughts.flatMap((post) => post.metadata.tags))
  ).filter((tag): tag is string => tag !== undefined);
  
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my thoughts
      </h1>

      <TagBar tags={tags} thoughtss={allthoughts} />

    </section>
  );
}