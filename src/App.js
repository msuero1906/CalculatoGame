import "./styles.css";
import { useState } from "react";

const ResultScreen = (props) => {
  return <div className="result-screen">{props.equation}</div>;
};

const Button = (props) => {
  return (
    <div className="buttons">
      {props.buttonsArray.map((elem, idx) => {
        return (
          <button
            // className={idx > 9 ? `operators` : `numbers`}
            className="btn"
            onClick={() => {
              if (elem === "Clear") {
                // If the elem I clicked is "Clear"
                return props.numbersDisplay("");
              }

              if (elem === "=") {
                // If the elem is == then evaluate the expression
                return props.numbersDisplay((previousDisplay) =>
                  eval(previousDisplay)
                );
              }

              props.numbersDisplay((previousDisplay) => {
                // `${}` <- string templates
                // shows first entered number or operation and then what is input next
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
