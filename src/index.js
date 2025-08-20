import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  return (
    <>
      <h1>rendring</h1>
      <Pizza
        name="Muhammad Naeem"
        regno="1223"
        picture="/logo192.png"
        alt="logo"
      />
    </>
  );
}
function Pizza(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Reg No: {props.regno}</p>
      <img src={props.picture} alt="Logo" />
    </div>
  );
}
root.render(<App />);
