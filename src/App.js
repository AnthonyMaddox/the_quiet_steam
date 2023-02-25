import "./App.css";
import React from "react";
import Player from "./Player.js";
// import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div>
      <section className="image-1">
        <div className="fixed-header">
          <div className="inner-header">
            The Quiet Steam<br></br>
            <span className="inner-header-2">By Anthony Maddox</span>
          </div>
        </div>
        <div className="introText-container">
          {/* <TypeAnimation
            className="introText"
            sequence={[
              "",
              2000,
              "To everyone on their way at sea...",
              3000,
              "",
              1000,
              "may you have a quiet steam.",
              10000,
              "",
            ]}
            speed={30}
            style={{ fontSize: "1.2em" }}
            wrapper="span"
            cursor={false}
            deletionSpeed={100}
          /> */}
        </div>
      </section>
      <section className="image-2">
        <Player />
      </section>
      <section className="image-3">
        <ul className="tracks">
          <li>Last Haul</li>
          <li>Rain For Morning</li>
          <li>Isolation</li>
          <li>Deep Creek Shandy</li>
          <li>It's About Freedom</li>
          <li>The Best Days of Our Time</li>
          <li>Snorkeling Above Submarines</li>
          <li>Sea Ice</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
