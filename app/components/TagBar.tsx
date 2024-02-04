"use client";
// app/components/TagBar.tsx
import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { thoughtsPost } from 'app/db/thoughts';


interface TagBarProps {
  tags: string[];
  thoughts: thoughtsPost[];
}

export const TagBar: React.FC<TagBarProps> = ({ tags, thoughts}) => {
  const [selectedTag, setSelectedTag] = useState<string | null>('All');

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  }

  // Flatten the array and remove duplicates
  const uniqueTags = Array.from(new Set(tags.flat()));

  // Sort the tags alphabetically
  const sortedTags = ['All', ...uniqueTags.sort((a, b) => a.localeCompare(b))];

  let filteredthoughts = selectedTag !== 'All'
    ? thoughts.filter((thoughts) => thoughts.metadata.tags.includes(selectedTag || ''))
    : thoughts;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Filter by Tag</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {sortedTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => handleTagClick(tag)}
            className={`dark:bg-gray-900 dark:text-white rounded-lg shadow-md px-2 py-1 border border-gray-600 transform transition-transform duration-200 ease-in-out hover:scale-105 ${tag === selectedTag ? 'bg-blue-500 dark:bg-black' : ''}`}
          >
            {tag}
          </button>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-2">Thoughts</h2>
      {filteredthoughts
        .sort((a, b) => {
          if (
            new Date(a.metadata.date) > new Date(b.metadata.date)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div className='flex'>
            <Link
              key={post.slug}
              className="block space-y-1 mb-4 bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-md p-2 border border-gray-400 dark:border-gray-600 overflow-hidden transform transition-transform duration-200 ease-in-out hover:scale-105"
              href={`/thoughts/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};