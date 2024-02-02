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
        I've been too busy building this site to have thoughts 👀 <br/><br/>
        But imagine if I had some thoughts! Then they'd be here in the form of short articles.       
      </h1>
      <p className="mb-6">
        Just so I have placeholders for the future, here are some thoughts I might have.
        And then you could like click on the thing and it'll take you to a page all about that 
        single thought. Really cool stuff. 🧠🤯
      </p>

      <TagBar tags={tags} thoughtss={allthoughts} />

    </section>
  );
}