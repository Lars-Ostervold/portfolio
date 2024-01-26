// app/components/miniProjectCard.tsx

import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
}

export const MiniProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
    return (
      <div className="card bg-gray-900 text-white rounded-lg shadow-md p-4 border border-gray-600 overflow-hidden transform transition-transform duration-200 ease-in-out hover:scale-105">
        <h2 className="text-2xl font-bold mt-1 mb-4 text-gray-300">{title}</h2>
        <p className="text-sm text-gray-100">{description}</p>
      </div>
    );
  };