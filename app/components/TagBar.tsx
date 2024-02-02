"use client";
// app/components/TagBar.tsx
import React, { useState, Suspense } from 'react';
import Link from 'next/link';
// import ViewCounter from '../thoughts/view-counter';
import { getViewsCount } from 'app/db/queries';
import { thoughtsPost } from 'app/db/thoughts';


interface TagBarProps {
  tags: string[];
  thoughtss: thoughtsPost[];
}

export const TagBar: React.FC<TagBarProps> = ({ tags, thoughtss}) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  }

  // Flatten the array and remove duplicates
  const uniqueTags = Array.from(new Set(tags.flat()));

  // Sort the tags alphabetically
  const sortedTags = uniqueTags.sort((a, b) => a.localeCompare(b));

  let filteredthoughtss = selectedTag
    ? thoughtss.filter((thoughts) => thoughts.metadata.tags.includes(selectedTag))
    : thoughtss;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {sortedTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => handleTagClick(tag)}
            className={`dark:bg-gray-900 dark:text-white rounded-lg shadow-md px-2 py-1 border border-gray-600 transform transition-transform duration-200 ease-in-out hover:scale-105 ${tag === selectedTag ? 'bg-blue-500 dark:bg-white dark:text-black' : ''}`}
          >
            {tag}
          </button>
        ))}
      </div>
      {filteredthoughtss
        .sort((a, b) => {
          if (
            new Date(a.metadata.date) > new Date(b.metadata.date)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/thoughts/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              {/* <Suspense fallback={<p className="h-6" />}>
                <Views slug={post.slug} />
              </Suspense> */}
            </div>
          </Link>
        ))}
    </div>
  );
};

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();

//   return <ViewCounter allViews={views} slug={slug} />;
// }