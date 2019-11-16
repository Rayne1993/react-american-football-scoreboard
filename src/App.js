//TODO: STEP 1 - Import the useState hook.

import React from "react";
import { useState, useRef, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeCount, homeSetCount] = useState(0);
  const [awayCount, awaySetCount] = useState(0);

  //Timer
  let [sec, setSec] = useState(59);
  let [min, setMin]= useState(14);
  useEffect(() => {
    const timeOut = setTimeout (() => {
      setSec(sec - 1);
      if (sec < 1) {
        setSec(59);
        setMin(min - 1);
      }
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    }
  }, [sec, min]);

//reset
  function resetScore() {
    homeSetCount(0);
    awaySetCount(0);
  }

  function refresh() {
    window.location.reload(false);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer">{min}:{sec}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => {homeSetCount(homeCount + 7);}}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => {homeSetCount(homeCount + 3)}}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => {awaySetCount(awayCount + 7);}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => {awaySetCount(awayCount + 3)}}>Away Field Goal</button>
        </div>
        <button className="resetScore" style={{borderRadius:'5px', color:'red'}} onClick={resetScore}>Reset Score</button>
        <button className="refresh" style={{borderRadius:'5px', color:'red', marginLeft:'10px'}} onClick={refresh}>Reset All</button>
      </section>
    </div>
  );
}

export default App;
