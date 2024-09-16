import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Button } from "./components/ui/Button.js"
import { Card } from "./components/ui/Card";
import { Input } from "./components/ui/Input";


const ChatBotT = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { message: input };
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");

      try {
        const response = await axios.post("http://127.0.0.1:8000/api/chat/", userMessage);
        const botMessage = response.data.message;
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: botMessage }
        ]);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const chatWindowStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto', // Adjust as needed
    overflowY: 'auto',
    padding: '10px',
    backgroundColor: '#f1f1f1', // Light gray background
  };

  const messageStyle = {
    maxWidth: '70%',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  const userMessageStyle = {
    ...messageStyle,
    backgroundColor: '#000', // Black background for user messages
    color: '#fff', // White text color for user messages
    alignSelf: 'flex-end', // Align user messages to the right
  };

  const botMessageStyle = {
    ...messageStyle,
    backgroundColor: '#fff', // White background for bot messages
    color: '#000', // Black text color for bot messages
    alignSelf: 'flex-start', // Align bot messages to the left
  };





  return (
    <Card className="w-full max-w-sm " style={{marginTop:"3%"}}>
      <div className="chat-window" style={chatWindowStyle}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`} style={msg.sender === "user" ? userMessageStyle : botMessageStyle}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container" style={{marginTop:"50%"}}>
      <Input id="email" required 
       type="text"
       value={input}
       onChange={(e) => setInput(e.target.value)}
       placeholder="Type your message..." style={{width:"100%"}} />
        {/* <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        /> */}
         <br/>
        <Button onClick={handleSendMessage} style={{marginTop:"3%", marginLeft:"0%", width:"100%"}}>Send</Button>
      </div>
    </Card>
  );
};

export default ChatBotT;
