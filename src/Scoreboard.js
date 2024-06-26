import React from 'react';
import { useNavigate } from "react-router-dom";

//Uncomment below for fancy look on site

import './Scoreboard.css';

function Scoreboard() {
const navigate = useNavigate();
return (
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
        <button className="btn" onClick={() => navigate('/scorecard_qm')}>
            Scorecard View
        </button>
    </div>
);
}

export default Scoreboard;
