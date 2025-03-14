
import React from 'react';
import { Message } from './assistantData';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div 
      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
    >
      <div 
        className={`max-w-[80%] rounded-lg p-3 ${
          message.sender === "user" 
            ? "bg-cyber-purple/30 text-white" 
            : "bg-cyber-deepBlue/70 border border-cyber-purple/20"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;
