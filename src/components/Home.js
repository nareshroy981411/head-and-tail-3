'../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is a simple paragraph.</p>
      <p>This page is navigate to the ABOUT page & HEAD-TAIL pages</p>
      <nav>
        <ul>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/HeadTail'>Head & Tail</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
