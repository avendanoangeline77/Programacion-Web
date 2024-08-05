// src/components/Project.js
import React from 'react';

export const Projects = ({ title, description, link }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
    </div>
  );
};



