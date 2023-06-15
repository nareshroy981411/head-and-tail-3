import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a simple paragraph.</p>
      <p>This page is navigate to the Home page & HEAD-TAIL pages</p>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/HeadTail'>Head & Tail</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default About;
