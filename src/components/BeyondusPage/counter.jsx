import React from "react";
import CountUp from "react-countup";
export default function Counter() {
  return (
    <div className="counter">
      <div className="container">
        <div className="counter-container">
          <div className="counter-box">
            <CountUp
              start={0}
              end={10}
              duration={4}
              delay={0}
              className="counter-num"
            />
            <span className="counter-text">Brands</span>
          </div>
          <div className="counter-box">
            <CountUp
              start={0}
              end={9}
              duration={4}
              delay={0}
              className="counter-num"
            />
            <span className="counter-text">Countries</span>
          </div>
          <div className="counter-box">
            <div className="counter-num">
              <CountUp
                start={0}
                end={40}
                duration={8}
                delay={0}
                className="counter-num"
              />
              +
            </div>

            <span className="counter-text">Retailers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
