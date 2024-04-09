import React from 'react';

//Uncomment below for fancy look on site

import './Scoreboard.css';

function Scoreboard() {
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
        <button href="./App.js">Click here to enter scorecard mode!</button>
    </div>
);
}

export default Scoreboard;
