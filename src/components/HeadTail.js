import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HeadTail = () => {
    const [selectedOption, setSelectedOption] = useState('Select Value');
    const [hChars, setHChars] = useState([]);
    const [tChars, setTChars] = useState([]);
    const [validation, setValidation] = useState(false);
  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
      setValidation(false);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (selectedOption === 'Select Value') {
        setValidation(true);
        return;
      }
      if (selectedOption === 'H') {
        setHChars([...hChars, 'H']);
      } else {
        setTChars([...tChars, 'T']);
      }
      setSelectedOption('Select Value');
    };
  
    const handleReset = () => {
      setSelectedOption('Select Value');
      setHChars([]);
      setTChars([]);
      setValidation(false);
    };
  
    return (
      <div><nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
      </ul>
    </nav>
        <h1>Head & Tail Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Select Value:
            <select value={selectedOption} onChange={handleChange}>
              <option value="Select Value" disabled>
                Select Value
              </option>
              <option value="H">H</option>
              <option value="T">T</option>
            </select>
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          {validation && (
            <p style={{ color: 'red' }}>Please select a value from the dropdown.</p>
          )}
        </form>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '20px' }}>
            <h2>Head Characters</h2>
            {hChars.map((char, index) => (
              <p key={`H${index}`}>{char}</p>
            ))}
          </div>
          <div>
            <h2>Tail Characters</h2>
            {tChars.map((char, index) => (
              <p key={`T${index}`}>{char}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default HeadTail