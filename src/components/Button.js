import React from "react";

const Button = (props) => {
  return (
    <div className="buttons">
      {props.buttonsArray.map((elem, idx) => {
        return (
          <button
            // className={idx > 9 ? `operators` : `numbers`}
            className="btn"
            key={idx}
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

export default Button;
