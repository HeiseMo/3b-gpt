import React, { useState } from 'react';
import { Card, Button, Input, Spacer, Divider } from '@nextui-org/react';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, user: 'You' }]);
      setInputText('');
    }
  };

  return (
    <Card
      shadow
      className="chat-interface"
      style={{
        marginTop: 'auto', // Move the card to the bottom
        borderRadius: '0 8px 0 0', // Remove radius from the bottom
      }}
    >
      <div className="messages-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.user === 'You' ? 'user' : 'other'
              }`}
            >
              <div className="message-header">
                <span className="message-user">{message.user}:</span>
              </div>
              <div className="message-body">
                <p className="message-text">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Divider />
      <div className="input-container">
        <Input
          placeholder="Enter your message here"
          value={inputText}
          onChange={handleInputChange}
        />
        <Spacer x={0.5} />
        <Button
          auto
          ghost
          onClick={handleSendMessage}
          className="send-button"
        >
          Send
        </Button>
      </div>
    </Card>
  );
}

export default ChatInterface;
