import "./App.css";
import React from "react";
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
      <section className="image-1"></section>
      <section className="image-2"></section>
      <section className="image-3"></section>
    </div>
  );
}

export default App;
