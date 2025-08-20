import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  return (
    <>
      <h1>Profile Card</h1>
      <Pizza
        name="Muhammad Naeem"
        Description="Muhammad naeem computer enigneer form comsats university islamabad lahore campus"
        picture="/img.jpg"
        alt="logo"
        info1="html css"
        info2="javscript"
        info3="git and github"
        info4="html css"
        info5="javscript"
        info6="git and github"
      />
    </>
  );
}
function Pizza(props) {
  return (
    <div>
      <img src={props.picture} alt="Logo" />
      <h2>{props.name}</h2>
      <p>{props.Description}</p>
      <h2>Skills</h2>
      <div className="button-container">
        <button>{props.info1}</button>
        <button>{props.info2}</button>
        <button>{props.info3}</button>
        <button>{props.info4}</button>
        <button>{props.info5}</button>
        <button>{props.info6}</button>
      </div>
    </div>
  );
}
root.render(<App />);
