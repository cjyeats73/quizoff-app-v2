import React from 'react';
import {BrowserRouter as Router, 
        Routes, 
        Route,
        Link} from "react-router-dom";
import Scoreboard from "./Scoreboard.js";
import Scorecard from './Scorecard.js';

//Uncomment below for fancy look on site

import './App.css';

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function App() {
return (
  <Router>
    <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
        Scoreboard View
        </Link>
        <Link to="/scorecard_qm" style={{ padding: 5 }}>
        Scorecard View
        </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Scoreboard />} />
      <Route path="/scorecard_qm" element={<Scorecard />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </Router>
)
};

export default App;
