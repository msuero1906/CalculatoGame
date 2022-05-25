import "./styles.css";
import { useState } from "react";
import ResultScreen from "./components/ResultScreen";
import Button from "./components/Button";

export default function App() {
  // State changes: numbers, operations, result
  const [display, setDisplay] = useState("");
  const buttonsArray = [
    1,
    2,
    3,
    "+",
    4,
    5,
    6,
    "-",
    7,
    8,
    9,
    "*",
    0,
    "/",
    "Clear",
    "="
  ];
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="wrapper">
        <h1>Calculator Container</h1>
        <ResultScreen equation={display} />
        <Button buttonsArray={buttonsArray} numbersDisplay={setDisplay} />
      </div>
    </div>
  );
}
