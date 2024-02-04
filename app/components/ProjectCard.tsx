// app/components/ProjectCard.tsx

import React from 'react';
import Tooltip from '@mui/material/Tooltip';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string | null;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, url }) => {
  const card = (
    <div className="card bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-md p-4 md:pd-2 border border-gray-400 dark:border-gray-600 overflow-hidden transform transition-transform duration-200 ease-in-out hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full object-cover rounded-lg" />
      <h2 className="text-2xl font-bold mt-2 dark:text-white">{title}</h2>
      <p className="text-sm dark:text-gray-100">{description}</p>
    </div>
  );

  return url ? (
    <a href={url} target='_blank' rel='noreferrer noopener'>
      {card}
    </a>
  ) : (
    <Tooltip title="There's no link for this project" placement="right">
      <div>{card}</div>
    </Tooltip>
  );
  }; 