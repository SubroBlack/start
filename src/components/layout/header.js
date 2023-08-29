import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <header style={headerStyle}>
      <h2>
        <Link className="App-link" to="/">
          Start
        </Link>
      </h2>
      <Link className="App-link" to="/about">
        About
      </Link>{" "}
      |{" "}
      <Link className="App-link" to="/add">
        Add
      </Link>
    </header>
  );
}

// Header Style
const headerStyle = {
  background: "rgb(36, 36, 36)",
  color: "white",
  textAlign: "center",
  padding: "5px",
};
