// app/components/ProjectCard.tsx

import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
    return (
      <div className="card bg-gray-900 text-white rounded-lg shadow-md p-4 border border-gray-600 overflow-hidden transform transition-transform duration-200 ease-in-out hover:scale-105">
        <img src={imageUrl} alt={title} className="w-full object-cover rounded-lg" />
        <h2 className="text-xl mt-2 text-gray-300">{title}</h2>
        <p className="text-sm text-gray-100">{description}</p>
      </div>
    );
  };