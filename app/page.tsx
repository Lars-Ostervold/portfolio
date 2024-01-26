// app/page.tsx

import React from 'react';
import { ProjectCard } from './components/ProjectCard';

export default function Page() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description for Project 1.',
      imageUrl: '/images/tree-of-life.png',
    },
    {
      title: 'Project 2',
      description: 'This is a description for Project 1.',
      imageUrl: '/images/tree-of-life.png',
    },
    {
      title: 'Project 3',
      description: 'This is a description for Project 1.',
      imageUrl: '/images/tree-of-life.png',
    },
    {
      title: 'Project 4',
      description: 'This is a description for Project 1.',
      imageUrl: '/images/tree-of-life.png',
    },
  ];

  return (
    <section>
      <h1 className="font-medium text-3xl mb-2 tracking-tighter">Howdy! I'm Lars. 👋 </h1>
      <blockquote className="prose mb-8 prose-neutral dark:prose-invert text-l italic pl-4 border-l-4 border-gray-400">
        I'm just trying to make good things and make things good.
      </blockquote>
      <p className="prose prose-neutral dark:prose-invert mb-8">
        I'm a disciple of Jesus, husband, father, and nerd. I'm currently working as a researcher at
        Dow in Houston, TX, but my passion is learning and creating - whether that's writing code, 
        writing words, or whatever else my is consuming my mind at the moment. Some of my favorite
        projects are below, but more goodies are buried in the links above 😊.
      </p>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">✨Highlights✨</h1>
      <div className="projects-grid grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}