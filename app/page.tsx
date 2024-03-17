// app/page.tsx

import React from 'react';
import { ProjectCard } from './components/ProjectCard';

export default function Page() {
  const projects = [
    {
      title: 'BibleProject Chatbot',
      description: 'This is a RAG stack chatbot that answers questions about the Bible using content from BibleProject.',
      imageUrl: '/images/bp-chatbot.png',
      url: 'https://bp-chatbot.streamlit.app/'
    },
    {
      title: 'Personal Website',
      description: 'This is the site you\'re on right now! It\'s built with Next.js and Tailwind CSS. I\'m pretty proud of it.',
      imageUrl: '/images/tree-of-life.png',
      url: 'https://lars-ostervold.vercel.app/'
    },
    {
      title: 'Book Scanner',
      description: 'This is an iOS app that lets you organize and search your book collection. Just scan the barcode and you\'re good to go!',
      imageUrl: '/images/book-scanner.jpg',
      url: 'https://github.com/Lars-Ostervold/BookScanner'
    },
    {
      title: 'Fitness Buddy',
      description: 'A web app that generates weekly workouts for you (and also loves you unconditionally). 😊',
      imageUrl: '/images/fitness-buddy.png',
      url: 'https://main.d2ml4fhfnwpjvt.amplifyapp.com/dashboard/app'
    }
  ];

  return (
    <section>
      <h1 className="font-mediu text-3xl mb-2 tracking-tighter">Howdy! I'm Lars. 👋 </h1>
      <blockquote className="prose mb-8 prose-neutral dark:text-white text-l italic pl-4 border-l-4 border-gray-400">
        I'm just trying to make good things and make things good.
      </blockquote>
      <p className="prose prose-neutral dark:text-white mb-8">
        I'm a disciple of Jesus, husband, father, and nerd. I'm currently working as a researcher at
        Dow in Houston, TX, but my passion is learning and creating - whether that's writing code, 
        writing words, or whatever else my is consuming my mind at the moment. Some of my favorite
        projects are below, but more are buried in the links above 😊.
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