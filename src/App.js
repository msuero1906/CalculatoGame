import "./styles.css";
import { useState } from "react";

const ResultScreen = (props) => {
  return <div className="result-screen">{props.equation}</div>;
};

/*
const add  = (a, b) => a + b;

add(1, 2);
*/

const Button = (props) => {
  return (
    <div className="buttons">
      {props.buttonsArray.map((elem) => {
        return (
          <button
            onClick={() => {
              console.log("Button Clicked");
              if (elem === "Clear") {
                // If the elem I clicked is "Clear"
                return props.numbersDisplay("");
              }

              if (elem === "=") {
                // ??
                return props.numbersDisplay((previousDisplay) =>
                  eval(previousDisplay)
                );
              }

              props.numbersDisplay((previousDisplay) => {
                // `${}` <- string templates
                return `${previousDisplay}${elem}`;
              });
            }}
          >
            {elem}
          </button>
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
