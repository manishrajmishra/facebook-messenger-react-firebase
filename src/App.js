import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    //all the logic to send a message goes here
    event.preventDeafault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel>Enter the messages....</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}
