import React from 'react';
import Link from "react-router-dom";
import HorizontalScroll from "./HorizontalScroll.js";

//Uncomment below for fancy look on site

import './App.css';

var errorCount = 0;

function increment() {
  errorCount+=1;
  return errorCount;
}

function decrement() {
  errorCount-=1;
  return errorCount;
}

function App() {
return (
<div className="App">
  <HorizontalScroll />

  <table id="bonus-error">
    <tr>
      <td>Team Bonus</td>
      <td>
        <select>
          <option>Bonus val</option>
        </select>
      </td>
    </tr>
  
    <tr>
      <td>Team Errors</td>
      <td>
        <button onClick={increment}>Add Error</button>
        <button onClick={decrement}>Remove Error</button>
      </td>
      <td>Total Errors: {errorCount}</td>
    </tr>
  </table>

  <div className="scoreboard_page">
        <div className="scoreboard_container">
            <div className="team_one_score">
                <h2>Team 1</h2>
                <h1>20</h1>
            </div>
            <div className="question_counter">
                <h3>Question 3</h3>
            </div>
            <div className="team_two_score">
                <h2>Team 2</h2>
                <h1>20</h1>
            </div>
        </div>
    </div>
</div>
);
}

export default App;
