import React from 'react';
import { Header } from './Header';
import { Projects } from './Projects';
import { Contact } from './Contact';
import './styles/portfolio.css'

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}
