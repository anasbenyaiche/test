import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
export default function App() {
  return (
    <div className="App">
      <div
        style={{
          border: "solid 1px black",
          maxWidth: 100,
        }}
      >
        <h1 className="title red"> Your name here </h1>
        <img src="/imageInSrc.jpg" />
        <img src="/imageInPublic.jpg" />
     
      </div>
    </div>
  );
}
