// app/components/miniProjectCard.tsx
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  homepage: string | null;
}

//Parse the Title from Github to look like a normal title
function parseTitle(title: string) {
  //Make first letter capital if it's not
  if (title[0] === title[0].toLowerCase()) {
    title = title.charAt(0).toUpperCase() + title.slice(1);
  }
  //Remove dash and make Title case
  if (title.includes('-')) {
    return title.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  }
  // If the title is all uppercase, convert it to title case
  if (title === title.toUpperCase()) {
    return title.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
  }
  //If CamelCase (e.g. "MyProject"), convert to title case and add spaces
  if (title[0] === title[0].toUpperCase()) {
    return title.replace(/([A-Z])/g, ' $1').trim();
  }
  return title;
}

export const MiniProjectCard: React.FC<ProjectCardProps> = ({ title, description, url, homepage }) => {
    return (
      <a href={homepage || url} target='_blank' rel='noreferrer noopener'>
      <div className="card bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-md p-4 border border-gray-400 dark:border-gray-600 overflow-hidden transform transition-transform duration-200 ease-in-out hover:scale-105 relative">
        {homepage && (
          <a href={url} target='_blank' rel='noreferrer noopener' className="absolute top-2 right-2 text-sm text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
            <GitHubIcon />
          </a>
        )}
        <h2 className="text-2xl font-bold mt-1 mb-4 dark:text-white">{parseTitle(title)}</h2>
        <p className="text-sm dark:text-gray-100">{description}</p>
      </div>
    </a>
    );
  };