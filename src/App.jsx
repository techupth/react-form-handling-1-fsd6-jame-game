import "./App.css";
import { useState } from "react";

function App() {
  const [messageInput, setMessageInput] = useState("");
  const [message, setMessage] = useState("Greeting Message");

  const handlerInput = (event) => {
    setMessageInput(event.target.value);
  };

  const handlerMessage = () => {
    setMessage(messageInput);
  };

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={messageInput}
          onChange={handlerInput}
        />
      </div>

      <div className="buttons">
        <button onClick={handlerMessage}>Update text</button>
      </div>
    </div>
  );
}

export default App;
