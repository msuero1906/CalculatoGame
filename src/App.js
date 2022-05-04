import "./styles.css";

const ResultScreen = () => {
  return <div>Result!</div>;
};

const Button = () => {
  return <button>Click me!</button>;
};

export default function App() {
  const buttonsArr = [
    [1, 2, 3, "+"],
    [4, 5, 6, "-"],
    [7, 8, 9, "*"],
    [0, "/"],
    ["Clear", "="]
  ];
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="wrapper">
        <h1>Calculator Container</h1>
        <ResultScreen />
        <Button />
      </div>
    </div>
  );
}
