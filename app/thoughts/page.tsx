import Link from 'next/link';
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
        This is a collection of short writings on things that are buzzing my mind. <br/>
      </h1>
      <p className="mb-6">
        Mostly I've been focused on programming, so I haven't written much here. But I've got a backlog of ideas to write up, so I'll crank them out eventually! 😋        
      </p>

      <TagBar tags={tags} thoughts={allthoughts} />

    </section>
  );
}