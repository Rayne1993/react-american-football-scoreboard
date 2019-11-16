import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [count, setCount] = useState(0);
  const [ball, setBall] = useState(0);
  const [togo, setTogo] = useState(0);
  const [down, setDown] = useState(0);

    const quarterCount = props => {
      setCount( count + 1)
      if (count > 3) {
        setCount(0)
      }
    };

    const ballCount = event => {
      setBall( ball + 1 )
      if (ball > 119) {
        setBall(0)
      }
    };

    const togoCount = event => {
      setTogo( togo + 1 )
      if (togo > 119) {
        setTogo(0)
      }
    };

    const downCount = event => {
      setDown( down + 1)
      if (down > 3) {
        setDown(0)
      }
    };

    function reset() {
      setDown(0);
      setTogo(0);
      setBall(0);
      setCount(0);
    }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className="quarterButton" style={{background:'black', marginTop:'20px', borderRadius:'5px'}} onClick={downCount}>Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{togo}</div>
        <button className="quarterButton" style={{background:'black', marginTop:'20px', borderRadius:'5px'}} onClick={togoCount}>To Go</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ball}</div>
        <button className="quarterButton" style={{background:'black', marginTop:'20px', borderRadius:'5px'}} onClick={ballCount}>Ball On</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{count}</div>
        <button className="quarterButton" style={{background:'black', marginTop:'20px', borderRadius:'5px'}} onClick={quarterCount}>Quarter</button>
      </div>
      <button className="reset" style={{color:'red', height:'100px', background:'black', marginTop:'20px', borderRadius:'5px'}} onClick={reset}>Reset</button>
    </div>
  );
};

export default BottomRow;
