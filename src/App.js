import "./styles.css";
import { useState } from "react";

const ResultScreen = () => {
  return <div>Result!</div>;
};

const Button = (props) => {
  return (
    <div>
      {props.buttonsArray.map((elem) => {
        return (
          <button onClick={() => console.log("Button Clicked")}>{elem}</button>
        );
      })}
    </div>
  );
};

export default function App() {
  // State changes: numbers, operations, result
  const [numbers, setNumbers] = useState(0);
  const [operations, setOperations] = useState("");
  const [result, setResult] = useState(0);
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
        <ResultScreen />
        <Button buttonsArray={buttonsArray} />
      </div>
    </div>
  );
}
