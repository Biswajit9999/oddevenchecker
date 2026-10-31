import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = (event) => {
    event.preventDefault();

    const trimmed = value.trim();

    // only whole numbers (optionally negative) are valid
    if (!/^-?\d+$/.test(trimmed)) {
      setResult("Not a valid number!");
      return;
    }

    const n = Number(trimmed);

    if (n % 2 === 0) {
      setResult(`The number ${n} is even!`);
    } else {
      setResult(`Oops, ${n} is odd!`);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Even or Odd Checker</h1>

        <form onSubmit={handleCheck}>
          <input
            type="text"
            name="number"
            placeholder="Enter a number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Check</button>
        </form>

        {result && <p className="result">{result}</p>}
      </div>
    </div>
  );
}

export default App;