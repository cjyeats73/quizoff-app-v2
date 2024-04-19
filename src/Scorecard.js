import React from 'react';
import HorizontalScroll from "./HorizontalScroll.js";

var errorCount = 0;

function increment() {
  errorCount+=1;
  return errorCount;
}

function decrement() {
  errorCount-=1;
  return errorCount;
}

function Scorecard() {
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
</div>
)
};

export default Scorecard;