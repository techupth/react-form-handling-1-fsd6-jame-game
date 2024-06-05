import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Greeting Message");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleOutput = () => {
    setOutput(input);
  };
  return (
    <div className="App">
      <div className="greeting-container">{output}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={input}
          onChange={handleInput}
        />
      </div>

      <div className="buttons">
        <button onClick={handleOutput}>Update text</button>
      </div>
    </div>
  );
}

export default App;
