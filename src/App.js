import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./styles.css";
import Message from "./Message";

export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Manish", text: "What up" },
    { username: "Avnish", text: "I am fine" }
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please Enter Your Name"));
  }, []); //condition

  const sendMessage = (event) => {
    //all the logic to send a message goes here
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Welcome {username}</h1>
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
        <Message username={message.username} text={message.text} />
      ))}
    </div>
  );
}
