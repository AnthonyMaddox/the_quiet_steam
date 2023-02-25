import React, {  createRef } from "react";
import "./App.css";

function Player() {
  
  const iframeRef = createRef();

  return (
    <div className="App">
      <div className="App-container">
        <div className="soundcloud-section">
          <h3>LISTEN...</h3>

          <iframe
            title="splayer"
            ref={iframeRef}
            id="sound-cloud-player"
            style={{ border: "none", height: 314, width: 400 }}
            scrolling="no"
            allow="autoplay"
            src={
              "https://w.soundcloud.com/player/?url=https://soundcloud.com/anthony-j-maddox/sets/its-about-freedom"
            }
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Player;
