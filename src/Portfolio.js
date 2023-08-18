import React from 'react';
import { Header } from './Header';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}
