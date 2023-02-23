import "./App.css";
import React from "react";
// import ReactPlayer from "react-player";
import Player from "./Player.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <div className="main">The Quiet Steam</div> */}
      <section className="image-1">
        <div className="fixed-header">
          <div className="inner-header">The Quiet Steam</div>
        </div>
      </section>
      <section className="image-2">
        <Player />
        {/* <div>
          <ReactPlayer url="https://soundcloud.com/anthony-j-maddox/sets/its-about-freedom"/>
        </div> */}
      </section>
      <section className="image-3"></section>
    </div>
  );
}

export default App;
