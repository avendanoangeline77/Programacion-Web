// src/components/Header.js
import React from 'react';

export const Header = () => {
  return (
    <header>
      <h1>Mi Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
          <li><a href="#about">Sobre mi</a></li>
        </ul>
      </nav>
    </header>
  );
};

