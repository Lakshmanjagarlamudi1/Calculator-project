import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setresult] = useState(0);
  const changeHandaler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="calculator_body">
      <input
        className="input-type"
        type="text"
        value={input}
        name="input"
        onChange={changeHandaler}
      />
      <br />
      <h4>Result is : {result}</h4>
      <div>
        <button onClick={() => setInput(input + "7")}>7</button>
        <button onClick={() => setInput(input + "8")}>8</button>
        <button onClick={() => setInput(input + "9")}>9</button>
        <button onClick={() => setInput('')}>C</button>
      </div>
      <div>
        <button onClick={() => setInput(input + "4")}>4</button>
        <button onClick={() => setInput(input + "5")}>5</button>
        <button onClick={() => setInput(input + "6")}>6</button>
        <button onClick={() => setInput(input + "+")}>+</button>
      </div>
      <div>
        <button onClick={() => setInput(input + "1")}>1</button>
        <button onClick={() => setInput(input + "2")}>2</button>
        <button onClick={() => setInput(input + "3")}>3</button>
        <button onClick={() => setInput(input + "-")}>-</button>
      </div>
      <div>
        <button onClick={() => setInput(input + "00")}>00</button>
        <button onClick={() => setInput(input + "/")}>/</button>
        <button onClick={() => setInput(input + "*")}>*</button>
        <button onClick={() => setresult(eval(input))}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
