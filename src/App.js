
import './App.css';
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import HeadTail from './components/HeadTail';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/HeadTail' element={<HeadTail/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  );
};

export default App;
